'use client'
import React, { ReactNode, useContext, useState } from 'react'
import {triviaContext} from '../Context/TriviaContext'
interface Plantilla{
    children:ReactNode
}
export default function TriviaProvider({ children }:Plantilla) {

      const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);

  const incrementScore = (points:number) => {
    setScore(score + points);
    setAnsweredCount(answeredCount + 1);
  };

   const resetGame = () => {
    setScore(0);
    setAnsweredCount(0);
  };
  return (
    <triviaContext.Provider value={{
        score,
        answeredCount,
        incrementScore,
        resetGame,
    }}>
        {children}
    </triviaContext.Provider>
  )
}

export function useContextTrivia(){
    return useContext(triviaContext)
}