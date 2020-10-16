export{Triangulo}

class Triangulo{
    private _alturatri: number
    private _basetri: number
    private _ladotri1: number
    private _ladotri2: number
    constructor(base: number, lado1: number, lado2: number, altura: number){
        this._alturatri = altura
        this._basetri = base
        this._ladotri1 = lado1
        this._ladotri2 = lado2
    }

    get altura(){
        return this._alturatri
    }

    get base(){
        return this._basetri
    }

    get lado1(){
        return this._ladotri1
    }

    get lado2(){
        return this._ladotri2
    }

    area(){
        return (this._basetri * this._alturatri)/2
    }

    perimetro(){
        return this._basetri + this._ladotri1 + this._ladotri2
    }


}
