class LinkedList {
    length = 0
    head = null

    append = (element) => {
        let node = new Node(element)
        let current

        if (this.head === null) {
            this.head = node
        } else {
            current = head

            while (current.next) {
                current = current.next
            }

            current.next = node

        }

        this.length++

    }

    removeAt = (position) => {

        if (position > -1 && position < this.length) {
            let current = this.head
            let previous
            let index = 0

            if (position === 0) {
                this.head = current.next
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }

                previous.next = current.next
            }

            this.length--

            return current.element
        } else {
            return null
        }
    }

    insert = (position, element) => {

        if (position >= 0 && position <= this.length) {

            let node = new Node(element)
            let current = this.head
            let previous
            let index = 0

            if (position === 0) {

                node.next = current
                this.head = node

            } else {

                while (index++ < position) {
                    previous = current
                    current = current.next
                }

                node.next = current
                previous.next = node
            }

            this.length++

            return true
        } else {
            return false
        }
    }

    toString = () => {
        let current = this.head
        let string = ''

        while (current) {
            string += ',' + current.element
            current = current.next
        }

        return string.slice(1)
    }

    indexOf = (element) => {

        let current = this.head
        let index = 0

        while (current) {
            if (element === current.element) {
                return index
            }

            index++
            current = current.next
        }

        return -1
    }

    remove = (element) => {
        let index = this.indexOf(element)

        return this.removeAt(index)
    }

    isEmpty = () => {
        return this.length === 0
    }

    size = () => {
        return this.length
    }

    getHead = () => {
        return this.head
    }
}
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }

}
