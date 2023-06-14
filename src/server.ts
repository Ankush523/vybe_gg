import express from 'express'
import { config} from 'dotenv'
import { createECDH } from 'crypto'
config()

const port = process.env.PORT || 8080
const app = express()
app.use(express.json())

app.post('/api/getGenerator', async (req, res) => {
    // generate a random generator from the game id -> store it on a db
    // const generator = await fetchGenerator()
})

app.listen(port, () => console.log(`Server listening on port: ${port}`))
