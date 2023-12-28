function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    // recurse
    walk(curr.left, path);
    walk(curr.right, path);

    // pre
    path.push(curr.value); // visit node

    // recurse

    // post
    return path
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
