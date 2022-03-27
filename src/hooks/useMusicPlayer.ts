import { ReactNode, useEffect, useState } from "react";
import useAudio from "./useAudio";
import {
  HTMLMediaControls,
  HTMLMediaState,
} from "./factory/createHTMLMediaHook";
import { Song, useSongList } from "./useSongList";

interface Props {
  songList: Song[];
  autoPlay: boolean;
}

export type MusicHTMLMediaState = HTMLMediaState & {
  current: Song;
};

export type MusicHTMLMediaControls = HTMLMediaControls & {
  next: () => void;
  prev: () => void;
};

export const useMusicPlayer = (
  props: Props
): [ReactNode, MusicHTMLMediaState, MusicHTMLMediaControls] => {
  const { songList, autoPlay } = props;
  const { current, next, prev } = useSongList(songList);
  const [playStatus, setPlayStatus] = useState(false);
  const [audio, state, controls, ref] = useAudio({
    src: current.src,
    autoPlay: autoPlay || playStatus,
  });
  useEffect(() => {
    setPlayStatus(state.playing);
    const onEnded = (_event: any) => {
      next();
      setPlayStatus(state.playing);
    };
    ref.current?.addEventListener("ended", onEnded);
    return () => {
      ref.current?.removeEventListener("ended", onEnded);
    };
  }, [state.playing]);
  const _state = { ...state, current };
  return [audio, _state, { ...controls, next, prev }];
};
