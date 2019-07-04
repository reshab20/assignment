import React, {Component} from 'react';
import {Card,CardTitle,CardText,CardActions,CardMenu,IconButton,Button,Grid,Cell,Layout,Header,Tooltip,List,ListItem} from 'react-mdl';
import './yahoo.css'

class TechNode extends Component{
	render() {
		return(
		<Layout className="color">
				<Grid>
		<Cell col={12}>
				<div className="project-card">
				<Card shadow={0} style={{width: '450px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '150px', background: 'url("https://i1.wp.com/technode.com/wp-content/uploads/2018/03/bitcoin_blockchain-700x467.jpg?fit=700%2C467&ssl=1") center / cover'}}>Chinese news app Sina Finance unveils new cryptocurrency feature</CardTitle>
    <CardText>
        Bitcoin has made its way back to the media spotlight in China.
    </CardText>
    <CardActions border>
        <Button href=" https://technode.com/2019/07/04/chinese-news-app-sina-finance-unveils-new-cryptocurrency-feature/" colored>Read Full Story</Button>
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

export default TechNode;