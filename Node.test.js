const Node = require('./Node.js');

test('Creating one node with left child', () => {
    parentNode = new Node(5);
    leftChildNode = new Node(3);
    parentNode.addLeftChild(leftChildNode);
    expect(parentNode.hasLeftChild()).toBe(true);
    expect(parentNode.hasRightChild()).toBe(false);
})