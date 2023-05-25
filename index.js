
module.exports = (text) => {
    if (!text || typeof text !== 'string' ) return "This is not a string!"
    
    let arr = text.split('');
    let result = [];
    arr.forEach(char => {
        if (char == 'a' || char == 'A') result.push(4);
        else if (char == 'i' || char == 'I') result.push(1);
        else if (char == 'o' || char == 'O') result.push(0);
        else if (char == 'z' || char == 'Z') result.push(2);
        else if (char == 't' || char == 'T') result.push(7);
        else if (char == 's' || char == 'S') result.push(5);
        else result.push(char);
    });

    return result.join('');
};
