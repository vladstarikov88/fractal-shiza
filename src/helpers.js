export function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - newMin + 1)) + newMin;
}

export default {
  getRandomIntInclusive,
};
