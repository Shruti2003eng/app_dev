// Function to calculate the area of a triangle
function triArea(base, height) {
    let area = 0.5 * base * height;
    return area;
}
let base = 5;
let height = 8;
let area = triArea(base, height);
console.log("The area of the triangle  is:"+ area);