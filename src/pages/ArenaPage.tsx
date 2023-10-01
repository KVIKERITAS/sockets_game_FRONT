import {Button, Card, Col, OverlayTrigger, ProgressBar, Row, Tooltip} from "react-bootstrap";

const ArenaPage = () => {
    return (
        <div className="container rounded">
            <Row>
                <Col>
                    <div className="d-flex gap-3 flex-column align-items-center justify-content-center border p-2 rounded">

                        <p className="text-primary">Username</p>

                        <div className="text-center">
                            <Card style={{padding: "0px", width: "100px"}}>
                                <Card.Img src="https://i.ibb.co/c2yT8Y4/Character1-face1.png"/>
                            </Card>
                        </div>

                        <div className="mt-2 w-100">
                            <ProgressBar now={100} variant="success" label={`${100}%`} />
                        </div>

                        <div className="d-flex gap-1">
                            <OverlayTrigger
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip`}>
                                        <p className="fw-bolder">Item name</p>
                                        <p>Grade <span className={`fw-bolder`}>A</span></p>
                                        <p>Damage <span className="fw-bolder">50-70</span></p>
                                        {/*{item.effects.map((effect, idx) =>*/}
                                        {/*    <p key={idx}>{effectName(effect.effectName)} <span className="fw-bolder">{effect.chance}%</span></p>*/}
                                        {/*)}*/}
                                    </Tooltip>
                                }
                            >
                                <Card style={{padding: "0px", cursor: "pointer", width: "70px", height: "70px"}}>
                                    <Card.Img
                                        src="https://i.ibb.co/RPzFYvW/daggers-8.png"/>
                                </Card>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip`}>
                                        <p className="fw-bolder">Item name</p>
                                        <p>Grade <span className={`fw-bolder`}>A</span></p>
                                        <p>Damage <span className="fw-bolder">50-70</span></p>
                                        {/*{item.effects.map((effect, idx) =>*/}
                                        {/*    <p key={idx}>{effectName(effect.effectName)} <span className="fw-bolder">{effect.chance}%</span></p>*/}
                                        {/*)}*/}
                                    </Tooltip>
                                }
                            >
                                <Card style={{padding: "0px", cursor: "pointer", width: "70px", height: "70px"}}>
                                    <Card.Img
                                        src="https://i.ibb.co/RPzFYvW/daggers-8.png"/>
                                </Card>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip`}>
                                        <p className="fw-bolder">Item name</p>
                                        <p>Grade <span className={`fw-bolder`}>A</span></p>
                                        <p>Damage <span className="fw-bolder">50-70</span></p>
                                        {/*{item.effects.map((effect, idx) =>*/}
                                        {/*    <p key={idx}>{effectName(effect.effectName)} <span className="fw-bolder">{effect.chance}%</span></p>*/}
                                        {/*)}*/}
                                    </Tooltip>
                                }
                            >
                                <Card style={{padding: "0px", cursor: "pointer", width: "70px", height: "70px"}}>
                                    <Card.Img
                                        src="https://i.ibb.co/RPzFYvW/daggers-8.png"/>
                                </Card>
                            </OverlayTrigger>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="text-center d-flex align-items-center justify-content-center h-100">
                        <Button>
                            ATTACK
                        </Button>
                    </div>
                </Col>
                <Col>
                    <div className="d-flex gap-3 justify-content-center">

                        <div className="d-flex flex-column gap-1">
                            <OverlayTrigger
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip`}>
                                        <p className="fw-bolder">Item name</p>
                                        <p>Grade <span className={`fw-bolder`}>A</span></p>
                                        <p>Damage <span className="fw-bolder">50-70</span></p>
                                        {/*{item.effects.map((effect, idx) =>*/}
                                        {/*    <p key={idx}>{effectName(effect.effectName)} <span className="fw-bolder">{effect.chance}%</span></p>*/}
                                        {/*)}*/}
                                    </Tooltip>
                                }
                            >
                                <Card style={{padding: "0px", cursor: "pointer", width: "70px", height: "70px"}}>
                                    <Card.Img
                                        src="https://i.ibb.co/RPzFYvW/daggers-8.png"/>
                                </Card>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip`}>
                                        <p className="fw-bolder">Item name</p>
                                        <p>Grade <span className={`fw-bolder`}>A</span></p>
                                        <p>Damage <span className="fw-bolder">50-70</span></p>
                                        {/*{item.effects.map((effect, idx) =>*/}
                                        {/*    <p key={idx}>{effectName(effect.effectName)} <span className="fw-bolder">{effect.chance}%</span></p>*/}
                                        {/*)}*/}
                                    </Tooltip>
                                }
                            >
                                <Card style={{padding: "0px", cursor: "pointer", width: "70px", height: "70px"}}>
                                    <Card.Img
                                        src="https://i.ibb.co/RPzFYvW/daggers-8.png"/>
                                </Card>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip`}>
                                        <p className="fw-bolder">Item name</p>
                                        <p>Grade <span className={`fw-bolder`}>A</span></p>
                                        <p>Damage <span className="fw-bolder">50-70</span></p>
                                        {/*{item.effects.map((effect, idx) =>*/}
                                        {/*    <p key={idx}>{effectName(effect.effectName)} <span className="fw-bolder">{effect.chance}%</span></p>*/}
                                        {/*)}*/}
                                    </Tooltip>
                                }
                            >
                                <Card style={{padding: "0px", cursor: "pointer", width: "70px", height: "70px"}}>
                                    <Card.Img
                                        src="https://i.ibb.co/RPzFYvW/daggers-8.png"/>
                                </Card>
                            </OverlayTrigger>
                        </div>

                        <div className="text-center">
                            <Card style={{padding: "0px", width: "100px"}}>
                                <Card.Img src="https://i.ibb.co/c2yT8Y4/Character1-face1.png"/>
                            </Card>
                        </div>
                    </div>
                    <div className="mt-2">
                        <ProgressBar now={100} variant="success" label={`${100}%`} />
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default ArenaPage;