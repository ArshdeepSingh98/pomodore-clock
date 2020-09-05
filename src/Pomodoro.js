import React from "react"
import styled from 'styled-components'
import ArrowUp from './Assets/expand_less-24px.svg'
import ArrowDown from './Assets/expand_more-24px.svg'
import Play from './Assets/play_arrow-24px.svg'
import Pause from './Assets/pause-24px.svg'
import Reset from './Assets/restore-24px.svg'


const StyledContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.direction ?? 'row'};
    align-items: center;
    justify-content: center;
    width: auto;
    height: ${props => props.height ?? 'auto'};
`
const StyledText = styled.p`
    font-size: ${props => props.size ?? '24px'};
    font-weight: bold;
    padding: ${props => props.padding ?? '0'}
`

const StyledImg = styled.img`
    height: ${props => props.size ?? '24px'};
    cursor: pointer;
    pointer-events: ${props => props.disabled ? 'none' : 'auto'}
`

const Counter = (props) => {
    const {type, length, handleChange, clockRunning} = props
    return (
        <StyledContainer direction={'column'}>
            <StyledText size={'36px'} padding={'10px'}>{type} Length</StyledText>
            <StyledContainer>
                <StyledText padding={'4px'}>{length}</StyledText>
                <StyledContainer direction={'column'}>
                    <StyledImg disabled={clockRunning} onClick={() => handleChange(type, 'increase')} src={ArrowUp} alt='' />
                    <StyledImg disabled={clockRunning} onClick={() => handleChange(type, 'decrease')} src={ArrowDown} alt='' />
                </StyledContainer>
            </StyledContainer>
        </StyledContainer>
    )
}

class Pomodoro extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState;

        this.handleChange = this.handleChange.bind(this);
    }

    get initialState() {
        return {
            session_length: 25,
            break_length: 5,
            time_left: 24,
            seconds_left: 59,
            clock_running: false,
            current_type: 'Session',
        }
    }

    componentDidMount() {
        // no need
        // this.setState({
        //     time_left: this.state.session_length
        // })
    }

    handleChange(current_type, change_type) {
        if (current_type === 'Session' && this.state.session_length >= 1) {
            this.setState({
                session_length: this.state.session_length + (change_type==='increase' ?  1 : -1),
            })
        }

        if (current_type === 'Break' && this.state.break_length >= 1) {
            this.setState({
                break_length: this.state.break_length + (change_type==='increase' ?  1 : -1),
            })
        }
    }

    handleReset = () => {
        console.log('reset')
        clearInterval(this.timer)
        clearInterval(this.seconds)
        this.setState(this.initialState)
    }

    handleRun = () => {
        console.log('time left:', this.state.time_left)

        if (this.state.clock_running === false) {
            this.timer = setInterval(() => {
                if (this.state.time_left === 0) {
                    if (this.state.current_type === 'Session') {
                        this.setState({
                            current_type: 'Break'
                        })
                    } else {
                        this.handleReset()
                    }
                }

                console.log("clock", this.state.time_left)
                this.setState({
                    time_left: this.state.time_left - 1
                })
            }, 6000)

            this.seconds = setInterval(() => {
                this.setState({
                    seconds_left: this.state.seconds_left - 1
                })
            }, 100)
        } else {
            clearInterval(this.timer)
            clearInterval(this.seconds)
        }

        this.setState({
            clock_running: !this.state.clock_running
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.session_length !== this.state.session_length) {
            if (this.state.session_length < 1) {
                this.setState({
                    session_length: 1,
                    time_left: 0,
                })
            }
        }

        if (prevState.break_length !== this.state.break_length) {
            if (this.state.break_length < 1) {
                this.setState({
                    break_length: 1,
                    time_left: 0,
                    clock_running: false,
                })
            }
        }

        if (prevState.current_type !== this.state.current_type ||
            prevState.session_length !== this.state.session_length ||
            prevState.break_length !== this.state.break_length) {
            this.setState({
                time_left: this.state.current_type === 'Session' ? this.state.session_length-1 : this.state.break_length,
            })
        }

        if (prevState.time_left !== this.state.time_left) {
            this.setState({
                seconds_left: 59
            })
        }
    }

    render() {
        return (
            <StyledContainer direction={'column'} height={'100%'}>
                <StyledText size={'42px'}>Pomodoro Clock</StyledText>
                <StyledContainer height={'100px'}>
                    <Counter handleChange={this.handleChange} clockRunning={this.state.clock_running} type={'Break'} length={this.state.break_length} />
                    <Counter  handleChange={this.handleChange} clockRunning={this.state.clock_running} type={'Session'} length={this.state.session_length} />
                </StyledContainer>
                <StyledContainer direction={'column'}>
                    <StyledText size={'36px'}>{this.state.current_type}</StyledText>
                    <StyledText size={'48px'}>{this.state.time_left}:{this.state.seconds_left}</StyledText>
                </StyledContainer>
                <StyledContainer>
                    <StyledImg size={'40px'} src={this.state.clock_running ? Pause : Play} onClick={this.handleRun} alt='' />
                    <StyledImg size={'40px'} src={Reset} onClick={this.handleReset} alt='' />
                </StyledContainer>
            </StyledContainer>
        )
    }
}

export default  Pomodoro