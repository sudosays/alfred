
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

const newestDateFirstSort = (a, b) => {
    if (a.date < b.date) {
        return -1;
    } else if (a.date > b.date) {
        return 1;
    } else {
        return 0;
    }
}

const oldestDateFirstSort = (a, b) => {
    if (a.date < b.date) {
        return 1;
    } else if (a.date > b.date) {
        return -1;
    } else {
        return 0;
    }
}



export default formatAmount;
export {formatAmount, getColorIndicator, newestDateFirstSort, oldestDateFirstSort};
