// "593f132c-54c2-4cd9-a3aa-880f5ee4880c",
import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

// Middleware

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"], // Your frontend URLs
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// 0x API Price Proxy Route
app.get("/proxy/quote", async (req, res) => {
  try {
    const { sellToken, buyToken, sellAmount, taker, chainId } = req.query;

    // 0x API Endpoint
    const ZEROX_API_ENDPOINT = "https://api.0x.org/swap/permit2/quote";

    // Construct query parameters
    const params = new URLSearchParams({
      sellToken,
      buyToken,
      sellAmount,
      taker,
      chainId,
    });

    // Make the API request
    const response = await axios.get(`${ZEROX_API_ENDPOINT}?${params}`, {
      headers: {
        "0x-api-key": "593f132c-54c2-4cd9-a3aa-880f5ee4880c", // Use the same API key
        "0x-version": "v2", // Include the version header
        Accept: "application/json",
      },
    });

    // Return the response data
    res.json(response.data);
  } catch (error) {
    console.error("Quote fetch error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: "Failed to fetch quote",
      details: error.response?.data || error.message,
    });
  }
});

// Optional: Chain ID specific proxy route
app.get("/proxy/price/:chainId", async (req, res) => {
  try {
    const { chainId } = req.params;
    const { sellToken, buyToken, sellAmount, taker } = req.query;

    // Construct the request parameters
    const params = new URLSearchParams({
      chainId,
      sellToken,
      buyToken,
      sellAmount,
      taker,
    });

    const response = await axios.get(
      `https://api.0x.org/swap/permit2/price?${params}`,
      {
        headers: {
          "0x-api-key": process.env.ZEROX_API_KEY,
          Accept: "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(
      "Chain-specific price fetch error:",
      error.response?.data || error.message
    );
    res.status(error.response?.status || 500).json({
      error: "Failed to fetch price for specified chain",
      details: error.response?.data || error.message,
    });
  }
});

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Something went wrong",
    message: err.message,
  });
});

// Configure port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
