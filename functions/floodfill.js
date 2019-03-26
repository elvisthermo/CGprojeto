function recursivefilll(x,y,color,edgeColor){
    let current = mat.getPixel(x,y);

    if(current!= edgeColor && current != color){
        mat.putPixel(x,y,color);
        recursivefilll(x+pixel_lenght,y, color, edgeColor);
        recursivefilll(x,y+pixel_lenght, color, edgeColor);
        recursivefilll(x-pixel_lenght,y, color, edgeColor);
        recursivefilll(x,y-pixel_lenght, color, edgeColor);

    }

}