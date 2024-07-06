import styles from "./Project.module.css";

interface Iproject {
    title: string,
    description: string,
    link: string,
}

export default function Project({title, description, link}: Iproject) {
    return (
        <>
        <div>
            <a href={link}>
                <div className={styles.project}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </a>
        </div>
        </>
    )
}
