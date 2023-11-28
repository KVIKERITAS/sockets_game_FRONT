import {effectName} from '../../utils/effectName'
import {ItemEffect} from '../../store/userStore'

const ItemEffect = (effect: ItemEffect, index: number) => (
	<p key={index}>
		{effectName(effect.effectName)} <span className="fw-bolder">{effect.chance}%</span>
	</p>
)

export default ItemEffect
