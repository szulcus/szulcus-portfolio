// BASIC
import React, { Component } from 'react'
import styled, {keyframes, css as style} from 'styled-components'
// FIREBASE
import {easyLearnDb, epicGamesDb} from '../../Config/easy-learn'
// COMPONENTS
import Project from './components/Project'
import getContents from './components/getContents'
import Footer from './components/Footer'
// ICONS
import {TiArrowSortedDown, TiArrowSortedUp} from 'react-icons/ti'
// IMAGES
import text from '../../Images/logo/text.png'
import line from '../../Images/logo/line.png'
import avatar from '../../Images/avatar.jpg'
import messenger from '../../Images/messenger.svg'
import scroll from '../../Images/scroll.svg'
import easyword from '../../Images/projects/easyword.png'
import easycalc from '../../Images/projects/easycalc.png'
import easyvalue from '../../Images/projects/easyvalue.png'
import epicbrain from '../../Images/projects/epicbrain.png'
// HTML
import html from '../../Images/experience/html/html.svg'
import gmail from '../../Images/experience/html/gmail.svg'
// CSS
import css from '../../Images/experience/css/css.svg'
import responsive from '../../Images/experience/css/responsive.svg'
import noBootstrap from '../../Images/experience/css/noBootstrap.svg'
import sass from '../../Images/experience/css/sass.svg'
import sc from '../../Images/experience/css/sc.svg'
// JS
import js from '../../Images/experience/js/js.svg'
import es6 from '../../Images/experience/js/es6.svg'
import nodejs from '../../Images/experience/js/nodejs.svg'
import npm from '../../Images/experience/js/npm.svg'
import react from '../../Images/experience/js/react.svg'
// FIREBASE
import firebase from '../../Images/experience/firebase/firebase.svg'
// PYTHON
import python from '../../Images/experience/python/python.svg'
import terminal from '../../Images/experience/python/terminal.svg'
// OFFICE
import office from '../../Images/experience/office/office.svg'
// C++
import cpp from '../../Images/experience/cpp/cpp.svg'

const AppComponent = styled.div`
	width: 100vw;
	height: 100vh;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 1px;
	}
	::-webkit-scrollbar-thumb {
		background-color: var(--color-main);
	}
`
const Welcome = styled.header`
	width: 100%;
	min-height: 100vh;
	min-height: calc(var(--vh, 1vh) * 100);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	@media (max-height: 650px) and (max-width: 800px) {
		min-height: 600px;
	}
	@media (max-height: 650px) and (min-width: 800px) {
		min-height: 650px;
	}
	@media (max-width: 400px) {
		min-height: 100vh;
	}
`
const fade = keyframes`
	from {
		opacity: 0;
		transform: scale(0.5) rotate(0);
	}
	60% {
		opacity: 1;
		transform: scale(1.1) rotate(0);
	}
	to {
		opacity: 1;
		transform: scale(1) rotate(0);
	}
`
const flow = keyframes`
	from {
		opacity: 0;
		transform: scaleX(0);
	}
	to {
		opacity: 1;
		transform: scaleX(1);
	}
`
const Avatar = styled.div`
	width: 250px;
	height: 250px;
	border-radius: 100%;
	margin: 10px;
	overflow: hidden;
	animation: ${fade} 0.8s ease;
	transform-origin: bottom;
	@media (min-width: 800px) {
		width: 300px;
		height: 300px;
	}
`
const AvatarImage = styled.img`
	width: 100%;
	height: 100%;
`
const Logo = styled.div`
	position: relative;
	width: 100%;
	height: calc((100vw - 60px) * 0.44);
	max-width: 450px;
	max-height: 200px;
	margin-bottom: 30px;
`
const LogoElement = styled.img`
	position: absolute;
	width: 100%;
	opacity: 0;
	:nth-child(1) {
		animation: ${fade} 0.8s both;
	}
	:nth-child(2) {
		transform-origin: right;
		animation: ${flow} 0.3s 0.5s both
	}
`
const scrollAnimation = keyframes`
	0% {
		opacity: 1;
		transform: translateY(0);
	}
	80% {
		opacity: 1;
		transform: translateY(10px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`
const ScrollDown = styled.img`
	opacity: 0;
	width: 50px;
	height: 50px;
	margin-bottom: 50px;
	transition: opacity 0.3s ease;
	animation: ${scrollAnimation} 1s 0.8s infinite ease-out;
	:hover {
		cursor: pointer;
	}
`
const Content = styled.main``
const SectionTitle = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 30px 0;
`
const Title = styled.h1`
	text-align: center;
	font-size: 30px;
	margin: 20px 0 10px 0;
`
const Line = styled.hr`
	width: 100%;
	max-width: 1000px;
	border: none;
	border-top: 3px solid var(--color-main);
	border-radius: 3px;
	margin: 0 0 0px 0;
`
const Projects = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`
const Skills = styled.article`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const Cards = styled.section`
	position: relative;
	width: 90vw;
	max-width: 1000px;
	display: flex;
	justify-content: space-evenly;
`
const Card = styled.div`
	width: 150px;
	height: 200px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	text-align: center;
	overflow: hidden;
	transition: all 0.3s ease;
	opacity: 0.5;
	:hover {
		cursor: pointer;
		opacity: 1;
	}
	${props =>
		props.active &&
		style`
			opacity: 1;
		`
	}
`
const LangLogo = styled.img`
	display: block;
	width: 80px;
	@media (min-width: 500px) {
		width: 100px;
	}
`
const Lang = styled.strong`
	font-size: 25px;
	margin: 20px 0;
`
const LangLetter = styled.span`
	color: ${props => props.color};
`
const LongName = styled.span`
	display: none;
	@media (min-width: 500px) {
		display: inline;
	}
`
const Description = styled.div`
	width: 100%;
	max-width: 1000px;
	padding: 20px;
	font-size: 20px;
	text-align: center;
	animation: ${fade} 0.3s ease;
	transition: all 0.3s ease;
	@media (min-width: 500px) {
		margin: 20px 0;
	}
`
const SkillsDescription = styled.div`
	width: 100%;
	max-width: 1000px;
	padding: 0px 20px 20px 20px;
	font-size: 18px;
	text-align: center;
	border: 2px solid var(--color-main);
	border-radius: 20px;
	animation: ${fade} 0.3s ease;
	transition: all 0.3s ease;
	@media (min-width: 500px) {
		margin: 20px 0;
	}
`
const BrowserLink = styled.a`
	color: var(--color-main);
	text-decoration: none;
	font-weight: bold;
	transition: opacity 0.2s ease;
	:hover {
		opacity: 0.5;
	}
`
const ScrollButton = styled.div`
	position: absolute;
	bottom: 20px;
	right: 10px;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--color-main);
	border-radius: 100%;
	font-size: 25px;
	color: var(--color-bg);
	animation: ${fade} 0.3s ease;
	:hover {
		cursor: pointer;
	}
`
const Messenger = styled.img`
	position: absolute;
	bottom: 20px;
	left: 10px;
	width: 50px;
	height: 50px;
	animation: ${fade} 0.3s ease;
`

class App extends Component {
	state = {
		scrollToIndex: 0,
		scrolled: false,
		frontendExp: {
			active: 'html',
			hide: false
		},
		backendExp: {
			active: 'firebase',
			hide: false
		},
		otherExp: {
			active: 'py',
			hide: false
		},
		easyWordStats: {
			views: "-",
			average: "-",
			users: "-"
		},
		easyValueStats: {
			views: "-",
			average: "-",
			users: "-"
		},
		easyCalcStats: {
			views: "-",
			average: "-",
			users: "-"
		},
		epicBrainStats: {
			views: "-",
			average: "-",
			users: "-"
		}
	}
	componentDidMount() {
		window.addEventListener('resize', this.check)
		easyLearnDb.collection('apps').doc('easy-word').onSnapshot(snap => {
			let allStars = 0;
			let allOpinions = 0;
			if (snap.data()) {
				snap.data().stats.opinions.forEach(({stars}) => {
					allStars += stars
					allOpinions += 1
				})
				const average = allStars / allOpinions
				this.setState(prevState => ({
					easyWordStats: {
						...prevState.easyWordStats,
						average: average.toFixed(1),
						views: snap.data().stats.views.toString()
					}
				}));
			}
		})
		easyLearnDb.collection('apps').doc('easy-value').onSnapshot(snap => {
			let allStars = 0;
			let allOpinions = 0;
			if (snap.data()) {
				snap.data().stats.opinions.forEach(({stars}) => {
					allStars += stars
					allOpinions += 1
				})
				const average = allStars / allOpinions
				this.setState(prevState => ({
					easyValueStats: {
						...prevState.easyWordStats,
						average: average.toFixed(1),
						views: snap.data().stats.views.toString()
					}
				}));
			}
		})
		easyLearnDb.collection('apps').doc('easy-calc').onSnapshot(snap => {
			let allStars = 0;
			let allOpinions = 0;
			if (snap.data()) {
				Object.values(snap.data().stats.opinions).forEach(({stars}) => {
					allStars += stars
					allOpinions += 1
				})
				const average = allStars / allOpinions
				this.setState(prevState => ({
					easyCalcStats: {
						...prevState.easyCalcStats,
						average: average.toFixed(1),
						views: snap.data().stats.views.toString()
					}
				}));
			}
		})
		easyLearnDb.collection('users').onSnapshot(snaps => {
			let users = 0;
			snaps.forEach(() => users += 1)
			this.setState(prevState => ({
				easyWordStats: {
					...prevState.easyWordStats,
					users: users.toString()
				},
				easyValueStats: {
					...prevState.easyValueStats,
					users: users.toString()
				},
				easyCalcStats: {
					...prevState.easyCalcStats,
					users: users.toString()
				},
				
			}));
		})
		epicGamesDb.collection('apps').doc('epic-brain').onSnapshot(snap => {
			let allStars = 0;
			let allOpinions = 0;
			if (snap.data()) {
				Object.values(snap.data().stats.opinions).forEach(({stars}) => {
					allStars += stars
					allOpinions += 1
				})
				const average = allStars / allOpinions
				this.setState(prevState => ({
					epicBrainStats: {
						...prevState.epicBrainStats,
						average: average.toFixed(1),
						views: snap.data().stats.views.toString()
					}
				}));
			}
		})
		epicGamesDb.collection('users').onSnapshot(snaps => {
			let users = 0;
			snaps.forEach(() => users += 1)
			this.setState(prevState => ({
				epicBrainStats: {
					...prevState.epicBrainStats,
					users: users.toString()
				},
			}));
		})
	}
	check = () => {
		const page = document.getElementById('page')
		if (window.innerHeight < 650 && window.innerWidth < 800) {
			if (page.scrollTop > 630 && !this.state.scrolled) {
				this.setState({scrolled: true})
			}
			else if (page.scrollTop < 630 && this.state.scrolled) {
				this.setState({scrolled: false})
			}
		}
		// else if (window.innerHeight < 650 && window.innerWidth > 800) {
		else if (window.innerHeight < 650 && window.innerWidth > 800) {
			if (page.scrollTop > 680 && !this.state.scrolled) {
				this.setState({scrolled: true})
			}
			else if (page.scrollTop < 680 && this.state.scrolled) {
				this.setState({scrolled: false})
			}
		}
		// if (window.innerHeight > 650 && window.innerWidth < 800) {
		else {
			if (page.scrollTop > window.innerHeight + 30 && !this.state.scrolled) {
				this.setState({scrolled: true})
			}
			else if (page.scrollTop < window.innerHeight + 30 && this.state.scrolled) {
				this.setState({scrolled: false})
			}
		}

		const elements = document.getElementsByClassName('title');
		const elementTop1 = elements[0].getBoundingClientRect().top + page.scrollTop
		const elementTop2 = elements[1].getBoundingClientRect().top + page.scrollTop
		const elementTop3 = elements[2].getBoundingClientRect().top + page.scrollTop
		const elementTop4 = elements[3].getBoundingClientRect().top + page.scrollTop
		const elementTop5 = elements[4].getBoundingClientRect().top + page.scrollTop
		if (page.scrollTop < elementTop1 && this.state.scrollToIndex !== 0) {
			this.setState({scrollToIndex: 0})
		}
		else if (page.scrollTop >= elementTop1 && page.scrollTop < elementTop2 && this.state.scrollToIndex !== 1) {
			this.setState({scrollToIndex: 1})
		}
		else if (page.scrollTop >= elementTop2 && page.scrollTop < elementTop3 && this.state.scrollToIndex !== 2) {
			this.setState({scrollToIndex: 2})
		}
		else if (page.scrollTop >= elementTop3 && page.scrollTop < elementTop4 && this.state.scrollToIndex !== 3) {
			this.setState({scrollToIndex: 3})
		}
		else if (page.scrollTop >= elementTop4 && page.scrollTop < elementTop5 && this.state.scrollToIndex !== 4) {
			this.setState({scrollToIndex: 4})
		}
		else if (page.scrollTop >= elementTop5) {
			this.setState({scrollToIndex: 'up'})
		}
	}
	scrollDown = () => {
		const elements = document.getElementsByClassName('title');
		const page = document.getElementById('page')
		if (typeof(this.state.scrollToIndex) === 'number') {
			elements[this.state.scrollToIndex].scrollIntoView({behavior: 'smooth', block: 'start'})
		}
		else {
			page.scrollTo({top: 0, behavior: 'smooth'})
		}
	}
	changeContent = (e) => {
		const id = e.currentTarget.id;
		const parentId = e.currentTarget.parentElement.id;
		e.currentTarget.parentElement.scrollIntoView({behavior: 'smooth', block: 'start'})
		if (this.state[parentId].active !== id) {
			this.setState(prevState => ({
				[parentId]: {
					...prevState[parentId],
					hide: true
				}
			}));
			setTimeout(() => {
				this.setState({
					[parentId]: {
						active: id,
						hide: false
					}
				})
			}, 100)
		}
	}
	render() {
		const contents = getContents(this.state.frontendExp, this.state.backendExp, this.state.otherExp);
		return (
				<AppComponent id="page" onScroll={this.check}>
					<Welcome>
						<Avatar>
							<AvatarImage src={avatar} />
						</Avatar>
						<Logo>
							<LogoElement src={text} />
							<LogoElement src={line} />
						</Logo>
						<ScrollDown src={scroll} onClick={this.scrollDown} />
					</Welcome>
					<Content>
						<Skills>
							<SectionTitle className="title">
								<Title>O mnie</Title>
								<Line />
							</SectionTitle>
							{/* <Cards id="description">
								<Card id="html" active={this.state.frontendExp.active === 'html'} onClick={this.changeContent}>
									<LangLogo src={avatar} />
									<Lang><LangLetter color="#F16529">H</LangLetter>tml</Lang>
								</Card>
							</Cards> */}
							<Description id="mainSkills">
								Nazywam się Jakub Schulz.
								Obecnie ukończyłem liceum i czekam na maturę, a w przyszłości mam w planach studiować jako Front-end Developer w WSB w Gdyni.
								Programowaniem zajmuję się już od prawie trzech lat, natomiast zainteresowanie tą dziedziną przejawiałem już od dziecka.
								Myślę, że właśnie dzięki temu tworzenie stron internetowych jest dziś moją największą pasją.
								Lecz przejdźmy do konkretów.
								Niżej przedstawiam moje umiejętności:
							</Description>
							<SectionTitle className="title">
								<Title>Frontend</Title>
								<Line />
							</SectionTitle>
							<Cards id="frontendExp">
								<Card id="html" active={this.state.frontendExp.active === 'html'} onClick={this.changeContent}>
									<LangLogo src={html} />
									<Lang><LangLetter color="#F16529">H</LangLetter>tml</Lang>
								</Card>
								<Card id="css" active={this.state.frontendExp.active === 'css'} onClick={this.changeContent}>
									<LangLogo src={css} />
									<Lang><LangLetter color="#3C9CD7">C</LangLetter>SS</Lang>
								</Card>
								<Card id="js" active={this.state.frontendExp.active === 'js'} onClick={this.changeContent}>
									<LangLogo src={js} />
									<Lang><LangLetter color="#F1BF22">J</LangLetter><LongName>ava</LongName><LangLetter color="#F1BF22">S</LangLetter><LongName>cript</LongName></Lang>
								</Card>
							</Cards>
							<SkillsDescription id="frontendSkills">
								{contents[this.state.frontendExp.active]}
							</SkillsDescription>
							<SectionTitle className="title">
								<Title>Backend</Title>
								<Line />
							</SectionTitle>
							<Cards id="backendExp">
								<Card id="firebase" active={this.state.backendExp.active === 'firebase'} onClick={this.changeContent}>
									<LangLogo src={firebase} />
									<Lang><LangLetter color="#FFCB2B">F</LangLetter>irebase</Lang>
								</Card>
								<Card id="nodejs" active={this.state.backendExp.active === 'nodejs'} onClick={this.changeContent}>
									<LangLogo src={nodejs} />
									<Lang><LangLetter color="#6cc24a">N</LangLetter>ode.js</Lang>
								</Card>
							</Cards>
							<SkillsDescription id="backendSkills">
								{contents[this.state.backendExp.active]}
							</SkillsDescription>
							<SectionTitle className="title">
								<Title>Inne</Title>
								<Line />
							</SectionTitle>
							<Cards id="otherExp">
								<Card id="py" active={this.state.otherExp.active === 'py'} onClick={this.changeContent}>
									<LangLogo src={python} />
									<Lang><LangLetter color="#387EB8">P</LangLetter><LangLetter color="#FFE052">y</LangLetter>thon</Lang>
								</Card>
								<Card id="office" active={this.state.otherExp.active === 'office'} onClick={this.changeContent}>
									<LangLogo src={office} />
									<Lang><LangLetter color="#DC3E15">O</LangLetter>ffice</Lang>
								</Card>
								<Card id="cpp" active={this.state.otherExp.active === 'cpp'} onClick={this.changeContent}>
									<LangLogo src={cpp} />
									<Lang><LangLetter color="#1B598E">C</LangLetter>++</Lang>
								</Card>
							</Cards>
							<SkillsDescription id="otherSkills">
								{contents[this.state.otherExp.active]}
							</SkillsDescription>
						</Skills>
						<Projects>
							<SectionTitle className="title">
								<Title>Moje projekty</Title>
								<Line />
							</SectionTitle>
							<Project logo={easyword} stats={this.state.easyWordStats} name="EasyWord" link="https://easyword123.pl" />
							<Project logo={easyvalue} stats={this.state.easyValueStats} name="EasyValue" link="https://easyvalue.web.app" />
							<Project logo={easycalc} stats={this.state.easyCalcStats} name="EasyCalc" link="https://easycalc.web.app" />
							<Project logo={epicbrain} stats={this.state.epicBrainStats} name="EpicBrain" link="https://jakub104.github.io/epic-brain/#/" />
						</Projects>
					</Content>
					<Footer />
					{this.state.scrolled && <ScrollButton onClick={this.scrollDown}>{this.state.scrollToIndex === 'up' ? <TiArrowSortedUp /> : <TiArrowSortedDown />}</ScrollButton>}
					{this.state.scrollToIndex === 'up' && <BrowserLink href="https://m.me/szulcus" target="_blank">
						<Messenger src={messenger} />
					</BrowserLink>}
				</AppComponent>
		);
	}
}

export default App