class MinCoinChange {
    constructor(coins) {
        this.coins = coins
        this.cache = {}
    }

    makeChange = (amount) => {
        if (!amount) {
            return []
        }
        if (this.cache[amount]) {
            return this.cache[amount]
        }
        let min = []
        let newMin
        let newAmount
        for (let i = 0; i < this.coins.length; i++) {
            let coin = this.coins[i]
            newAmount = amount - coin
            if (newAmount >= 0) {
                this.makeChange(newAmount)
            }
            if (
                newAmount >=0 &&
                (newMin.length < min.length - 1 || !min.length) &&
                (newMin.length || !newAmount)
            ) {
                min = [coin].concat(newMin)
                console.log(`new Min ${min} for ${amount}`)
            }
        }
        return (this.cache[amount] = min)
    }
}
