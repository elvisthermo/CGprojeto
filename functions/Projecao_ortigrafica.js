
function Plano_XY(P,tz){

    let ident = [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, tz],
        [0, 0, 0, 1]];

    return  multiply(ident,P);

}


function Plano_XZ(P,ty){

    let ident = [
        [1, 0, 0, 0],
        [0, 0, 0, ty],
        [0, 0, 1, 0],
        [0, 0, 0, 1]];

    return  multiply(ident,P);

}

function Plano_YZ(P,tx){

    let ident = [
        [0, 0, 0, tx],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]];

    return  multiply(ident,P);

}


function Oblique_Projection(P,ang,e){


    let ident = [
        [1, 0, e*cos(ang),0],
        [0, 1, e*sin(ang), 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]];

    return  multiply(ident,P);

}
