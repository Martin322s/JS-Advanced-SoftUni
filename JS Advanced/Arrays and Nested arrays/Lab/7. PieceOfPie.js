function pieceOfPie(flavours, targetOne, targetTwo) {

    let firstIndex = flavours.indexOf(targetOne);
    let secondIndex = flavours.indexOf(targetTwo);
    let result = flavours.slice(firstIndex, secondIndex + 1);

    return result;
}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');