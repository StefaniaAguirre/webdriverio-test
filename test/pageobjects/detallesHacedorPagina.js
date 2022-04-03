import { pausa, elementoclick} from '../../utils/util'

let idTarea
class detallesHacedor{

    get navegadorHabilidades() {return $(`//div//button[text() = "Habilidades"]`)}; 

    get seleccionarRol() { return $(`//div[@role="button"]`)};

    get habilidadesHacedor() { return $(`//li[@data-value ="${idTarea}"]`)}

    get precioHabilidad() {return $(`//div//input[@id="precioH"]`)};

    get radio() {return $(`#radio`)};

    get agregarHabilidades() {return $('//button[text() =" Agregar "]')}

    async registrarDetallesHacedor({idHabilidad, precio, radio}){
        idTarea =idHabilidad;
        await this.navegadorHabilidades.click();
        await pausa(1000);
        await this.seleccionarRol.click()
        await pausa(1000);
        await this.habilidadesHacedor.click();
        await pausa(1000);
        await this.precioHabilidad.setValue(precio);
        await pausa(1000);
        await this.radio.setValue(radio);
        await pausa(1000);
        await this.agregarHabilidades.click();
        await pausa(5000)
    }

}

export default new detallesHacedor();
