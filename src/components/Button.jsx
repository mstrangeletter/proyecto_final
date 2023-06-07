const Button = (props) => {
  console.log(props);
  return <button style={{ color: props.color }}>{props.children}</button>;
};
export default Button;
