import {
  MusicHTMLMediaControls,
  MusicHTMLMediaState,
} from "../hooks/useMusicPlayer";

export interface MusicProps {
  readonly state?: MusicHTMLMediaState;
  readonly controls?: MusicHTMLMediaControls;
}
