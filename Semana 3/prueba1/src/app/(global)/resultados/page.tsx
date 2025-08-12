'use client'
import { useContextTrivia } from '@/app/Provider/TriviaProvider';
import React from 'react'

export default function page() {

    const { score, resetGame } = useContextTrivia();

    const handleRestart = () => {
        resetGame();
    };
    return (
        <div>
            <h2>Resultados</h2>
            <p>Puntaje final: {score}</p>
            <button onClick={handleRestart}>Reiniciar Trivia</button>
        </div>
    )
}
