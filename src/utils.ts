import {calculatorPartT, digitT, operatorT} from "./types";

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

export function calculateResult(operator: operatorT, firstValue: string, secondValue: string): number | null | 'Не определено' {
  let first = parseFloat(firstValue);
  let second = parseFloat(secondValue);
  if (isNaN(first) || isNaN(second)) return 'Не определено';

  switch (operator) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case 'x':
      return first * second;
    case '/':
      return second === 0
        ? 'Не определено'
        : first / second;

    default:
      return 'Не определено';
  }
}

export function addNumberToString(initial: string, newDigit: digitT): string {
  return newDigit === ','
    ? (~initial.indexOf(','))// prevent more than 1 comma in digit
      ? initial
      : initial + '.'
    : initial + newDigit
}

export function addCommaToNull(newDigit: digitT) : string {
  return newDigit === ',' ? addNumberToString('0', newDigit) : newDigit;
}

export function normalizeNumToString(value: number | undefined | null | 'Не определено'): string {
  if (!value) return '0';
  if (value === 'Не определено' || isNaN(value)) return 'Не определено';

  return String(value).length > 16 // 17 symbols - value from figma design
    ? String(value.toPrecision(10))
    : String(value)
}

export function putNewItemToArray<T>(item: T, array: T[], index: number): T[] {
  return [
    ...array.slice(0, index),
    item,
    ...array.slice(index),
  ]
}

export function moveScreenToTop(array: calculatorPartT[]): calculatorPartT[] {
  return array.includes('screen') ? ['screen', ...array.filter((v) => v !== 'screen')] : [...array];
}

export function addNewItemToResult(item: calculatorPartT, array: calculatorPartT[], index: number): calculatorPartT[] {
  return moveScreenToTop(putNewItemToArray(item, array, index));
}

export function sortResultArray(draggedPart: calculatorPartT, hoveredPart: calculatorPartT, array: calculatorPartT[]): calculatorPartT[] {
  if (draggedPart === hoveredPart) return [...array];
  const arrayWithoutDragPart = array.filter((v) => v !== draggedPart);
  return addNewItemToResult(draggedPart, arrayWithoutDragPart, arrayWithoutDragPart.indexOf(hoveredPart));
}