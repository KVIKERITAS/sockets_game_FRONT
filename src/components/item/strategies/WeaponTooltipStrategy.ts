import {SingleItemType} from '../../../store/SingleItemType'

export const WeaponTooltipStrategy = (item: SingleItemType) => {
	return `Damage: ${item.minDamage}-${item.maxDamage}`
}
