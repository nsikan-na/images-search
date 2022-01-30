import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
  return <div>
      <div>
      <img src='/images/logo.jpg'/>
      <ul>
        <li>Get Started</li>
        <li>Careers</li>
        <li>Contact Us</li>
        <li>Newsletter</li>
        <li>NewsRoom</li>
        <li>Ramsey Press</li>
        <li>About</li>
      </ul>
      <ul>
          <li><FacebookIcon/></li>
          <li><TwitterIcon/></li>
          <li><YouTubeIcon/></li>
          <li><InstagramIcon/></li>
      </ul>
      </div>
      <div>
          <div>
          <div>Debit Card Policy |</div>
          <div>Privacy Policy | </div>
          <div>Terms of Use</div>
          </div>
          <div><CopyrightIcon/>2022 Lampo Licensing, LLC. All rights reserved.</div>
      </div>
  </div>;
}
