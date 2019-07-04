import React from 'react';
import {Switch , Route, BrowserRouter} from 'react-router-dom';
import LandingPage from './landingpage';
import Forbes from './forbes';
import HackerNoon from './hackernoon';
import SeekingAlpha from './seekingalpha';
import TechNode from './technode';
import Bricade from './Bricade';
import ItNews from './itnews';
import Newsbtc from './Newsbtc';
import SecurityBoulevard from './securityboulevard';
import DailyFx from './dailyfx';
import BitConist from './bitconist';
import PyPi from './pypi';





const Main = () => (
	<BrowserRouter>
	<Switch>
		<Route exact path="/" component={LandingPage}/>
		<Route exact path="/forbes" component={Forbes}/>
		<Route path="/hackernoon" component={HackerNoon}/>
		<Route path="/seekingalpha" component={SeekingAlpha}/>
		<Route path="/technode" component={TechNode}/>
		<Route path="/Bricade" component={Bricade}/>
		<Route path="/itnews" component={ItNews}/>
		<Route path="/Newsbtc" component={Newsbtc}/>
		<Route path="/securityboulevard" component={SecurityBoulevard}/>
		<Route path="/dailyfx" component={DailyFx}/>
		<Route path="/bitconist" component={BitConist}/>
		<Route path="/pypi" component={PyPi}/>
	
		
		</Switch>
	</BrowserRouter>
	
)
export default Main;
