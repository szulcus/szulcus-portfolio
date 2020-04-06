// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
// IMAGES
import avatar from './Images/avatar.jpg'
import easyword from './Images/projects/easyword.png'
import easycalc from './Images/projects/easycalc.png'
import easymath from './Images/projects/easymath.png'
const AppComponent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
`
const Avatar = styled.div`
	width: 90vw;
	height: 90vw;
	max-width: 300px;
	max-height: 300px;
	background: url("${props => props.src}") no-repeat center center;
	background-size: cover;
	border-radius: 100%;
	transform: rotate(-90deg);
	margin: 10px;
`
const Message = styled.p`
	font-size: 20px;
`
const Projects = styled.div`
	width: 90vw;
	max-width: 1000px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`
const BrowserLink = styled.a`

`
const Project = styled.img`
	width: 100px;
	height: 100px;
	margin: 30px;
	border-radius: 100%;
	transition: all 0.3s ease;
	:hover {
		box-shadow: 0 0 20px var(--color-primary);
	}
`

class App extends Component {
	render() {
		return (
			<AppComponent>
				<Avatar src={avatar} />
				<Message>Witaj na moim portfolio!</Message>
				<Projects>
					<BrowserLink href="https://easyword.web.app" target="_blank">
						<Project src={easyword} />
					</BrowserLink>
					<BrowserLink href="https://easycalc.web.app" target="_blank">
						<Project src={easycalc} />
					</BrowserLink>
					<BrowserLink href="https://easymath.web.app" target="_blank">
						<Project src={easymath} />
					</BrowserLink>
				</Projects>
			</AppComponent>
		);
	}
}

export default App