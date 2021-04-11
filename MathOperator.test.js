const { test, expect } = require('@jest/globals');
const MathOperator = require('./MathOperator.js');
const Node = require('./Node.js');

test('Count sum of elements two direct children', () => {
    const operator = new MathOperator();
    const node1 = new Node(5);
    const node2 = new Node(3);
    const node3 = new Node(10);
    node1.addLeftChild(node2);
    node1.addRightChild(node3);
    const result = operator.subtreeSum(node1);
    expect(result).toBe(18);
});

test('Count sum of elements nested children from root', () => {
    const operator = new MathOperator();
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    node1.addLeftChild(node2);
    node1.addRightChild(node3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    node3.addLeftChild(node4);
    node3.addRightChild(node5);
    const node6 = new Node(6);
    node5.addRightChild(node6);
    const result = operator.subtreeSum(node1);
    expect(result).toBe(21);
});

test('Count sum of elements nested children from subtree', () => {
    const operator = new MathOperator();
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(6);
    const node7 = new Node(7);
    node1.addLeftChild(node2);
    node1.addRightChild(node3);
    node3.addLeftChild(node4);
    node4.addRightChild(node5);
    node3.addRightChild(node6);
    node6.addLeftChild(node7);
    const result = operator.subtreeSum(node3);
    expect(result).toBe(25);
});

test('Count average of elements from root', () => {
    const operator = new MathOperator();
    const node1 = new Node(10);
    const node2 = new Node(20);
    const node3 = new Node(13);
    const node4 = new Node(17);
    const node5 = new Node(1);
    node1.addLeftChild(node2);
    node1.addRightChild(node3);
    node2.addLeftChild(node4);
    node4.addLeftChild(node5);
    const result = operator.subtreeAverage(node1);
    expect(result).toBe(61/5);
});

test('Count average of elements from subtree', () => {
    const operator = new MathOperator();
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(6);
    const node7 = new Node(7);
    node1.addLeftChild(node2);
    node1.addRightChild(node3);
    node3.addLeftChild(node4);
    node4.addRightChild(node5);
    node3.addRightChild(node6);
    node6.addLeftChild(node7);
    const result = operator.subtreeAverage(node3);
    expect(result).toBe(5);
});

test('Count median of elements from root', () => {
    const operator = new MathOperator();
    const node1 = new Node(5);
    const node2 = new Node(1);
    const node3 = new Node(2, node1, node2);
    const result = operator.subtreeMedian(node3);
    expect(result).toBe(2);
});

test('Count median of elements nested children from subtree - odd amount', () => {
    const operator = new MathOperator();
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(6);
    const node7 = new Node(7);
    node1.addLeftChild(node2);
    node1.addRightChild(node3);
    node3.addLeftChild(node4);
    node4.addRightChild(node5);
    node3.addRightChild(node6);
    node6.addLeftChild(node7);
    const result = operator.subtreeMedian(node3);
    expect(result).toBe(5);
});

test('Count median of elements nested children from subtree - even amount', () => {
    const operator = new MathOperator();
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(6);
    const node7 = new Node(7);
    node1.addLeftChild(node2);
    node1.addRightChild(node3);
    node3.addLeftChild(node4);
    node4.addRightChild(node5);
    node3.addRightChild(node6);
    node6.addLeftChild(node7);
    const result = operator.subtreeMedian(node4);
    expect(result).toBe(4.5);
});
