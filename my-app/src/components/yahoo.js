import React, {Component} from 'react';
import {Card,CardTitle,CardText,CardActions,CardMenu,IconButton,Button,Grid,Cell} from 'react-mdl';
import './yahoo.css'
class Yahoo extends Component{
	render() {
		return(
		<Grid>
		<Cell col={12}>
				<div className="project-card">
				<Card shadow={0} style={{width: '450px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '150px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button href="https://www.google.com/" colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
<Card shadow={0} style={{width: '450px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '150px', background: 'url("https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F993431678%2F960x0.jpg%3Ffit%3Dscale)/ cover'}}>Bitcoin Could Surge This 4th Of July Holiday </CardTitle>
    <CardText>
        Bitcoin has been fighting to hold onto its recent gains over the last week with bitcoin bulls having to defend the $10,000 per bitcoin psychological barrier numerous times...
    </CardText>
    <CardActions border>
        <Button href="https://www.forbes.com/sites/billybambrough/2019/07/04/bitcoin-could-surge-this-4th-of-july-holiday/" colored>Read Full Story</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
</div>
</Cell>
</Grid>
			);
	}
}

export default Yahoo;
 