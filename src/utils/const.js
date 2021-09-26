const types = [
  {
    name: 'Palabra reservada',
    values: [
      'if',
      'else',
      'do',
      'while',
      'for',
      'int',
      'float',
      'boolean',
      'char',
      'String',
      'function',
      'class',
      'var',
      'let',
      'const',
      'return',
    ],
  },
  { name: 'parentesis izquierdo', values: ['('] },
  { name: 'parentesis derecho', values: [')'] },
  { name: 'llave izquierda', values: ['{'] },
  { name: 'llave Derecha', values: ['}'] },
  { name: 'corchete izquierdo', values: ['['] },
  { name: 'corchete derecho', values: [']'] },
  {
    name: 'operador aritmetico',
    values: ['+', '-', '*', '/', '^', '++', '--', '+=', '-='],
  },
  { name: 'operador logico', values: ['&&', '||', '|', '!'] },
  {
    name: 'operador comparador',
    values: ['<', '>', '<=', '>=', '!=', '==', '='],
  },
  { name: 'delimitador de linea', values: [';'] },

  { name: 'Numero', values: [/\b\d+(\.\d*)?([eE][+-]?\d+)?\b/g] },
];

export { types };
