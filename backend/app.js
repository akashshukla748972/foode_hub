import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to our FOODE HUB!",
    success: true,
    error: false,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
