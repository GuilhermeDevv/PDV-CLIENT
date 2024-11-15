export function formatPercent(value: string): string {
  // Remove todos os caracteres não numéricos
  let valueFormat = value.replace(/[^0-9]/g, '');

  // Converte para número inteiro
  let intValue = parseInt(valueFormat, 10);

  // Garante que o valor esteja entre 1 e 100
  if (isNaN(intValue) || intValue < 1) {
    intValue = 1;
  } else if (intValue > 100) {
    intValue = 100;
  }

  // Retorna o valor formatado com o símbolo de porcentagem
  return `${intValue}%`;
}
