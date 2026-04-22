import styles from  "./headerButton.module.css"

type HeaderButtonProps = {
    url?: string,
    text: string,
    classNames: string
}

export const HeaderButton = ({ url, text, classNames =  styles.button }: HeaderButtonProps) => {
    const Button = () => (
        <button className={classNames}>
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