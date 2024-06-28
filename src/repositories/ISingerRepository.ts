import { Singer } from "@prisma/client";

export interface ISingerRepository {
    create(singer: Singer): Promise<void>
    findAll(): Promise<Singer[]>
    findById(id: string): Promise<Singer | null>
    update(singer: Singer, id: string): Promise<void>
    delete(id: string): Promise<void>
}