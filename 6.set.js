class Set {

    items = {}

    has = (value) => {
        return this.items.hasOwnProperty(value)
        // return value in this.items
    }

    add = (value) => {
        if (!this.has(value)) {
            this.items[value] = value
            return true
        }
        return false
    }

    remove = (value) => {
        if (this.has(value)) {
            delete this.items[value]
            return true
        }
        return false
    }

    clear = () => {
        this.items = {}
    }

    size = () => {
        return Object.keys(this.items).length
    }

    sizeLegacy = () => {
        let count = 0
        for (let prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                ++count
            }
        }
        return count
    }

    values = () => {
        return Object.keys(this.items)
    }

    valuesLegacy = () => {
        let keys = []
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                keys.push(key)
            }
        }
        return keys
    }

    getItems = () => {
        return this.items
    }

    union = (otherSet) => {
        let unionSet = new Set()

        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        values = otherSet.values()
        values.forEach(value =>{
            unionSet.add(value)
        })

        return unionSet
    }

    intersection = (otherSet) => {
        let intersectionSet = new Set()

        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }

        return intersectionSet
    }

    difference = (otherSet) => {
        let differenceSet = new Set()

        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i])
            }
        }

        return differenceSet
    }

    subset = (otherSet) => {

        if (this.size() > otherSet.size()) {
            return false
        } else {
            let values = this.values()
            for (let i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false
                }
            }
            return true
        }
    }
}
