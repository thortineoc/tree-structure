const Node = require('./Node.js');

test('Creating one node with left child', () => {
    parentNode = new Node(5);
    leftChildNode = new Node(3);
    parentNode.addLeftChild(leftChildNode);
    expect(parentNode.hasLeftChild()).toBe(true);
    expect(parentNode.hasRightChild()).toBe(false);
})

test('Creating one node with right child', () => {
    parentNode = new Node(2);
    rightChildNode = new Node(3);
    parentNode.addRightChild(rightChildNode);
    expect(parentNode.hasLeftChild()).toBe(false);
    expect(parentNode.hasRightChild()).toBe(true);
})

test('Creating one node with two child and checking their values', () => {
    parentNode = new Node(2);
    leftChildNode = new Node(1);
    rightChildNode = new Node(5);
    parentNode.addLeftChild(leftChildNode);
    parentNode.addRightChild(rightChildNode);
    expect(parentNode.value).toBe(2);
    expect(parentNode.hasLeftChild()).toBe(true);
    expect(parentNode.leftChild.value).toBe(1);
    expect(parentNode.hasRightChild()).toBe(true);
    expect(parentNode.rightChild.value).toBe(5);
})

test('Creating left child chain', () => {
    parentNode = new Node(5);
    leftChildNode = new Node(3);
    leftGrandchildNode = new Node(2);
    parentNode.addLeftChild(leftChildNode);
    leftChildNode.addLeftChild(leftGrandchildNode);
    expect(parentNode.hasLeftChild()).toBe(true);
    expect(parentNode.hasRightChild()).toBe(false);
    expect(leftChildNode.hasLeftChild()).toBe(true);
    expect(leftChildNode.hasRightChild()).toBe(false);
    expect(leftGrandchildNode.hasLeftChild()).toBe(false);
    expect(leftGrandchildNode.hasRightChild()).toBe(false);
    expect(parentNode.leftChild.value).toBe(3);
    expect(leftChildNode.leftChild.value).toBe(2);
})

test('Trying to add left child to node that already has a child', () => {
    parentNode = new Node(128);
    childNode = new Node(64);
    parentNode.addLeftChild(childNode);
    expect(() => parentNode.addLeftChild()).toThrow('This node has already a left child');
})

test('Trying to add right child to node that already has a child', () => {
    parentNode = new Node(128);
    childNode = new Node(64);
    parentNode.addRightChild(childNode);
    expect(() => parentNode.addRightChild()).toThrow('This node has already a right child');
})

test('Deleting left child node when possible', () => {
    parentNode = new Node(12);
    leftChildNode = new Node(3);
    parentNode.addLeftChild(leftChildNode);
    expect(parentNode.hasLeftChild()).toBe(true);
    expect(parentNode.leftChild.value).toBe(3);
    parentNode.deleteLeftChild();
    expect(parentNode.hasLeftChild()).toBe(false);
})

test('Trying to delete left child node when there is no child', () => {
    parentNode = new Node(2);
    expect(() => parentNode.deleteLeftChild()).toThrow('This node do not have left child to delete');
})

test('Trying to delete left child node when it has child', () => {
    leftGrandchild = new Node(42);
    parentNode = new Node(82);
    childNode = new Node(12, leftGrandchild);
    parentNode.addLeftChild(childNode);
    expect(() => parentNode.deleteLeftChild()).toThrow('Delete left child - cannot remove node with children');
})

test('Deleting right child node when possible', () => {
    parentNode = new Node(2);
    rightChildNode = new Node(3);
    parentNode.addRightChild(rightChildNode);
    expect(parentNode.hasRightChild()).toBe(true);
    expect(parentNode.rightChild.value).toBe(3);
    parentNode.deleteRightChild();
    expect(parentNode.hasRightChild()).toBe(false);
})

test('Trying to delete right child node when there is no child', () => {
    parentNode = new Node(2);
    expect(() => parentNode.deleteRightChild()).toThrow('This node do not have right child to delete');
})

test('Trying to delete right child node when it has child', () => {
    leftGrandchild = new Node(5);
    rightGrandchild = new Node(15);
    parentNode = new Node(2);
    childNode = new Node(7, leftGrandchild, rightGrandchild);
    parentNode.addRightChild(childNode);
    expect(() => parentNode.deleteRightChild()).toThrow('Delete right child - cannot remove node with children');
})
