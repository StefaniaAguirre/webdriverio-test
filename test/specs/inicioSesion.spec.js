import inicioSesion from '../../test/pageObjects/inicioSesionPagina';
import * as usuarios from '../../data/usuariosInicioSesion.json';
import * as url from '../../utils/Url.json';
import { pausa } from '../../utils/util';

describe('Test InicioSesion', async () => {

    //antes de ejecutar el caso de prueba
    beforeEach('Abrir Aplicación', async () => {
        await browser.url(url.BASE_UTIL)
        await browser.maximizeWindow()
    } )

    //Inicio con cliente
    it('inicio Exitoso cliente', async () =>{
        await inicioSesion.iniciarSesion(usuarios.usuarioCliente)
        await pausa(2000)
    })

    // Inicio con hacedor
    it('inicio Exitoso hacedor', async () =>{
        await inicioSesion.iniciarSesion(usuarios.usuarioHacedor)
        await pausa(2000)
    })

    after( async () => {
        await browser.deleteSession()
    })
})