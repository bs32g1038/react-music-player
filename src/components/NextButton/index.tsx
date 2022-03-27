import Button from "../Button";
import { DefaultControls } from "../constant";
import { NextAudioIcon } from "../icon";
import { MusicProps } from "../interface";

export default (props: MusicProps) => {
  const { controls = DefaultControls } = props;
  return (
    <Button
      onClick={() => {
        controls.next();
      }}
    >
      <NextAudioIcon></NextAudioIcon>
    </Button>
  );
};
