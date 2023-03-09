const express = require("express");
// const mongoose = require('mongoose');
// const multer = require('multer');
// const NFTModel = require('./model/model');

// const MONGODB_URI = "mongodb+srv://vercel-admin-user-64078ccf3f79391698b130d1:ApH30bpK6LZW1QJZ@xrpl-cluster.j3xqx9d.mongodb.net/nftDB?retryWrites=true&w=majority"

const router = express.Router();

// const upload = multer({ dest: 'public/' });

router.post("/", (req, res) => {
    res.send("create");
})

// app.post("/", upload.single('image'), async (req, res) => {
//   let imageName = req.file.filename;
//   const imagePath = `localhost:3000/${imageName}`;
//   mongoose.connect(MONGODB_URI);
//   const db = mongoose.connection;
//   db.on("error", (error) => {
//     res.send(error);
//   });
//   db.once("open", async () => {

//     let newNFT = {
//       nftImgPath: imagePath,
//       nftName: req.body.nftName,
//       nftDescription: req.body.nftDescription,
//       nftProperties: req.body.nftDescription
//     };

//     let nft = new NFTModel(newNFT);
//     try {
//       await nft.save();
//       res.send("NFT info saved");
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   })
// })

module.exports = router;