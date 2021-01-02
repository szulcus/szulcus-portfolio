// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser';
// ICONS
import {FaEye, FaStar, FaUsers, FaLocationArrow} from 'react-icons/fa'
// import {MdFormatQuote} from 'react-icons/md'

const ProjectComponent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 30px;
`
const Title = styled.h1`
	font-size: 50px;
	letter-spacing: 2px;
`
const Browserlink = styled.a`
	border-radius: 100%;
`
const Logo = styled.img`
	width: 200px;
	margin: 20px 0;
	border-radius: 100%;
	box-shadow: 0 0 30px var(--color-secondary);
`
const Stats = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-evenly;
	margin: 30px 0;
`
const StatsElement = styled.div`
	min-width: 100px;
	display: flex;
	justify-content: center;
	font-size: 25px;
`
const StatsNumber = styled.span`
	margin: 0 10px;
	font-weight: bold;
`
const StatsIcon = styled.span`
	color: ${props => `var(--color-${props.color})`};
	transform: translateY(2px);
`
const Go = styled(FaLocationArrow)`
	color: ${props => `var(--color-${props.color})`};
	font-size: 30px;
	transition: transform 0.1s ease, opacity 0.2s ease;
	:hover {
		cursor: pointer;
		opacity: 0.5;
	}
	:active {
		transform: scale(0.9) translate(3px, -3px);
	}
`
// const Opinions = styled.div`

// `
// const Opinion = styled.div`
// 	position: relative;
// 	padding: 30px;
// `
// const Quote = styled(MdFormatQuote)`
// 	position: absolute;
// 	${props =>
// 		props.up &&
// 		css`
// 			top: 0;
// 			left: 0;
// 		`
// 	}
// 	${props =>
// 		props.down &&
// 		css`
// 			bottom: 0;
// 			right: 0;
// 		`
// 	}
// `

class Project extends Component {
	render() {
		return (
			<ProjectComponent>
				<Title>
					{ReactHtmlParser(this.props.name.replace(/[A-Z]/g, x => `<span style="color: var(--color-${this.props.name})">${x}</span>`))}
				</Title>
				<Browserlink href={this.props.link} rel="noopener noreferrer" target="_blank">
					<Logo src={this.props.logo} alt={this.props.name} />
				</Browserlink>
				<Stats>
					<StatsElement>
						<StatsNumber>{window.innerWidth <= 500 ? `~${Math.round(Number(this.props.stats.views) / 1000)}K` : this.props.stats.views}</StatsNumber>
						<StatsIcon color={this.props.name.toLowerCase()}><FaEye /></StatsIcon>
					</StatsElement>
					<StatsElement>
						<StatsNumber>{this.props.stats.average}</StatsNumber>
						<StatsIcon color={this.props.name.toLowerCase()}><FaStar /></StatsIcon>
					</StatsElement>
					<StatsElement>
						<StatsNumber>{this.props.stats.users}</StatsNumber>
						<StatsIcon color={this.props.name.toLowerCase()}><FaUsers /></StatsIcon>
					</StatsElement>
				</Stats>
				{/* <Opinions>
					<Opinion>
						<MdFormatQuote up />
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						<MdFormatQuote down />
					</Opinion>
					<Opinion>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Opinion>
					<Opinion>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Opinion>
				</Opinions> */}
				<Browserlink href={this.props.link} rel="noopener noreferrer" target="_blank">
					<Go color={this.props.name.toLowerCase()} />
				</Browserlink>
			</ProjectComponent>
		);
	}
}

export default Project