import classes from "./MyTextarea.module.css"

interface MyTextareaProps {
    placeholder: string;
    value?: string;
    handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MyTextarea = (props: MyTextareaProps) => {
  return (
    <textarea onChange={(event=> props.handleChange(event) )} {...props} className={classes.myTextarea} placeholder={props.placeholder}>{props.value}</textarea>
  )
}

export default MyTextarea