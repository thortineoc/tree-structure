class Node {
    constructor(value, leftChild = null, rightChild = null) {
        this.value = value; // number
        this.leftChild = leftChild; // object
        this.rightChild = rightChild; // object
    }

    hasLeftChild() {
        if(this.leftChild) return true;
        return false;
    }
    
    hasRightChild() {
        if(this.rightChild) return true;
        return false;
    }

    addLeftChild(node) {
        if(!this.hasLeftChild()) {
            this.leftChild  = node;
        } else {
            console.log("This node has a left child");
        }
    }

    addRightChild(node) {
        if(!this.hasRightChild()) {
            this.rightChild  = node;
        } else {
            console.log("This node has a right child");
        }
    }

    deleteLeftChild() {
        if(!this.hasLeftChild()) {
            console.log("This node do not have left child to delete");
        } else if(this.leftChild.hasLeftChild() || this.leftChild.hasRightChild()) {
            console.log("Cannot remove node with children")
        } else {
            console.log("Deleting");
            this.leftChild = null;
        }
    }

    deleteRightChild() {
        if(!this.hasRightChild()) {
            console.log("This node do not have right child to delete");
        } else if(this.Child.hasLeftChild() || this.leftChild.hasRightChild()) {
            console.log("Cannot remove node with children")
        } else {
            this.rightChild = null;
        }
    }
}

const firstNode = new Node(5);
const secondNode = new Node(3);
const thirdNode = new Node(7);

firstNode.addLeftChild(secondNode);
secondNode.addLeftChild(thirdNode);
console.log(firstNode.hasLeftChild());
console.log(firstNode.hasRightChild());
console.log(secondNode.hasLeftChild());
firstNode.deleteRightChild();
firstNode.deleteLeftChild();
console.log(secondNode.leftChild.value);
secondNode.deleteLeftChild();
console.log(secondNode.leftChild.value);
