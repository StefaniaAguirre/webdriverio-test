import { pausa, elementoclick} from '../../utils/util'

let numero;
let estado;

class AceptarRechazarOferta{
    get navegadorOferta() {return $(`//div//button[text() = "Ofertas"]`)}; 

    get verDetalle() {return $(`(//button[text() = "Ver "])[${numero}]`)};

    get botonOferta() {return $(`//button[text() = "${estado}"]`)}

    get botonSalir() {return $(`//button[text() = "Salir"]`)}

    async cambiarEstadoOferta({ posicion, opcion }){
        numero = posicion;
        estado = opcion;
        await this.navegadorOferta.click();
        await pausa(1000);
        await this.verDetalle.click();
        await pausa(1000);
        await this.botonOferta.click();
        await pausa(2000);
        await this.botonSalir.click();
        await pausa(5000);
    }

}

export default new AceptarRechazarOferta()