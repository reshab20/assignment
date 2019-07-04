import React, {Component} from 'react';
import {Card,CardTitle,CardText,CardActions,CardMenu,IconButton,Button,Grid,Cell,Layout,List,ListItem,Tooltip} from 'react-mdl';
import './yahoo.css'


class DailyFx extends Component{
	render() {
		return(
		<Layout className="color">
				<Grid>
		<Cell col={12}>
				<div className="project-card">
		
<Card shadow={0} style={{width: '450px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '150px', background: 'url( "https://a.c-dn.net/b/4lgG3x/headline_Yen-japan-currency5.jpg") center / cover'}}>Japanese Yen Makes Gains But Bulls Have Yet To Nail Them Down</CardTitle>
    <CardText>
        The Japanese Yen has made clear gains on the US Dollar in the past week, but USDJPY remains above its downtrend and is not in any sense overbought.
    </CardText>
    <CardActions border>
        <Button href="https://www.dailyfx.com/forex/technical/home/analysis/usd-jpy/2019/07/04/Japanese-Yen-Makes-Gains-But-Bulls-Have-Yet-To-Nail-Them-Down.html"colored>Read Full Story</Button>
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

export default DailyFx;