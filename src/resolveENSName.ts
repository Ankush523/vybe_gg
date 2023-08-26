import { ethers } from 'ethers';

export async function resolveENSName(ensName : string) {
  try {
    
    const providerUrl = 'https://eth-mainnet.g.alchemy.com/v2/LatuiPPNGhXoq-yKXOr75pOLko1WxUxN'; 
    const provider = new ethers.providers.JsonRpcProvider(providerUrl); 
    const address = await provider.resolveName(ensName); 
    
    console.log('EOA Address:', address);
    return address;
  } catch (error) {
    console.error('Error:', error);
  }
}
