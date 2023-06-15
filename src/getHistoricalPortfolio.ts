import { config } from 'dotenv'

config()

const apiKey = process.env.COVALENT_API_KEY as string

const getHistoricalPortfolio = async (chainName: string, walletAddress: string): Promise<any> => {
    let headers = new Headers()
    headers.set('Authorization', `Bearer ${apiKey}`)

    let url = `https://api.covalenthq.com/v1/${chainName}/address/${walletAddress}/portfolio_v2/`
    try {
        const res = await fetch(url, { method: 'GET', headers })
        console.log(await res.json())
    }
    catch(err){
        console.log(`Error fetching transaction history`)
    }
}

export { getHistoricalPortfolio }