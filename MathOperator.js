const Node = require('./Node.js');

class MathOperator {
    #nodesValues;

    constructor() {
        this.#nodesValues = [];
    }

    #subtreeSearch(node) {
        if(node.hasLeftChild()) {
            this.#subtreeSearch(node.leftChild());
        }
        this.#nodesValues.push(node.value());
        if(node.hasRightChild()) {
            this.#subtreeSearch(node.rightChild());
        }
    }

    #clearArray() {
        this.#nodesValues = [];
    }

    #getNumberOfElements() {
        return this.#nodesValues.length;
    }

    #getSumOfElements() {
        return this.#nodesValues.reduce((sum, val) => sum += val);
    }

    #countAverage(sum, amount) {
        return sum/amount;
    }

    subtreeSum(node) {
        this.#subtreeSearch(node);
        let sum = this.#getSumOfElements();
        this.#clearArray();
        return sum;
    }

    subtreeAverage(node) {
        this.#subtreeSearch(node);
        let sum = this.#getSumOfElements();
        let amount = this.#getNumberOfElements();
        this.#clearArray();
        return this.#countAverage(sum, amount);
    }

    subtreeMedian(node) {
        this.#subtreeSearch(node);
        this.#nodesValues = this.#nodesValues.sort((x, y) => x - y);
        let amount = this.#getNumberOfElements();
        let half = Math.floor(amount / 2);
        let median = (!(amount % 2)) ? (
            this.#countAverage(this.#nodesValues[half - 1] + this.#nodesValues[half], 2)
        ) : (
            this.#nodesValues[half]
        );
        this.#clearArray();
        return median;
    }
}

module.exports = MathOperator;