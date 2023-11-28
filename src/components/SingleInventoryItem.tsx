import {Card, OverlayTrigger, Tooltip} from 'react-bootstrap'
import ItemTooltip from './item/ItemTooltip'
import useItemSelection from '../hooks/UseItemSelection'
import {SingleItemType} from '../store/SingleItemType'

export type InventoryItemsProps = {
	item: SingleItemType
}

const SingleInventoryItem = ({item}: InventoryItemsProps) => {
	
	const handleSelect = useItemSelection()
	
	return (
		<div className="mt-1" onClick={() => handleSelect(item)}>
			<OverlayTrigger
				placement="right"
				overlay={
					<Tooltip id={`tooltip`}>
						<ItemTooltip item={item}/>
					</Tooltip>
				}
			>
				<Card style={{padding: '0px', cursor: 'pointer', width: '70px', height: '70px'}}>
					<Card.Img
						src={item.image}/>
				</Card>
			</OverlayTrigger>
		</div>
	)
}

export default SingleInventoryItem