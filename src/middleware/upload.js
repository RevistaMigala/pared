const multer = require('multer')

const upload = multer({
    limits: {
        fileSize: 5000000,
    },
    fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            cb(new Error('File must be an image'))
        }
        cb(undefined, true)
    }
})

const imageGallery = upload.fields([
    { name: 'image_1' },
    { name: 'image_2' },
    { name: 'image_3' },
    { name: 'image_4' },
    { name: 'image_5' },
    { name: 'image_6' },
    { name: 'image_7' },
    { name: 'image_8' },
])

module.exports = { upload, imageGallery}
