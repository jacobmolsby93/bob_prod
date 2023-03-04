function swiper(func) {
    return (min, max, v) =>
      v !== undefined ? func(min, max, v) : cv => func(min, max, cv);
  }
  
  function wrapFn(min, max, v) {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  }
  
  export const wrap = swiper(wrapFn);
  
  export function swipePower(offset, absDistance) {
    const absXDistance = Math.abs(absDistance.x);
    return (offset.x / absXDistance) * 100;
  }
  