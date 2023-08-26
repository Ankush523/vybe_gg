import { config } from 'dotenv'
import fetch from 'cross-fetch';
config()

const apiKey = 'cqt_rQq4KTPW7KFmXcYTXpyhxjRrvRM8'

const getUserTransactions = async (userAddress: string, chainId: string): Promise<any> => {
    
    const headers = {
        'Authorization': `Bearer ${apiKey}`,
    };

    let url = `https://api.covalenthq.com/v1/${chainId}/address/${userAddress}/transactions_v3/`
    try {
        const response = await fetch(url, { method: 'GET', headers })
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}

export { getUserTransactions }