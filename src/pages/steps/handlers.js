export const resetTime = (setTimer) => {
  setTimer((prev) => prev + 1);
};

export const handleSelect = (item, select, correct_answer) => {
  if (select === item && item === correct_answer) {
    return "correct";
  } else if (select === item && item !== correct_answer) {
    return "incorrect";
  } else if (item === correct_answer) {
    return "correct";
  }
};

export const nextQuestion = (
  setCurrentStep,
  currentStep,
  setSelect,
  setShow,
  resetTime,
  setTimer,
  
) => {
  setCurrentStep(currentStep + 1);
  setSelect();
  resetTime(setTimer);
  setShow(false);
};
