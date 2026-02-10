const response = require("../utils/response");

exports.healthCheck = (req, res) => {
  return res.status(200).json(response(true));
};
