import React from "react";
import classes from "./MyButton.module.css";

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const MyButton = React.forwardRef<HTMLButtonElement, MyButtonProps>((props, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={classes.myButton}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
});

export default MyButton;