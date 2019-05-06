function recursivefilll(x,y,color,edgeColor){
    let current = buffer.getPixel(x,y);
    console.log(current);
    if(current!= edgeColor && current != color){
        buffer.putPixel(x,y,color);

        recursivefilll(x+1,y, color, edgeColor);
        recursivefilll(x,y+1, color, edgeColor);
        recursivefilll(x-1,y, color, edgeColor);
        recursivefilll(x,y-1, color, edgeColor);

    }

}