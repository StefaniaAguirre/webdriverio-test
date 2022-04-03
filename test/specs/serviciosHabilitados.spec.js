import inicioSesion from '../pageObjects/inicioSesionPagina';
import * as usuarios from '../../data/usuariosInicioSesion.json';
import * as url from '../../utils/Url.json';
import { pausa } from '../../utils/util';
import serviciosHabilitados from '../pageobjects/serviciosHabilitadosPagina'

describe('Test consultarHabilidadesHacedor', async () =>{

    before('Abrir Aplicación', async () => {
        await browser.url(url.BASE_UTIL)
        await browser.maximizeWindow()
    })

    
    it('Mostrar los servicios que se pueden solicitar', async () =>{
        await inicioSesion.iniciarSesion(usuarios.usuarioCliente)
        await serviciosHabilitados.consultarServicios();
        await pausa(2000)
    })
    
    after( async () => {
        await browser.deleteSession()
    })

})