import styles from './Header.module.scss';
import {ReactComponent as Logo} from "../../assets/logo.svg";
import {NavLink} from "react-router-dom";

const navItems = [
    {label: 'Accueil', path: '/'},
    {label: 'Profil', path: '/profile'},
    {label: 'Réglages', path: '/settings'},
    {label: 'Communauté', path: '/community'},
];

const Header = () => (
    <header className={styles.header}>
        <div className={styles.logo}>
            <Logo />
        </div>
        <nav className={styles.navbar}>
            <ul>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            className={({isActive}) => isActive ? styles.active : undefined}
                            to={item.path}>
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
);

export default Header;
