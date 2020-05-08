// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
// IMAGES
import avatar from './Images/avatar.jpg'
import easyword from './Images/projects/easyword.png'
import easycalc from './Images/projects/easycalc.png'
import easymath from './Images/projects/easymath.png'

const AppComponent = styled.div`
	width: 100vw;
	height: 100vh;
	max-width: 100%;
	height: calc(var(--vh, 1vh) * 100);
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
`
const Avatar = styled.div`
	min-width: 250px;
	min-height: 250px;
	background: url("${props => props.src}") no-repeat center center;
	background-size: cover;
	border-radius: 100%;
	margin: 10px;
	@media (min-width: 800px) {
		min-width: 300px;
		min-height: 300px;
	}
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
	border-radius: 100%;
	margin: 30px;
`
const Project = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 100%;
	transition: all 0.3s ease;
	:hover {
		box-shadow: 0 0 20px var(--color-primary);
	}
`
const Percent = styled.div`
	position: relative;
	width: 150px;
	height: 150px;
	border-radius: 50%;
	background: var(--color-bg);
`
const Number = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: #777;
	font-weight: bold;
	font-size: 30px;
`
const Lang = styled.strong`
	color: var(--color-secondary);
	font-size: 25px;
	margin: 20px 0;
`
const Digit = styled.span`

`
const Svg = styled.svg`
	position: relative;
	width: 150px;
	height: 150px;
	z-index: 2;
`
const Circle = styled.circle`
	width: 100%;
	height: 100%;
	fill: none;
	stroke-width: 10;
	stroke-linecap: round;
	transform: translate(5px, 5px);
	:nth-child(2) {
		stroke-dasharray: 440;
		stroke-dashoffset: calc(440 - (440 * ${props => props.width}) / 100);
	}
`
const Card = styled.div`
	position: relative;
	width: 250px;
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* background-color: gray; */
	border-radius: 10px;
	text-align: center;
	overflow: hidden;
	transition: all 0.3s ease;
	:nth-child(1) svg circle:nth-child(2) {
		stroke: #F16529;
	}
	:nth-child(2) svg circle:nth-child(2) {
		stroke: #2965f1;
	}
	:nth-child(3) svg circle:nth-child(2) {
		stroke: #F0DB4F;
	}
	:hover {
		cursor: pointer;
		transform: translateY(-10px);
		box-shadow: 0 0 30px gray;
	}
`
const Skills = styled.div`
	width: 100%;
	max-width: 1000px;
	display: flex;
	justify-content: space-around;
`
const SkillsDescription = styled.div`
	
	margin: 30px 0;
	padding: 30px;
`

class App extends Component {
	render() {
		return (
			<AppComponent>
				<Avatar src={avatar} />
				<Message>Witaj na moim portfolio!</Message>
				<Projects>
					<BrowserLink href="https://easyword123.pl" target="_blank">
						<Project src={easyword} />
					</BrowserLink>
					<BrowserLink href="https://easycalc.web.app" target="_blank">
						<Project src={easycalc} />
					</BrowserLink>
					<BrowserLink href="https://easyvalue.web.app" target="_blank">
						<Project src={easymath} />
					</BrowserLink>
				</Projects>
				<Skills>
					<Card>
						<Percent>
							<Svg>
								<Circle cx="70" cy="70" r="70"></Circle>
								<Circle width={90} cx="70" cy="70" r="70"></Circle>
							</Svg>
							<Number>
								90%
							</Number>
						</Percent>
						<Lang>HTML</Lang>
					</Card>
					<Card>
						<Percent>
							<Svg>
								<Circle cx="70" cy="70" r="70"></Circle>
								<Circle width={85} cx="70" cy="70" r="70"></Circle>
							</Svg>
							<Number>
								85%
							</Number>
						</Percent>
						<Lang>CSS</Lang>
					</Card>
					<Card>
						<Percent>
							<Svg>
								<Circle cx="70" cy="70" r="70"></Circle>
								<Circle width={60} cx="70" cy="70" r="70"></Circle>
							</Svg>
							<Number>
								60%
							</Number>
						</Percent>
						<Lang>JS</Lang>
					</Card>
				</Skills>
				<SkillsDescription>
					lorem
				</SkillsDescription>
			</AppComponent>
		);
	}
}

export default App