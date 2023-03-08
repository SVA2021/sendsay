export const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',',] as const;
export type digitT = typeof DIGITS[number];

export const OPERATORS = ['/', 'x', '-', '+',] as const;
export type operatorT = typeof OPERATORS[number];

export const MODE_TYPES = ['runtime', 'constructor'] as const;
export type modeT = typeof MODE_TYPES[number];

export const CALCULATOR_PARTS = ['screen', 'operators', 'digits', 'equal',] as const;
export type calculatorPartT = typeof CALCULATOR_PARTS[number];