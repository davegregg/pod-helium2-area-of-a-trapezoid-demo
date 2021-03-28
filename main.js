let username = prompt("What should I call you?", "Jin Sakai")

let side1Input = prompt("Enter the length of side 1:")
let side1 = parseFloat(side1Input) // parseInt but for decimals!

let side2Input = prompt("Enter the length of side 2:")
let side2 = parseFloat(side2Input)

let heightInput = prompt("Enter the height:")
let height = parseFloat(heightInput)

let sumOfSides = side1 + side2 // "5" + "7" === 57
let averageOfSides = sumOfSides / 2
let area = averageOfSides * height
// easier to comprehend, more detailed
// better for mixed teams where someone might not
// know how to calculate the area of a trapezoid

// let areaV2 = (side1 + side2) / 2 * height
// shorter and "cleaner"

console.log(username)
document.write("<p>" + area + "</p>")

let message = `<p>Greetings, ` + username + `! Quisquam est tempora perferendis cupiditate. Et animi est ea quidem nihil sunt esse sit. Ut occaecati architecto et.</p>
    
<p>Ea ut non aut dolores quo itaque. Accusamus tempora magnam sed. Adipisci optio impedit facere praesentium voluptates quisquam. Voluptatem hic exercitationem cupiditate qui est quo assumenda. Omnis maxime odio facere.</p>

<h3>Area of Trapezoid: ` + area + `</h3>

<p>Pariatur aut veniam voluptatem ut illum tempora fuga. Molestiae numquam animi fugit. Debitis quas reprehenderit enim consequatur nesciunt eius odit. Commodi vel sunt aliquam velit eius. Velit temporibus culpa dolor ratione minima voluptatem veniam. Esse libero et soluta eveniet.</p>`

document.write(message)