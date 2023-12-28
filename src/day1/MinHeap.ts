export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);

        return out;
    }

    private swap(idx1: number, idx2: number): void {
        const tmp = this.data[idx1];
        this.data[idx1] = this.data[idx2];
        this.data[idx2] = tmp;
    }

    private heapifyDown(idx: number): void {
        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);

        if (lIdx >= this.length || idx >= this.length) {
            return;
        }

        const lValue = this.data[lIdx];
        const rValue = this.data[rIdx];
        const value = this.data[idx];

        if (lValue > rValue && value > rValue) {
            this.swap(idx, rIdx);
            this.heapifyDown(rIdx);
        }

        if (rValue > lValue && value > lValue) {
            this.swap(idx, lIdx);
            this.heapifyDown(lIdx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const pIdx = this.parent(idx);
        const pValue = this.data[pIdx];
        const value = this.data[idx];

        if (pValue > value) {
            this.swap(pIdx, idx)
            this.heapifyUp(pIdx);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return 2 * idx + 1;
    }

    private rightChild(idx: number): number {
        return 2 * idx + 2;
    }
}
