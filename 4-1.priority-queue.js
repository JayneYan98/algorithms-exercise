class PriorityQueue {
    constructor() {
        this.items = []
    }

    enqueue(element, priority) {
        let queueElement = new QueueElement(element, priority)

        if (this.isEmpty()) {
            this.items.push(queueElement)
        } else {
            let added = false
            for (let i = 0; i < this.items.length; i++) {
                if (queueElement.priority < this.items[i].priority) {
                    this.items.splice(i, 0, queueElement)
                    added = true
                    break
                }
            }
            if (!added) {
                this.items.push(queueElement)
            }
        }
    }

    dequeue() {
        return this.items.shift()
    }

    front() {
        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0
    }

    clear() {
        this.items = []
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString())
    }
}

class QueueElement {
    constructor(element, priority) {
        this.element = element
        this.priority = priority
    }
}
