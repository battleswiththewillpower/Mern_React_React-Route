import React from 'react'
import { useParams } from "react-router-dom"

const Main = () => {
    const {variable, color1Param, color2Param} = useParams()

  return (
    <div style={{backgroundColor:color1Param}}>
        
    {
        // isNaN(parseInt(variable))? 
        // <p style={{color:color2Param}}>The word is: {variable}</p>:
        // <p style={{color:color2Param}}>The number is: {variable}</p>

        <p style={{color:color2Param}}>The {isNaN(parseInt(variable))? "word" : "number"} is {variable}</p>
        
    }

        
        
    
    </div>
  )
}

export default Main