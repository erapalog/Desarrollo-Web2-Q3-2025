'use client'
import React, { useEffect, useState } from 'react'
import { useContextTrivia } from '../Provider/TriviaProvider';
import { Preguntas } from '../Modelos/Preguntas';
import { useRouter } from 'next/navigation';

export default function PreguntasComponents() {
  const [questions, setQuestions] = useState<Preguntas[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { incrementScore } = useContextTrivia();
  const [selected, setSelected] = useState<null | boolean>(null);
  const [feedback, setFeedback] = useState("");
  const router = useRouter();

  const handleSelect = (value: boolean) => {
    setSelected(value);
    if (value === questions[currentIndex].respuestaCorrecta) {
      setFeedback("Correcto");
      incrementScore(questions[currentIndex].puntajePregunta);
    } else {
      setFeedback("Incorrecto");
    }
  };

  useEffect(() => {
    const data: Preguntas[] = [
      { idPregunas: 1, descripcionPregunta: "El cielo es azul", opcionRespuesta1: true, opcionRespuesta2: false, respuestaCorrecta: true, puntajePregunta: 1 },
      { idPregunas: 2, descripcionPregunta: "2+2 es 5", opcionRespuesta1: true, opcionRespuesta2: false, respuestaCorrecta: false, puntajePregunta: 1 },
      { idPregunas: 3, descripcionPregunta: "La tierra es plana", opcionRespuesta1: true, opcionRespuesta2: false, respuestaCorrecta: false, puntajePregunta: 1 },
      { idPregunas: 4, descripcionPregunta: "El agua hierve a 100°C", opcionRespuesta1: true, opcionRespuesta2: false, respuestaCorrecta: true, puntajePregunta: 1 },
      { idPregunas: 5, descripcionPregunta: "JavaScript es un lenguaje de programación", opcionRespuesta1: true, opcionRespuesta2: false, respuestaCorrecta: true, puntajePregunta: 1 }
    ];
    setQuestions(data);
  }, []);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
      setFeedback("");
    } else {
      router.push("/resultados"); 
    }
  };

  if (questions.length === 0) return <p>Cargando preguntas...</p>;

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <p>{questions[currentIndex].descripcionPregunta}</p>
      <button disabled={selected !== null} className='btn btn-success' onClick={() => handleSelect(true)}>Verdadero</button>
      <button disabled={selected !== null} className='btn btn-danger' onClick={() => handleSelect(false)}>Falso</button>

      {feedback && <p>{feedback}</p>}

      {selected !== null && (
        <button onClick={handleNext} className='btn btn-info' style={{ marginTop: "1rem" }}>
          Siguiente
        </button>
      )}
    </div>
  );
}
