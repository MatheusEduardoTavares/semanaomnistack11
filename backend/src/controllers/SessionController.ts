import connection from '../database/connection'
import { Request, Response } from 'express'

export default {
    async create (request: Request, response: Response) {
        const { id } = request.body

        const [ong] = await connection('ongs').where('id', id).select('name')

        if (!ong){
            return response.status(404).json({error: "No found ONG with com this ID."})
        }

        return response.json(ong)
    }
}