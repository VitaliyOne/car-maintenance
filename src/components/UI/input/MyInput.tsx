import classes from "./MyInput.module.css";

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  value?: string;
}
const MyInput = (props: MyInputProps) => {
  return (
      <input
        className={classes.myInput}
        {...props}
        placeholder={props.placeholder}
      >
      </input>
  );
};

export default MyInput;
