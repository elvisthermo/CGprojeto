
function Plano_XY(P){

    let ident = [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
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
        [1, 0, (e*cos(ang)),0],
        [0, 1, (e*sin(ang)), 0],
        [0, 0, 0, 0],
        [0, 0, 0, 1]];

    return  multiply(ident,P);

}


 function orderbyz(_OBJ){
    _OBJ.sort(function(a, b){
        console.log(a);
        console.log(b);
        let z0=-9999999, z1=-9999999,dist;

        for(let i=0;i<a[2].length;i++){
            // dist=a[2][i];
            dist = Math.sqrt(Math.pow(a[0][i],2)+Math.pow(a[1][i],2)+Math.pow(a[2][i],2));
            z0 = z0<dist?dist:z0;
        }

        for(let i=0;i<b[2].length;i++){
            // dist = b[2][i];
            dist = Math.sqrt(Math.pow(b[0][i],2)+Math.pow(b[1][i],2)+Math.pow(b[2][i],2));
            z1 = z1<dist?dist:z1;
        }

        return z1-z0;
    });
}