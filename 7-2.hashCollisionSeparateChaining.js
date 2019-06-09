import LinkedList from './5.linkedList'
class HashTableSeparateChaining {
    table = []

    static loseloseHashCode = (key) => {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }

    static hashCode = (key) => {
        return HashTableSeparateChaining.loseloseHashCode(key)
    }

    put = (key, value) => {
        let position = HashTableSeparateChaining.hashCode(key)
        console.log(`${position} - ${key}`)

        if (this.table[position] === undefined) {
            this.table[position] = new LinkedList()
        }

        this.table[position].append(new ValuePair(key, value))
    }

    get = (key) => {
        let position = HashTableSeparateChaining.hashCode(key)

        if (this.table[position] !== undefined && !this.table[position].isEmpty()) {

            let current = this.table[position].getHead()

            while (current.next) {
                if (current.element.key) {
                    return current.element.value
                }
                current = current.next
            }

            if (current.element.key === key) {
                return current.element.value
            }
        }
        return undefined
    }

    remove = (key) => {

        let position = HashTableSeparateChaining.hashCode(key)

        if (this.table[position] !== undefined) {

            let current = this.table[position].getHead()

            while (current.next) {
                if (current.element.key === key) {
                    this.table[position].remove(current.element)

                    if (this.table[position].isEmpty()) {
                        this.table[position] = undefined
                    }
                    return true

                }
                current = current.next
            }

            if (current.element.key === key) {
                this.table[position].remove(current.element)
                if (this.table[position].isEmpty()) {
                    this.table[position] = undefined
                }
                return true
            }
        }

        return false
    }
}

class ValuePair {
    constructor(key, value) {
        this.key = key
        this.value = value
    }

    toString = () => {
        return `[ ${this.key} - ${this.value} ]`
    }

}
