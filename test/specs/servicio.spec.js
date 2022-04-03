import inicioSesion from '../../test/pageObjects/inicioSesionPagina';
import * as usuarios from '../../data/usuariosInicioSesion.json';
import * as servicios from '../../data/servicio.json'
import * as url from '../../utils/Url.json';
import { pausa } from '../../utils/util';
import servicio from '../pageobjects/servicio.js';

describe('Test crearServicio', async () => {

    //antes de ejecutar el caso de prueba
    before('Abrir Aplicación', async () => {
        await browser.url(url.BASE_UTIL)
        await browser.maximizeWindow()
    } )

    
    it('crearServicio', async () =>{
        await inicioSesion.iniciarSesion(usuarios.usuarioCliente);
        await servicio.crearServicio(servicios.servicios1);
        await pausa(2000)
    })

    after( async () => {
        await browser.deleteSession()
    })
})