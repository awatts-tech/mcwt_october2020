function add(num1, num2){ 
    return num1 - num2;
}

function addThreeThings(num1, num2, num3) {
    const answer1 = add(num1, num2);
    return add(answer1, num3);
}


// export add function at the bottom
module.exports = add;