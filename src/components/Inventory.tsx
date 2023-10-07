import {Offcanvas} from "react-bootstrap";
import {BriefcaseIcon} from "@heroicons/react/24/outline";
import {useUserStore} from "../store/userStore.ts";
import SingleInventoryItem from "./SingleInventoryItem.tsx";

type PropsType = {
    handleClose: () => void
    show: boolean
}

const Inventory = ({handleClose, show}: PropsType) => {

    const user = useUserStore(state => state.user)

    const userEquippedWeapon = useUserStore(state => state.userEquippedWeapon)
    const userEquippedArmor = useUserStore(state => state.userEquippedArmor)
    const userEquippedPotion = useUserStore(state => state.userEquippedPotion)

    const weapons = user?.inventory.filter(item => item.category === "WEAPON")
    const armors = user?.inventory.filter(item => item.category === "ARMOR")
    const potions = user?.inventory.filter(item => item.category === "POTIONS")

    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title><BriefcaseIcon style={{width: "25px"}}/> Inventory</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="text-center">
                    <p className="fw-bolder text-warning">Equipped</p>
                    <div className="mt-1 d-flex justify-content-between m-5">
                        {userEquippedWeapon
                            ? <SingleInventoryItem item={userEquippedWeapon}/>
                            :
                            <p className="text-danger d-flex justify-content-center align-items-center border p-2 rounded">No
                                weapon</p>
                        }
                        {userEquippedArmor
                            ? <SingleInventoryItem item={userEquippedArmor}/>
                            :
                            <p className="text-danger d-flex justify-content-center align-items-center border p-1 rounded">No
                                armor</p>
                        }
                        {userEquippedPotion
                            ? <SingleInventoryItem item={userEquippedPotion}/>
                            :
                            <p className="text-danger d-flex justify-content-center align-items-center border p-2 rounded">No
                                potion</p>
                        }
                    </div>
                </div>
                <div className="d-flex flex-wrap gap-1 align-content-start border-top mt-5">
                    <p className="d-block w-100 text-center mt-1">Weapons</p>
                    {weapons?.map((item, idx) => <SingleInventoryItem key={idx} item={item}/>)}
                </div>
                <div className="d-flex flex-wrap gap-1 align-content-start border-top mt-5">
                    <p className="d-block w-100 text-center mt-1">Armors</p>
                    {armors?.map((item, idx) => <SingleInventoryItem key={idx} item={item}/>)}
                </div>
                <div className="d-flex flex-wrap gap-1 align-content-start border-top mt-5">
                    <p className="d-block w-100 text-center mt-1">Potions</p>
                    {potions?.map((item, idx) => <SingleInventoryItem key={idx} item={item}/>)}
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Inventory;