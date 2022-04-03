import inicioSesion from '../../test/pageObjects/inicioSesionPagina';
import * as usuarios from '../../data/usuariosInicioSesion.json';
import * as url from '../../utils/Url.json';
import { pausa } from '../../utils/util';
import hacedoresCondiciones from '../pageobjects/hacedoresCondicionesPagina'

describe('Test Consultar Servicios para las que un hacedor cumple las condiciones', async () => {

    //antes de ejecutar el caso de prueba
    before('Abrir Aplicación', async () => {
        await browser.url(url.BASE_UTIL)
        await browser.maximizeWindow()
    } )

    
    it('Verificar Hacedores', async () =>{
        await inicioSesion.iniciarSesion(usuarios.usuarioCliente);
        await hacedoresCondiciones.verificarHacedoresCumplenCondiciones(2);
        await pausa(2000)
    })

    after( async () => {
        await browser.deleteSession()
    })
})