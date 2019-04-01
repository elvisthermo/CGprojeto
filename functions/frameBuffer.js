class  frammeBuffer {
    constructor(width, height) {
        this.matriz = [];
        this.width = width;
        this.height = height;

        this.createMat();

    }
    createMat() {
        this.matriz;
        let x = 0;

        while(x<this.width){
            let lista = [];
            for(let y = 0;y<this.height;y++){
                lista.push("white");
            }
            this.matriz.push(lista);
            x++;
        }
        return this.matriz;
    }

    //retorna a cor
    getPixel(x,y){
        return this.matriz[x][y];
    }

    //seta a cor
    putPixel(x,y,color){
        this.matriz[x][y] = color;
    }

    setPoints(points,color){
        for (let i = 0; i < points.length ; i++) {
            console.log("x:",points[i][0])
            console.log("y:",points[i][1])
            buffer.putPixel(points[i][0],points[i][1],color);
        }

    }

    draw(svg){
        function draw_pixel(x,y,color){
            let pixel = svg.append("rect")
                .attr("x",x)
                .attr("y",y)
                .attr("width",10)
                .attr("height",10)
                .attr("fill",color)
                .attr("stroke","black")
                .attr("stroke-width","0.5px");

            return pixel;
        }

        for (let i = 0; i <50 ; i++) {
            for (let j = 0; j < 50; j++) {
                draw_pixel(i*10,j*10,this.getPixel(i,j));
            }
        }

    }

}

// exports = {frammeBuffer};