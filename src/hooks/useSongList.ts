import { useEffect, useState } from "react";

export interface Song {
  name: string;
  singer: string;
  picUrl: string;
  src: string;
  id: number;
}

export const useSongList = (list: Song[] = []) => {
  const [current, setCurrent] = useState(0);
  const [songList, setSongList] = useState<Song[]>([
    {
      name: "",
      singer: "",
      picUrl: "",
      src: "",
      id: 0,
    },
  ]);
  useEffect(() => {
    if (list.length > 0) {
      setSongList(list);
    }
  }, [list.length]);
  const next = () => {
    setCurrent(Math.min(current + 1, songList.length - 1));
  };
  const prev = () => {
    setCurrent(Math.max(current - 1, 0));
  };
  return { current: songList[current], next, prev };
};
