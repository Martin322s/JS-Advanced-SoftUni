class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        let pointOne = Math.abs(p1.x - p2.x);
        let pointTwo = Math.abs(p1.y - p2.y);
        
        return Math.sqrt(pointOne ** 2 + pointTwo ** 2);
    }
};