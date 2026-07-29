const express = require("express");

const depreciationRoutes = require("./routes/depreciationRoutes");

const app = express();

app.use(express.json());

app.use("/api", depreciationRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});