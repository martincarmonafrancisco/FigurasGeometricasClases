export{Cuadrado}

class Cuadrado{
    private _lado1: number
    constructor(lado : number){
        this._lado1 = lado
    }

    get lado(){
        return this._lado1
    }

    area(){
        return (this._lado1*this._lado1)
    }

    perimetro(){
        return this._lado1 * 4
    }

}
