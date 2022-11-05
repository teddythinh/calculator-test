const input1 = document.getElementById("fnum");
const input2 = document.getElementById("snum");

function checkInput() {
    if (isNaN(input1.value)) {
        document.getElementById("noti2").innerHTML =
            "Giá trị nhập ở ô Số thứ nhất không phải là số!";
    } else if (isNaN(input2.value)) {
        document.getElementById("noti2").innerHTML =
            "Giá trị nhập ở ô Số thứ hai không phải là số!";
    }
    else if (isNaN(input1.value) && isNaN(input2.value)) {
        document.getElementById("noti2").innerHTML =
            "Giá trị nhập ở cả 2 ô không phải là số!";
    } else if (input1.value == "" || input2.value == "") {
        document.getElementById("noti2").innerHTML = "Vui lòng nhập số!";
    } else if (
        document.getElementById("plus").checked == false &&
        document.getElementById("minus").checked == false &&
        document.getElementById("multiply").checked == false &&
        document.getElementById("divide").checked == false
    ) {
        document.getElementById("noti2").innerHTML = "Vui lòng chọn phép tính!";
    } else {
        document.getElementById("noti2").innerHTML = "";
    }
}
const output = document.querySelector("output[name=x]");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (plus.checked) {
        output.value = Number(input1.value) + Number(input2.value);
    } else if (minus.checked) {
        output.value = Number(input1.value) - Number(input2.value);
    } else if (multiply.checked) {
        output.value = Number(input1.value) * Number(input2.value);
    } else if (divide.checked) {
        output.value = Number(input1.value) / Number(input2.value);
    }
});
