/**
 * @typedef {Object} ApiResponse
 * @property {boolean} succeeded
 * @property {string} message
 * @property {string[]} errors
 * @property {any} data
 * @template T
 */

/**
 * Class to build and represent API responses.
 * @template T
 */
class ApiResponse {
    /**
     * Constructor
     * @param {T} [data]
     * @param {string} [message]
     */
    constructor(data = null, message = null) {
        if (typeof data === 'string') {
            this.succeeded = false;
            this.message = data;
            this.data = null;
        } else {
            this.succeeded = true;
            this.message = message;
            this.data = data;
        }
        this.errors = [];
    }

    /**
     * @type {boolean}
     */
    succeeded;

    /**
     * @type {string}
     */
    message;

    /**
     * @type {string[]}
     */
    errors;

    /**
     * @type {T | null}
     */
    data;
}

export default ApiResponse;