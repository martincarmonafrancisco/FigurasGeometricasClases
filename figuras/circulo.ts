export{Circulo}

class Circulo{
    private _radiocirc:number
    constructor(radio:number){
        this._radiocirc = radio
    }

    get radio(){
        return this._radiocirc
    }

    perimetro(){
        return 2*Math.PI*this._radiocirc
    }

    area(){
        return Math.PI*(this._radiocirc*this._radiocirc)
    }

}   
