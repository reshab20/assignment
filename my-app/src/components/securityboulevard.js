import React, {Component} from 'react';
import {Card,CardTitle,CardText,CardActions,CardMenu,IconButton,Button,Grid,Cell,Layout,List,ListItem,Tooltip} from 'react-mdl';
import './yahoo.css'


class SecurityBoulevard extends Component{
	render() {
		return(
		<Layout className="color">
				<Grid>
		<Cell col={12}>
				<div className="project-card">
				<Card shadow={0} style={{width: '450px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '150px', background: 'url( "https://www.untangle.com/wp-content/uploads/blogs/ransomware-blog-image-01.jpg") center / cover'}}>The Cost of Ransomware Attacks on Cities</CardTitle>
    <CardText>
	Ransomware attacks on cities are becoming more prevalent with ransom demands increasing with each attack. Recently, two cities have gone against conventional wisdom and decided to pay the ransom amount demanded by hackers who held their cities hostage. This d…
    </CardText>
    <CardActions border>
        <Button href="https://securityboulevard.com/2019/07/the-cost-of-ransomware-attacks-on-cities/" colored>Read Full Story</Button>
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

export default SecurityBoulevard;