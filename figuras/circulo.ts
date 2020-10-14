export{Circulo}

class Circulo{
    private _radiocirc:number
    public constructor(radio:number){
        this._radiocirc = radio
    }

    public get radio(){
        return this._radiocirc
    }

    public getPerimetro(){
        return 2*Math.PI*this._radiocirc
    }

    public getArea(){
        return Math.PI*(this._radiocirc*this._radiocirc)
    }

}   
