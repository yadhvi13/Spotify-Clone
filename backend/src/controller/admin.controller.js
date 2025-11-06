import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model.js";

export const createSong = async (req, res,next) => {
    try {
        if (!req.files || !req.files.audioFile || !req.files.imageFile) {
            return res.status(400).json({ message: "Please upload all files" });
        }

        const { title, artist, albumId, duration } = req.body
        const audioFile = req.files.audioFile
        const imageFileFile = req.files.imageFile

        const song = new Song({
            title,
            artist,
            audioUrl,
            imageUrl,
            duration,
            albumId: albumId || null
        })

        await song.save();

        //if song belongs to an album, update the album songs array
        if (albumId) {
            await Album.findByIdAndUpdate(albumId, {
                $push: { songs: song._id },
            });
        }
        res.status(201).json(song)
    } catch (error) {
       console.log("error in createSong", error);
    //    res.status(500).json({message: "internal server error", error});
       next(error);
    }
}