export default function two_crystal_balls(breaks: boolean[]): number {
    const jmp_amt = Math.floor(Math.sqrt(breaks.length));

    let i = jmp_amt;
    for (; i < breaks.length; i += jmp_amt) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jmp_amt;

    for (let j = 0; j < jmp_amt && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
