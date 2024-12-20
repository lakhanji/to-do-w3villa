// const express = require("express");
// const app = express();
// const cors = require("cors");
// require("./conn/conn");
// const path = require("path");
// const auth=require("./routes/auth.js");
// const list=require("./routes/list.js");



// // app.get("/", (req,res) => {
// //     res.send("Hello");
// // });

// app.use(express.json());
// app.use(cors());

// app.use("/api/v1",auth);
// app.use("/api/v2",list);

// app.get("/", (req, res) => {
//     app.use(express.static(path.resolve(__dirname, "frontend", "build")));
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   });

// app.listen(1000, () =>{
//     console.log("Server started");
// });



const express = require("express");
const cors = require("cors");
const path = require("path");
require("./conn/conn");
const auth = require("./routes/auth.js");
const list = require("./routes/list.js");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.use("/api/v1", auth);
app.use("/api/v2", list);

// Serve Static Files
app.use(express.static(path.resolve(__dirname, "frontend", "build")));

// Catch-All Route for SPA
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

// Start Server
app.listen(1000, () => {
    console.log("Server started on port 1000");
});
