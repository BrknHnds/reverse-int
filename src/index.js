module.exports = function reverse(n) {
    n = Math.sqrt(n * n); // модуль для работы с отрицательными числами
    let nArr = `${n}`.split(''); // приведение к массиву, чтобы работать методами массивов
    for (let i = 0, j = nArr.length - 1; i < nArr.length / 2; i++, j--) {
      [nArr[i], nArr[j]] = [nArr[j], nArr[i]]; // перестановка элементов массива
    }
    return +nArr.join('');
}