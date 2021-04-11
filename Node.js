class Node {
    #value;
    #leftChild;
    #rightChild;

    constructor(value, leftChild = null, rightChild = null) {
        this.#value = value;
        this.#leftChild = leftChild;
        this.#rightChild = rightChild;
    }

    value() {
        return this.#value;
    }

    leftChild() {
        return this.#leftChild;
    }
    
    rightChild() {
        return this.#rightChild;
    }

    hasLeftChild() {
        if(this.#leftChild) return true;
        return false;
    }
    
    hasRightChild() {
        if(this.#rightChild) return true;
        return false;
    }

    addLeftChild(node) {
        if(!this.hasLeftChild()) {
            this.#leftChild = node;
        } else {
            throw "This node has already a left child";
        }
    }

    addRightChild(node) {
        if(!this.hasRightChild()) {
            this.#rightChild  = node;
        } else {
            throw "This node has already a right child";
        }
    }

    deleteLeftChild() {
        if(!this.hasLeftChild()) {
            throw "This node do not have left child to delete";
        } else if(this.#leftChild.hasLeftChild() || this.#leftChild.hasRightChild()) {
            throw "Delete left child - cannot remove node with children";
        } else {
            this.#leftChild = null;
        }
    }

    deleteRightChild() {
        if(!this.hasRightChild()) {
            throw "This node do not have right child to delete";
        } else if(this.#rightChild.hasLeftChild() || this.#rightChild.hasRightChild()) {
            throw "Delete right child - cannot remove node with children";
        } else {
            this.#rightChild = null;
        }
    }
}

module.exports = Node;
