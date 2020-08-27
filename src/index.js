const express = require("express");
const app = new express();
const path = require("path");

const port = process.env.PORT || 3000;
const publicDirPath = path.join(__dirname, "../public");

app.use(express.static(publicDirPath));
app.listen(port, () => {
    console.log(`App served from port ${port}`);
});
