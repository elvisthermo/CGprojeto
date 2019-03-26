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

    getPixel(x,y){
        return this.matriz[x][y];
    }

    putPixel(x,y,color){
        this.matriz[x][y] = color;
    }

}

export {frammeBuffer};