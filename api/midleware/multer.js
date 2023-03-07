import multer from "multer"

const storage = multer.diskStorage({
    // destination: function (req, file, cb) {
    //     cb(null, 'uploads/')
    // },
    filename: function (req, file, cb) {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`
        cb(null, `${req.body.name}-${uniqueSuffix}.jpg`)
    }
})

export const upload = multer({ storage: multer.memoryStorage() })
