import React, {Component} from 'react';
import './landing.css';
import {Grid,Cell} from 'react-mdl';

class LandingPage extends Component{
	render() {
		return(
				<div style={{width:'100%',margin:'auto'}} >
				<Grid className="landing-grid">
				<Cell col={12}>
				<img
					src="https://images.shiksha.com/mediadata/images/articles/1528111777phpvZoxS7.jpeg"
					alt="journalism"
					className="journalism-img"
				
				/>
				<div className="text-color">
				<h1>Top 13 News Channels</h1>
				</div>
				</Cell>
				</Grid>
				
				</div>
			);
	}
}

export default LandingPage;