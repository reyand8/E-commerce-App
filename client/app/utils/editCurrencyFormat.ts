export const editCurrencyFormat = (price: number): string =>
    new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'USD'
        }).format(price);