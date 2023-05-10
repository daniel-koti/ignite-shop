export function formatCurrency(amount: number) {
  const amountFormatted = new Intl.NumberFormat('pt-AO', {
    style: 'currency',
    currency: 'AOA',
  }).format(amount)

  return amountFormatted
}
