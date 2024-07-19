import React from "react";
import classes from "./MyInput.module.css";

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  value?: string;
}

const MyInput = React.forwardRef<HTMLInputElement, MyInputProps>((props, ref) => {
  return (
    <input
      className={classes.myInput}
      {...props}
      ref={ref}
      placeholder={props.placeholder}
    />
  );
});

export default MyInput;