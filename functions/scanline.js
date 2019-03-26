//scanline
let points = [
    {x: 100, y: 50},
    {x: 120, y: 100 },
    {x: 160, y: 50 },
    {x: 200, y: 100 },
    {x: 300, y: 50},
    {x: 350, y: 350},
    {x: 300, y: 250},
    {x: 50, y: 150},
    {x: 100, y: 50}

];

//generate line
var lines = [];
for (var i = 1; i < points.length; i++) {
    lines.push(new Line(points[i - 1], points[i]));
    console.log(points[i-1]);
    console.log(points[i]);

}


// find min and max
var minY = points[0].y;
var maxY = points[0].y;
for (var i = 0; i < points.length; i++) {
    var temp = points[i].y;
    if (temp < minY)
        minY = temp;
    else if (temp > maxY)
        maxY = temp;
}
// end find


for (var y = minY; y < maxY; y++) {
    var meetPoint = getMeetPoint(y);
    for (var i = 1; i < meetPoint.length; i += 2) {
        bresenham(meetPoint[i - 1], y ,meetPoint[i], y);
    }
}

function getMeetPoint(y) {
    var meet = [];
    for (var i = 0; i < lines.length; i++) {
        var l = lines[i];
        if (l.isValidY(y)) {
            meet.push(l.getX(y));
        }
    }

    //sort
    for (var i = 0; i < meet.length; i++)
        for (var j = i; j < meet.length; j++) {
            if (meet[i]>meet[j]) {
                var temp =meet[i];
                meet[i]=meet[j];
                meet[j]=temp;
            }
        }

    return  meet;

}

function Line(start, end) {
    this.x0 = start.x;
    this.x1 = end.x;
    this.y0 = start.y;
    this.y1 = end.y;
    this.m = (this.y1 - this.y0) / (this.x1 - this.x0);

    this.getX = function (y) {
        if (!this.isValidY(y))
            throw new RangeError();

        return 1 / this.m * (y - this.y0) + this.x0;
    }

    this.isValidY = function (y) {
        if (y >= this.y0 && y < this.y1) {
            return true;
        }
        if (y >= this.y1 && y < this.y0) {
            return true;
        }

        return false;
    }
}