import inicioSesion from '../pageobjects/inicioSesionPagina';
import DetallesHacedor from '../pageobjects/detallesHacedorPagina';
import * as detalles from '../../data/detallesHacedor.json'
import * as url from '../../utils/Url.json';
import { pausa } from '../../utils/util';
import * as usuarios from '../../data/usuariosInicioSesion.json'

describe('Test detallesHacedor', async () => {

    //antes de ejecutar el caso de prueba
    before('Abrir Aplicación', async () => {
        await browser.url(url.BASE_UTIL)
        await browser.maximizeWindow()
    } )

    it('Registrar detalles del hacedor', async () => {
        await inicioSesion.iniciarSesion(usuarios.usuarioHacedor);
        await DetallesHacedor.registrarDetallesHacedor(detalles.detalleHacedor1);
        await pausa(2000);
    })


    after( async () => {
        await browser.deleteSession()
    })
})