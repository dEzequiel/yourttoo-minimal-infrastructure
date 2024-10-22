import { helldivers } from "../../mocks/helldiversData.js";
import ApiResponse from "../http/api-response.js";


/** @type {Http} */
export const fakeData = {
    /**
     * @param {string} path
     * @param {Record<string, any>=} params
     * @param {any=} config
     * @returns {Promise<any>}
     */
    get: async (path, params, config) => {
        const result = new ApiResponse(helldivers)
        return result;
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