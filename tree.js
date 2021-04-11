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
//secondNode.deleteLeftChild();

class MathOperator {
    constructor() {
        this.nodesValues = [];
    }

    subtreeSearch(node) {
        if(node.hasLeftChild()) {
            this.subtreeSearch(node.leftChild);
        }
        this.nodesValues.push(node.value);
        if(node.hasRightChild()) {
            this.subtreeSearch(node.rightChild);
        }
    }

    clearArray() {
        this.nodesValues = [];
    }

    getNumberOfElements() {
        return this.nodesValues.length;
    }

    getSumOfElements() {
        return this.nodesValues.reduce((sum, val) => sum += val);
    }

    countAverage(sum, amount) {
        return sum/amount;
    }

    subtreeSum(node) {
        this.subtreeSearch(node);
        let sum = this.getSumOfElements();
        this.clearArray();
        return sum;
    }

    subtreeAverage(node) {
        this.subtreeSearch(node);
        let sum = this.getSumOfElements();
        let amount = this.getNumberOfElements();
        this.clearArray();
        return this.countAverage(sum, amount);
    }

    subtreeMedian(node) {
        this.subtreeSearch(node);
        const sorted = this.nodesValues.sort();
        this.printArray(sorted)
        let amount = this.getNumberOfElements();
        let half = Math.floor(amount / 2);
        let median = (!amount % 2) ? (
            this.countAverage(sorted[half - 1] + sorted[half], 2)
        ) : (
            sorted[half]
        );
        this.clearArray();
        return median;
    }
}

let operator = new MathOperator;
console.log(operator.subtreeSum(firstNode));
console.log(operator.subtreeAverage(firstNode));
console.log(operator.subtreeMedian(firstNode));
