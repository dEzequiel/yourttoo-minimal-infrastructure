import JokeDTO from "../http/dto/joke.dto.js";
import '../../domain/repositories/http.js';

/**
 * @typedef {Object} JokeRepository
 * @property {function(): Promise<JokeDTO>} getJokes
 */

/**
 * 
 * @param {Http} client 
 * @returns {JokeRepository}
 */
const JokeRepository = function (client) {
    return {
        /**
         * @returns {Promise<JokeDTO>}
         */
        getJoke: async () => {
            const response = await client.get()
            return new JokeDTO(response.data);
        },
    };
}

export default JokeRepository;