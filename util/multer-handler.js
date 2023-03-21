import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
    console.log(file);
  },
});

const umulterHandler = multer({ storage });

export default multerHandler;
