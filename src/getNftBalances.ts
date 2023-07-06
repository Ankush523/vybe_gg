import { config } from 'dotenv'
import fetch from 'cross-fetch';

config()

const apiKey = process.env.COVALENT_API_KEY as string

const getNftBalances = async (chainName: string, walletAddress: string) => {
    const headers = {
        'Authorization': `Bearer ${apiKey}`,
    };

    let url = `https://api.covalenthq.com/v1/${chainName}/address/${walletAddress}/balances_nft/`
    try {
        const res = await fetch(url, { method: 'GET', headers })
        const data = await res.json()
        console.log(data)
        return (data)
    } catch(err){
        return (`Error fetching nfts`)
    }
}

export { getNftBalances }