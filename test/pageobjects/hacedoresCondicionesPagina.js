import { pausa, elementoclick} from '../../utils/util'

let idServicio
class hacedoresCondiciones{

    get navegadorServicio() {return $(`//div//button[text() = "Consultar servicio"]`)}; 

    get servicioASolicitar() {return $('//div[@role="button"]')};

    get serviciosHabilitados() { return $(`//li[@data-value ="${idServicio}"]`)};

    get botonConsultar() {return $('//button[text() =" Consultar "]')};

    get botonAceptar() {return $('//button[text() ="Aceptar"]')};

    async verificarHacedoresCumplenCondiciones(servicio){
        idServicio = servicio;
        await this.navegadorServicio.click();
        await pausa(1000);
        await this.servicioASolicitar.click();
        await pausa(1000);
        await this.serviciosHabilitados.click();
        await pausa(1000);
        await this.botonConsultar.click();
        await pausa(1000);
        await this.botonAceptar.click();
        await pausa(2000);
    }
}

export default new hacedoresCondiciones()