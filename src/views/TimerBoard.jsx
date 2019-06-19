import React, { Component } from "react";
import { Segment, Header } from 'semantic-ui-react'

class TimerBoard extends Component {

    timer = 30;

    state = {
        timeRemaining: this.timer,
    }

    componentDidMount() {
        this.timer = setInterval(this.countDown, 1000);
    }

    countDown = () => {
        const timeRemaining = this.state.timeRemaining - 1;
        if (timeRemaining > 0) {
            this.setState({ timeRemaining });
        } else {
            clearInterval(this.timer);
            this.props.stopGame();
        }
    }

    render () {
        return (
            <Segment.Group>
                <Segment attached='top'>
                    <Header as='h2'>Timer</Header>
                </Segment>
                <Segment attached='bottom' padded='very'>
                    <div style={{color: 'black', margin:'1rem', fontSize: '4rem', fontWeight: 'bold'}}>
                        {this.state.timeRemaining}
                    </div>
                </Segment>
            </Segment.Group>
        );
    }
}

export default TimerBoard;
