function perspective(P, d){

    if(!d)
        d = 12;

    let ident = [[d, 0, 0, 0],
                [0, d, 0, 0],
                [0, 0, d, 0],
                [0, 0, 1, 0]];

    let out = multiply(ident,P);

    console.log("------teste:",out);



    for(let i=0;i<out[3].length; i++){
        out[0][i] = out[0][i]/out[3][i];
        out[1][i] = out[1][i]/out[3][i];
        out[2][i] = out[2][i]/out[3][i];
        out[3][i] = out[3][i]/out[3][i];
    }


    return out;
}