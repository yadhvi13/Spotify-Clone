import { Song } from "../models/song.model.js";

export const getAllSongs = async (req, res, next) => {
    try {
        // -1 == descending => newest to oldest songs
        // 1 == ascending => oldest to newest songs
        const songs = await Song.find().sort({ createdAt: -1 });
        res.json(songs)
    } catch (error) {
        nect(error);
    }
};