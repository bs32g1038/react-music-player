import {
  MouseEventHandler,
  ReactChild,
  ReactFragment,
  ReactPortal,
} from "react";

export default (props: {
  children?:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  onClick?: MouseEventHandler | undefined;
}) => {
  return (
    <button className="music-button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};
