
import { Outlet } from "react-router-dom";

import styles from './Layout.module.css';
import Nav from "../Nav";

export default function Layout() {
    return (
        <section className={styles.container}>
            <header className={styles.head}>Header</header>
            <nav className={styles.nav}>
                <Nav />
            </nav>
            <main className={styles.content}>
                <Outlet />
            </main>
        </section>
    )
}