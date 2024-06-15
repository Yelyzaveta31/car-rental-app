import clsx from "clsx";
import s from "./LoadButton.module.css";

const LoadButton = (props) => {
  return (
    <button
      {...props}
      type={props.type}
      className={clsx(s.btn, props.className)}
    />
  );
};

export default LoadButton;