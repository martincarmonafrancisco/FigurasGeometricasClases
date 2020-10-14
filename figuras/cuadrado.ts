export{Cuadrado}

class Cuadrado{
    private _lado1: number
    public constructor(lado : number){
        this._lado1 = lado
    }

    public get lado(){
        return this._lado1
    }

    public getArea(){
        return (this._lado1*this._lado1)
    }

    public getPerimetro(){
        return this._lado1 * 4
    }

}
