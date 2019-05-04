import Queue from './4.queue.js'

const hotPotato = (nameList, num) => {
    let queue = new Queue()

    nameList.forEach(name => {
        queue.enqueue(name)
    })

    let eliminated = ''
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue()
        console.log(eliminated + '在击鼓传花游戏中被淘汰。')
    }

    return queue.dequeue()
}

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
let winner = hotPotato(names, 7)
console.log('胜利者：' + winner)
