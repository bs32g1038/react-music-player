import cls from "classnames";
import { useEffect, useState } from "react";
import { DefaultMusicState, noop } from "../constant";
import { MusicProps } from "../interface";

interface Props extends MusicProps {
  onClick?: () => void;
}

export default (props: Props) => {
  const { state = DefaultMusicState, onClick = noop } = props;
  const [isResetCoverRotate, setIsResetCoverRotate] = useState(false);
  useEffect(() => {
    setIsResetCoverRotate(true);
    setTimeout(() => {
      setIsResetCoverRotate(false);
    });
  }, [state.current.src]);
  return (
    <div
      className={cls("music-cover", "rotate", {
        "rotate-pause": !state.playing || !state.current.picUrl,
        "rotate-reset": isResetCoverRotate,
      })}
      style={{ backgroundImage: `url(${state.current.picUrl})` }}
      onClick={onClick}
    />
  );
};
