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

    selectionSort = () => {
        const length = this.array.length
        let indexMin
        for (let i = 0; i < length - 1; i++) {
            indexMin = i
            for (let j = i + 1; j < length; j++) {
                if (this.array[indexMin] > this.array[j]) {
                    indexMin = j
                }
            }
            if (i !== indexMin) {
                this.swap(i, indexMin)
            }
        }
    }

    insertionSort = () => {
        const length = this.array.length
        let j
        let temp
        for (let i = 1; i < length; i++) {
            j = i
            temp = this.array[i]
            while (j > 0 && this.array[j - 1] > temp) {
                this.array[j] = this.array[j - 1]
                j--
            }
            this.array[j] = temp
        }
    }
}
