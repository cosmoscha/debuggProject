function inOrderArray(root) { // uncomment me!

    if (!root) return []

    let leftArr = []
    let rightArr = []

    leftArr.push(...inOrderArray(root.left));
    rightArr.push(...inOrderArray(root.right));


    return [...leftArr, root.val, ...rightArr];
}




function postOrderArray(root) { // uncomment me!
    if (!root) return []

    let leftArr = [d]
    let rightArr = [e]

    leftArr.push(...postOrderArray(root.left))
    rightArr.push(...postOrderArray(root.right))

    console.log('this is push', [...leftArr, ...rightArr, root.val])

    // this is push['d']
    // this is push['e']
    // this is push['d', 'e', 'b']
    // this is push['f']
    // this is push['f', 'c']
    // this is push['d', 'e', 'b', 'f', 'c', 'a']

    // leftArr.unshift(...postOrderArray(root.left))
    // rightArr.unshift(...postOrderArray(root.right))

    // console.log('this is unshift', [...leftArr, ...rightArr, root.val])

    // // this is unshift['d']
    // // this is unshift['e']
    // // this is unshift['d', 'e', 'b']
    // // this is unshift['f']
    // // this is unshift['f', 'c']
    // // this is unshift['d', 'e', 'b', 'f', 'c', 'a']

    return [...leftArr, ...rightArr, root.val]


    let test = postOrderArray(root.left).concat(postOrderArray(root.right)).concat(root.val)

    console.log(test)

    return test
}

// examples

const { TreeNode } = require('./tree_node.js');

let root = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');

root.left = b;
root.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(inOrderArray(root)); // should equal ['d', 'b', 'e', 'a', 'c', 'f']
console.log(postOrderArray(root)); // should equal ['d', 'e', 'b', 'f', 'c', 'a']

module.exports = {
    inOrderArray,
    postOrderArray
};
