//translação
function translate(mat,tx,ty){

    const translate =
        [[1,0,tx],
         [0,1,ty],
         [0,0,1] ]

    return multiply(translate,mat);

}

//rotação
function rotacao(mat,a){

    const rotacao =
            [[cos(a),-sin(a),0],
            [sin(a),cos(a),0],
            [  0 ,  0  , 1 ]];

    return multiply(rotacao,mat);

}

function cos(a){
    return Math.cos(a*(Math.PI/180));
}

function sin(a){
    return Math.sin(a*(Math.PI/180));
}

//escala
function scale(mat,sx,sy){

    const scale =
        [[sx,0,0],
         [0,sy,0],
         [0,0,1 ]]

    return multiply(scale,mat);

}
