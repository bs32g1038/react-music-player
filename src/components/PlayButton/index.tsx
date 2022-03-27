import Button from "../Button";
import { DefaultControls, DefaultMusicState } from "../constant";
import { AnimatePauseIcon, AnimatePlayIcon } from "../icon";
import { MusicProps } from "../interface";

export default (props: MusicProps) => {
  const { state = DefaultMusicState, controls = DefaultControls } = props;
  return (
    <Button
      onClick={() => {
        state.playing ? controls.pause() : controls.play();
      }}
    >
      {state.playing ? (
        <AnimatePauseIcon></AnimatePauseIcon>
      ) : (
        <AnimatePlayIcon></AnimatePlayIcon>
      )}
    </Button>
  );
};
