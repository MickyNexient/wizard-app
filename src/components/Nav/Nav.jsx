import { NavLink } from "react-router-dom";

import styles from './Nav.module.css';

export default function Nav() {
    return (
        <div className={styles.nav}>
            <NavLink to="/wizards/a">Wizard A</NavLink>
            <NavLink to="/wizards/b">Wizard B</NavLink>
        </div>
    )
}