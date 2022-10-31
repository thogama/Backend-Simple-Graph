import { Router } from 'express'
import findWsDataonDB from '../controllers/returnData'

const routes = Router()


// routes.get('/', (req, res) => {
//     findWsDataonDB().then((response) => {
//         res.send(response)

//     })

// })

routes.get('/', (req, res) => {
    res.send("END")
})
    


export { routes }