

import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadPath = path.resolve('uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueName + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

export default upload;
