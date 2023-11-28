import {SingleItemType} from '../../store/SingleItemType'

/**
 * Interface for item category tooltip strategies.
 * Each strategy should implement this function.
 * @param {object} item - The item to process.
 * @returns {string} - Processed detail string for the item.
 */
export type ItemCategoryTooltipStrategy = (item: SingleItemType) => string
