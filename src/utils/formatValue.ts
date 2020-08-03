const formatValue = (value: number): string =>
  Intl.NumberFormat('pr-br', { style: 'currency', currency: 'BRL' }).format(
    value,
  );
export default formatValue;
