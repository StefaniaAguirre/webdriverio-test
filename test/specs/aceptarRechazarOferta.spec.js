import inicioSesion from '../../test/pageObjects/inicioSesionPagina';
import * as usuarios from '../../data/usuariosInicioSesion.json';
import * as servicios from '../../data/servicio.json'
import * as url from '../../utils/Url.json';
import { pausa } from '../../utils/util';
import AceptarRechazarOferta from '../pageobjects/aceptarRechazarOferta'

describe('Test Aceptar y rechazar Ofertas en el perfil del hacedor', async () => {

    //antes de ejecutar el caso de prueba
    before('Abrir Aplicación', async () => {
        await browser.url(url.BASE_UTIL)
        await browser.maximizeWindow()
    } )

    //Aceptar y rechazar Oferta 
    it('Ingresar al perfil Hacedor y aceptar y rechazarOfertas', async () =>{
        await inicioSesion.iniciarSesion(usuarios.usuarioHacedor);
        await AceptarRechazarOferta.cambiarEstadoOferta(servicios.estadoOferta)
        await pausa(2000)
    })

    after( async () => {
        await browser.deleteSession()
    })
})