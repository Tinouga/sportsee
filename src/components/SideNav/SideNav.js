import {ReactComponent as Haltere} from "../../assets/haltere.svg";
import {ReactComponent as Natation} from "../../assets/natation.svg";
import {ReactComponent as Velo} from "../../assets/velo.svg";
import {ReactComponent as Yoga} from "../../assets/yoga.svg";
import styles from './SideNav.module.scss';
import {Link} from "react-router-dom";

const navItems = [
    {icon: <Yoga />, path: '/'},
    {icon: <Natation />, path: '/'},
    {icon: <Velo />, path: '/'},
    {icon: <Haltere />, path: '/'},
];

const SideNav = () => (
    <nav className={styles.navbar}>
        <ul>
            {navItems.map((item, index) => (
                <li key={index}>
                    <Link to={item.path}>
                        {item.icon}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);

export default SideNav;
