import { pausa, elementoclick} from '../../utils/util'

let rolAsignado;

class Registro{

    get seleccionarRol() { return $('//div//div[@role="button"]')};

    //otra opcion para tomar el valor del rol
    //li[text() = "Hacedor"]
    get rolDinamico() {return $(`//li[@aria-selected="${rolAsignado}"]`)};

    get nombreUsuario() {return $('//div//input[@id="nombre"]')};

    get edadUsuario() {return $('//div//input[@id="edad"]')};

    get telefonoUsuario() {return $('//div//input[@id="telefono"]')};
    
    get direccionUsuario() {return $('//div//input[@id="direccion"]')};

    get correoUsuario() {return $('//div//input[@id="correo"]')};

    get contrasenaUsuario() {return $('//div//input[@id="contrasena"]')};

    get botonRegistrar() {return $('//div//button[contains(text(),"Registrarse")]')}

    async registrarUsuario({nombre, edad, telefono, direccion, correo, contrasena, rol}){
        rolAsignado = rol;
        await this.seleccionarRol.click();
        await pausa(2000);
        await this.rolDinamico.click();
        await pausa(2000);
        await this.nombreUsuario.setValue(nombre);
        await pausa(2000);
        await this.edadUsuario.setValue(edad);
        await pausa(2000);
        await this.telefonoUsuario.setValue(telefono);
        await pausa(2000);
        await this.direccionUsuario.setValue(direccion);
        await pausa(2000);
        await this.correoUsuario.setValue(correo);
        await pausa(2000);
        await this.contrasenaUsuario.setValue(contrasena);
        await pausa(2000);
        await this.botonRegistrar.click();
        await pausa(10000);
    }

}

export default new Registro();