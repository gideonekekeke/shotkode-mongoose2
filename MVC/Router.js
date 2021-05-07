const express = require("express");
const Teachers = require("../MVC/SchemaData");

const router = express.Router();
const multer = require("multer");
// uplopad for your profile piccture
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./uploads");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const imageUpload = multer({ storage: storage }).single("picture");

// upload for your cv

// const storageCv = multer.diskStorage({
//   destination: function (req, res, cb) {
//     cb(null, "./cv");
//   },

//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const uploadCv = multer({ storage: storageCv }).single("picture");

router.post("/register", imageUpload, async (req, res) => {
  try {
    const newEntry = await Teachers.create({
      name: req.body.name,
      location: req.body.location,
      contact: req.body.contact,
      Picture: req.file.path,
      cover: req.file.path,
    });

    res.status(201).json(newEntry);
  } catch (err) {
    res.status(404).json("error" + err);
  }

  router.get("/", async (req, res) => {
    try {
      const getUser = await Teachers.find();
      res.status(200).json(getUser);
    } catch (err) {
      res.status(404).json("error" + err);
    }
  });
});

module.exports = router;
