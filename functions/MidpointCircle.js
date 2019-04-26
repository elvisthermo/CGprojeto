function CirclePoints(x, y,vx,vy,color){
    buffer.putPixel(vx + x,vy + y,color);
    buffer.putPixel(vx + x,vy +  -y,color);
    buffer.putPixel(vx + -x,vy +  y,color);
    buffer.putPixel(vx + -x,vy +  -y,color);
    buffer.putPixel(vx + y,vy +  x,color);
    buffer.putPixel(vx + y,vy +  -x,color);
    buffer.putPixel(vx + -y,vy + x,color);
    buffer.putPixel(vx + -y,vy + -x,color);
}

function MidpointCircle(radius, valueX,valueY,color){
    let x = 0;
    let y = radius;
    let d = 1 - radius;

    CirclePoints(x,y,valueX,valueY,color);
    while(y > x) {
        if (d < 0)
            d += 2 * x + 3;
        else {
            d += 2 * (x - y) + 5;
            y-=1;
        }
        x+=1;
        CirclePoints(x, y,valueX,valueY,color);
    }
}

