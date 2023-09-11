import styles from './nav.module.css'

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img src="/assets/locomove.gif" width={80} height={80}/>
                Locomove
            </div>
            <ul className={styles.navlinks}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <button className={styles.navButton}>Get Started</button>
        </nav>
    )
}

