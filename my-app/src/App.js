import React, {Component} from 'react';
import {Header,Layout,Drawer,Navigation,Content,Textfield,IconButton,Menu,MenuItem} from 'react-mdl';
import './App.css';
import Main from './components/main';


class App extends Component  {
	render(){
  return (
    <div className="demo-big-content">
    <Layout fixedDrawer>
        <Header title={<a style={{textDecoration:'none',color:'white',fontWeight:'bold'}} href='/'>NEWS CHANNELS</a>} scroll className="head-color">
					<div style={{position: 'relative'}}>
    <IconButton name="more_vert" id="demo-menu-top-right" />
    <Menu target="demo-menu-top-right">
        <MenuItem>Favorites</MenuItem>
        <MenuItem>Added To Library</MenuItem>
        <MenuItem >Liked Articles</MenuItem>
        <MenuItem>Disliked Articles</MenuItem>
    </Menu>
</div>
			<Textfield
                    value=""
                    onChange={() => {}}
                    label="Search2"
                    expandable
                    expandableIcon="search"
                />
				
            <Navigation>
				<a style={{textDecoration:'none',color:'white',fontWeight:'bold'}} href="/">HOME</a>
			</Navigation>
		
        </Header>
		
        <Drawer className="drawer-color">
		
            <Navigation>
			
                <a  style={{textDecoration:'none',color:'black',fontWeight:'bold'}} href='/forbes'>Forbes News</a>
				<a style={{textDecoration:'none',color:'black',fontWeight:'bold'}} href='/hackernoon'>HackerNoon News</a>
				<a style={{textDecoration:'none',color:'black',fontWeight:'bold'}} href='/seekingalpha'>SeekingAlpha News</a>
				<a style={{textDecoration:'none',color:'black',fontWeight:'bold'}} href="/technode">Technode News</a>
                <a style={{textDecoration:'none',color:'black',fontWeight:'bold'}} href="/Bricade">Bricade</a>
                <a style={{textDecoration:'none',color:'black',fontWeight:'bold'}} href="/itnews">ItNews.com.au</a>
                <a style={{textDecoration:'none',color:'black',fontWeight:'bold'}} href="/Newsbtc">Newsbtc</a>
				<a style={{textDecoration:'none',color:'black',fontWeight:'bold'}} href="/securityboulevard">SecurityBoulevard.com</a>
                <a style={{textDecoration:'none',color:'black',fontWeight:'bold'}} href="/dailyfx">Dailyfx.com</a>
                <a style={{textDecoration:'none',color:'black',fontWeight:'bold'}} href="/bitconist">BitConist.com</a>
                <a style={{textDecoration:'none',color:'black',fontWeight:'bold'}} href="/pypi">PyPi.org</a>
				
				
				   
            </Navigation>
        </Drawer>
		     
		<Content>
            <div className="page-content" />
			<Main/>
        </Content>
    </Layout>
</div>
  );
}
}

export default App;
