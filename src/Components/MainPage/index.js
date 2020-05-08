// BASIC
import React, { Component } from 'react'
import styled, {keyframes, css as style} from 'styled-components'
// FIREBASE
import {easyLearnDb, epicGamesDb} from '../../Config/easy-learn'
// COMPONENTS
import Project from './components/Project'
// ICONS
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import {TiArrowSortedDown, TiArrowSortedUp} from 'react-icons/ti'
// IMAGES
import logo from '../../Images/logo.png'
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
import firebase from '../../Images/experience/js/firebase.svg'
// PYTHON
import python from '../../Images/experience/python/python.svg'
import terminal from '../../Images/experience/python/terminal.svg'
// OFFICE
import excel from '../../Images/experience/office/excel.svg'
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
	min-height: 100vh;
	height: calc(var(--vh, 1vh) * 100);
	/* min-height: calc(370px + 45vw); */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	@media (max-height: 650px) and (max-width: 800px) {
		min-height: 600px;
		/* min-height: 100vh; */
		/* background-color: #fff; */
	}
	@media (max-height: 650px) and (min-width: 800px) {
		min-height: 650px;
		/* min-height: 100vh; */
		/* background-color: #fff; */
	}
	@media (max-width: 400px) {
		min-height: 100vh;
	}
`
const fade = keyframes`
	from {
		opacity: 0;
		/* transform: scale(0.8) */
	}
	to {
		opacity: 1;
		/* transform: scale(1) */
	}
`
const Avatar = styled.div`
	width: 250px;
	height: 250px;
	background: url("${props => props.src}") no-repeat center center;
	background-size: cover;
	border-radius: 100%;
	margin: 10px;
	animation: ${fade} 0.3s ease;
	@media (min-width: 800px) {
		width: 300px;
		height: 300px;
	}
`
const Logo = styled.img`
	width: 100%;
	max-width: 450px;
	margin-bottom: 30px;
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
	animation: ${scrollAnimation} 1s infinite ease-out;
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
	border-top: 4px solid var(--color-main);
	border-radius: 2px;
	margin: 0 0 0px 0;
`
const Projects = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`
const ProjectLink = styled.a`
	border-radius: 100%;
	margin: 30px;
`
// const Project = styled.img`
// 	width: 100px;
// 	height: 100px;
// 	border-radius: 100%;
// 	transition: all 0.3s ease;
// 	:hover {
// 		box-shadow: 0 0 20px var(--color-primary);
// 	}
// `
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
	/* margin: 20px; */
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
const SkillsDescription = styled.div`
	width: 100%;
	max-width: 1000px;
	margin: 0;
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
const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: scale(0.9)
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
`
const fadeOut = keyframes`
	from {
		opacity: 1;
		transform: scale(1);
	}
	to {
		opacity: 0;
		transform: scale(0.9)
	}
`
const ExpImage = styled.img`
	width: 100px;
	height: 100px;
	margin: 50px 0 20px 0;
	animation: ${fadeIn} 0.3s both;
	${props =>
		props.hide &&
		style`
			animation: ${fadeOut} 0.3s both;
		`
	}
`
const ExpDescription = styled.div`
	width: 100%;
	animation: ${fadeIn} 0.3s both;
	${props =>
		props.hide &&
		style`
			animation: ${fadeOut} 0.1s both;
		`
	};
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
const Footer = styled.footer`
	text-align: center;
	margin-top: 30px;
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
		mainExp: {
			active: 'html',
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
		})
		easyLearnDb.collection('apps').doc('easy-value').onSnapshot(snap => {
			let allStars = 0;
			let allOpinions = 0;
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
		})
		easyLearnDb.collection('apps').doc('easy-calc').onSnapshot(snap => {
			let allStars = 0;
			let allOpinions = 0;
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
		if (page.scrollTop < elementTop1 && this.state.scrollToIndex !== 0) {
			this.setState({scrollToIndex: 0})
		}
		else if (page.scrollTop >= elementTop1 && page.scrollTop < elementTop2 && this.state.scrollToIndex !== 1) {
			this.setState({scrollToIndex: 1})
		}
		else if (page.scrollTop >= elementTop2 && page.scrollTop < elementTop3 && this.state.scrollToIndex !== 2) {
			this.setState({scrollToIndex: 2})
		}
		else if (page.scrollTop >= elementTop3) {
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
		const contents = {
			html: <>
				<ExpImage hide={this.state.mainExp.hide} src={html} />
				<ExpDescription hide={this.state.mainExp.hide}>Tworzę strony, oraz aplikacje internetowe zgodne z najnowszym standardem HTML5. Tworzone przeze mnie projekty są w pełni semantyczne, a co za tym idzie nowocześniejsze i lepiej współpracują z innymi urządzeniami.</ExpDescription>
				<ExpImage src={gmail} />
				<ExpDescription hide={this.state.mainExp.hide}>Mam doświadczenie z tworzeniem automatycznych szablonów e-mail. Swoje usługi zaoferowałem już między firmie <BrowserLink href="https://magicalgoods.com.pl" target="_blank">Magical Goods</BrowserLink>.</ExpDescription>
			</>,
			css: <>
				<ExpImage hide={this.state.mainExp.hide} src={responsive} />
				<ExpDescription hide={this.state.mainExp.hide}>
					Wszystkie moje projekty są w pełni responsywne.
					Podczas ich tworzenia, kieruję się zasadą Mobile First, dzięki czemu korzystanie ze strony jest wygodne na wszystkich urządzeniach, a treść na ekranach słabszych urządzeń ładuje się znacznie szybciej.
				</ExpDescription>
				<ExpImage hide={this.state.mainExp.hide} src={noBootstrap} />
				<ExpDescription hide={this.state.mainExp.hide}>
					Do każdego klienta podchodzę indywidualnie.
					Jestem przeciwnikiem korzystania z gotowych frameworków CSS takich jak <BrowserLink href="https://getbootstrap.com" target="_blank">Bootstrap</BrowserLink> czy <BrowserLink href="https://get.foundation" target="_blank">Foundation</BrowserLink>.
					Uważam, że dopracowany na stronie powinien być każdy szczegół, a zainwestowany czas zwróci się nam z nawiązką.
				</ExpDescription>
				<ExpImage hide={this.state.mainExp.hide} src={sass} />
				<ExpDescription hide={this.state.mainExp.hide}>
					Czystość kodu to podstawa!
					Nawet CSS.
					Dlatego korzystam z preprocesorów takich jak <BrowserLink href="https://sass-lang.com" target="_blank">SCSS, czy SASS</BrowserLink>, aby ewentualne poprawki móc szybko zastosować, a potencjalne przyszłe osoby potrafiły odnaleźć się w kodzie.
				</ExpDescription>
				<ExpImage hide={this.state.mainExp.hide} src={sc} />
				<ExpDescription hide={this.state.mainExp.hide}>
					Większość styli moich projektów oparte jest na <BrowserLink href="https://styled-components.com">Styled Components</BrowserLink>.
					Technologia ta daje możliwość dokładniejszego zarządzania elementem i co bardzo sobie cenię - indywidualnego podejścia.
					Tak jak już wyżej wspomniałem, na stronie lubię mieć dopracowany każdy, nawet najmniejszy szczegół <span role="img" aria-label="happy">😁</span>.
				</ExpDescription>
			</>,
			js: <>
				<ExpImage hide={this.state.mainExp.hide} src={es6} />
				<ExpDescription hide={this.state.mainExp.hide}>
					Moje małe dzieła sztuki staram się tworzyć tak aby były nowoczesne, a kod czytelny.
					Dlatego korzystam z funkcji JavaScript w standardzie ES6+.
					Jednocześnie chcę dotrzeć do jak największej liczby odbiorców, dlatego z pomocą takich narzędzi jak <BrowserLink href="https://babeljs.io" target="_blank">Babel</BrowserLink> moje strony obsługiwane są poprawnie przez większość przeglądarek.
				</ExpDescription>
				<ExpImage hide={this.state.mainExp.hide} src={nodejs} />
				<ExpDescription hide={this.state.mainExp.hide}>
					Potrafię korzystać z podstawowych funkcji platformy <BrowserLink href="" target="_blank">Node.js</BrowserLink>.
					Dzięki temu potencjał języka JavaScript jestem w stanie wykorzystać nie tylko w przeglądarce, a zastosować go do mnóstwa innych rzeczy, w tym stawiania prostych serwerów i pisania programów.
				</ExpDescription>
				<ExpImage hide={this.state.mainExp.hide} src={npm} />
				<ExpDescription hide={this.state.mainExp.hide}>
					Mimo, że programowaniem zajmuję się już prawie 3 lata i mogłoby to się wydawać dość sporo, ciągle uczę się czegoś nowego.
					Ciekawość i ciągłe odkrywanie nowych rzeczy zapewnia mi <BrowserLink href="https://www.npmjs.com" target="_blank">npm</BrowserLink> z ogromną ilością paczek.
					Z jednej strony ułatwiają mi bardzo pracę, z drugiej zaś stanowią wyzwanie, przez co nie ma czasu na nudę!
				</ExpDescription>
				<ExpImage hide={this.state.mainExp.hide} src={react} />
				<ExpDescription hide={this.state.mainExp.hide}>
					Zdecydowana większość moich aplikacji napisana jest w <BrowserLink>React</BrowserLink>.
					Porządek i struktura przy większych projektach jest bardzo ważna.
					Taką Możliwość daje mi właśnie biblioteka <BrowserLink>React.js</BrowserLink> z którą styczność mam już prawie dwa lata.
				</ExpDescription>
				<ExpImage src={firebase} />
				<ExpDescription>
					Mam również półroczne doświadczenie z bazami danych w <BrowserLink href="https://firebase.google.com" target="_blank">Firebase</BrowserLink>.
					Potrafię zrobić proste logowanie, oraz przechowywać i odczytywać dane z bazy.
					Innymi słowy potrafię zrobić stronę, do której można się zalogować, edytować jej zawartość, oraz przesłać do niej pliki (zdjęcia, wideo itp).
				</ExpDescription>
			</>,
			py: <>
				<ExpImage hide={this.state.otherExp.hide} src={terminal} />
				<ExpDescription hide={this.state.otherExp.hide}>
					Potrafię stworzyć proste programy (głównie w wierszu poleceń).
					Umiem podzielić kod na komponenty, korzystać z jakichś importowanych paczek, napisać program obiektowo itp.
				</ExpDescription>
			</>,
			cpp: 'C++',
			office: 'Office'
		}
		return (
				<AppComponent id="page" onScroll={this.check}>
					<Welcome>
						<Avatar src={avatar} />
						<Logo src={logo} />
						<ScrollDown src={scroll} onClick={this.scrollDown} />
					</Welcome>
					<Content>
						<Skills>
							<SectionTitle className="title">
								<Title>Moje Umiejętności</Title>
								<Line />
							</SectionTitle>
							<Cards id="mainExp">
								<Card id="html" active={this.state.mainExp.active === 'html'} onClick={this.changeContent}>
									<LangLogo src={html} />
									<Lang><LangLetter color="#F16529">H</LangLetter>tml</Lang>
								</Card>
								<Card id="css" active={this.state.mainExp.active === 'css'} onClick={this.changeContent}>
									<LangLogo src={css} />
									<Lang><LangLetter color="#3C9CD7">C</LangLetter>SS</Lang>
								</Card>
								<Card id="js" active={this.state.mainExp.active === 'js'} onClick={this.changeContent}>
									<LangLogo src={js} />
									<Lang><LangLetter color="#F1BF22">J</LangLetter><LongName>ava</LongName><LangLetter color="#F1BF22">S</LangLetter><LongName>cript</LongName></Lang>
								</Card>
							</Cards>
							<SkillsDescription id="mainSkills">
								{contents[this.state.mainExp.active]}
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
								<Card id="cpp" active={this.state.otherExp.active === 'cpp'} onClick={this.changeContent}>
									<LangLogo src={cpp} />
									<Lang><LangLetter color="#1B598E">C</LangLetter>++</Lang>
								</Card>
								<Card id="office" active={this.state.otherExp.active === 'office'} onClick={this.changeContent}>
									<LangLogo src={excel} />
									<Lang><LangLetter color="#107C41">V</LangLetter>BA</Lang>
								</Card>
							</Cards>
							<SkillsDescription>
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
						<Footer>&copy; Jakub Schulz 2020</Footer>
					</Content>
					{this.state.scrolled && <ScrollButton onClick={this.scrollDown}>{this.state.scrollToIndex === 'up' ? <TiArrowSortedUp /> : <TiArrowSortedDown />}</ScrollButton>}
					{this.state.scrollToIndex === 'up' && <BrowserLink href="https://m.me/szulcus" target="_blank">
						<Messenger src={messenger} />
					</BrowserLink>}
				</AppComponent>
		);
	}
}

export default App