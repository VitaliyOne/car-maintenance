import classes from './MyButton.module.css';

interface MyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick?: () => void;
}

const MyButton = (props: MyButtonProps) => {
  return (
    <button {...props} className={classes.myButton} onClick={props.onClick} type="button">
      {props.children}
    </button>
  );
};

export default MyButton;
