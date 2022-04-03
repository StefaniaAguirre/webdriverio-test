import { pausa, elementoclick} from '../../utils/util'

class serviciosHabilitados {

    get navegadorServicios() {return $(`//div//button[text() = "Solicitar Servicios"]`)}; 

    get seleccionarServicios() { return $(`//div[@role="button"]`)};

    get serviciosHabilitados() { return $(`//li`)};

    async consultarServicios(){
        await this.navegadorServicios.click();
        await pausa(1000);
        await this.seleccionarServicios.click();
        await pausa(1000);
        await this.serviciosHabilitados.click();
        await pausa(2000);
    }
}
export default new serviciosHabilitados()