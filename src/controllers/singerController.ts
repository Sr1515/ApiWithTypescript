import { Request, Response } from "express";
import SingerRepository from "../repositories/implementation/singerRepository"
import { v4 as uuidv4 } from "uuid";

class SingerController {

    async store(req: Request, res: Response) {
        try {
            const uniqueId: string = uuidv4()
            const singer = req.body

            const newSinger = {
                ...singer,
                id: uniqueId
            }

            await SingerRepository.create(newSinger)
            res.status(201).send(singer)
        } catch (err) {
            res.status(400).send(err)
        }
    }

    async index(req: Request, res: Response) {
        try {
            const singers = await SingerRepository.findAll()
            res.status(201).send(singers)
        } catch (err) {
            res.status(400).send(err)
        }
    }

    async show(req: Request, res: Response) {
        try {
            const singer = await SingerRepository.findById(req.params.id)
            res.status(200).send(singer)
        } catch (err) {
            res.status(400).send(err)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id: string = req.params.id
            const singer = await SingerRepository.update(req.body, id)
            res.status(200).send(singer)
        } catch (err) {
            res.status(400).send(err)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id: string = req.params.id
            const singer = await SingerRepository.delete(req.params.id)
            res.status(200).send(singer)
        } catch (err) {
            res.status(400).send(err)
        }
    }

}

export default new SingerController()