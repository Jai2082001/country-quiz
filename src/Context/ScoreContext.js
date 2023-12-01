import React from "react"

const ScoreContext = React.createContext({score: 0, scoreChange: ()=>{}});

export default ScoreContext
