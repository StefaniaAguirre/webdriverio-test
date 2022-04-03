import { pausa, elementoclick} from '../../utils/util'

let idTarea
class Servicio{

    get navegadorServicio() {return $(`//div//button[text() = "Solicitar Servicios"]`)}; 

    get seleccionarServicio() { return $(`//div[@role="button"]`)};

    get serviciosHabilitados() { return $(`//li[@data-value ="${idTarea}"]`)}

    get cantidad() {return $(`#item`)};
    
    get descripcion() {return $(`#descripcion`)};
    
    get precioServicio() {return $(`#precio`)};

    get agregarServicio() {return $('//button[text() =" Crear "]')}
    

    async crearServicio({idtareaServicio, cantidad, descripcion, precio}){
        idTarea =idtareaServicio;
        await this.navegadorServicio.click();
        await pausa(1000);
        await this.seleccionarServicio.click();
        await pausa(1000);
        await this.serviciosHabilitados.click();
        await pausa(1000);
        await this.cantidad.setValue(cantidad);
        await pausa(1000);
        await this.descripcion.setValue(descripcion);
        await pausa(1000);
        await this.precioServicio.setValue(precio);
        await pausa(1000);
        await this.agregarServicio.click();
        await pausa(5000)
    }

}

export default new Servicio();
