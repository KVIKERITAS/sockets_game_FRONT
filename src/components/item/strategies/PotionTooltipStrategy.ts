import {SingleItemType} from '../../../store/SingleItemType'

export const PotionTooltipStrategy = (item: SingleItemType) => {
	return `Healing: ${item.healing}`
}
