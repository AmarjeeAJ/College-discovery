export function formatCurrency(amount) {
  if (amount === undefined || amount === null) return 'N/A';
  if (typeof amount === 'string') return amount;
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

export function formatPackage(lakhs) {
  if (!lakhs) return 'N/A';
  if (typeof lakhs === 'string') return lakhs;
  return `₹${lakhs} LPA`;
}
