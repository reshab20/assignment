import React, {Component} from 'react';
import {Card,CardTitle,CardText,CardActions,CardMenu,IconButton,Button,Grid,Cell,Layout,ListItem,List,Tooltip} from 'react-mdl';
import './yahoo.css'


class SeekingAlpha extends Component{
	render() {
		return(
		<Layout className="color">
				<Grid>
		<Cell col={12}>
				<div className="project-card">
				<Card shadow={0} style={{width: '450px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '150px', background: 'url( "https://static3.seekingalpha.com/uploads/2019/7/3/49709965-15622010267196493.png") center / cover'}}>Buy The Dip On Bitcoin</CardTitle>
    <CardText>
      Bitcoin contains qualities that make it a theoretically superior form of money. Technical analysis suggests we are entering a fourth parabolic advance. Increase
    </CardText>
    <CardActions border>
        <Button href="https://seekingalpha.com/article/4273420-buy-dip-bitcoin" colored>Read  Full Story</Button>
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

export default SeekingAlpha;