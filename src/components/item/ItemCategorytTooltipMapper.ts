import {WeaponTooltipStrategy} from './strategies/WeaponTooltipStrategy'
import {ArmorTooltipStrategy} from './strategies/ArmorTooltipStrategy'
import {PotionTooltipStrategy} from './strategies/PotionTooltipStrategy'
import {ItemCategory} from '../../types/ItemCategory'
import {ItemCategoryTooltipStrategy} from './ItemCategoryTooltipStrategy'
import {SingleItemType} from '../../store/SingleItemType'

const itemCategoryStrategies: Record<ItemCategory, ItemCategoryTooltipStrategy> = {
	[ItemCategory.Weapon]: WeaponTooltipStrategy,
	[ItemCategory.Armor]: ArmorTooltipStrategy,
	[ItemCategory.Potions]: PotionTooltipStrategy
}

export const handleItemTooltip = (item: SingleItemType) => {
	return itemCategoryStrategies[item.category](item)
}
