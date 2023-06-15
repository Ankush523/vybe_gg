import { config } from 'dotenv'
config()

const apiKey = process.env.COVALENT_API_KEY as string

const getTokenBalances = async (chainName: string, walletAddress: string) => {
    let headers = new Headers()
    headers.set('Authorization', `Bearer ${apiKey}`)
    
    let url = `https://api.covalenthq.com/v1/${chainName}/address/${walletAddress}/balances_v2/`
    try {
        const res = await fetch(url, { method: 'GET', headers })
        console.log(await res.json())
        return (res)
    }
    catch(err){
        return (`Error fetching user addresses`)
    }
}

getTokenBalances('matic-mainnet', '0x03f142529a7B70305C07a50fAA44f6EBDADB4624')
.then(res => console.log(res))
.catch(err => console.log(err))

export { getTokenBalances }