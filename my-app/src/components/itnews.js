import React, {Component} from 'react';
import {Card,CardTitle,CardText,CardActions,CardMenu,IconButton,Button,Grid,Cell,Layout,List,ListItem,Tooltip} from 'react-mdl';
import './yahoo.css'


class ItNews extends Component{
	render() {
		return(
		<Layout className="color">
				<Grid>
		<Cell col={12}>
				<div className="project-card">
		
<Card shadow={0} style={{width: '450px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '150px', background: 'url("https://i.nextmedia.com.au/News/crypto_currency_coin.jpg") center / cover'}}>UK markets watchdog proposes retail ban on crypto derivatives</CardTitle>
    <CardText>
       Due to prevalence of market abuses.
    </CardText>
    <CardActions border>
        <Button href="https://www.itnews.com.au/news/uk-markets-watchdog-proposes-retail-ban-on-crypto-derivatives-527681?utm_source=feed&utm_medium=rss&utm_campaign=iTnews+Finance+feed" colored>Read Full Story</Button>
    </CardActions>
    <CardMenu style={{color: '#ffff'}}>
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

export default ItNews;