export const handleSelect = (item, select, correct_answer) => {
  if (select === item && item === correct_answer) {
    return "correct";
  } else if (select === item && item !== correct_answer) {
    return "incorrect";
  } else if (item === correct_answer) {
    return "correct";
  }
};

export const resetStates = (setSelect, setStop, setCompleted)=>{
setSelect(null)
setStop(true)
setCompleted(false)
}

export const handleScore = (item, correct_answer, setScore) => {
  if (item === correct_answer) {
    setScore(score => score + 3);
  } else {
    setScore(score => score - 1);
  }
};

