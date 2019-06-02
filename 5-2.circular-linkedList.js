class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }

}

class CircularLinkedList {

    length = 0
    head = null

    append = (element) => {

        let node = new Node(element)
        let current

        if (this.head === null) {
            this.head = node
        } else {
            current = node

            while (current.next !== this.head) {
                current = current.next
            }

            current.next = node
        }

        node.next = this.head

        this.length++
    }

    insert = (position, element) => {

        if (position >= 0 && position <= this.length) {

            let node = new Node(element)
            let current = this.head
            let previous
            let index = 0

            if (position === 0) {

                node.next = current

                while (current.next !== this.head) {
                    current = current.next
                }

                this.head = node
                current.next = this.head

            } else {

                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node

                if (node.next === null) {
                    node.next = this.head
                }
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

                while (current.next !== this.head) {
                    current = current.next
                }

                this.head = this.head.next
                current.next = this.head

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

    indexOf = (element) => {

        let current = this.head
        let index = -1

        if (element === current.element) {
            return 0
        }

        index++

        while (current.next !== this.head) {

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
        let s = current.element

        while (current.next !== this.head) {
            current = current.next
            s += ', ' + current.element
        }

        return s.toString()
    }

    print = () => {
        console.log(this.toString())
    }
}
