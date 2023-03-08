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

    default:
      return '';
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