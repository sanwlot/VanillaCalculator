import "./style.css"
import { operate } from "./utilities.js"

document.querySelector("#app").innerHTML = `
  <div class="appContainer">
    <h1>Calculator</h1>
    <input placeholder="0"/>
    <div class="buttons">
      <div class="row">
        <button class="number" data-value=1>1</button>
        <button class="number" data-value=2>2</button>
        <button class="number" data-value=3>3</button>
        <button class="operator" data-value="/">/</button>
      </div>
      <div class="row">
        <button class="number" data-value=4>4</button>
        <button class="number" data-value=5>5</button>
        <button class="number" data-value=6>6</button>
        <button class="operator" data-value="*">X</button>
      </div>
      <div class="row">
        <button class="number" data-value=7>7</button>
        <button class="number" data-value=8>8</button>
        <button class="number" data-value=9>9</button>
        <button class="operator" data-value="-">-</button>
      </div>
      <div class="row">
        <button class="number" data-value=0>0</button>
        <button class="" data-value=".">.</button>
        <button class="operator" data-value="=">=</button>
        <button class="operator" data-value="+">+</button>
      </div>
    </div>
  </div>
`
const display = document.querySelector("input")

// state
let num1 = ""
let num2 = ""
let operator = ""
let resultDisplayed = false

document.addEventListener("click", (e) => {
  // handle number input
  if (e.target.matches("button.number")) {
    if (resultDisplayed) {
      num2 = e.target.dataset.value
      display.value = num2
      resultDisplayed = false
    } else {
      if (!operator) {
        num1 += e.target.dataset.value
        display.value = num1
      } else {
        num2 += e.target.dataset.value
        display.value = num2
      }
    }
  }
  // handel operator input
  if (e.target.matches("button.operator")) {
    if (e.target.dataset.value == "=") {
      if (num1 && num2 && operator) {
        let result = operate(operator, +num1, +num2)
        display.value = result
        num1 = result.toString()
        num2 = ""
        operator = ""
        resultDisplayed = true
      }
    } else {
      if (num1 && !num2) {
        operator = e.target.dataset.value
      }
    }
  }
})
