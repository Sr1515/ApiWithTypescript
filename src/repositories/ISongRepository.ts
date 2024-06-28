import { Song } from "@prisma/client";

export interface ISongRepository {
    create(song: Song): Promise<void>
    findAll(): Promise<Song[]>
    // findById(id: string): Promise<Song | null>
    // update(singer: Song, id: string): Promise<void>
    // delete(id: string): Promise<void>
}