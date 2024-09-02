import styles from "./Dashboard.module.scss";
import UserActivity from "../../components/UserActivity";
import {useEffect, useState} from "react";
import {
    fetchUserActivity,
    fetchUserAverageSessions,
    fetchUserData,
    fetchUserPerformance
} from "../../services/apiService";
import UserKeyData from "../../components/UserKeyData";
import UserAverageSessions from "../../components/UserAverageSessions";
import UserPerformance from "../../components/UserPerformance";
import UserAverageScore from "../../components/UserAverageScore";
import {useParams} from "react-router-dom";

const Dashboard = () => {
    const {userId} = useParams();

    const [data, setData] = useState({});
    const [activity, setActivity] = useState([]);
    const [averageSessions, setAverageSessions] = useState([]);
    const [performance, setPerformance] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const [data, {sessions: activity}, {sessions: averageSessions}, performance] = await Promise.all([
                    fetchUserData(userId),
                    fetchUserActivity(userId),
                    fetchUserAverageSessions(userId),
                    fetchUserPerformance(userId)
                ]);

                setData(data);
                setActivity(activity);
                setAverageSessions(averageSessions);
                setPerformance(performance);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [userId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>

    return (
        <div className={styles.dashboard}>
            <header>
                <h1>Bonjour <span className={styles.username}>{data.userInfos.firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </header>
            <section className={styles.content}>
                <div className={styles.userActivity}>
                    <UserActivity activity={activity}/>
                </div>
                <div className={styles.keyData}>
                    <UserKeyData data={data.keyData} />
                </div>
                <div className={styles.additionalInfos}><UserAverageSessions sessions={averageSessions} /></div>
                <div className={styles.additionalInfos}><UserPerformance performance={performance} /></div>
                <div className={styles.additionalInfos}><UserAverageScore score={data.userScore}/></div>
                <div></div>
                <div></div>
            </section>
        </div>
    );
};

export default Dashboard;
