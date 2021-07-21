export function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - newMin + 1)) + newMin;
}

export function fillPoint({ ctx, coords, radius }) {
  ctx.moveTo(coords.x + radius, coords.y);
  ctx.arc(coords.x, coords.y, radius, 0, Math.PI * 2, true);
}

export default {
  getRandomIntInclusive,
  fillPoint,
};
