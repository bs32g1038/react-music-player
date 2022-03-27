import Slider from "rc-slider";
import Button from "../Button";
import { DefaultControls, DefaultMusicState } from "../constant";
import { VolumeMuteIcon, VolumeUnmuteIcon } from "../icon";
import { MusicProps } from "../interface";

export default (props: MusicProps) => {
  const { state = DefaultMusicState, controls = DefaultControls } = props;
  return (
    <div className="music-volume">
      <Button
        onClick={() => {
          state.volume ? controls.unmute() : controls.mute();
        }}
      >
        {state.volume <= 0 ? (
          <VolumeMuteIcon></VolumeMuteIcon>
        ) : (
          <VolumeUnmuteIcon></VolumeUnmuteIcon>
        )}
      </Button>
      <Slider
        min={0}
        max={100}
        value={state.volume * 100}
        onChange={(val) => {
          controls.volume(Number(val) / 100);
        }}
      />
    </div>
  );
};
