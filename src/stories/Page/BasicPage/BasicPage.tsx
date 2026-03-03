import "./basicPage.css"
import { BasicHeader } from "@/stories/Header/Basic/BasicHeader"

export const BasicPage = () => {
    return (
        <body className="base"> 
            <BasicHeader>

            </BasicHeader>
            {/*
                add telemetry for displaying, temp, pressure and flow + current action being executed
            */}
        </body>
    )
}