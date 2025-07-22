import { ChangeEvent } from 'react';
import classes from './MyTextarea.module.css';

interface MyTextareaProps {
  placeholder: string;
  value?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const MyTextarea = (props: MyTextareaProps) => {
  return (
    <textarea
      {...props}
      className={classes.myTextarea}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default MyTextarea;
