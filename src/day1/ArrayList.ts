export default class ArrayList<T> {
    public length: number;
    private capacity: number;
    private arr: Array<T>;


    constructor(size: number) {
        this.length = 0;
        this.capacity = size;
        this.arr = Array<T>(this.capacity);
    }

    private grow(): void {
        this.capacity *= 2;

        const new_arr = Array<T>(this.capacity);
        for (let i = 0; i < this.length; i++) {
            new_arr[i] = this.arr[i];
        }
        this.arr = new_arr;
    }

    private indexOf(item: T): number {
        for (let i = 0; i < this.length; i++) {
            if (this.arr[i] == item) {
                return i;
            }
        }
        return -1;
    }

    insertAt(item: T, idx: number): void {
        if (this.length === this.capacity) {
            this.grow();
        }

        for (let i = this.length; i > idx; --i) {
            this.arr[i] = this.arr[i - 1];
        }
        this.arr[idx] = item;
        this.length++;
    }

    prepend(item: T): void {
        this.insertAt(item, 0);
    }

    append(item: T): void {
        this.insertAt(item, this.length);
    }

    get(idx: number): T | undefined {
        if (idx < this.length) {
            return this.arr[idx];
        }

        return undefined;
    }

    removeAt(idx: number): T | undefined {
        if (idx === -1) {
            return undefined;
        }

        const item = this.arr[idx];
        for (let j = idx; j < this.length - 1; j++) {
            this.arr[j] = this.arr[j + 1];
        }

        this.length--;
        return item;
    }

    remove(item: T): T | undefined {
        let idx = this.indexOf(item);
        return this.removeAt(idx);
    }
}
