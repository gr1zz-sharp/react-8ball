import { Col } from "react-bootstrap"
import './EightBall.css'

const EightBall = ({ message }) => {
    
    return(
        <Col>
            <div className="epos">
                <div className="eball">
                    <div className="egrad"></div>
                    <div className="ewin"></div>
                    <div className="triangle"></div>
                    <div className="textbox">{message}</div>
                </div>
                <div className="shadow"></div>
            </div>
        </Col>
    )

}

export default EightBall