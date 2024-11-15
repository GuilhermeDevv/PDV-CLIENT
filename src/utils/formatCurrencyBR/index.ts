function formatCurrency(value: string) {
  // Converter o valor para número de ponto flutuante
  let valueNumber = parseFloat(value);

  // Garantir que o valor tenha duas casas decimais
  let valueFormat = valueNumber.toFixed(2).replace('.', ',');

  // Adicionar pontos para separar os milhares
  valueFormat = valueFormat.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Adicionar o símbolo de moeda
  valueFormat = `R$ ${valueFormat}`;

  return valueFormat;
}
function unformatCurrency(value: string) {
  // Remover o símbolo de moeda e os pontos de separação de milhares
  let cleanedValue = value
    .replace('R$', '')
    .replace(/\./g, '')
    .replace(',', '.')
    .trim();
  return parseFloat(cleanedValue);
}

function formatCurrencyOnChange(value: string) {
  // Remove todos os caracteres não numéricos
  let valueFormat = value.replace(/[^0-9]/g, '');

  // Se o valor estiver vazio, retorna uma string vazia
  if (valueFormat === '') {
    return '';
  }

  // Adiciona a vírgula para separar os centavos
  if (valueFormat.length > 2) {
    valueFormat = valueFormat.slice(0, -2) + ',' + valueFormat.slice(-2);
  } else if (valueFormat.length === 2) {
    valueFormat = '0,' + valueFormat;
  } else if (valueFormat.length === 1) {
    valueFormat = '0,0' + valueFormat;
  }

  // Adiciona pontos para separar os milhares
  valueFormat = valueFormat.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Adiciona o símbolo de moeda
  valueFormat = `R$ ${valueFormat}`;

  return valueFormat;
}

export { formatCurrency, formatCurrencyOnChange, unformatCurrency };
