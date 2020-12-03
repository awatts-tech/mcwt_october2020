function tempConverter(temperature, convertTo) {
    if ( convertTo && convertTo.toUpperCase() === 'C') {
        return (temperature - 32) * (5/9) + " (C)";
    }
    
    return null;
}

module.exports = tempConverter;