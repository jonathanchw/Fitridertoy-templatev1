// For Filters
document.addEventListener("DOMContentLoaded", function() {


// For Range Sliders
var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

var amountLeft = document.getElementById('amount-left')
var amountRight = document.getElementById('amount-right')

function setLeftValue() {
var _this = inputLeft,
min = parseInt(_this.min),
max = parseInt(_this.max);

_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

var percent = ((_this.value - min) / (max - min)) * 100;

thumbLeft.style.left = percent + "%";
range.style.left = percent + "%";
amountLeft.innerText = parseInt(percent * 100);
}
setLeftValue();

function setRightValue() {
var _this = inputRight,
min = parseInt(_this.min),
max = parseInt(_this.max);

_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

var percent = ((_this.value - min) / (max - min)) * 100;

amountRight.innerText = parseInt(percent * 100);
thumbRight.style.right = (100 - percent) + "%";
range.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

});