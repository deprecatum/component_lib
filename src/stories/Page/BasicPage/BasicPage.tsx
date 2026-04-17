import styles from "./basicPage.module.css"
import { BasicHeader } from "../../Header/Basic/BasicHeader"

export const BasicPage = () => {
    return (
        <body className={styles.base}> 
            <BasicHeader>

            </BasicHeader>
            {/*
                add telemetry for displaying, temp, pressure and flow + current action being executed
            */}
        </body>
    )
}