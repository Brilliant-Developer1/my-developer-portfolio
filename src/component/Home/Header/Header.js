import React from 'react';
import './Header.css';
import HeroImg from '../../../images/obaidullah.jpg'
import Typed from 'react-typed';
import Arrow from '../../../images/social-media-arrow.svg'
import ArrowDown from '../../../images/scroll-down-arrow.svg'
import styled from 'styled-components';

const HeroStyles = styled.div`
    .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .social-sites, .scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 20px;
    width: 50px;
  }
  .social-sites {
    left: 50px;
  }
  .scrollDown {
    right: 50px;
  }
  .social-sites-indicator, .scrollDown{
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .scrollDown {
    img {
      max-height: 70px;
    }
  }
  .social-text{
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    
    .social-sites {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .social-sites-indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .social-text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }

`;

const Header = () => {
    return (
       <HeroStyles>
       <div className='hero'>
       <div className='social-sites'>
       <div className='social-sites-indicator'>
           <p>Follow</p>
           <img  src={Arrow} alt="" />
       </div>
       <div className="social-text">
           <ul>
           <li>
           <a href="https://www.facebook.com/brilliantobaidul/" target="_blank" rel="noreferrer">FB</a>
           </li>
           <li>
           <a href="https://twitter.com/BrilliantDevel1" target="_blank" rel="noreferrer">TW</a>
           </li>
           <li>
           <a href="https://www.fiverr.com/brilliant_dev?up_rollout=true" target="_blank" rel="noreferrer">Fi</a>
           </li>
           <li>
           <a href="https://www.linkedin.com/in/md-obaidullah-brilliant-developer/" target="_blank" rel="noreferrer">LI</a>
           </li>
           </ul>
       </div>
        </div>
        <div  className='container hero-section'>

        <div>
        <h1 className='hero-heading'>
        
        <div className='text-animate'>
        <span>Hey! This is </span>
        <span style={{color:'white', display:'inline-block', marginBottom:'15px'}}> Md Obaidullah</span> <br />
        <Typed
        
        strings={['I am a MERN stack Developer', "I am a React JS Developer", "I am a Full Stack Web Developer"]}
        typeSpeed={40}
        backSpeed={50}
        loop
        />
        <p className='about-text'>
        I am a Front-End Web Developer. I am skilled at HTML, CSS Bootstrap, Material UI, JavaScript, React JS, Node JS, Express JS, Mongo DB, Firebase. I’m also familiar with Adobe Photoshop & illustrator, and MS Office Package.
        </p>
        <a href="https://drive.google.com/drive/folders/1v2uaMuPkDpTnzeL0VcO41Bn0w3m4UIKb?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button className='resume-btn' >See my Resume</button>
        </a>
        </div>
        </h1>
        
        </div>

        <div className='hero-img'>
        <img style={{maxWidth:'466px'}} src={HeroImg} alt="heroImg"/>
        </div>
        
        </div>
        <div className='scrollDown'>
            <p>Scroll</p>
            <img  src={ArrowDown} alt="down"  />
        </div>
       </div>
       </HeroStyles>
    );
};

export default Header;