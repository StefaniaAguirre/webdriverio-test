import { pausa, elementoclick} from '../../utils/util'


class detalleOfertaAceptada{

    get navegador() {return $(`//div//button[text() = "Ofertas Creadas"]`)}; 

    async consultarDetalles(){
      
        await this.navegador.click();
        await pausa(2000);
      
    }

}

export default new detalleOfertaAceptada();
