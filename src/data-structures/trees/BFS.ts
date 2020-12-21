import { BinarySearchTree, TreeNode } from "./BinarySearchTree";

export function BFS(tree: BinarySearchTree): TreeNode[] {
    let node = tree.root, data: TreeNode[] = [], queue = [];
    queue.push(node);
    while(queue.length) {
        node = queue.shift();
        data.push(node);
        if (node?.left) {
            queue.push(node.left);
        }
        if (node?.right) {
            queue.push(node.right);
        }
    }
    return data;
} 