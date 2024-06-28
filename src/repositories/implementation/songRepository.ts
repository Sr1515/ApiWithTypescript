import prismaClient from "../../database/prisma";
import { Song } from "@prisma/client";
import { ISongRepository } from "../ISongRepository"


class SongRepository implements ISongRepository {

    async create(song: Song): Promise<void> {
        await prismaClient.song.create({
            data: {
               ...song
            }        
        })
        return
    }

    async findAll(): Promise<Song[]> {
        const songReference = await prismaClient.song.findMany({
            select: {
                id: true,
                name: true,
                release_year: true,
                duration: true
            }
        })

        const songs: Song[] = []
        songReference.forEach((song: any) => {
            songs.push(song)
        })

        return songs
    }
}


export default new SongRepository()