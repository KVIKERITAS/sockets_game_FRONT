import {create} from 'zustand'
import {CharactersDataType} from './charactersStore.ts'
import {SingleItemType} from './SingleItemType'

export interface ItemEffect {
	effectName: string
	chance: number
}

type UserDataType = {
    character: CharactersDataType
    experience: number
    inventory: GeneratedItemType
    tokens: number
    username: string
}

export type OnlineUsersDataType = {
    id: string
    user: {
        username: string
        character: CharactersDataType
    }
}

export type GeneratedItemType = SingleItemType[]

type UserStoreType = {
    userSocketId: string | null
    user: UserDataType | null
    onlineUsers: OnlineUsersDataType[] | []
    userGeneratedItems: GeneratedItemType | []
    userEquippedWeapon: SingleItemType | null
    userEquippedArmor: SingleItemType | null
    userEquippedPotion: SingleItemType | null
    setUser: (data:UserDataType | null) => void
    setOnlineUsers: (data:OnlineUsersDataType[] | []) => void
    setUserSocketId: (data:string) => void
    setUserGeneratedItems: (data:GeneratedItemType) => void
    setUserEquippedWeapon: (data: SingleItemType) => void
    setUserEquippedArmor: (data:SingleItemType) => void
    setUserEquippedPotion: (data:SingleItemType | null) => void
}

export const useUserStore = create<UserStoreType>((set) => ({
    userSocketId: null,
    user: null,
    onlineUsers: [],
    userGeneratedItems: [],
    userEquippedWeapon: null,
    userEquippedArmor: null,
    userEquippedPotion: null,
    setUser: (data) => set({ user: data }),
    setOnlineUsers: (data) => set ({ onlineUsers: data }),
    setUserSocketId: (data) => set ({userSocketId: data }),
    setUserGeneratedItems: (data) => set ({ userGeneratedItems: data }),
    setUserEquippedWeapon: (data) => set ({ userEquippedWeapon: data }),
    setUserEquippedArmor: (data) => set ({ userEquippedArmor: data }),
    setUserEquippedPotion: (data) => set ({ userEquippedPotion: data })
}))