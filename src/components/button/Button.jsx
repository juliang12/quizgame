import React from "react";
import { nextQuestion } from "../../pages/steps/handlers";
import style from "./Button.module.css";

const Button = ({ className, ...rest }) => {
  return <button {...rest} className={style.button} />;
};

export default Button;
