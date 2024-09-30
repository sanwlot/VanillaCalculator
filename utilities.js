export function add(num1, num2) {
  return num1 + num2
}
export function subtract(num1, num2) {
  return num1 - num2
}
export function devide(num1, num2) {
  return num1 / num2
}
export function multiply(num1, num2) {
  return num1 * num2
}

export function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2)

    case "-":
      return subtract(num1, num2)

    case "/":
      return devide(num1, num2)

    case "*":
      return multiply(num1, num2)

    default:
      alert("invalid operator")
      break
  }
}
