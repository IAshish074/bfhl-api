const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

exports.hcfArray = (arr) => arr.reduce(gcd);

exports.lcmArray = (arr) =>
  arr.reduce((a, b) => (a * b) / gcd(a, b));
