import HelldiverDTO from "../http/dto/helldiver.dto.js";
import '../../domain/repositories/http.js';

/**
 * @typedef {Object} HelldiverRepository
 * @property {function(): Promise<HelldiverDTO[]>} getHelldivers
 * @property {function(): Promise<HelldiverDTO>} createHelldiver
 */

/**
 * @param {Http} client
 * @returns {HelldiverRepository}
 */
const HelldiverRepository = function (client) {
    return {
        /**
         * @returns {Promise<HelldiverDTO[]>}
         */
        getHelldivers: async () => {
            const response = await client.get()
            return response.data.map(helldiver => new HelldiverDTO(helldiver));
        },
        
        /**
         * @returns {Promise<HelldiverDTO>}
         */
        createHelldiver: async () => {
            const response = await client.post('/helldivers');
            return new HelldiverDTO(response.data);
        },
    };
};

export default HelldiverRepository;