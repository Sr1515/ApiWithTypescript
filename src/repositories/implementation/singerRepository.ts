import { Singer } from "@prisma/client";
import prismaClient from "../../database/prisma";
import {ISingerRepository} from "../ISingerRepository"

class SingerRepository implements ISingerRepository {

    async create(singer: Singer): Promise<void> {
        await prismaClient.singer.create({
            data: {
                ...singer
            }
        })
        return
    }

    async findAll(): Promise<Singer[]> {
        const singerReference = await prismaClient.singer.findMany({
            select: {
                id: false,
                name: true,
                age: true,
                biography: true,
                musical_genre: true,
                created_at: false,
                updated_at: false
            }
        })

        const singers: Singer[] = []
        singerReference.forEach((singer: any) => {
            singers.push(singer)
        })

        return singers
    }

    async findById(id: string): Promise<Singer | null> {
        const singer: Singer | null = await prismaClient.singer.findUnique({
            where: {
                id
            }
        }) as Singer | null
        return singer
    }

    async update(singer: Singer, id: string): Promise<void> {
        await prismaClient.singer.update({
            where: {
                id
            }, 
            data: {
                ...singer
            }
        })
    }

    async delete(id: string): Promise<void> {
        await prismaClient.singer.delete({
            where: {
                id: id
            }
        })
    }
}

export default new SingerRepository()