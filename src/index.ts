import { menu } from '../vistas/menuPral'
import { leerTeclado } from '../vistas/entradaTeclado'
import { Triangulo } from '../figuras/triangulo'
import { Cuadrado } from '../figuras/cuadrado'
import { Circulo } from '../figuras/circulo'

const main = async () => {
    let num: number
    do {
        num = await menu()
        switch(num){
            case 1:

                console.log('Área y perímetro de un triángulo')
                let basetri: number, alturatri: number, ladotri1: number, ladotri2: number
                alturatri =  parseInt( await leerTeclado('Introduzca la altura'))
                basetri =  parseInt( await leerTeclado('Introduzca la base'))
                ladotri1 =  parseInt( await leerTeclado('Introduzca un lado del triángulo'))
                ladotri2 =  parseInt( await leerTeclado('Introduzca otro lado del triángulo'))
                let triangulo = new Triangulo(basetri,ladotri1,ladotri2,alturatri)
                console.log(`Área= ${triangulo.area()}`)
                console.log(`Perímetro= ${triangulo.perimetro()}`)
                break
            case 2:

                console.log('Área y perímetro de un cuadrado')
                let ladocuad:number
                ladocuad = parseInt(await leerTeclado('Introduzca el lado'))
                let cuadrado = new Cuadrado(ladocuad)
                console.log(`Área= ${cuadrado.area()}`)
                console.log(`Perímetro= ${cuadrado.perimetro()}`)
                break
            case 3:

                console.log('Área y perímetro de un círculo')
                let radiocirc:number
                radiocirc = parseInt(await leerTeclado('Introduzca el radio'))
                let circulo = new Circulo(radiocirc)
                console.log(`Área= ${circulo.area()}`)
                console.log(`Perímetro= ${circulo.perimetro()}`)
                break
            case 0:

                console.log('\nGracias por usar nuestro programa')
                break
            default:
                console.log("ERROR: Número incorrecto")
                break
        }
    }while (num != 0)
}

/* Se comenta esta parte ya que no nos hará falta

const areatriangulo = (base:number, altura:number) => {
    let res=0
    res=(base*altura)/2
    return res
}

const perimetrotriangulo = (l1:number, l2:number, l3:number) => {
    let res=0;
    res=l1+l2+l3
    return res
}

const areacuadrado = (lado:number) => {
    let res=0
    res=lado*lado
    return res
}

const perimetrocuadrado = (lado:number) => {
    let res=0
    res=lado*4
    return res
}

const areacirculo = (radio:number) => {
    let res=0
    res=(radio*radio)*Math.PI
    return res
}

const perimetrocirculo = (radio:number) => {
    let res=0
    res=2*radio*Math.PI
    return res
}
*/
main()