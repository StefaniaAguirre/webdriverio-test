import inicioSesion from '../../test/pageObjects/inicioSesionPagina';
import * as usuarios from '../../data/usuariosInicioSesion.json';
import * as url from '../../utils/Url.json';
import { pausa } from '../../utils/util';
import detallesOfertaAceptada from '../pageobjects/detalleOfertaAceptada.js'

describe('Test Consultar tabla que contiene los detalles de las ofertas que han sido aceptadas', async () => {

    //antes de ejecutar el caso de prueba
    before('Abrir Aplicación', async () => {
        await browser.url(url.BASE_UTIL)
        await browser.maximizeWindow()
    } )

    
    it('Verificar ofertas aceptadas', async () =>{
        await inicioSesion.iniciarSesion(usuarios.usuarioCliente2);
        await detallesOfertaAceptada.consultarDetalles();
        await pausa(2000)
    })

    after( async () => {
        await browser.deleteSession()
    })
})