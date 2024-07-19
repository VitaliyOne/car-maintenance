import React from "react";
import classes from "./InputAdornment.module.css";

interface InputAdornmentProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  span: string;
  value?: string | number;
}

const InputAdornment = React.forwardRef<HTMLInputElement, InputAdornmentProps>((props, ref) => {
  return (
    <div className={classes.inputAdornment}>
      <input 
        className={classes.input}
        {...props}
        ref={ref} 
        placeholder={props.placeholder}
      />
      <span className={classes.span}>{props.span}</span>
    </div>
  );
});

export default InputAdornment;