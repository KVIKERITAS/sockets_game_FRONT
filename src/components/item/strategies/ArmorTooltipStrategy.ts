import {SingleItemType} from '../../../store/SingleItemType'

export const ArmorTooltipStrategy = (item: SingleItemType) => {
	return `Armor: ${item.minArmor}-${item.maxArmor}`
}
