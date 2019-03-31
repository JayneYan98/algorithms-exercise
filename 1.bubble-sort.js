export default (arr = [2, 4, 5, 1, 9, 8]) => {
    let temp;
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        count++;
        let flag = true;
        for (j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                flag = false;
            }
        }
        if (flag) break;
    }
}
