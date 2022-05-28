import { createContext, useState } from "react";

const QuizContext = createContext();

const QuizProvider = ({children})=>{
    const [select, setSelect] = useState(null);
    const [stop, setStop] = useState(true);
    const [score, setScore] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);

    const data = {select, setSelect, stop, setStop, score, setScore, currentStep, setCurrentStep}
return(
    <QuizContext.Provider value={data}>
        {children}
    </QuizContext.Provider>
)
}

export {QuizProvider}
export default QuizContext