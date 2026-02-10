module.exports = (is_success, data = null) => {
  const res = {
    is_success,
    official_email: "ashish1128.be23@chitkarauniversity.edu.in"
  };

  if (data !== null) res.data = data;
  return res;
};
