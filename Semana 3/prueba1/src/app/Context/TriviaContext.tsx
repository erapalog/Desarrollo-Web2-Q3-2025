import { createContext } from "react";

export const triviaContext=createContext({
    score:0,
    answeredCount:0,
    incrementScore :(points:number)=>{},
    resetGame:()=>{},
})