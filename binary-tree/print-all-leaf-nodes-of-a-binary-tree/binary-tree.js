class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BT {
    constructor() {
        this.root = null;
    }
    //add data to nodes
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }
    getRootNode() {
        return this.root;
    }

    //print leaf
    printLeafNodes(node) {
        if (node != null) {
            this.printLeafNodes(node.left);
            if (node.left == null && node.right == null) {
                console.log(node.data);
            }
            this.printLeafNodes(node.right);
        }
    }
}

//write a program to print all leaf node of a binary tree where depth is greater than 10
const binaryTree = () => {
    const bt = new BT();
    const nodeData = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
    for (let i = 0; i < nodeData.length; i++) {
        bt.add(nodeData[i]);
    }
    const root = bt.getRootNode();
    bt.printLeafNodes(root);
}
module.exports = binaryTree;