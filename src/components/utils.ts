export function formatTime(second: number) {
  let i = 0;
  let h = 0;
  let s = Math.floor(second);
  if (s >= 60) {
    i = Math.floor(s / 60);
    s = Math.floor(s % 60);
    if (i >= 60) {
      h = Math.floor(i / 60);
      i = Math.floor(i % 60);
    }
  }
  // 补零
  const zero = (v: number) => (v >> 0 < 10 ? `0${v}` : v);
  if (h > 0) return [zero(h), zero(i), zero(s)].join(":");
  return [zero(i), zero(s)].join(":");
}
