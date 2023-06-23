// 
(function () {

    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const array3 = array1.concat(array2, [7, 8, 9], 'Leonardo', 10);
    const array4 = ['João', ...array1, ...[9, 5, 3]]

    console.log(array3, typeof array3);
    console.log(array4);

})();