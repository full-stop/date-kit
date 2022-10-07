function timestampFormat(timestamp) {
  const ms = timestamp % 1000 || 0;
  const unix = (timestamp - ms) / 1000;
  const s = unix % 60 || 0;
  const m = ((unix - s) / 60) % 60 || 0;
  const h = (((unix - s) / 60 - m) / 60) % 24 || 0;
  const d = (((unix - s) / 60 - m) / 60 - h) / 24 || 0;

  return {
    d,
    h,
    m,
    s,
    ms,
  };
}

export default timestampFormat;
