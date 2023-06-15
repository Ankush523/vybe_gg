import { config } from 'dotenv'
config()

const apiKey = process.env.COVALENT_API_KEY as string

const getTokenBalances = async (chainName: string, walletAddress: string) => {
    let headers = new Headers()
    headers.set('Authorization', `Bearer ${apiKey}`)
    
    let url = `https://api.covalenthq.com/v1/${chainName}/address/${walletAddress}/balances_v2/`
    try {
        const res = await fetch(url, { method: 'GET', headers })
        const data = await res.json()
        return data
    }
    catch(err){
        return (`Error fetching user addresses`)
    }
}

export { getTokenBalances }