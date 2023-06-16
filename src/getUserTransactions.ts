import { config } from 'dotenv'
config()

const apiKey = process.env.COVALENT_API_KEY as string

const getUserTransactions = async (userAddress: string, chainId: string): Promise<any> => {
    let headers = new Headers()
    headers.set('Authorization', `Bearer ${apiKey}`)
    let url = `https://api.covalenthq.com/v1/${chainId}/address/${userAddress}/transactions_v3/`
    try {
        const response = await fetch(url, { method: 'GET', headers })
        const data = await response.json()
        return data
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}

export { getUserTransactions }