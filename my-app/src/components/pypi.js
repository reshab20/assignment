import React, {Component} from 'react';
import {Card,CardTitle,CardText,CardActions,CardMenu,IconButton,Button,Grid,Cell,Layout,List,ListItem,Tooltip} from 'react-mdl';
import './yahoo.css'

class PyPi extends Component{
	render() {
		return(
		<Layout className="color">
				<Grid>
		<Cell col={12}>
				<div className="project-card">
		
<Card shadow={0} style={{width: '450px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '150px', background: 'url( "https://pypi.org/static/images/twitter.c0030826.jpg") center / cover'}}>bitcoin-xyz added to PyPI</CardTitle>
    <CardText>
        This is a bitcoin tools package.
    </CardText>
    <CardActions border>
        <Button href="https://pypi.org/project/bitcoin-xyz/" colored>Read Full Story</Button>
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

export default PyPi;