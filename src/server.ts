import express from 'express'
import { config} from 'dotenv'
import { getHistoricalPortfolio } from './getHistoricalPortfolio'
config()

const port = process.env.PORT || 8080
const app = express()
app.use(express.json())

app.get('/api/fetch/portfolio', async (req, res) => {
    // fetch the user's portfolio from the db
    const { chainName, address } = req.query as { chainName: string, address: string }
    const portfolio = await getHistoricalPortfolio(chainName, address)
    const assetLength = portfolio.data.items.length as number
    const portfolioLength = portfolio.data.items[0].holdings.length as number
    let dailyBalances = new Array(portfolioLength)

    for(let j = 0; j < portfolioLength; j++){
        let total = 0
        for(let i = 0; i < assetLength; i++){
            total += portfolio.data.items[i].holdings[j]['high'].quote 
            dailyBalances[j] = total
        }
    }
    console.log(portfolio)
    res.json(dailyBalances)
})


app.listen(port, () => console.log(`Server listening on port: ${port}`))
