exports.validateRequest = (body) => {
  const keys = Object.keys(body);

  if (keys.length !== 1) {
    throw new Error("Request must contain exactly one key");
  }

  return keys[0];
};
