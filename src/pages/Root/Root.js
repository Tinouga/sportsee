import {Outlet} from "react-router-dom";
import styles from "./Root.module.scss";
import Header from "../../components/Header";
import SideNav from "../../components/SideNav";


const Root = () => (
    <div className={styles.root}>
        <Header/>
        <div className={styles.sideAndMainContainer}>
            <div className={styles.sideContainer}>
                <div />
                <SideNav/>
                <div className={styles.copyrightContainer}>
                    <p>Copyright, SportSee 2020</p>
                </div>
            </div>
            <main className={styles.mainContainer}>
            <Outlet/>
            </main>
        </div>
    </div>
);

export default Root;
