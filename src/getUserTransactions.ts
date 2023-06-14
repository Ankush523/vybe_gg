import axios from 'axios';
import { config } from 'dotenv';
config();

const API_KEY : any = process.env.API_KEY;
const USER_ADDRESS : any = process.env.USER_ADDRESS;
async function getUserTransactions(userAddress: string): Promise<any> {
    const apiKey = API_KEY;
    const url = `https://api.covalenthq.com/v1/137/address/${userAddress}/transactions_v2/?key=${apiKey}`;

    try {
        const response = await axios.get(url);
        return response.data.data.items;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

getUserTransactions(USER_ADDRESS).then(txs => {
    console.log(txs);
}).catch(e => {
    console.error(e);
});
