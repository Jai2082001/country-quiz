import styles from './Background.module.css'
import { useContext } from 'react';
import CountryContext from '../Context/CountryContext';

const Background = ({children}) => { 
    const ctx = useContext(CountryContext)
    return (
        <div className={styles.backgroundParent}>
            {children}
        </div>
    )
}

export default Background;