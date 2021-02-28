const express= require('express')
const router = express.Router();
const path = require('path');
const multer = require('multer');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp')
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname)
  }
})

const upload = multer({ storage: storage })



router.get('/', (req, res, next) => {

    
    res.sendFile(path.join(__dirname + '/../public/html/upload.html'));
  });

router.post('/', upload.single('fileftp'), (req,res) => {
   
    var fileDetail = req.file
    if (!fileDetail || fileDetail.filename.length === 0 ){
        return res.status(400).send('Dosya Mevcut Değil')
    }
    
    console.log(fileDetail.size);
    res.io.emit("Upload", "Dosya Yüklendi");

    });



module.exports = router;