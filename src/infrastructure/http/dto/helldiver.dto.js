/**
 * @typedef {Object} HelldiverDTO
 * @property {string} id
 * @property {string} name
 */

class HelldiverDTO {
    /**
     * @param {Object} data
     * @param {string} data.id
     * @param {string} data.name
     */
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
    }
}

export default HelldiverDTO;