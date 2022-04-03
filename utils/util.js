export const pausa = async (tiempo) => {
    await browser.pause(tiempo);
};

/**
 * 
 * @param {elemento} elementoId 
 * @param {espera} tiempo 
 */
export const elementoClick = async (elementoId, tiempo ) => {
    await elementoId.elementoClick({timeout:tiempo})
}