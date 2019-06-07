class Dictionary {
    items = {}

    has = (key) => {
        // return key in this.items
        return this.items.hasOwnProperty(key)
    }

    set = (key, values) => {
        this.items[key] = values
    }

    remove = (key) => {
        if (this.has(key)) {
            delete this.items[key]
            return true
        }
        return false
    }

    get = (key) => {
        return this.has(key) ? this.items[key] : undefined
    }

    values = () => {
        let values = []
        for (let k in this.items) {
            if (this.hasOwnProperty(k)) {
                values.push(this.items[k])
            }
        }
        return values
    }

    clear = () => {
        this.items = {}
    }

    size = () => {
        return Object.keys(this.items).length
    }

    keys = () => {
        return Object.keys(this.items)
    }

    getItems = () => {
        return this.items
    }
    
    each = (fn) => {
        for (let k in this.items) {
            if (this.has(k)) {
                fn(k, this.items[k])
            }
        }
    }
}
