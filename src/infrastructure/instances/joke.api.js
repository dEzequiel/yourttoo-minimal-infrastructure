
import ApiResponse from "../http/api-response.js";

/** @type {Http} */
export const jokeApi = {
    /**
     * @param {string} path
     * @param {Record<string, any>=} params
     * @param {any=} config
     * @returns {Promise<any>}
     */
    get: async (path, params, config) => {
        try {
            const response = await fetch(process.env.JOKE_API_URL);
            const data = await response.json();
            return new ApiResponse(data);
        } catch (error) {
            return new ApiResponse(null, error.message);
        }
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
}