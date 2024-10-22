import "../../infrastructure/repositories/helldiver.repository.js";

/**
 * @typedef {Object} HelldiverService
 * @property {function(): Promise<HelldiverDTO[]>} getHelldivers
 * @property {function(): Promise<HelldiverDTO>} createHelldiver
 */

/**
 * @param {import("../../infrastructure/repositories/helldiver.repository").HelldiverRepository} helldiverRepository
 * @returns {HelldiverService}
 */
const HelldiversService = function (helldiverRepository) {
    return {
        /**
         * @returns {Promise<HelldiverDTO[]>}
         */
        getHelldivers: async () => {
            var result = helldiverRepository.getHelldivers();
            return result;
        },
        
        /**
         * @returns {Promise<HelldiverDTO>}
         */
        createHelldiver: async () => {
            return helldiverRepository.createHelldiver();
        },
    };
}


export default HelldiversService