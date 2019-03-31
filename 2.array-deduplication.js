export default (arr = [1, 2, 3, 4, 4, 5, 4]) => {
    let arr2 = [];
    arr2[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let flag = false;
        for (let j = 0; j < arr2.length; j++) {
            if (arr[i] === arr2[j]) {
                flag = true;
            }
        }
        if (!flag) {
            arr2.push(arr[i]);
        }
    }
    return arr2
}
