import styles from './SingleQuestion.module.css'
import Options from './Options'
import { useState, useContext, useEffect } from 'react'
import ScoreContext from '../../Context/ScoreContext'
import AppContext from '../../Context/AppContext'

const SingleQuestion = ({ options, capital }) => {

    const scoreContext = useContext(ScoreContext);
    const appContext = useContext(AppContext);

    const [result, changeResult] = useState(false);

    const trueOption = options.filter((value) => {
        return value.correct === true
    })
    useEffect(() => {
        if(appContext.endingStatus !== 1){
            setTimeout(() => {
                changeResult(false)
            }, 1000)
        }
    }, [appContext.endingStatus])

    const optionClicker = (item) => {
        if (item.correct) {
            scoreContext.scoreChange();
            let correctIndex
            options.map((singleItem, index) => {
                if (singleItem.country.name.official == item.country.name.official) {
                    correctIndex = index
                }
            })
            changeResult({ correct: true, clicked: correctIndex })
            appContext.changeStatus((prev) => {
                return prev + 1;
            })
        } else {
            let result;
            let trueVar;
            options.map((singleItem, index) => {
                if (singleItem.country.name.official === item.country.name.official) {
                    result = index;
                    return
                }
                if (singleItem.correct) {
                    trueVar = index
                }
            })
            changeResult({ correct: false, clicked: result, option: trueVar })
            appContext.changeStatus(false)
        }
    }

    console.log(trueOption)

    return (
        <>
            {capital == 1 && trueOption[0] &&
                <div className={styles.questionDiv}>
                    <p>{`${trueOption[0].country.capital[0]} is the capital of ?`}</p>
                    <div className={styles.options}>
                        {options.map((singleItem, index) => {
                            return (
                                <Options result={result} onClick={optionClicker} index={index} item={singleItem}></Options>
                            )
                        })}
                    </div>
                </div>}
            {capital == 0 && trueOption[0] &&
                <div className={styles.questionDivImg}>
                    <img className={styles.img} src={trueOption[0].country.flags.png}></img>
                    <p>Which Country this flag belong to ?</p>
                    <div className={styles.options}>
                        {options.map((singleItem, index) => {
                            return (
                                <Options result={result} onClick={optionClicker} index={index} item={singleItem}></Options>

                            )
                        })}
                    </div>
                </div>}
        </>
    )
}

export default SingleQuestion