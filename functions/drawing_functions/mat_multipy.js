//multiplicação de matrizes
function multiply(a, b) {
    var aNumRows = a.length, aNumCols = a[0].length,
        bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);  // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
        m[r] = new Array(bNumCols); // initialize the current row
        for (var c = 0; c < bNumCols; ++c) {
            m[r][c] = 0;             // initialize the current cell
            for (var i = 0; i < aNumCols; ++i) {
                m[r][c] += a[r][i] * b[i][c];
            }
        }
    }
    return m;
}

function mat(martiz){
    let mat =[];
    let list = [[],[],[]];
    for (let i = 0; i <martiz.length ; i++) {
        list[0].push(martiz[i][0]);
        list[1].push(martiz[i][1]);
        list[2].push(1);
    }
    return list;


}

function inverseMat(mat) {
    let arrTeste = [];
    for (let j = 0; j <mat[0].length ; j++) {
        arrTeste.push([mat[0][j],mat[1][j]]);

    }
    console.log(arrTeste);
    return arrTeste;
}

function mat3d(martiz, z){
    let mat =[];
    let list = [[],[],[],[],[]];
    for (let i = 0; i <martiz.length ; i++){
        list[0].push(martiz[i][0]);
        list[1].push(martiz[i][1]);
        if (!z){
            list[2].push(martiz[i][2]);
        }else{
            list[2].push(z[i]);
        }
        list[3].push(1);

    }
    return list;


}
