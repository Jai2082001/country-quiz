import styles from './Options.module.css'

const Options = ({ item, index, onClick, result }) => {

    const clickHandler = () => {
        onClick(item)
    }

    return (
        <>
            {!result &&
                <div onClick={clickHandler} className={styles.parentOptionDiv}>
                    <span style={{ marginRight: '10px' }}>{String.fromCharCode((index + 1 + 64))}.</span>
                    {item.country.name.common}
                </div>
            }
            {result &&
                result.correct &&
                (result.clicked === index &&
                    <div onClick={clickHandler} className={`${styles.parentOptionDiv} ${styles.correct}`}>
                        <span style={{ marginRight: '10px' }}>{String.fromCharCode((index + 1 + 64))}.</span>
                        {item.country.name.common}
                    </div>)
            }
            {
                result && result.correct && result.clicked !== index && <div onClick={clickHandler} className={styles.parentOptionDiv}>
                    <span style={{ marginRight: '10px' }}>{String.fromCharCode((index + 1 + 64))}.</span>
                    {item.country.name.common}
                </div>
            }

            {result && !result.correct && result.clicked === index && result.option !== index &&
                <div onClick={clickHandler} className={`${styles.parentOptionDiv} ${styles.incorrect}`}>
                    <span style={{ marginRight: '10px' }}>{String.fromCharCode((index + 1 + 64))}.</span>
                    {item.country.name.common}
                </div>
            }
            {result && !result.correct && result.clicked !== index && result.option === index && <div onClick={clickHandler} className={`${styles.parentOptionDiv} ${styles.correct}`}>
                <span style={{ marginRight: '10px' }}>{String.fromCharCode((index + 1 + 64))}.</span>
                {item.country.name.common}
            </div>}

            {result && !result.correct && result.clicked !== index && result.option !== index && <div onClick={clickHandler} className={styles.parentOptionDiv}>
                <span style={{ marginRight: '10px' }}>{String.fromCharCode((index + 1 + 64))}.</span>
                {item.country.name.common}
            </div>}
        </>

    )
}

export default Options


                            // (result.clicked !== index && )