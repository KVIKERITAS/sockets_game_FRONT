import {Button, Col} from "react-bootstrap";
import {CircleStackIcon} from "@heroicons/react/24/outline";
import {socket} from "../App.tsx";
import GeneratedItem from "./GeneratedItem.tsx";
import {useUserStore} from "../store/userStore.ts";

const Generator = () => {

    const username = useUserStore(state => state.user?.username)
    const userGeneratedItems = useUserStore(state => state.userGeneratedItems)

    const generateWeapons = () => socket.emit("generate", username)

    return (
        <Col>
            <h4>Item Generator</h4>

            <Button className="w-100 p-3 mt-2 fw-bolder" onClick={generateWeapons}>
                GENERATE <CircleStackIcon className="text-warning" style={{width: "20px"}}/>
            </Button>

            <div className="d-flex justify-content-between gap-1 mt-2">
                {userGeneratedItems.map((item, idx) =>
                    <GeneratedItem key={idx} item={item}/>
                )}
            </div>
        </Col>
    );
};

export default Generator;