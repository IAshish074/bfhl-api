const axios = require("axios");

exports.askAI = async (question) => {
  try {
    const url =
      ` ⁠ https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY} ⁠,
`;

    const response = await axios.post(
      url,
      {
        contents: [
          {
            role: "user",
            parts: [
              { text: `Answer in one word only. ${question}` }
            ]
          }
        ]
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    );

    return response.data.candidates[0].content.parts[0].text.trim();
  } catch (err) {
    console.error(
      "Gemini error:",
      err
    );
    return "Unknown"; 
  }
};
