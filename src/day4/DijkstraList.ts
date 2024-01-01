function hasUnvisited(seen: boolean[], distances: number[]): boolean {
    return seen.some((s, i) => !s && distances[i] < Infinity)
}

function getLowestUnvisited(seen: boolean[], distances: number[]): number {
    let idx = -1;
    let lowestDistance = Infinity;

    for (let i = 0; i < seen.length; ++i) {
        if (seen[i]) {
            continue;
        }

        if (lowestDistance > distances[i]) {
            lowestDistance = distances[i];
            idx = i;
        }
    }

    return idx;
}

export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList): number[] {

    const seen: boolean[] = new Array(arr.length).fill(false);
    const prev: number[] = new Array(arr.length).fill(-1);
    const distances: number[] = new Array(arr.length).fill(Infinity);

    distances[source] = 0;

    while (hasUnvisited(seen, distances)) {

        const curr = getLowestUnvisited(seen, distances);
        seen[curr] = true;

        const adjs = arr[curr];
        for (let i = 0; i < adjs.length; ++i) {

            const edge = adjs[i];
            if (seen[edge.to]) {
                continue;
            }

            const dist = distances[curr] + edge.weight;
            if (dist < distances[edge.to]) {
                distances[edge.to] = dist;
                prev[edge.to] = curr;
            }
        }
    }

    const out: number[] = [];
    let curr = sink;

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return [source].concat(out.reverse());
}
