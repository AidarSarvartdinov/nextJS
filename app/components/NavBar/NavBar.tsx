import Link from 'next/link';
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <>
        <div className={styles.headerLine}>
            <div className={styles.leftHeader}>
                <h2><Link href="/">Aidar Sarvartdinov</Link></h2>
            </div>
            <div className={styles.rightHeader}>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/contact">Contact Me</Link>
                    <Link href="/comic">Comic</Link>
                </nav>
            </div>
        </div> 
        </>
    )
}