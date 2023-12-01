import Background from './components/Background';
import {useReducer, useEffect, useState} from 'react'
import CountryContext from './Context/CountryContext';
import Display from './components/Main/Display';
import {Spinner} from 'react-bootstrap'
import ScoreContext from './Context/ScoreContext';
import AppContext from './Context/AppContext';

function App() {


  const [loading, setLoading] = useState(false);
  const [endingStatus, changeStatus] = useState(1);

  const dispatcherFunction = (state, action) => {
    return { countries: action}
  }

  useEffect(() => {
    setLoading(true)
    fetch('https://restcountries.com/v3.1/all').then((response)=>{
      return response.json()
    }).then((response)=>{
      dispatch(response)
      setLoading(false)
    })
    
  }, [])
  
  console.log(endingStatus)  
  const dispatcherScore = (state, action) => {
    return {score: state.score + 1}
  }

  const [state, dispatch] = useReducer(dispatcherFunction, {countries: []});
  const [score, changeScore] = useReducer(dispatcherScore, {score: 0})

  return (
    <>
    <AppContext.Provider value={{endingStatus: endingStatus, changeStatus: changeStatus}}>
    <ScoreContext.Provider value={{score: score, scoreChange: changeScore}}>
    <CountryContext.Provider value={{countries: state.countries}}>
      <Background countries={state}>
        {loading && <Spinner variant='light' animation='border'></Spinner>}
        {!loading && <Display></Display> }
      </Background>
    </CountryContext.Provider>
    </ScoreContext.Provider>
    </AppContext.Provider>
    </>
  );
}

export default App;
