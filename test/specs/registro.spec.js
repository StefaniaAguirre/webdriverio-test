import registroUsuarios from '../../test/pageobjects/registroPagina';
import * as Usuarios from '../../data/usuariosRegistro.json'
import * as url from '../../utils/Url.json';

describe('Test registro', async () => {

    //antes de ejecutar el caso de prueba
    beforeEach('Abrir Aplicación', async () => {
        await browser.url(url.BASE_URL_REGISTRO)
        await browser.maximizeWindow()
    } )

    it('Registrar hacedor', async () => {
        await registroUsuarios.registrarUsuario(Usuarios.usuarioHacedorRegistro);
        await pausa(2000);
    })

    it('Registrar cliente', async () => {
        await registroUsuarios.registrarUsuario(Usuarios.usuarioClienteRegistro);
        await pausa(2000);
    })


    after( async () => {
        await browser.deleteSession()
    })
})