function solve() {

    let result = '';

    return {
        append(string) {
            result += string;
        },
        removeStart(n) {
            result = result.substring(n);
        },
        removeEnd(num) {
            result = result.substring(0, result.length - num);
        },
        print() {
            console.log(result);
        }
    }
}
solve();