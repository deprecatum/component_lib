import styles from  "./headerButton.module.css"

interface HeaderButtonProps {
    url?: string
    text: string
}

export const HeaderButton = ({ url, text }: HeaderButtonProps) => {
    const Button = () => (
        <button className={styles.button}>
            {text}
        </button>
    )
    return (
        <>
            {url ? (
                <a href={url}>
                    <Button />
                </a>
            ) : (
                <Button />
            )}
        </>
    )
}

export default HeaderButton