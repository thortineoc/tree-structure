class Node {
    constructor(value, leftChild = null, rightChild = null) {
        this.value = value; // number
        this.leftChild = leftChild; // ref to object
        this.rightChild = rightChild; // ref to object
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
            console.log("This node has already a left child");
        }
    }

    addRightChild(node) {
        if(!this.hasRightChild()) {
            this.rightChild  = node;
        } else {
            console.log("This node has already a right child");
        }
    }

    deleteLeftChild() {
        if(!this.hasLeftChild()) {
            console.log("This node do not have left child to delete");
        } else if(this.leftChild.hasLeftChild() || this.leftChild.hasRightChild()) {
            console.log("Cannot remove node with children")
        } else {
            console.log("Deleting left child");
            this.leftChild = null;
        }
    }

    deleteRightChild() {
        if(!this.hasRightChild()) {
            console.log("This node do not have right child to delete");
        } else if(this.Child.hasLeftChild() || this.leftChild.hasRightChild()) {
            console.log("Cannot remove node with children")
        } else {
            console.log("Deleting right child");
            this.rightChild = null;
        }
    }
}

module.exports = Node;

