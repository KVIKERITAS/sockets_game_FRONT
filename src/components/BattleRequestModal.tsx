import {Button, Modal} from "react-bootstrap";

type BattleModalType = {
    showBattleModal: boolean
    setShowBattleModal:  React.Dispatch<React.SetStateAction<boolean>>
    text: string
}

const BattleRequestModal = ({showBattleModal, setShowBattleModal, text}:BattleModalType) => {
    const handleClose = () => setShowBattleModal(false);

    return (
        <>
            <Modal
                show={showBattleModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Battle request</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {text}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Deny
                    </Button>
                    <Button variant="success">Accept</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default BattleRequestModal;