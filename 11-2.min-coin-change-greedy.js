class MinCoinChange {
    constructor(coins) {
        this.coins = coins
        this.cache = {}
    }

    makeChange = (amount) => {
        let change = []
        let total = 0
        for (let i = this.coins.length; i >= 0; i--) {
            let coin = this.coins[i]
            while (total + coin <= amount) {
                change.push(coin)
                total += coin
            }
        }
        return change
    }
}
