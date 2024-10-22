/**
 * @typedef {Object} Helldiver
 * @property {string} id
 * @property {string} name
 */

class Helldiver {
    /**
     * @param {string} id
     * @param {string} name
     */
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    /**
     * @returns {Helldiver}
     */
    get () {
        return this;
    }
}

export default Helldiver;