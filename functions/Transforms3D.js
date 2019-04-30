//translação
function translate3D(mat,tx,ty,tz){

    const translate =
            [[1,0,0,tx],
            [0,1,0,ty],
            [0,1,0,tz],
            [0,0,0,1] ];

    return multiply(translate,mat);

}

//rotação
function rotacaoZ_3D(mat,a){

    const rotacao =
        [[cos(a),-sin(a),0,0],
        [sin(a),cos(a), 0,0],
        [0,     0,      1,0],
        [0,     0,      0,1]]

    return multiply(rotacao,mat);

}

function rotacaoX_3D(mat,a){

    const rotacao =
        [[1,0,     0,      0],
        [0,cos(a),-sin(a),0],
        [0,sin(a),cos(a), 0],
        [0,0,     0,      1]];


    return multiply(rotacao,mat);

}

function rotacaoY_3D(mat,a){

    const rotacao =

        [[cos(a), 0,sin(a),0],
        [0,      1,0,     0],
        [-sin(a),0,cos(a),0],
        [0,      0,0,     1]];


    return multiply(rotacao,mat);

}



function cos(a){
    return Math.cos(a*(Math.PI/180));
}

function sin(a){
    return Math.sin(a*(Math.PI/180));
}

//escala
function scale3D(mat,sx,sy,sz){

    const scale =
        [[sx,0,0,0],
         [0,sy,0,0],
         [0,0,sz,0],
         [0,0,0,1 ]];

    return multiply(scale,mat);

}
