function bezierPoint(p,t,n) {
    let pts = [...p];
    for(let r = 1; r <= n; r++) {
        for (let i = 0; i <= n-r; i++) {
            // pts[i] = (1-t)*pts[i] + t*pts[i+1];
            pts[i] = [Math.round((1-t)*pts[i][0] + t*pts[i+1][0]), Math.round((1-t)*pts[i][1] + t*pts[i+1][1])];
        }
    }
    return [pts[0][0],pts[0][1]];
}

function bezier(controlPt) {
    let pts = controlPt, n = pts.length-1;//4
    // console.log(pts);
    let points = [];
    for (let t=0; t<=15; t++) { points.push(bezierPoint(pts,t/15,n));}
    console.log(points);
    // bresenham(points);

    for (let i = 0; i <points.length-1 ; i++) {
        bresenham([points[i],points[i+1]],"black");
    }
    return points;
}
