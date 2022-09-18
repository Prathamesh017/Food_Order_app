import express from "express";

const app=express();

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(3000,(req,res)=>{
    console.log("Hello World");
})
