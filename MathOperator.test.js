const MathOperator = require('./MathOperator.js');
const Node = require('./Node.js');

test('Count sum of elements', () => {
    const operator = new MathOperator;
    const node1 = new Node(5);
    const node2 = new Node(3);
    const node3 = new Node(10);
    node1.addLeftChild(node2);
    node1.addRightChild(node3);
    const result = operator.subtreeSum(node1);
    expect(result).toBe(18);
}) 