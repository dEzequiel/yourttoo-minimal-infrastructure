import "../../infrastructure/repositories/helldiver.repository.js";

/**
 * @typedef {Object} HelldiverService
 * @property {function(): Promise<HelldiverDTO[]>} getHelldivers
 * @property {function(): Promise<HelldiverDTO>} createHelldiver
 */

/**
 * @param {HelldiverRepository} helldiverRepository
 * @returns {HelldiverService}
 */
const HelldiversService = function (helldiverRepository) {
    return {
        /**
         * @returns {Promise<HelldiverDTO[]>}
         */
        getHelldivers: async () => {
            return helldiverRepository.getHelldivers();
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