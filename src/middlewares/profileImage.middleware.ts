import { NextFunction, Request, Response } from "express";
import multer from "multer";
import path from "path";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import fs from "fs"

const profileImageMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.user
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOne({ where: { id } })

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'src/images')
        },
        filename: (req, file, cb) => {
            const timestamp = new Date().toISOString().replace(/:/g, '-')

            if(user?.profileImagePath) {
                const oldImagePath = path.join('src/images', user.profileImagePath)
                try {
                    fs.unlinkSync(oldImagePath)
                } catch(err) {
                    console.error(err)
                }
            }
            cb(null, `${user!.id}_${timestamp}`)
        }
    })

    const upload = multer({
        storage: storage,
        limits: {
            fileSize: 1024 * 1024
        },
        fileFilter: (req, file, cb) => {
            const allowedFileTypes = /jpeg|jpg|png|webp/
            const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase())
            const mimeType = allowedFileTypes.test(file.mimetype)
            if (extname && mimeType) {
                return cb(null, true)
            }
            else {
                cb(new Error(`Invalid file type. Only ${allowedFileTypes.source} are allowed.`));
            }
        },
    }).single('profileImage')

    try {
        upload(req, res, async (err) => {
            if (req.body.profileImage == null) {
                await userRepository.update(id, { profileImagePath: undefined })
            }
            if (err instanceof multer.MulterError) {
                return res.status(400).json({ message: "Invalid file upload." })
            }
            else if (err) {
                console.error(err)
                return res.status(500).json({ message: "Internal server error." })
            }

            if (req.file) {
                const filePath = `${req.file?.filename}`
                await userRepository.update(id, { profileImagePath: filePath })

            }
            next()
        })
    } catch(err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error." });
    }
}

export default profileImageMiddleware