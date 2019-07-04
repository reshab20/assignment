import React, {Component} from 'react';
import {Card,CardTitle,CardText,CardActions,CardMenu,IconButton,Button,Grid,Cell,Layout,List,ListItem,Tooltip} from 'react-mdl';
import './yahoo.css'


class HackerNoon extends Component{
	render() {
		return(
		<Layout className="color">
				<Grid>
		<Cell col={12}>
				<div className="project-card">
				<Card shadow={0} style={{width: '450px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '150px', background: 'url("https://cdn-images-1.medium.com/max/1200/1*92yLM4bnsvr7MyK_AZgwJg.jpeg")center/cover'}}>Cryptocurrency Prices and their Movements in June</CardTitle>
    <CardText>
        Corindex presents the January 2019 monthly Cryptocurrency Market Activity report, comprised of various indicators specifically designed to…
    </CardText>
    <CardActions border>
        <Button href="https://hackernoon.com/cryptocurrency-prices-and-their-movements-in-june-c72aef481f65" colored>Read Full Story</Button>
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

export default HackerNoon;