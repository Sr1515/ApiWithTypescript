import { Song } from "@prisma/client";
import SongRepository from "../repositories/implementation/songRepository";
import { Request, Response} from "express"
import { v4 as uuidv4 } from "uuid"


class SongController {

    async store(req: Request, res: Response) {
        try { 
            const uniqueId: string = uuidv4() 
            const song = req.body
            
            const newSong = {
                ...song,
                id: uniqueId

            }

            await SongRepository.create(newSong)
            res.status(201).send(song)

        } catch (err) {
            res.status(400).send(err)
        }
    }

    async index(req: Request, res: Response) {
        try {
            const songs: Song[] =  await SongRepository.findAll()
            res.status(200).send(songs)
        } catch (err) {
            res.send(400).send(err)
        }
    }

    async show(req: Request, res: Response) {
        try {
            const id: string = req.params.id
            const song = await SongRepository.findById(id)
            res.status(200).send(song)
        } catch (err) {
            res.status(400).send(err)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id: string = req.params.id
            const song = await SongRepository.update(req.body, id)
            res.status(200).send(song)
        } catch (err) {
            res.status(400).send(err)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id: string = req.params.id
            const song = await SongRepository.delete(id)
            res.status(200).send(song)
        } catch (err) {
            res.status(400).send(err)
        }
    }

}

export default new SongController()