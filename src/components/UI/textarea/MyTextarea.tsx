import classes from "./MyTextarea.module.css"

interface MyTextareaProps {
    placeholder: string;
  }

const MyTextarea = (props: MyTextareaProps) => {
  return (
    <textarea className={classes.myTextarea} placeholder={props.placeholder}></textarea>
  )
}

export default MyTextarea