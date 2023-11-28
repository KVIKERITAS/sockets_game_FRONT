import {checkGrade} from '../../utils/gradeChecker'
import {handleItemTooltip} from './ItemCategorytTooltipMapper'
import {ItemCategory} from '../../types/ItemCategory'
import ItemEffect from './ItemEffect'
import {InventoryItemsProps} from '../SingleInventoryItem'

const shouldDisplayGrade = (category: ItemCategory) => category !== ItemCategory.Potions

const ItemTooltip = ({item}: InventoryItemsProps) => {
	const detail: string = handleItemTooltip(item)
	
	return <>
		<p className="fw-bolder">{item.name}</p>
		{shouldDisplayGrade(item.category) &&
			<p>Grade <span className={`${checkGrade(item.grade)} fw-bolder`}>{item.grade}</span></p>
		}
		<p>{detail}</p>
		{item.effects.map(ItemEffect)}
	</>
}

export default ItemTooltip
