import multer from 'multer';



const upload = multer({
    dist: 'uploads/',
});

export default upload;