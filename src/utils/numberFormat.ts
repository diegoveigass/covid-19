const numberFormat = (value: number): string =>
  Intl.NumberFormat('pt-BR').format(value);

export default numberFormat;
