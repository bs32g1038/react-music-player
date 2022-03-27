export const noop = () => {};

export const DefaultMusicState = {
  current: {
    name: "",
    singer: "",
    picUrl: "",
    src: "",
  },
  time: 0,
  duration: 0,
  playing: false,
  volume: 0,
};

export const DefaultControls = {
  seek: noop,
  prev: noop,
  next: noop,
  pause: noop,
  play: noop,
  unmute: noop,
  mute: noop,
  volume: noop,
};
