import { Col } from "react-bootstrap";
import {useUserStore} from "../store/userStore.ts";
import SingleUserCard from "./SingleUserCard.tsx";

const OnlineUsers = () => {

    const onlineUsers = useUserStore(state => state.onlineUsers)

    return (
        <Col className="border-start">
            <h4>Online Users</h4>
            {onlineUsers.map(user => <SingleUserCard key={user.id} user={user}/>)}
        </Col>
    );
};

export default OnlineUsers;