
function formatAmount(i) {

    return (new Intl.NumberFormat(
        'en-ZA',
        {
            style: 'currency',
            currency: 'ZAR'
        }).format(i));

};

export default formatAmount;
