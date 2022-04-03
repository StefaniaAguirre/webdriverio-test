import inicioSesion from '../../test/pageObjects/inicioSesionPagina';
import * as usuarios from '../../data/usuariosInicioSesion.json';
import * as url from '../../utils/Url.json';
import { pausa } from '../../utils/util';
import habilidadesHacedor from '../pageobjects/habilidadesHacedorPagina'


describe('Test consultarHabilidadesHacedor', async () =>{

    before('Abrir Aplicación', async () => {
        await browser.url(url.BASE_UTIL)
        await browser.maximizeWindow()
    })

    //habilidades del hacedor
    it('Mostrar los detalles del perfil Hacedor', async () =>{
        await inicioSesion.iniciarSesion(usuarios.usuarioHacedor)
        await habilidadesHacedor.mostrarHabilidadesHacedor();
        await pausa(2000)
    })

})