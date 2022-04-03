import { pausa, elementoclick} from '../../utils/util'

let rolAsignado;

class InicioSesion{

    
    get seleccionarRol() { return $(`//div//div[@role="button"]`)};

    get rolDinamico() { return $(`//li[contains(text(), "${rolAsignado}")]`)}

    get correoUsuario(){ return $('//div//input[@id="correo"]')}

    get contrasenaUsuario() {return $('//div//input[@ id="contrasena"]')}

    get botonIniciarSesion() {return $("//div//button[contains(text(), 'Iniciar Sesion')]")}
    async iniciarSesion({
        correo,
        contrasena,
        rol,
    }){
        rolAsignado = rol;
        await this.seleccionarRol.click();
        await pausa(1000);
        await this.rolDinamico.click();
        await pausa(1000);
        await this.correoUsuario.setValue(correo);
        await pausa(1000);
        await this.contrasenaUsuario.setValue(contrasena);
        await pausa(1000);
        await this.botonIniciarSesion.click();
        await pausa(2000);
    }
}

export default new InicioSesion();