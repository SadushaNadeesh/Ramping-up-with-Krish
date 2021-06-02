class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class binarySearchTree {
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

    //pre order traversal
    preOrder() {
        if (this.root == null) {
            return null;
        } else {
            var result = new Array();
            function traversePreOrder(node) {
                result.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);
            };
            traversePreOrder(this.root);
            return result;
        };
    }

}

//write a program to demonstrate pre order traversal.
const binaryTree = () => {
    const binarysearchtree = new binarySearchTree();
    const nodeData = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
    for (let i = 0; i < nodeData.length; i++) {
        binarysearchtree.add(nodeData[i]);
    }

    console.log("pre-order-traversal: " + binarysearchtree.preOrder());
}

module.exports = binaryTree;