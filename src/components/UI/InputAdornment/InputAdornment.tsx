import classes from './InputAdornment.module.css';

interface InputAdornmentProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  span: string;
  value?: string | number;
}

const InputAdornment = (props: InputAdornmentProps) => {
  return (
    <div className={classes.inputAdornment}>
      <input className={classes.input} {...props} placeholder={props.placeholder}></input>
      <span className={classes.span}>{props.span}</span>
    </div>
  );
};

export default InputAdornment;
