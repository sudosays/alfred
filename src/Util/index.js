
const formatAmount = i => {

    return (new Intl.NumberFormat(
        'en-ZA',
        {
            style: 'currency',
            currency: 'ZAR'
        }).format(i));

};

const getColorIndicator = amount => {

    let colorIndicator;
            
    if (amount < 0) {
        colorIndicator = "amount-bad"
    } else if (amount > 0) {
        colorIndicator = "amount-good"
    } else {
        colorIndicator = "amount-neutral"
    }

    return colorIndicator;
};

export default formatAmount;
export {formatAmount, getColorIndicator};
