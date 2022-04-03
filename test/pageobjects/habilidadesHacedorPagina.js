import { pausa, elementoclick} from '../../utils/util'

class habilidadesHacedor{

    get navegadorHabilidades() {return $(`//div//button[text() = "Detalles perfil"]`)}; 

    async mostrarHabilidadesHacedor(){
        await this.navegadorHabilidades.click();
        await pausa(5000);
    }
}

export default new habilidadesHacedor()