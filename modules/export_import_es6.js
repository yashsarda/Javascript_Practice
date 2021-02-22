export const PI = 3.14;
export function degreeToRadians(d) {
    return d * PI / 180;
}

export class Circle {
    constructor(r) {
        this.r = r;
    }

    area() {
        return this.r * this.r;
    }
}
// We could also export like this

export { PI, degreeToRadians, Circle };