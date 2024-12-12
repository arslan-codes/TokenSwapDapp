import express from "express";
import axios from "axios";
import cors from "cors"; // Import CORS

const app = express();

app.use(cors()); // Enable CORS for all routes

app.get("/proxy/price", async (req, res) => {
  try {
    const response = await axios.get("https://api.0x.org/swap/permit2/price", {
      params: req.query,
      headers: {
        "0x-api-key": "593f132c-54c2-4cd9-a3aa-880f5ee4880c",
        "0x-version": "v2",
      },
    });
    res.json(response.data); // Send back the data from the 0x API
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching price");
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
