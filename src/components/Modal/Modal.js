import styles from './Modal.module.css'
import Question from '../../Resources/question.svg'

const Modal = ({ activity, children }) => {
    return (
        <div className={styles.parentDiv}>
            <p>Country Quiz</p>

            <div className={styles.modalDiv}>
                {activity === 'question' &&
                    <div className={styles.questionSvg}>
                        <img src={Question}></img>

                    </div>
                }
                {children}
            </div>
        </div>
    )

}

export default Modal