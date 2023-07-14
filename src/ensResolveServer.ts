import express from 'express'
import { config} from 'dotenv'
import cors from 'cors'
import { resolveENSName } from './resolveENSName'
config()

const port = process.env.PORT || 5001
const app = express()

// middleware
app.use(express.json())
app.use(cors())

app.get('/api/fetch/resolveEns', async (req, res) => {
    const { ensName } = req.query as { ensName: string }
    const eoa = await resolveENSName(ensName)
    res.json(eoa)
})

app.listen(port, () => console.log(`Server listening on port: ${port}`))