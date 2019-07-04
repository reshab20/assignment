import React, {Component} from 'react';
import {Card,CardTitle,CardText,CardActions,CardMenu,IconButton,Button,Grid,Cell,Layout,List,ListItem,Tooltip} from 'react-mdl';
import './yahoo.css'


class Bricade extends Component{
	render() {
		return(
		<Layout className="color">
				<Grid>
		<Cell col={12}>
				<div className="project-card">
		
<Card shadow={0} style={{width: '450px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '150px', background: 'url("https://images.shiksha.com/mediadata/images/articles/1528111777phpvZoxS7.jpeg") center / cover'}}>How to stop cyberattacks crushing cities across the US</CardTitle>
    <CardText>
	Cities and states across the U.S. are facing an increasing number of cyberattacks from individuals holding important government data hostage and demanding huge sums of money for its safe return. The attacks, which involve a type of malware called ransomware, …
    </CardText>
    <CardActions border>
        <Button href="https://brica.de/alerts/alert/public/1266142/how-to-stop-cyberattacks-crushing-cities-across-the-us/" colored>Read Full Story</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <Tooltip label={<List>
  <ListItem><a style={{textDecoration:'none',color:'white',fontWeight:'bold'}} href="https://web.whatsapp.com/">Whatsapp</a>1</ListItem>
  <ListItem><a style={{textDecoration:'none',color:'white',fontWeight:'bold'}} href="https://www.facebook.com/">Facebook</a></ListItem>
  <ListItem><a style={{textDecoration:'none',color:'white',fontWeight:'bold'}} href="https://www.instagram.com/accounts/login/?hl=en">Instagram</a></ListItem>
	</List>}
>
        <IconButton name="share" />
	</Tooltip>	
    </CardMenu>
</Card>
</div>
</Cell>
</Grid>
</Layout>
			);
	}
}

export default Bricade;