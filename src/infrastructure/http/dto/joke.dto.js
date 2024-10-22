import Joke from "../../../domain/models/joke.js";

/**
 * @typedef {Object} JokeDTO
 * @property {string} id
 * @property {string} type
 * @property {string} punchline
 */
class JokeDTO {
    /**
     * 
     * @param {Joke} joke 
     */
    constructor(joke) {
        this.id = joke.id;
        this.type = joke.type;
        this.punchline = joke.punchline;
    }
}

export default JokeDTO;