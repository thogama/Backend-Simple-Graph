import { Router } from 'express'
import findWsDataonDB from '../controllers/returnData'

const routes = Router()


routes.get('/', (req, res) => {
    findWsDataonDB().then((response) => {
        res.send(response)

    })

})


export { routes }