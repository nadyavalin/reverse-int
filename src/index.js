module.exports = function reverse (n) {
    // преобразуем в строку, раделеяем, переворачиваем, соединяем
    const reversedStr = String(n).split('').reverse().join('');
    // используем функцию parseInt для преобразования результата в число с основанием 10 (десятичная система счисления)
    return parseInt(reversedStr, 10);
}