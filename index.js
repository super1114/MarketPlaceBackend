const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const NFTModel = require('./model/model');

const PORT = 8000;
const MONGODB_URI = "mongodb+srv://vercel-admin-user-64078ccf3f79391698b130d1:ApH30bpK6LZW1QJZ@xrpl-cluster.j3xqx9d.mongodb.net/nftDB?retryWrites=true&w=majority"
const app = express();
const upload = multer({ dest: 'public/' });

//use static files
app.use(express.static('public'));
//middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());
app.use(express.json());

//Router
app.get("/", (req, res) => {
  res.send("Hello James");
});

app.post("/create", upload.single('image'), async (req, res) => {
  let imageName = req.file.filename;
  const imagePath = `localhost:3000/${imageName}`;
  mongoose.connect(MONGODB_URI);
  const db = mongoose.connection;
  db.on("error", (error) => {
    res.send(error);
  });
  db.once("open", async () => {

    let newNFT = {
      nftImgPath: imagePath,
      nftName: req.body.nftName,
      nftDescription: req.body.nftDescription,
      nftProperties: req.body.nftDescription
    };

    let nft = new NFTModel(newNFT);
    try {
      await nft.save();
      res.send("NFT info saved");
    } catch (error) {
      res.status(500).send(error);
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
})

module.exports = app;