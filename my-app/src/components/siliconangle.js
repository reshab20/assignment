import React, {Component} from 'react';
import {Card,CardTitle,CardText,CardActions,CardMenu,IconButton,Button,Grid,Cell} from 'react-mdl';
import './yahoo.css'


class SiliconAngle extends Component{
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
</div>
</Cell>
</Grid>
			);
	}
}

export default SiliconAngle;