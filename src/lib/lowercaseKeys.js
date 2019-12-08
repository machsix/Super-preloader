export default (object) => {
  const result = {};

  for (const [key, value] of Object.entries(object)) {
    result[key.toLowerCase()] = value;
  }

  return result;
};
