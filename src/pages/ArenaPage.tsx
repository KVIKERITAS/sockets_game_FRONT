import {Button, Col, Row} from "react-bootstrap";
import ArenaPlayerCard from "../components/ArenaPlayerCard.tsx";
import {useBattleStore} from "../store/battleStore.ts";
import {useUserStore} from "../store/userStore.ts";
import {socket} from "../App.tsx";
import {useEffect} from "react";

type ArenaPageType = {
    roomId: string
    timer: number
    setTimer: React.Dispatch<React.SetStateAction<number>>
}

const ArenaPage = ({roomId, timer, setTimer}: ArenaPageType) => {

    const battleData = useBattleStore(state => state.battleData)
    const currentUsername = useUserStore(state => state.user?.username)
    const setUserEquippedPotion = useUserStore(state => state.setUserEquippedPotion)

    useEffect(() => {
        if (timer <= 0) {
            socket.emit("timeOut", roomId)
            return
        }

        const timeout = setTimeout(() => {
            setTimer(timer - 1)
        }, 1000)

        return () => clearTimeout(timeout)
    }, [timer]);


    const handleAttack = () => {
        socket.emit("usedAttack", roomId)
    }

    const handleHeal = () => {
        socket.emit("usedPotion", roomId)
        setUserEquippedPotion(null)
    }
    return (
        <div className="container rounded">
            <Row>
                <Col>
                    {battleData &&
                        <ArenaPlayerCard player={battleData?.player1}/>
                    }
                </Col>
                <Col>
                    <div
                        className="text-center d-flex flex-column gap-3 align-items-center justify-content-center h-100">
                        {battleData?.turn === currentUsername &&
                            <>
                                {timer}
                                <Button onClick={handleAttack}>
                                    ATTACK
                                </Button>
                                <Button variant="success" onClick={handleHeal}>
                                    USE POTION
                                </Button>
                            </>
                        }

                    </div>
                </Col>
                <Col>
                    {battleData &&
                        <ArenaPlayerCard player={battleData?.player2}/>
                    }
                </Col>
            </Row>

        </div>
    );
};

export default ArenaPage;