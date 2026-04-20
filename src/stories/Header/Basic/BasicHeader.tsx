import styles from './basicHeader.module.css';

type BasicHeaderProps = {
    headerClass?: string
}

export const BasicHeader = ({ headerClass = styles.header }: BasicHeaderProps) => {
    return (
        <header className={headerClass}>
            <div>
                <button className="actionButton" id="singleExtraction">

                </button>
                <button id="doubleExtraction">
                    
                </button>
                <button id="singleExtraction">
                    
                </button>
                <button id="singleExtraction">
                    
                </button>
            </div>
        </header>
    )
}