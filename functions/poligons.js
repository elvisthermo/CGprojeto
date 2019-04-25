//points [[][][][][]]

function poligon (points) {
    let begin = points[0];

    for (let i = 0; i <points.length ; i++) {
        if(points[i+1]){
            bresenham([points[i],points[i+1]],"black");
        }
        else {
            console.log([points[i],begin]);
            bresenham([points[i],begin],"black");
        }
    }

}


