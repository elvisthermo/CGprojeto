class frammeBuffer {
    constructor(width, height) {
        this.matriz = [];
        this.FrameSize = Array(width,height);
        this.pixel = 10;
        this.createMat();

    }
    createMat() {
        this.matriz = [];
        for(let i=0;i<this.FrameSize[0];i++){
            this.matriz.push([]);
            for(let j=0;j<this.FrameSize[1];j++){
                this.matriz[i].push("white");
            }
        }
        return this.matriz;

    };


    //retorna a cor
    getPixel(x,y){
        return this.matriz[x][y];
    }

    //seta a cor
    putPixel(x,y,color){
        if((x<0 || y<0) || (x>this.FrameSize[0] ||  x>this.FrameSize[0])){
            console.log("out");
            return "out";
        }
        console.log(color);
        this.matriz[x][y] = color;

        return this.matriz[x][y];
    }

    //seta conjunto de pontos
    setPoints(points,color){
        if(!color)
            color = "black";
        for (let i = 0; i < points.length ; i++) {
            buffer.putPixel(Math.round(points[i][0]),Math.round(points[i][1]),color);
        }

    }

    clear() {
        this.createMat();

    }


    //redesenhar
    redraw(svg){
        svg.selectAll("rect").remove();
        const draw_pixel =(x,y,color)=>{
            let pixel = svg.append("rect")
                .attr("x",x)
                .attr("y",y)
                .attr("width",this.pixel)
                .attr("height",this.pixel)
                .attr("class","data")
                .style("fill",color)
                .style("stroke","blue")
                .style("stroke-width","0.1px");

            return pixel;
        }

        for (let i = 0; i <this.FrameSize[0] ; i++) {
            for (let j = 0; j < this.FrameSize[1]; j++) {
                draw_pixel(i*this.pixel,j*this.pixel,this.getPixel(i,j));
            }
        }

    }

}
