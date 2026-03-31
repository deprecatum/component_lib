import styles from './basicHeader.module.css';

export const BasicHeader = () => {
    return (
        <header className={styles.header}>
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