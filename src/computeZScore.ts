const userScoringAlgorithm = async () => {
    // fetch user transactions from db { include all mainnet chains [eth, polygon]}
    // fetch user assets ( all chains, and calculate networth (spend potential))
    // fetch nft assets ( 0.5 -> plain nfts, 0.75 -> nft games)
    // recency multiplier ( num_transactions in the past 3 months higher weightage)

    const score = 0
    return score
}

const getRecencyMultiplier = async (tx: any) => {
    // get current timestamp
    // get transaction timestamp
    // get difference in months
    // return multiplier
    const multiplier = 0
    return multiplier
}

export { userScoringAlgorithm }