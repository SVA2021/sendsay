import {digitT, operatorT} from "./types";

export function getOperatorName(sign: operatorT): string {
  switch (sign) {
    case '/':
      return 'div';
    case '+':
      return 'plus';
    case '-':
      return 'minus';
    case 'x':
      return 'multi';
  }
}

export function getDigitName(sign: digitT): string {
  switch (sign) {
    case ',':
      return 'comma'
    case '0':
      return 'zero'

    default:
      return `d${sign}`
  }
}

export function calculateResult(operator: operatorT, firstValue: string, secondValue: string): string {
  let first = Number(firstValue);
  let second = Number(secondValue);
  if (isNaN(first) || isNaN(second)) return 'Не определено';

  switch (operator) {
    case '+':
      return String(first + second);
    case '-':
      return String(first - second);
    case 'x':
      return String(first * second);
    case '/':
      return second === 0 ? 'Не определено' : String(first / second);

    default:
      return 'Не определено';
  }
}