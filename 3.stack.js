class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    clear() {
        this.items = []
    }

    print() {
        console.log(String(this.items))
    }
}


let divideBy2 = (decNumber, base) => {
    let remStack = new Stack(),
        rem,
        binaryString = ''

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base)
        remStack.push(rem)
        decNumber = Math.floor(decNumber / base)
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString()
    }

    return binaryString
}

console.log(divideBy2(98, 2))
