import { helldivers } from "../../mocks/helldiversData.js";


/** @type {Http} */
export const fakeData = {
    /**
     * @param {string} path
     * @param {Record<string, any>=} params
     * @param {any=} config
     * @returns {Promise<any>}
     */
    get: async (path, params, config) => {
        return { data: helldivers };
    },
    /**
     * @param {string} path
     * @param {Record<string, any>=} params
     * @param {any=} config
     * @returns {Promise<any>}
     */
    post: async (path, params, config) => {
        // Implementación aquí
    },
    /**
     * @param {string} path
     * @param {Record<string, any>=} params
     * @param {any=} config
     * @returns {Promise<any>}
     */
    put: async (path, params, config) => {
        // Implementación aquí
    },
    /**
     * @param {string} path
     * @param {any=} params
     * @param {any=} config
     * @returns {Promise<any>}
     */
    delete: async (path, params, config) => {
        // Implementación aquí
    }
};