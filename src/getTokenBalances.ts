import { config } from 'dotenv'
import fetch from 'cross-fetch';
config()

const apiKey = 'cqt_rQq4KTPW7KFmXcYTXpyhxjRrvRM8'

const getTokenBalances = async (chainName: string, walletAddress: string) => {
    const headers = {
        'Authorization': `Bearer ${apiKey}`,
    };
    
    let url = `https://api.covalenthq.com/v1/${chainName}/address/${walletAddress}/balances_v2/`
    try {
        const res = await fetch(url, { method: 'GET', headers })
        const data = await res.json()
        console.log(data)
        return data
    }
    catch(err){
        return (`Error fetching user addresses`)
    }
}

export { getTokenBalances }