import Button from "../Button";
import { DefaultControls } from "../constant";
import { PrevAudioIcon } from "../icon";
import { MusicProps } from "../interface";

export default (props: MusicProps) => {
  const { controls = DefaultControls } = props;
  return (
    <Button
      onClick={() => {
        controls.prev();
      }}
    >
      <PrevAudioIcon></PrevAudioIcon>
    </Button>
  );
};
