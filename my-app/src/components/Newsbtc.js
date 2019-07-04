import React, {Component} from 'react';
import {Card,CardTitle,CardText,CardActions,CardMenu,IconButton,Button,Grid,Cell,List,ListItem,Tooltip,Layout} from 'react-mdl';
import './yahoo.css'


class Newsbtc extends Component{
	render() {
		return(
		<Layout className="color">
				<Grid>
		<Cell col={12}>
				<div className="project-card">
				<Card shadow={0} style={{width: '450px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '150px', background: 'url("https://www.newsbtc.com/wp-content/uploads/2018/08/techanalysis-btc6-bullish.jpg") center / cover'}}>Bitcoin (BTC) Price Hits First Target: $12.5K Now In Sight</CardTitle>
    <CardText>
        There was a steady rise in bitcoin price and it tested the $12,000 resistance level. It traded as high as $12,053 and is currently correcting gains towards $11,600. There is a new connecting bullish trend line forming with support near $11,550 on the hourly c…
    </CardText>
    <CardActions border>
        <Button href="https://www.newsbtc.com/2019/07/04/bitcoin-btc-price-hits-first-target-12-5k-now-in-sight/" colored>Read Full Story</Button>
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

export default Newsbtc;