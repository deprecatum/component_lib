import styles from './themes/blue/theme_light.module.css';

type BlueThemeProps = {
    className: string
    children: React.ReactNode
}

export const BlueTheme = ({ className=styles.blueLight, children }: BlueThemeProps) => {
    return <div className={className}>{children}</div>
}