import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { formatTime } from "../utils";
import { MusicProps } from "../interface";
import { DefaultControls, DefaultMusicState } from "../constant";

export default (props: MusicProps) => {
  const { state = DefaultMusicState, controls = DefaultControls } = props;
  return (
    <div className="music-progress-bar">
      <span
        className="audio-title"
        title={state.current.name + " - " + state.current.singer}
      >
        {state.current.name} - {state.current.singer}
      </span>
      <section className="audio-main">
        <span className="current-time" title="00:51">
          {formatTime(state.time)}
        </span>
        <div className="progress-bar">
          <div
            className="progress-load-bar"
            style={{ width: "72.7109%" }}
          ></div>
          <Slider
            min={0}
            max={state.duration}
            value={state.time}
            onChange={(val) => {
              controls.seek(Number(val));
            }}
          />
        </div>
        <span className="duration" title="04:41">
          {formatTime(state.duration)}
        </span>
      </section>
    </div>
  );
};
