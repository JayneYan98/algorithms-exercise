class Node {
    constructor(element) {
        this.element = element
        this.next = null
        this.prev = null
    }

}

class DoublyLinkedList {

    length = 0
    head = null
    tail = null

    append = (element) => {

        let node = new Node(element)
        let current

        if (this.head === null) {
            this.head = node
            this.tail = node
        } else {

            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }

        this.length++
    }

    insert = (position, element) => {

        if (position >= 0 && position <= this.length) {
            let node = new Node(element)
            let current = this.head
            let previous
            let index = 0

            if (position === 0) {

                if (!this.head) {
                    this.head = node
                    this.tail = node
                } else {
                    node.next = current
                    current.prev = node
                    this.head = node
                }
            } else if (position === this.length) {

                current = this.tail
                current.next = node
                node.prev = current
                this.tail = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node

                current.prev = node
                node.prev = previous
            }

            this.length++

            return true

        } else {
            return false
        }
    }

    removeAt = (position) => {

        if (position > -1 && position < this.length) {

            let current = this.head
            let previous
            let index = 0

            if (position === 0) {

                this.head = current.next

                if (this.length === 1) {
                    this.tail = null
                } else {
                    this.head.prev = null
                }
            } else if (position === this.length - 1) {

                current = this.tail
                this.tail = current.prev
                this.tail.next = null

            } else {

                while (index++ < position) {
                    previous = current
                    current = current.next
                }

                previous.next = current.next
                current.next.prev = previous
            }

            this.length--

            return current.element
        } else {
            return null
        }
    }

    indexOf = (element) => {

        let current = this.head
        let index = -1

        if (element === current.element) {
            return 0
        }

        index++

        while (current.next) {

            if (element === current.element) {
                return index
            }

            current = current.next
            index++
        }

        if (element === current.element) {
            return index
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

    toString = () => {

        let current = this.head
        let s = current ? current.element : ''

        while (current && current.next) {
            current = current.next
            s += ', ' + current.element
        }

        return s
    }

    inverseToString = () => {

        let current = this.tail
        let s = current ? current.element : ''

        while (current && current.prev) {
            current = current.prev
            s += ', ' + current.element
        }

        return s
    }

    print = () => {
        console.log(this.toString())
    }

    printInverse = () => {
        console.log(this.inverseToString())
    }

    getHead = () => {
        return this.head
    }

    getTail = () => {
        return this.tail
    }
}
