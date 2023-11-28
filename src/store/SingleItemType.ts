import {ItemCategory} from '../types/ItemCategory'
import {ItemEffect} from './userStore'

export type SingleItemType = {
	category: ItemCategory;
	name: string;
	image: string;
	minDamage: number | null;
	maxDamage: number | null;
	minArmor: number | null;
	maxArmor: number | null;
	grade: string;
	slots: number;
	healing: number;
	effects: ItemEffect []
}