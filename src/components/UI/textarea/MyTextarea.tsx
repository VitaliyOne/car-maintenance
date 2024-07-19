import React from "react";
import classes from "./MyTextarea.module.css";

interface MyTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
}

const MyTextarea = React.forwardRef<HTMLTextAreaElement, MyTextareaProps>((props, ref) => {
  return (
    <textarea
      {...props}
      ref={ref}
      className={classes.myTextarea}
      placeholder={props.placeholder}
    />
  );
});

export default MyTextarea;