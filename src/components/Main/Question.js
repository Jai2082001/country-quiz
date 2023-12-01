import styles from './Question.module.css'
import { useContext, useEffect, useReducer, useState } from 'react'
import CountryContext from '../../Context/CountryContext'
import SingleQuestion from './SingleQuestion';
import AppContext from '../../Context/AppContext';

const Question = () => {
    const ctx = useContext(CountryContext);
    const appContext = useContext(AppContext)
    const randomCountryChangerDis = (state, action) => {
        console.log(action)
        // if (!action.country) {
        //     return state
        // } else {
        //     const prevState = state;
        //     prevState.push(action);
        //     return prevState
        // }
        if (action.type === "PUSH") {
            const prevState = state;
            prevState.push(action.content);
            return prevState;
        } else if (action.type === 'EMP') {
            return []
        } else {
            return state;
        }

    }
    const [randomCountry, randomCountryChange] = useReducer(randomCountryChangerDis, [])
    const [capital, changeCapital] = useState(false);
    useEffect(() => {
        if (ctx.countries.length > 0) {
            setTimeout(() => {
                randomCountryChange({ type: "EMP" })
                const capital = Math.floor(Math.random() * 2);
                changeCapital(capital)
                const randomCorrect = Math.floor(Math.random() * 4 + 1)
                let i = 1;
                while (i < 5) {
                    let randomNumber = Math.floor(Math.random() * 250);
                    let including = randomCountry.filter((value) => {
                        return value.index === randomNumber
                    })

                    if (including.length > 0) {
                        continue
                    } else {
                        if (i == randomCorrect) {
                            // const prevCountry = randomCountry;
                            const obj = { correct: true, index: randomNumber, country: ctx.countries[randomNumber] };
                            // prevCountry.push()
                            randomCountryChange({ type: "PUSH", content: obj })
                        } else {
                            const obj = { correct: false, index: randomNumber, country: ctx.countries[randomNumber] }
                            // const prevCountry = randomCountry;
                            // prevCountry.push()
                            randomCountryChange({ type: "PUSH", content: obj })
                        }
                        i++
                    }

                }

            }, 1000)
        }

    }, [ctx.countries, appContext.endingStatus])


    return (
        <div>
            <SingleQuestion options={randomCountry} capital={capital}></SingleQuestion>
        </div>
    )
}

export default Question