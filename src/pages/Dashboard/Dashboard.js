import styles from "./Dashboard.module.scss";
import UserActivity from "../../components/UserActivity";

const Dashboard = () => {
    const username = 'Thomas';

    return (
        <div className={styles.dashboard}>
            <header>
                <h1>Bonjour <span className={styles.username}>{username}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </header>
            <section className={styles.content}>
                <UserActivity userId={12} />
            </section>
        </div>
    );
};

export default Dashboard;
