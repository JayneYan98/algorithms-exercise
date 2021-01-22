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

    mergeSort = () => {
        this.array = this.mergeSortRec(this.array)
    }
    mergeSortRec = (array) => {
        let length = array.length
        if (length === 1) {
            return array
        }
        let mid = Math.floor(length / 2)
        let left = array.slice(0, mid)
        let right = array.slice(mid, length)

        return this.merge(this.mergeSortRec(left), this.mergeSortRec(right))
    }
    merge = (left, right) => {
        let result = []
        let il = 0
        let ir = 0

        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++])
            } else {
                result.push(right[ir++])
            }
        }

        while (il < left.length) {
            result.push(left[il++])
        }

        while (ir < right.length) {
            result.push(right[ir++])
        }

        return result
    }
}
