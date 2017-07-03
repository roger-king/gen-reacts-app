import './chat.component.scss';
import * as React from 'react';
import { Row, Col, Input, Button } from 'antd';

/**
 * ChatComponent
 */

export class ChatComponent extends React.Component<any, any> {
    constructor() {
        super();

        this.state = {
            cmd: ''
        }
    }
    
    setCmd(e) {
        this.setState({cmd: e.target.value});
    }

    render() {
        const state = this.state;

        return(
            <div className="chat-container">
                <div className="transcript-container"></div>
                <Row>
                    <Input size="large" placeholder="Search" value={state.cmd} onChange={this.setCmd}/>
                    <Button type="primary" ghost>Send</Button>
                </Row>
            </div>
        );
    }
}
