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

const Dashboard = () => {
    const userId = 12;

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
                <div><p>Hello</p></div>
                <div></div>
                <div></div>
            </section>
        </div>
    );
};

export default Dashboard;
