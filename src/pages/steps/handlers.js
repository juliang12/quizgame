export const handleCheck = (
  item,
  setSelect,
  setCurrentStep,
  currentStep,
  setShow,
  setStop,
  isCorrect, 
  select,
  setScore,
  score,
 
) => {
  setSelect(item);
  if (item === isCorrect) {
    setTimeout(() => {
      setCurrentStep(currentStep + 1);
      setScore( score + 3);
      setShow(false);
      setSelect();
    }, 1000);
  } else {
    setScore( score - 3);
    setStop(false);
    setShow(true);
  }
};

export const nextQuestion = (
  show,
  setCurrentStep,
  currentStep,
  setStop,
  setSelect,
  setShow,
  timer
) => {
  if (show) {
    setCurrentStep(currentStep + 1);
    setSelect();
    setStop(true);
    setShow(false)
  }else if(timer === 0){
    setCurrentStep(currentStep + 1)
  }
};


export const handleSelect = (i, select, correct)=>{
  if(i === select && select === correct){
    return "correct"
  }else if(i  !== correct){
    return "incorrect"
  }else if(i === correct){
    return "correct"
  }
}