// [[10,20],[30,40]]

function reflection(m,dots) {
    if(!Array.isArray(dots)) return;

    [[x1,y1],[x2,y2]] = dots;
    let change = [false,false,false];


    if(m>1 || m<-1) {
        let temp = x1;
        x1 = y1
        y1 = temp;

        temp = x2
        x2 = y2
        y2 = temp;

        change[2] = true;
    }

    if(x1 > x2) {
        x1 *=-1
        x2 *=-1
        change[0] = true;
    }

    if(y1 > y2) {
        y1 *=-1
        y2 *=-1
        change[1] = true;
    }

    return [[[x1,y1],[x2,y2]],change];

}

function reverse_reflection (m,dots,change) {
    if(!Array.isArray(dots)) return;
    if(!Array.isArray(change)) return;

    let newDots = []

    for (let dot of dots) {
        [x,y] = dot;
        if(change[1]) {y *=-1}

        if(change[0]) {x *=-1}

        if(change[2]) {let temp = x; x = y; y = temp;}

        newDots.push([x,y]);
    }


    return newDots;
}

function bresenham(dots) {
    if(!Array.isArray(dots)) return;

    let m = 0, e = 0;
    [[x1,y1],[x2,y2]] = dots;
    let change = [];

    m = (y2-y1)/(x2-x1);

    //TODO: Avisar que a reflexão não pode ser o primeiro passo, visto que ela depende do m.
    [dots,change] = reflection(m,dots);

    [[x1,y1],[x2,y2]] = dots;

    let x = x1, y = y1;
    m = (y2-y1)/(x2-x1);

    e = m - 0,5;

    let tempdots = [[x,y]]

    while(x < x2) {
        if (e > 0) {y += 1; e -= 1;}
        x += 1; e += m;

        tempdots.push([x, y]);
    }

    return reverse_reflection(m,tempdots,change)
}



// exports = {bresenham};

