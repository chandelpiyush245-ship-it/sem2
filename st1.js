function reverseNumber() {
    let num = document.getElementById("num").value;

    if (num === "") {
        document.getElementById("output").innerHTML = "Please enter a number!";
        return;
    }

    let reversed = num.toString().split('').reverse().join('');

    document.getElementById("output").innerHTML =
        "Original Number: " + num + "<br>Reversed Number: " + reversed;

    console.log("Original:", num);
    console.log("Reversed:", reversed);
}