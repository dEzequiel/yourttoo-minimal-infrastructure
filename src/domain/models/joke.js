/**
 * @typedef {Object} Joke
 * @description Joke model
 * @param {number} id
 * @param {string} type
 * @param {string} punchline
 * @returns {Joke}
 */
class Joke {

    /**
     * @param {number} id 
     * @param {string} type 
     * @param {string} punchline 
     */
    constructor(id, type, punchline) {
        this.id = id;
        this.type = type;
        this.punchline = punchline;
    }

    /**
     * @returns {Joke}
     */
    get() {
        return this;
    }
}

export default Joke;