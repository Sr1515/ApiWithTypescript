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

    async findById(id: string): Promise<Song | null> {
          const song: Song | null = await prismaClient.song.findUnique({
            where: {
                id
            }
          }) as Song | null 
          return song
    }   
    
    async update(song: Song, id: string): Promise<void> {
        await prismaClient.song.update({
            where: {
                id
            }, 
            data: {
                ...song
            }
        })
    }

    async delete(id: string): Promise<void> {
        await prismaClient.song.delete({
            where: {
                id
            }
        })
    }
}


export default new SongRepository()