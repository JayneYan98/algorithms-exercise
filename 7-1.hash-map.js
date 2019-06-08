class HashMap {
    table = []

    static loseloseHashCode = (key) => {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }

    static djbHashCode = (key) => {
        let hash = 5381
        for (let i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(key)
        }
        return hash % 1013
    }

    static hashCode = (key) => {
        return HashMap.loseloseHashCode(key)
    }

    put = (key, value) => {
        let position = HashMap.hashCode(key)
        console.log(`${position} - ${key}`)
        this.table[position] = value
    }

    get = (key) => {
        return this.table[HashMap.hashCode(key)]
    }

    remove = (key) => {
        this.table[HashMap.hashCode(key)] = undefined
    }

    print = () => {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                console.log(`${i}: ${this.table[i]}`)
            }
        }
    }
}
