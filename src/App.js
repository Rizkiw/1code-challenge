import React from 'react';
import './App.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import logo from './assets/logo.png';
import pacificLogo from './assets/pacific_logo.png';
import imgHotel from './assets/hotel_img.png';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';

function App() {
  return (
    <div className="App">
      <Container maxWidth='xl'>
      <header className="header">
        <div className='header-icon'>
          <div><InstagramIcon /></div>
          <div><FacebookIcon /></div>
          <div><TwitterIcon /></div>
        </div>
        <div id='header-logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='header-contact'>
          <div>708-508-4500</div>
        </div>
      </header>
      </Container>
      <Card variant="outlined">{}</Card>
      {/* content */}
      <Container maxWidth='xl'>
      <div className='content'>
        <img src={pacificLogo} alt='pacificLogo' />
        <div className='content-desc'>
          <p id='desc-name'>Pan Pacific Sonargaon/Dhaka,BD</p>
          <p id='desc-loc'><LocationOnIcon />  107 Kazi Nazrul Islam Avenue, Dhaka 1215, Bangladesh</p>
          <p id='desc-call'><CallIcon />  Panpacific.Com:550-208-0088</p>
        </div>
        <div className='content-rating'>
          <div id='rate'>
            <div className='rating1'>4.5</div>
            <div className='rating2'>/5</div>
          </div>
          <div className='content-icon'>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
          </div>
        </div>
      </div>
      {/* <div><img src={imgHotel} alt='pacificLogo' /></div> */}
      </Container>
      <Card variant="outlined">{}</Card>
    </div>
  );
}



export default App;
