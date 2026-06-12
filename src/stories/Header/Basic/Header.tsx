import styles from './header.module.css';
import { HeaderButton, ButtonProperties } from './HeaderButton';

type BasicHeaderProps = {
    headerClassNames: string,
    buttonClassNames: string,
    buttonsProperties: Array<ButtonProperties>,
    children?: React.ReactElement,
}

export const BasicHeader = ({
    headerClassNames = styles.header,
    buttonClassNames = styles.headerButton,
    buttonsProperties,
    children,
}: BasicHeaderProps) => {
    return (
        <header className={`${headerClassNames}`}>
            {children}
            <div id="nav-container" style={{ display: "flex", alignSelf: "flex-end" }}>
                {buttonsProperties.map((btn, index) => (
                    <HeaderButton classNames={`${buttonClassNames}`} key={index} {...btn} />
                ))}
            </div>
        </header>
    )
}