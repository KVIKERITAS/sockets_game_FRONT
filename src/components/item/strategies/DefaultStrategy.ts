import {SingleItemType} from '../../../store/SingleItemType'

export const DefaultStrategy = (item: SingleItemType) => {
	return `Grade: ${item.grade}`
}
