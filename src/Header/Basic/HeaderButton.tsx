import styles from './header.module.css';

export type ButtonProperties = {
    label: string,
    onClick?: () => void,
    url?: string,
}

type HeaderButtonProps = ButtonProperties & {
    classNames: string
}

export const HeaderButton = ({ 
    url, 
    onClick = () => {}, 
    label,
    classNames = styles.button,  
}: HeaderButtonProps) => {
    const Button = () => (
        <button className={`${classNames}`} onClick={onClick}>
            {label}
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