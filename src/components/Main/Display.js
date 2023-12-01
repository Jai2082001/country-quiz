import Modal from '../Modal/Modal'
import Question from './Question'
import {useContext} from 'react'
import AppContext from '../../Context/AppContext'
import Ending from './Ending'
const Display = () => {
    
    const appContext = useContext(AppContext);
    console.log(appContext.endingStatus)
    return (
        <>
        {appContext.endingStatus && 
        <Modal activity={appContext.endingStatus?'question':'ending'}>
             <Question></Question>
        </Modal>}
        {!appContext.endingStatus &&
            <Modal activity={appContext.endingStatus?'question':'ending'}>
                <Ending></Ending>
           </Modal>
        }
        </>
    )
}


export default Display