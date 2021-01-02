// PACKAGES
import React from 'react'
import styled, {css, keyframes} from 'styled-components'
// HTML
import html from '../../../Images/experience/html/html.svg'
import gmail from '../../../Images/experience/html/gmail.svg'
// CSS
import responsive from '../../../Images/experience/css/responsive.svg'
import noBootstrap from '../../../Images/experience/css/noBootstrap.svg'
import sass from '../../../Images/experience/css/sass.svg'
import sc from '../../../Images/experience/css/sc.svg'
// JS
import es6 from '../../../Images/experience/js/es6.svg'
import noJQuery from '../../../Images/experience/js/noJQuery.svg'
import react from '../../../Images/experience/js/react.svg'
// FIREBASE
import db from '../../../Images/experience/firebase/db.svg'
import au from '../../../Images/experience/firebase/au.svg'
import st from '../../../Images/experience/firebase/st.svg'
import cf from '../../../Images/experience/firebase/cf.svg'
import fh from '../../../Images/experience/firebase/fh.svg'
// NODEJS
import npm from '../../../Images/experience/nodejs/npm.svg'
import express from '../../../Images/experience/nodejs/express.svg'
import mongodb from '../../../Images/experience/nodejs/mongodb.svg'
import pug from '../../../Images/experience/nodejs/pug.svg'
// PYTHON
import terminal from '../../../Images/experience/python/terminal.svg'
// OFFICE
import xls from '../../../Images/experience/office/excel.svg'
import ppt from '../../../Images/experience/office/powerpoint.svg'
import doc from '../../../Images/experience/office/word.svg'
// C++

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
		css`
			animation: ${fadeOut} 0.3s both;
		`
	}
	${props =>
		props.radius &&
		css`
			border-radius: 10px;
		`
	};
`
const ExpDescription = styled.div`
	width: 100%;
	animation: ${fadeIn} 0.3s both;
	${props =>
		props.hide &&
		css`
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

const contents = (frontendExp, backendExp, otherExp) => {
	return {
		html: <>
			<ExpImage hide={frontendExp.hide} src={html} />
			<ExpDescription hide={frontendExp.hide}>
				Tworzę strony, oraz aplikacje internetowe zgodne z najnowszym standardem <BrowserLink href="https://developer.mozilla.org/pl/docs/HTML/HTML5" target="_blank" rel="noopener noreferrer">HTML5</BrowserLink>.
				Tworzone przeze mnie projekty są w pełni semantyczne, a co za tym idzie nowoczesne i lepiej współpracują z innymi urządzeniami.
			</ExpDescription>
			<ExpImage src={gmail} />
			<ExpDescription hide={frontendExp.hide}>
				Mam doświadczenie z tworzeniem automatycznych szablonów e-mail.
				Swoje usługi zaoferowałem już między innymi firmie <BrowserLink href="https://magicalgoods.com.pl" target="_blank" rel="noopener noreferrer">Magical Goods</BrowserLink>.
			</ExpDescription>
		</>,
		css: <>
			<ExpImage hide={frontendExp.hide} src={responsive} />
			<ExpDescription hide={frontendExp.hide}>
				Wszystkie moje projekty są w pełni <BrowserLink href="https://pl.wikipedia.org/wiki/Responsive_web_design" target="_blank" rel="noopener noreferrer">responsywne</BrowserLink>.
				Podczas ich tworzenia kieruję się zasadą <BrowserLink href="https://en.ryte.com/wiki/Mobile_First" target="_blank" rel="noopener noreferrer">Mobile First</BrowserLink>, dzięki czemu korzystanie ze strony jest wygodne na wszystkich urządzeniach, a treść na ekranach słabszych urządzeń ładuje się znacznie szybciej.
			</ExpDescription>
			<ExpImage hide={frontendExp.hide} src={noBootstrap} />
			<ExpDescription hide={frontendExp.hide}>
				Do każdego klienta podchodzę indywidualnie.
				Jestem przeciwnikiem korzystania z gotowych <BrowserLink href="https://pl.wikipedia.org/wiki/Framework" target="_blank" rel="noopener noreferrer">frameworków</BrowserLink> <BrowserLink href="https://pl.wikipedia.org/wiki/Kaskadowe_arkusze_styl%C3%B3w" target="_blank" rel="noopener noreferrer">CSS</BrowserLink> takich jak <BrowserLink href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">Bootstrap</BrowserLink> czy <BrowserLink href="https://get.foundation" target="_blank" rel="noopener noreferrer">Foundation</BrowserLink>.
				Uważam, że dopracowany na stronie powinien być każdy szczegół, a zainwestowany czas zwróci się nam z nawiązką.
			</ExpDescription>
			<ExpImage hide={frontendExp.hide} src={sass} />
			<ExpDescription hide={frontendExp.hide}>
				Czystość kodu to podstawa!
				Nawet <BrowserLink href="https://pl.wikipedia.org/wiki/Kaskadowe_arkusze_styl%C3%B3w" target="_blank" rel="noopener noreferrer">CSS</BrowserLink>.
				Dlatego korzystam z preprocesorów takich jak <BrowserLink href="https://sass-lang.com" target="_blank" rel="noopener noreferrer">SCSS, czy SASS</BrowserLink>, aby ewentualne poprawki móc szybko zastosować, a potencjalne przyszłe osoby potrafiły odnaleźć się w kodzie.
			</ExpDescription>
			<ExpImage hide={frontendExp.hide} src={sc} />
			<ExpDescription hide={frontendExp.hide}>
				Większość styli moich projektów oparte jest na <BrowserLink href="https://styled-components.com" target="_blank" rel="noopener noreferrer">Styled Components</BrowserLink>.
				Technologia ta daje możliwość dokładniejszego zarządzania elementem i co bardzo sobie cenię - indywidualnego podejścia.
				Tak jak już wyżej wspomniałem, na stronie lubię mieć dopracowany każdy, nawet najmniejszy szczegół.
			</ExpDescription>
		</>,
		js: <>
			<ExpImage hide={frontendExp.hide} src={es6} radius />
			<ExpDescription hide={frontendExp.hide}>
				Moje małe dzieła sztuki staram się tworzyć tak, aby były nowoczesne, a kod czytelny.
				Dlatego korzystam z funkcji JavaScript w standardzie ES6+.
				Jednocześnie chcę dotrzeć do jak największej liczby odbiorców, dlatego z pomocą takich narzędzi jak <BrowserLink href="https://babeljs.io" target="_blank" rel="noopener noreferrer">Babel</BrowserLink> moje strony obsługiwane są poprawnie przez większość przeglądarek.
			</ExpDescription>
			<ExpImage hide={frontendExp.hide} src={react} />
			<ExpDescription hide={frontendExp.hide}>
				Zdecydowana większość moich aplikacji napisana jest w <BrowserLink href="https://pl.reactjs.org" target="_blank" rel="noopener noreferrer">React</BrowserLink>.
				Porządek i struktura przy większych projektach jest bardzo ważna.
				Taką Możliwość daje mi właśnie biblioteka <BrowserLink href="https://pl.reactjs.org" target="_blank" rel="noopener noreferrer">React.js</BrowserLink> z którą styczność mam już prawie dwa lata.
			</ExpDescription>
			<ExpImage hide={frontendExp.hide} src={noJQuery} />
			<ExpDescription hide={frontendExp.hide}>
				Nie "ułatwiam" sobie pisania kodu przestarzałymi bibliotekami.
				Stawiam przede wszystkim na nowoczesność i szybkość działania.
				Dlatego też nie używam biblioteki <BrowserLink href="https://jquery.com" target="_blank" rel="noopener noreferrer">jQuery</BrowserLink>, a bardziej staram się zagłębiać w świat czystego JavaScript'u.
			</ExpDescription>
		</>,
		firebase: <>
			<ExpImage hide={backendExp.hide} src={db} />
			<ExpDescription hide={backendExp.hide}>
			Z pomocą usługi <BrowserLink href="https://firebase.google.com/docs/firestore" target="_blank" rel="noopener noreferrer">Firebase Firestore</BrowserLink> potrafię stworzyć strony z edytowalną zawartością.
			Od teraz nie musisz prosić programisty o każdą poprawkę, bo wybrane rzeczy będziesz w stanie zrobic samemu.
			Dokładnie!
			Zrobię dla ciebie stronę, którą w prosty sposób i w każdej chwili będziesz mógł dostosować wedle uznania.
			</ExpDescription>
			<ExpImage hide={backendExp.hide} src={au} />
			<ExpDescription hide={backendExp.hide}>
				Potrzebujesz systemu zalogowanych użytkowników?
				Nie ma sprawy.
				Z użyciem <BrowserLink href="https://firebase.google.com/docs/auth" target="_blank" rel="noopener noreferrer">Firebase Authentication</BrowserLink> jestem w stanie zrobić dla ciebie system logowania na stronie, dzięki czemu każdy użytkownik twojej strony będzie mógł tworzyć i edytować własne dane.
				Rejestracja może być dostępna bezpośrednio z twojej strony (za sprawą poczty e-mail lub numeru telefonu), jak również z pomocą wszystkich najpopularniejszych Social Media takich jak:&nbsp;
				<BrowserLink href="https://pl.wikipedia.org/wiki/Google%2B" target="_blank" rel="noopener noreferrer">Google+</BrowserLink>,&nbsp;
				<BrowserLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</BrowserLink>,&nbsp;
				<BrowserLink href="https://twitter.com/explore" target="_blank" rel="noopener noreferrer">Twitter</BrowserLink>, czy&nbsp;
				<BrowserLink href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</BrowserLink>.
			</ExpDescription>
			<ExpImage hide={backendExp.hide} src={st} />
			<ExpDescription hide={backendExp.hide}>
				A co jeśli chcesz przesłać do swojej strony nie tylko dane tekstowe, lecz również zdjęcia i filmy?
				To również moge dla ciebie zrobić!
				Pozwala mi na to usługa <BrowserLink href="https://firebase.google.com/docs/storage" target="_blank" rel="noopener noreferrer">Firebase Storage</BrowserLink>, dzięki czemu na swojej stronie będziesz mógł również "przechowywać" pliki multimedialne.
			</ExpDescription>
			<ExpImage hide={backendExp.hide} src={cf} />
			<ExpDescription hide={backendExp.hide}>
				Potrafię sie również posługiwać <BrowserLink href="https://firebase.google.com/docs/functions" target="_blank" rel="noopener noreferrer">Cloud Functions</BrowserLink>, które pozwolą ci na zarządzanie bardziej skomplikowanymi sprawami na stronie.
				Dają możliwość między innymi dodawania administratorów na stronie, dzięki czemu jeszcze sprawniej i co ważniejsze BEZPIECZNIEJ będziesz mógł zarządzać użytkownikami na stronie.
			</ExpDescription>
			<ExpImage hide={backendExp.hide} src={fh} />
			<ExpDescription hide={backendExp.hide}>
				Korzystając z <BrowserLink href="https://firebase.google.com/docs/hosting" target="_blank" rel="noopener noreferrer">Firebase Hosting</BrowserLink> jestem w stanie opublikować twoją stronę zupełnie za darmo.
				Zgadza się!
				Usługa <BrowserLink href="https://firebase.google.com/docs/hosting" target="_blank" rel="noopener noreferrer">Firebase Hosting</BrowserLink> jest zupełnie darmowa, więc jeśli póki co nie stać cię na kupno hostingu i domeny dla swojej strony, jestem w stanie załatwić ci te rzeczy za darmo.
				Dodatkowo wspomnę, że z pomoca narzędzi <BrowserLink href="https://analytics.google.com" target="_blank" rel="noopener noreferrer">Google Analytics</BrowserLink> sprawdzisz jaki ruch w internecie generuje twoja strona.
				Dzięki temu na bieżąco będziesz mieć możliwość monitorowania zmian, a w przyszłości nawet zarabiania!
			</ExpDescription>
		</>,
		nodejs: <>
			<ExpImage hide={backendExp.hide} src={npm} />
			<ExpDescription hide={backendExp.hide}>
				Mimo, że programowaniem zajmuję się już prawie 3 lata i mogłoby to się wydawać dość sporo, ciągle uczę się czegoś nowego.
				Ciekawość i ciągłe odkrywanie nowych rzeczy zapewnia mi <BrowserLink href="https://www.npmjs.com" target="_blank" rel="noopener noreferrer">npm</BrowserLink> (Node Package manager) z ogromną ilością paczek.
				Potrafię posługiwac się dokumentacją, instalować konkretne wersje paczek, jak i tworzyć własne.
				Z jednej strony ułatwiaja mi to bardzo pracę, z drugiej zaś stanowi wyzwanie, przez co nie mam czasu na nudę!
			</ExpDescription>
			<ExpImage hide={backendExp.hide} src={mongodb} />
			<ExpDescription hide={backendExp.hide}>
				Potrafię posługiwać się <BrowserLink href="https://mansfeld.pl/bazy-danych/bazy-danych-nosql-zalety-wady" target="_blank" rel="noopener noreferrer">nierelacyjną</BrowserLink> bazą danych <BrowserLink href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">MongoDB</BrowserLink>.
				Umiem zapisywać, edytować i usuwać dane w bazie, oraz tworzyć warunki.
			</ExpDescription>
			<ExpImage hide={backendExp.hide} src={express} />
			<ExpDescription hide={backendExp.hide}>
				Znam podstawy frameworku <BrowserLink href="https://expressjs.com" target="_blank" rel="noopener noreferrer">Express.js</BrowserLink>, dzięki czemu jestem w stanie stworzyć prosty serwer.
				Potrawię stworzyć tzw. routing (podstrony) aplikacji, zintegrować ją z różnymi silnikami do generowania widoków itp.
				Póki co cały czas uczę się tej technologii i większość swojej wiedzy posiadam z <BrowserLink href="https://www.udemy.com/course/nodejs-master-class" target="_blank" rel="noopener noreferrer">kursu</BrowserLink> Mosh'a Hamedani na <BrowserLink href="https://www.udemy.com" target="_blank" rel="noopener noreferrer">Udemy</BrowserLink>.
			</ExpDescription>
			<ExpImage hide={backendExp.hide} src={pug} />
			<ExpDescription hide={backendExp.hide}>
				Jednym z generatorów widoku o których wspomniałem wcześniej jest <BrowserLink href="https://pugjs.org" target="_blank" rel="noopener noreferrer">Pug.js</BrowserLink>.
				To technologia, która pozwala mi z jednej strony na stworzenie widoku strony, z drugiej zaś pozwala na pisanie czystszego kodu.
			</ExpDescription>
		</>,
		py: <>
			<ExpImage hide={otherExp.hide} src={terminal} />
			<ExpDescription hide={otherExp.hide}>
				W języku <BrowserLink href="https://www.python.org" target="_blank" rel="noopener noreferrer">Python</BrowserLink> potrafię stworzyć proste programy (głównie w wierszu poleceń).
				Umiem podzielić kod na komponenty i funkcje, odczytywać dane z pliku tekstowego i zapisywać je, korzystać z importowanych paczek, stworzyć prostą grę itp.
				Lecz co chyba najważniejsze, jestem w stanie napisać proste boty pobierające dane ze stron internetowych (np. Amazon)!
			</ExpDescription>
		</>,
		office: <>
			<ExpImage hide={otherExp.hide} src={xls} />
			<ExpDescription hide={otherExp.hide}>
				Umiem tworzyć arkusze i zarządzać informacjami w programie <BrowserLink href="https://pl.wikipedia.org/wiki/Microsoft_Excel" target="_blank" rel="noopener noreferrer">Microsoft Excel</BrowserLink>.
				Potrafię korzystać z gotowych formuł, jak i tworzyć własne makra i funkcje w języku <BrowserLink href="https://pl.wikipedia.org/wiki/Visual_Basic_for_Applications" target="_blank" rel="noopener noreferrer">VBA</BrowserLink> (Visual Bacis for Applications).
				Jestem w stanie również napisać proste pragramy w tym języku. 
			</ExpDescription>
			<ExpImage hide={otherExp.hide} src={ppt} />
			<ExpDescription hide={otherExp.hide}>
				Znam się na robieniu prezentacji w programie <BrowserLink href="https://pl.wikipedia.org/wiki/Microsoft_PowerPoint" target="_blank" rel="noopener noreferrer">Microsoft PowerPoint</BrowserLink>.
				Jako uczeń, zawsze bardzo lubiłem tworzyć takie rzeczy i myślę, że po części wpłynęło to na moje obecne poczucie stylu.
				Potrafię stworzyć prezentację typu kiosk (automatyczną), podłożyć głos do slajdów, ustawić czas wyświetlania slajdu, dodać animacje i przede wszystkim sparwić, by całość prezentowała się estetycznie.
			</ExpDescription>
			<ExpImage hide={otherExp.hide} src={doc} />
			<ExpDescription hide={otherExp.hide}>
				Potrafię również tworzyć proste dokumenty w programie <BrowserLink href="https://pl.wikipedia.org/wiki/Microsoft_Word" target="_blank" rel="noopener noreferrer">Microsoft Word</BrowserLink>.
				Umiem tworzyć tabele, wykresy i tym podobne rzeczy.
			</ExpDescription>
		</>,
		cpp: <>
			<ExpImage hide={otherExp.hide} src={terminal} />
			<ExpDescription hide={otherExp.hide}>
				Jestem w stanie stworzyć programy do odczytu i zapisu danych i posiadam większość z wcześniej wymienionych umiejętności (w sekcji o języku Python).
				Myślę, że jest to fajna umiejętność dodatkowa, natomiast w języku <BrowserLink href="https://www.python.org" target="_blank" rel="noopener noreferrer">Python</BrowserLink> czuję się duzo bardziej komfortowo.
			</ExpDescription>
		</>
	}
}

export default contents