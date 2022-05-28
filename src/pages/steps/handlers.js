export const handleSelect = (item, select, correct_answer) => {
  if (select === item && item === correct_answer) {
    return "correct";
  } else if (select === item && item !== correct_answer) {
    return "incorrect";
  } else if (item === correct_answer) {
    return "correct";
  }
};

export const resetTimer = (setKey)=>{
setKey((prevKey)=> prevKey + 1)
}

export const resetStates = (setSelect, setShow, setStop)=>{
setSelect(null)
setShow(false)
setStop(true)
}

export const nextQuestion = (
  setCurrentStep,
  setSelect,
  setKey,
  setShow,
  setStop
) => {
  setCurrentStep(prev => prev + 1);
  resetTimer(setKey)
  resetStates(setSelect, setShow, setStop)
};
