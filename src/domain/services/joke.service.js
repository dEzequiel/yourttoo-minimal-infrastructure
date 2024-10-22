/**
 * @typedef {Object} JokeService
 * @property {function(): Promise<JokeDTO[]>} getRandomJoke
 */

/**
 * @param {import("../../infrastructure/repositories/joke.repository").JokeRepository} jokeRepository
 * @returns {JokeService}
 */
const JokeService = function (jokeRepository) {
    return {
        /**
         * @returns {Promise<JokeDTO>}
         */
        getRandomJoke: async () => {
            return await jokeRepository.getJoke();
        }
    }
}

export default JokeService