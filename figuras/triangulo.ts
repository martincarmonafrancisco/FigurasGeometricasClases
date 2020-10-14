export{Triangulo}

class Triangulo{
    private _alturatri: number
    private _basetri: number
    private _ladotri1: number
    private _ladotri2: number
    public constructor(base: number, lado1: number, lado2: number, altura: number){
        this._alturatri = altura
        this._basetri = base
        this._ladotri1 = lado1
        this._ladotri2 = lado2
    }

    public get altura(){
        return this._alturatri
    }

    public get base(){
        return this._basetri
    }

    public get lado1(){
        return this._ladotri1
    }

    public get lado2(){
        return this._ladotri2
    }

    public getArea(){
        return (this._basetri * this._alturatri)/2
    }

    public getPerimetro(){
        return this._basetri + this._ladotri1 + this._ladotri2
    }


}
