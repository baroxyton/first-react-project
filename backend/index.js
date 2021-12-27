const app = require("express")();
app.use(require('body-parser').json({extended:true}));
let imageList = [];
app.post("/api/submit", function(req, res){
  console.log(req.body);
  let url  = req.body.url;
  let name = req.body.name;
  let id = imageList.length;
  imageList.push({name,url,id});
  res.status(200);
  res.send("Success");
});
app.get("/api/list", function(req,res){
let names = imageList.map(image=>{return {name:image.name,id:image.id}});
res.send(JSON.stringify(names));
});
app.get("/api/image/:id", function(req, res){
let id = req.params.id;
let image = imageList.find(image=>image.id==id);
res.send(image||{"name":"404 Not Found",url:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='200' width='200'%3E%3Ctext x='50' y='50'%3ENot Found%3C/text%3E%3C/svg%3E"});
})
app.listen(3001);
