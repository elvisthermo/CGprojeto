function CirclePoints(x, y,vx,vy){
    mat.putPixel(vx + x,vy + y,"red");
    mat.putPixel(vx + x,vy +  -y,"red");
    mat.putPixel(vx + -x,vy +  y,"red");
    mat.putPixel(vx + -x,vy +  -y,"red");
    mat.putPixel(vx + y,vy +  x,"red");
    mat.putPixel(vx + y,vy +  x,"red");
    mat.putPixel(vx + y,vy +  -x,"red");
    mat.putPixel(vx + -y,vy + x,"red");
    mat.putPixel(vx + -y,vy + -x,"red");
}

function MidpointCircle(radius, valueX,valueY){
    let x = 0;
    let y = radius;
    let d = pixel_lenght - radius;

    CirclePoints(x,y,valueX,valueY);
    while(y > x) {
        if (d < 0)
            d += 2 * x + 3;
        else {
            d += 2 * (x - y) + 5;
            y-=pixel_lenght;
        }
        x+=pixel_lenght;
        CirclePoints(x, y,valueX,valueY);
    }
}

exports = {MidpointCircle,CirclePoints};