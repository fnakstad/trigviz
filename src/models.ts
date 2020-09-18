export interface Vertex {
    x: number;
    y: number;
}

function compareVertices(v1: Vertex, v2: Vertex): boolean {
    return v1.x == v2.x && v1.y == v2.y;
}

export class Line {
    p1: Vertex;
    p2: Vertex;

    constructor(p1: Vertex, p2: Vertex) {
        this.p1 = p1;
        this.p2 = p2;
    }

    length(): number {
        return Math.sqrt(
            Math.pow(this.p1.x - this.p2.x, 2) + Math.pow(this.p1.y - this.p2.y, 2)
        );
    }

    vector(): Vertex {
        return {
            x: this.p2.x - this.p1.x,
            y: this.p2.y - this.p1.y,
        };
    }
}

export class Angle {
    radians: number;
    l1: Line;
    l2: Line;
    v: Vertex;

    constructor(l1: Line, l2: Line) {
        console.log(l1);
        console.log(l2);

        if (compareVertices(l1.p1, l2.p1) || compareVertices(l1.p1, l2.p2)) {
            this.v = l1.p1;
        } else if (compareVertices(l1.p2, l2.p1) || compareVertices(l1.p2, l2.p2)) {
            this.v = l1.p2;
        } else {
            throw new Error("the given lines do not have a common vertex");
        }

        this.l1 = l1;
        this.l2 = l2;

        // Find angle between the two lines
        // https://www.wikihow.com/Find-the-Angle-Between-Two-Vectors
        this.radians = Math.acos(
            (this.l1.vector().x * this.l2.vector().x + this.l1.vector().y * this.l2.vector().y) / (this.l1.length() * this.l2.length())
        );
    }
}