import React from "react"
import styles from './section.module.css'

type SectionProps = {
    title: string,
    children?: React.ReactNode
    contentClassname?: string
}


export default function Section({title, children, contentClassname}: SectionProps) {
    return (
        <div className={styles.section}>
            <h3 className={styles.title}>{title}</h3>
            <div className={contentClassname}>
                {children}
            </div>
        </div>
    )
}