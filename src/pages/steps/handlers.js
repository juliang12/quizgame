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

export const nextQuestion = (
  setCurrentStep,
  currentStep,
  setSelect,
  setKey,
  setShow
  
) => {
  setCurrentStep(currentStep + 1);
  setSelect();
  resetTimer(setKey)
  setShow(false)
};
