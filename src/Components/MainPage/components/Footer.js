// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
// ICONS
import {FaSnapchatGhost, FaFacebookSquare, FaCopyright} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {GoMarkGithub} from 'react-icons/go'

const FooterComponent = styled.footer`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;
`
const SocialMedia = styled.div`
	display: flex;
`
const MediaItem = styled.a`
	text-decoration: none;
	font-size: 30px;
	margin: 0 10px;
	color: var(--color-main);
	transition: all 0.2s ease;
	:hover {
		cursor: pointer;
		opacity: 0.5;
	}
`
const Copy = styled.div`
	display: flex;
	align-items: center;
	margin-top: 20px;
	font-size: 20px;
	font-weight: bold;
`
const Copyright = styled(FaCopyright)`
	color: var(--color-main);
	margin: 0 5px;
`

class Footer extends Component {
	render() {
		return (
			<FooterComponent>
				<SocialMedia>
					<MediaItem href="https://www.facebook.com/szulcus" target="_blank">
						<FaFacebookSquare />
					</MediaItem>
					<MediaItem href="https://www.instagram.com/jakub_104" target="_blank">
						<AiFillInstagram />
					</MediaItem>
					<MediaItem href="https://github.com/jakub104" target="_blank">
						<GoMarkGithub />
					</MediaItem>
					<MediaItem href="https://www.snapchat.com/add/szulcus104" target="_blank">
						<FaSnapchatGhost />
					</MediaItem>
					
				</SocialMedia>
				<Copy>
					<Copyright /> 2020 <Copyright />
				</Copy>
			</FooterComponent>
		);
	}
}

export default Footer