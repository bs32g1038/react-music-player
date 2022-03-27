import Cover from "./Cover";
import PlayButton from "./PlayButton";
import ProgressBarContent from "./ProgressBarContent";
import { useMusicPlayer } from "../hooks/useMusicPlayer";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import Volume from "./Volume";
import { ReactElement } from "react";
import React from "react";
import "../theme/index.theme.scss";
import { Song } from "../hooks/useSongList";

const MusicBar = ({
  atoms,
  state,
  controls,
}: {
  atoms: ReactElement[];
  state: any;
  controls: any;
}) => {
  return (
    <>
      {atoms.map((node, index) => {
        return React.cloneElement(node, {
          state: state,
          controls: controls,
          key: "music-atom-" + index,
        });
      })}
    </>
  );
};

interface Props {
  musicList: Song[];
}

const App = (props: Props) => {
  const { musicList = [] } = props;
  const [audio, state, controls] = useMusicPlayer({
    songList: musicList,
    autoPlay: false,
  });
  return (
    <div className="music-player">
      <MusicBar
        state={state}
        controls={controls}
        atoms={[
          <Cover />,
          <ProgressBarContent />,
          <PrevButton />,
          <PlayButton />,
          <NextButton />,
          <Volume />,
        ]}
      ></MusicBar>
      {audio}
    </div>
  );
};

export default App;
