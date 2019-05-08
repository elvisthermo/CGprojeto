//points [[][][][][]]
function poligon (points,color) {
    for (let i = 0; i < points.length; i++) {
        points[i][0] = Math.round(points[i][0]);
        points[i][1] = Math.round(points[i][1]);

    }

    let begin = points[0];
    // if(!color)
    //     color = "black";

    for (let i = 0; i <points.length ; i++) {
        if(points[i+1]){

            console.log("math:",points[i]);
            bresenham([points[i],points[i+1]],color);
        }
        else {
            console.log([points[i],begin]);
            bresenham([points[i],begin],color);
        }
    }

}


