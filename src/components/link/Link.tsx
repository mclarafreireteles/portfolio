import styles from './link.module.css'

type LinkProps = {
    title: string,
    url: string
}


export default function Link({title, url}: LinkProps) {
    return (
        <>
            <a className={styles.link} href={url}>{title}</a>
        </>
    )
}