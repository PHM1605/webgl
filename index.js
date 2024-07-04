var express = require("express")
var path = require("path")
var app = express()
app.use(express.static(path.join(__dirname, "public")))
app.get("/", async (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"))
});
app.listen("3000")
console.log("Server listening on port 3000")

