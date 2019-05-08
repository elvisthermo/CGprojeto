// $( document ).ready(function() {
//     console.log( "ready!" );
let colorBorder = "#000000";
let colorFill = "#1aacf2";
let svg = d3.select("svg");
let tam = 10;
let color = "black";
let pts1 =[];
let ptsFill;
let ptscircle = [];
let buffer = new frammeBuffer(80,80);

let borders =[[0,0],[0,65-1],[70-1,65-1],[70-1,0]];
poligon(borders,"#000000");

buffer.redraw(svg);

$("#colorBorder").change(function () {
    colorBorder = $("#colorBorder").val();
    console.log(colorBorder);
});

$("#colorFill").change(function () {
    colorFill = $("#colorFill").val();
    console.log(colorFill);
});


//evento mouse
function Coords(event) {
    let x = Math.round(event.clientX/10);
    let y = Math.round(event.clientY/10);
    ptsFill = [x,y];
    pts1.push([x,y]);
    ptscircle.push([x,y]);
    buffer.putPixel(x,y,"black");
    buffer.redraw(svg);

    console.log(pts1);

}
//eventos buttos -------------------------------------
function lines() {
    buffer.setPoints(pts1,"white");

    bresenham(pts1,colorBorder);
    buffer.redraw(svg);
    pts1 =[];

};

function Poligonos(){
    poligon(pts1,colorBorder);
    buffer.redraw(svg);
    pts1 =[];

}


function circle(){
    let radius;
    if(!ptscircle[1]){
        radius = 5;
    }
    else {
        radius= Math.abs(ptscircle[0][0]-ptscircle[1][0]);
    }

    buffer.setPoints(ptscircle,"white");
    MidpointCircle(radius, ptscircle[0][0],ptscircle[0][1],colorBorder);
    buffer.redraw(svg);
    ptscircle = [];


}

function curves(){
    bezier(pts1,colorBorder);
    buffer.redraw(svg);

    pts1 = [];
}

function fill(){
    recursivefilll(ptsFill[0],ptsFill[1],colorFill,colorBorder);
    buffer.redraw(svg);

}

function scan(){
    scanline(pts1,colorFill);
    poligon(pts1,colorBorder);
    buffer.redraw(svg);
    pts1 = [];

}

function lineClipping() {
    clipRext(15,15,49,49);
    buffer.setPoints(pts1,"white");
    // bresenham(pts1,"red");
    cohenSutherlandClip(pts1[0][0], pts1[0][1], pts1[1][0], pts1[1][1],colorBorder);
    poligon([[15, 15], [15, 49], [49, 49], [49, 15]],colorBorder);
    buffer.redraw(svg);
    pts1 =[];

};

function poligonClipping(){
    // poligon(pts1,"black");
    // //poligono
    let subjectPolygon = pts1;
    // poligno de recorte
    let clipPolygon = [[10, 10], [50, 10], [50, 40], [10, 40]];

    //poligo de entrada
    let clippedPolygon = clip(subjectPolygon, clipPolygon);
    // poligon(subjectPolygon,colorBorder);
    //retangulo ou poligno de recorte
    poligon(clipPolygon,"#000000");
    //depois do recorte
    poligon(clippedPolygon,colorFill);
    buffer.redraw(svg);
    pts1 = [];
}


// transformações 2D------------------------------------
function on_translate(){
    let tx = 0;
    let recursiva = function () {
        on_clear();
        setTimeout(recursiva, 1000);
        poligon(pts1, "red");
        let move = mat(pts1);
        let moved = translate(move, -pts1[0][0], -pts1[0][1]);

        moved = translate(moved, tx, tx);

        poligon(inverseMat(moved), colorBorder)

        buffer.redraw(svg);
        tx+=10;

        if(tx>60){
            tx=0;

        }
    }
    recursiva();
}

function on_rotate(){
    let ang = 1;
    let recursiva = function () {
        on_clear();
        console.log("Se passaram 1 segundo!");
        setTimeout(recursiva, 1000);

        poligon(pts1, "red");
        let move = mat(pts1);
        let moved = translate(move, -pts1[0][0], -pts1[0][1]);

        moved = rotacao(moved, ang);

        moved = translate(moved, pts1[0][0], pts1[0][1]);
        poligon(inverseMat(moved), colorBorder)

        buffer.redraw(svg);
        ang+=30;
    }
    recursiva();
}

function on_scale() {
    let ts = -1;
    let recursiva = function () {
        on_clear();

        console.log("Se passaram 1 segundo!");
        setTimeout(recursiva, 500);


        poligon(pts1, "red");
        let move = mat(pts1);
        let moved = translate(move, -pts1[0][0], -pts1[0][1]);

        moved = scale(moved, ts, ts);

        moved = translate(moved, pts1[0][0], pts1[0][1]);
        poligon(inverseMat(moved), colorBorder)

        buffer.redraw(svg);
        ts+=0.2
        if(ts>1.5){
            ts=-1;
        }
    }
    recursiva();
}

// transformações com valores 2D setavais ------------------------------------

function on_translate_wvalue(tvalue){
    let x,y;

    [x,y] = tvalue.split(',');

    x = Number(x);
    y = Number(y);

    on_clear();
    poligon(pts1, "red");
    let move = mat(pts1);
    let moved = translate(move, x, y);

    poligon(inverseMat(moved), colorBorder)

    buffer.redraw(svg);

}

function on_rotate_wangle(ang){
    on_clear();
    console.log("Se passaram 1 segundo!");

    poligon(pts1, "red");
    let move = mat(pts1);
    let moved = translate(move, -pts1[0][0], -pts1[0][1]);

    moved = rotacao(moved, ang);

    moved = translate(moved, pts1[0][0], pts1[0][1]);
    poligon(inverseMat(moved), colorBorder)

    buffer.redraw(svg);
}

function on_scale_wvalue(value) {

    let x,y;

    [x,y] = value.split(',');

    x = Number(x);
    y = Number(y);


    on_clear();

    poligon(pts1, "red");
    let move = mat(pts1);
    let moved = translate(move, -pts1[0][0], -pts1[0][1]);

    moved = scale(moved, x, y);

    moved = translate(moved, pts1[0][0], pts1[0][1]);
    poligon(inverseMat(moved), colorBorder)

    buffer.redraw(svg);
}

// transformações 3D------------------------------------
function on_pespective() {
    //front
    let face1 = [
        [10,10,10],
        [10,20,10],
        [20,20,10],
        [20,10,10]
    ];

    //back
    let face2 = [
        [10,10,20],
        [10,20,20],
        [20,20,20],
        [20,10,20]
    ];

    // //top
    let face3 = [
        [10,10,10],
        [20,10,10],
        [20,10,20],
        [10,10,20]
    ];
    //button
    let face4 = [
        [10,20,10],
        [20,20,10],
        [20,20,20],
        [10,20,20]
    ]

    //left
    let face5 = [
        [10,10,10],
        [10,20,10],
        [10,20,20],
        [10,10,20]
    ];
    //right
    let face6 =[
        [20,10,10],
        [20,20,10],
        [20,20,20],
        [20,10,20]
    ];
    let ang =0;
    let recursiva = function () {
        on_clear();
        console.log("Se passaram 1 segundo!");
        setTimeout(recursiva, 500);

        let pts = [];
        pts[0] = mat3d(face1);
        pts[1] = mat3d(face2);
        pts[2] = mat3d(face3);
        pts[3] = mat3d(face4);
        pts[4] = mat3d(face5);
        pts[5] = mat3d(face6);

        let color = ["pink","blue","red","yellow","grey","green"];
        for (let i = 0; i <pts.length ; i++) {
            pts[i] = translate3D(pts[i], -10, -10, -10);
            pts[i] = rotacaoY_3D(pts[i], ang);
            pts[i] = translate3D(pts[i], 30, 30, 20);
            pts[i] = perspective(pts[i], 12);
            pts[i] = inverseMat(pts[i]);

            poligon(pts[i],color[i]);
            // poligon(pts[i], "orange");
        }
        buffer.redraw(svg);
        ang+=10;
    }
    recursiva();

}


//pesctiva-----------------------------------------
// function on_pespective(fuga){
//     fuga = Number(fuga);
//
//
//     poligon(pts1,"red");
//     let move =mat3d(pts1);
//     let moved = translate3D(move,-pts1[0][0],-pts1[0][1],1);
//
//     moved = perspective(moved, fuga);
//
//     moved = translate3D(moved,pts1[0][0],pts1[0][1],1);
//     poligon(inverseMat(moved),colorBorder)
//
//     buffer.redraw(svg);
//
// }

//ortografica----------------------------------------

function on_ortogafic(tvalue){
    //front
    let face1 = [
        [10,10,10],
        [10,20,10],
        [20,20,10],
        [20,10,10]
    ];

    //back
    let face2 = [
        [10,10,20],
        [10,20,20],
        [20,20,20],
        [20,10,20]
    ];

    // //top
    let face3 = [
        [10,10,10],
        [20,10,10],
        [20,10,20],
        [10,10,20]
    ];
    //button
    let face4 = [
        [10,20,10],
        [20,20,10],
        [20,20,20],
        [10,20,20]
    ]

    //left
    let face5 = [
        [10,10,10],
        [10,20,10],
        [10,20,20],
        [10,10,20]
    ];
    //right
    let face6 =[
        [20,10,10],
        [20,20,10],
        [20,20,20],
        [20,10,20]
    ];
    let ang =0;
    let recursiva = function () {
        on_clear();
        console.log("Se passaram 1 segundo!");
        setTimeout(recursiva, 500);

        let pts = [];
        pts[0] = mat3d(face1);
        pts[1] = mat3d(face2);
        pts[2] = mat3d(face3);
        pts[3] = mat3d(face4);
        pts[4] = mat3d(face5);
        pts[5] = mat3d(face6);

        let color = ["pink","blue","red","yellow","grey","green"];
        for (let i = 0; i <pts.length ; i++) {
            pts[i] = translate3D(pts[i], -10, -10, -10);
            pts[i] = rotacaoY_3D(pts[i], ang);
            pts[i] = rotacaoX_3D(pts[i], ang);

            pts[i] = translate3D(pts[i], 30, 30, 20);
            pts[i] = Plano_XY(pts[i]);
            pts[i] = inverseMat(pts[i]);

            poligon(pts[i],color[i]);
            // poligon(pts[i], "orange");
        }
        buffer.redraw(svg);
        ang+=10;
    }
    recursiva();

}

function on_oblique(value, ang){
    //front
    let face1 = [
        [10,10,10],
        [10,20,10],
        [20,20,10],
        [20,10,10]
    ];

    //back
    let face2 = [
        [10,10,20],
        [10,20,20],
        [20,20,20],
        [20,10,20]
    ];

    // //top
    let face3 = [
        [10,10,10],
        [20,10,10],
        [20,10,20],
        [10,10,20]
    ];
    //button
    let face4 = [
        [10,20,10],
        [20,20,10],
        [20,20,20],
        [10,20,20]
    ]

    //left
    let face5 = [
        [10,10,10],
        [10,20,10],
        [10,20,20],
        [10,10,20]
    ];
    //right
    let face6 =[
        [20,10,10],
        [20,20,10],
        [20,20,20],
        [20,10,20]
    ];

    ang = Number(ang);
    value = Number(value);

    let pts = [];
    pts[0] = mat3d(face1);
    pts[1] = mat3d(face2);
    pts[2] = mat3d(face3);
    pts[3] = mat3d(face4);
    pts[4] = mat3d(face5);
    pts[5] = mat3d(face6);

    let color = ["pink","blue","red","yellow","grey","green"];
    for (let i = 0; i <pts.length ; i++) {
        // pts[i] = translate3D(pts[i], -10, -10, -10);


        pts[i] = Oblique_Projection(pts[i],ang,value);


        poligon(pts[i],color[1]);
    }


    buffer.redraw(svg);

}


//button clear-------------------------------------
function on_clear(){
    buffer.clear();
    poligon(borders,"#000000");
    buffer.redraw(svg);

}
// });
