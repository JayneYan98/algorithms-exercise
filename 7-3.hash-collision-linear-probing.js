class HashLinearProbing {

    table = []

    static loseloseHashCode = (key) => {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }

    static hashCode = (key) => {
        return HashLinearProbing.loseloseHashCode(key)
    }

    put = (key, value) => {
        let position = HashLinearProbing.hashCode(key)
        console.log(`${position} - ${key}`)

        if (this.table[position] === undefined) {
            this.table[position] = new ValuePair(key, value)
        } else {
            let index = ++position
            while (this.table[index] !== undefined) {
                index++
            }
            this.table[index] = new ValuePair(key, value)
        }
    }

    get = (key) => {
        let position = HashLinearProbing.hashCode(key)

        if (this.table[position] !== undefined) {
            if (this.table[position].key === key) {
                return this.table[position].value
            } else {
                let index = ++position
                while (this.table[index] === undefined || this.table[index].key !== key) {
                    index++
                }
                if (this.table[index].key === key) {
                    return this.table[index].value
                }
            }
        }
        return undefined
    }

    remove = (key) => {
        let position = HashLinearProbing.hashCode(key)

        if (this.table[position] !== undefined) {
            if (this.table[position].key === key) {
                this.table[position] = undefined
            } else {
                let index = ++position
                while (this.table[index] === undefined || this.table[index].key !== key) {
                    index++
                }
                if (this.table[index].key === key) {
                    this.table[index] = undefined
                }
            }
        }
    }

    print = () => {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                console.log(`${i} -> ${this.table[i].toString()}`)
            }
        }
    }
}

class ValuePair {
    constructor (key, value) {
        this.key = key
        this.value = value
    }

    toString = () => {
        return `[ ${this.key} - ${this.value} ]`
    }
}
