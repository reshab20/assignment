import React, {Component} from 'react';
import {Card,CardTitle,CardText,CardActions,CardMenu,IconButton,Button,Grid,Cell,Layout,List,ListItem,Tooltip} from 'react-mdl';
import './yahoo.css'


class BitConist extends Component{
	render() {
		return(
		<Layout className="color">
				<Grid>
		<Cell col={12}>
				<div className="project-card">
				<Card shadow={0} style={{width: '450px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '150px', background: 'url("https://bitcoinist.com/wp-content/uploads/2019/07/4th-July-980x613.jpg") center / cover'}}>Bitcoin Price Approaching $12000 Again As Dominance Hits 65%</CardTitle>
    <CardText>
        The recent Bitcoin price correction was over before it really began. A five-day slide culminating in a short-lived 30% dip below $10000 saw a huge bounce back by over 20% as BTC surged back above $11000. It’s market dominance is now heading towards highs not …
    </CardText>
    <CardActions border>
        <Button href="https://bitcoinist.com/bitcoin-price-approaching-12000-dominance-65-percent/" colored>Readf Full Story</Button>
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

export default BitConist;