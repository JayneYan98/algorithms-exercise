class ArrayList {
    array = []

    insert = (item) => {
        this.array.push(item)
    }

    swap = (index1, index2) => {
        let aux = this.array[index1]
        this.array[index1] = this.array[index2]
        this.array[index2] = aux
    }

    toString = () => {
        return this.array.join()
    }

    bubbleSort = () => {
        let flag = true
        for (let i = 0; i < this.array.length - 1; i++) {
            for (let j = 0; j < this.array.length - 1 - i; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    this.swap(j, j + 1)
                    flag = false
                }
            }
            if (flag) break
        }
    }
}
