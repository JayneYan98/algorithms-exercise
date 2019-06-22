class BinarySearchTree {

    root = null

    insert = (key) => {

        let newNode = new Node(key)

        if (this.root === null) {
            this.root = newNode
        } else {
            BinarySearchTree.insertNode(this.root, newNode)
        }
    }
    static insertNode = (node, newNode) => {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                BinarySearchTree.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                BinarySearchTree.insertNode(node.right, newNode)
            }
        }
    }

    getRoot = () => {
        return this.root
    }

    inOrderTraverse = (callback) => {
        BinarySearchTree.inOrderTraverseNode(this.root, callback)
    }
    static inOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            BinarySearchTree.inOrderTraverseNode(node.left, callback)
            callback(node.key)
            BinarySearchTree.inOrderTraverseNode(node.right, callback)
        }
    }

    preOrderTraverse = (callback) => {
        BinarySearchTree.preOrderTraverseNode(this.root, callback)
    }
    static preOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            callback(node.key)
            BinarySearchTree.preOrderTraverseNode(node.left, callback)
            BinarySearchTree.preOrderTraverseNode(node.right, callback)
        }
    }

    postOrderTraverse = (callback) => {
        BinarySearchTree.postOrderTraverseNode(this.root, callback)
    }
    static postOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            BinarySearchTree.postOrderTraverseNode(node.left, callback)
            BinarySearchTree.postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }

    min = () => {
        return BinarySearchTree.minNode(this.root)
    }
    static minNode = (node) => {
        if (node) {
            while (node && node.left !== null) {
                node = node.left
            }

            return node
        }
        return null
    }

    max = () => {
        return BinarySearchTree.maxNode(this.root)
    }
    static maxNode = (node) => {
        if (node) {
            while (node && node.right !== null) {
                node = node.right
            }

            return node
        }

        return null
    }

    search = (key) => {
        return BinarySearchTree.searchNode(this.root, key)
    }
    static searchNode = (node, key) => {

        if (node === null) {
            return false
        }

        if (key < node.key) {
            return BinarySearchTree.searchNode(node.left, key)
        } else if (key > node.key) {
            return BinarySearchTree.searchNode(node.right, left)
        } else {
            return true
        }
    }

    remove = (key) => {
        this.root = BinarySearchTree.removeNode(this.root, key)
    }
    static findMinNode = (node) => {
        while (node && node.left !== null) {
            node = node.left
        }

        return node
    }
    static removeNode = (node, key) => {

        if (node === null) {
            return null
        }

        if (key < node.key) {
            node.left = BinarySearchTree.removeNode(node.left, key)
            return node
        } else if (key > node.key) {
            node.right = BinarySearchTree.removeNode(node.right, key)
            return node
        } else {

            if (node.left === null && node.right === null) {
                node = null
                return node
            }

            if (node.left === null) {
                node = node.right
                return node
            }

            let aux = BinarySearchTree.findMinNode(node.right)
            node.key = aux.key
            node.right = BinarySearchTree.removeNode(node.right, aux.key)
            return node
        }
    }
}

class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }

}
