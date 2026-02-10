const { validateRequest } = require("../utils/validator");
const response = require("../utils/response");

const { fibonacci } = require("../services/fibonacci.service");
const { getPrimes } = require("../services/prime.service");
const { lcmArray, hcfArray } = require("../services/math.service");
const { askAI } = require("../services/ai.service");

exports.handleBFHL = async (req, res) => {
  try {
    const key = validateRequest(req.body);
    let result;

    switch (key) {
      case "fibonacci":
        result = fibonacci(req.body[key]);
        break;

      case "prime":
        result = getPrimes(req.body[key]);
        break;

      case "lcm":
        result = lcmArray(req.body[key]);
        break;

      case "hcf":
        result = hcfArray(req.body[key]);
        break;

      case "AI":
        result = await askAI(req.body[key]);
        break;

      default:
        throw new Error("Invalid key");
    }

    return res.status(200).json(response(true, result));
  } catch (err) {
    return res.status(400).json(response(false, err.message));
  }
};
