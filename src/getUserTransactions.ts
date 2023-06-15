import axios from 'axios'
import { config } from 'dotenv'
config()

const apiKey = process.env.COVALENT_API_KEY as string

const getUserTransactions = async (userAddress: string, chainId: string): Promise<any> => {
    let headers = new Headers()
    headers.set('Authorization', apiKey)
    const url = `https://api.covalenthq.com/v1/${chainId}/address/${userAddress}/transactions_v2/?key=${apiKey}`
    try {
        const response = await axios.get(url)
        return response.data.data.items
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}

export { getUserTransactions }