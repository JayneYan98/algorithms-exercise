import Queue from "./4.queue";

class Graph {
    vertices = []

    adjList = new Dictionary()

    addVertex = (v) => {
        this.vertices.push(v)
        this.adjList.set(v, [])
    }

    addEdge = (v, w) => {
        this.adjList.get(v).push(w)
    }

    toString = () => {
        let s = ''
        for (let i = 0; i < this.vertices.length; i++) {
            s += this.vertices[i] + ' -> '
            let neighbors = this.adjList.get(this.vertices[i])
            for (let j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' '
            }
            s += '\n'
        }
        return s
    }

    initializeColor = () => {
        let color = []
        for (let i = 0; i < this.vertices.length; i++) {
            color[this.vertices[i]] = 'color'
        }
        return color
    }

    bfs = (v, callback) => {
        let color = this.initializeColor()
        let queue = new Queue()
        queue.enqueue(v)

        while (!queue.isEmpty()) {
            let u = queue.dequeue()
            let neighbors = this.adjList.get(u)
            color[u] = 'grey'
            for (let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i]
                if (color[w] === 'white') {
                    color[w] = 'grey'
                    queue.enqueue(w)
                }
            }
            color[u] = 'black'
            if (callback) {
                callback(u)
            }
        }
    }

    BFS = (v) => {
        let color = this.initializeColor()
        let queue = new Queue()
        let d = []
        let pred = []
        queue.enqueue(v)

        for (let i = 0; i < this.vertices.length; i++) {
            d[this.vertices[i]] = 0
            pred[this.vertices[i]] = null
        }

        while (!queue.isEmpty()) {
            let u = queue.dequeue()
            let neighbors = this.adjList.get(u)
            color[u] = 'grey'
            for (let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i]
                if (color[w] === 'white') {
                    color[w] = 'grey'
                    d[w] = d[u] + 1
                    pred[w] = u
                    queue.enqueue(w)
                }
            }
            color[u] = 'black'
        }

        return {
            distances: d,
            predecessors: pred
        }
    }

    dfs = (callback) => {
        let color = this.initializeColor()

        for (let i = 0; i < this.vertices.length; i++) {
            if (color[this.vertices[i]] === 'white') {
                this.dfsVisit(this.vertices[i], color, callback)
            }
        }
    }

    dfsVisit = (u, color, callback) => {
        color[u] = 'grey'
        if (callback) {
            callback(u)
        }
        let neighbors = this.adjList.get(u)
        for (let i = 0; i < neighbors.length; i++) {
            let w = neighbors[i]
            if (color[w] === 'white') {
                this.dfsVisit(w, color, callback)
            }
        }
        color[u] = 'black'
    }

    time = 0
    DFS = () => {
        let color = this.initializeColor()
        let d = []
        let f = []
        let p = []
        this.time = 0

        for (let i = 0; i < this.vertices.length; i++) {
            if (color[this.vertices[i]] === 'white') {
                this.DFSVisit(this.vertices[i], color, d, f, p)
            }
        }

        return {
            discovery: d,
            finished: f,
            predecessors: p
        }
    }

    DFSVisit = (u, color, d, f, p) => {
        color[u] = 'grey'
        d[u] = ++this.time
        let neighbors = this.adjList.get(u)
        for (let i = 0; i < neighbors.length; i++) {
            let w = neighbors[i]
            if (color[w] === 'white') {
                p[w] = u
                this.DFSVisit(w, color, d, f, p)
            }
        }
        color[u] = 'black'
        f[u] = ++this.time
    }
}
