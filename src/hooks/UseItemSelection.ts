import {useUserStore} from '../store/userStore.ts'
import {ItemCategory} from '../types/ItemCategory'
import {SingleItemType} from '../store/SingleItemType'

const useItemSelection = () => {
	const setUserGeneratedWeapon = useUserStore(state => state.setUserEquippedWeapon)
	const setUserGeneratedArmor = useUserStore(state => state.setUserEquippedArmor)
	const setUserGeneratedPotion = useUserStore(state => state.setUserEquippedPotion)
	
	const handleSelect = (item: SingleItemType) => {
		switch (item.category) {
			case ItemCategory.Weapon:
				setUserGeneratedWeapon(item)
				break;
			case ItemCategory.Armor:
				setUserGeneratedArmor(item)
				break;
			default:
				setUserGeneratedPotion(item)
		}
	}
	
	return handleSelect
}

export default useItemSelection

