import { config } from 'dotenv'
import fetch from 'cross-fetch';

config()

const apiKey = 'cqt_rQq4KTPW7KFmXcYTXpyhxjRrvRM8'

const getHistoricalPortfolio = async (chainName: string, walletAddress: string): Promise<any> => {
    const headers = {
        'Authorization': `Bearer ${apiKey}`,
    };

    let url = `https://api.covalenthq.com/v1/${chainName}/address/${walletAddress}/portfolio_v2/`
    try {
        const res = await fetch(url, { method: 'GET', headers })
        const data = await res.json()
        console.log(data)
        return data
    }
    catch(err){
        console.log(`Error fetching transaction history`)
    }
};

export { getHistoricalPortfolio };