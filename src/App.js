import logo from './images/myteam.png';
import madalImg from './images/madal.svg';
import oval from './images/Oval.png';
import group13 from './images/Group 13.png';
import oval1 from './images/Oval (1).png';
import oval2 from './images/Oval (2).png';
import oval3 from './images/Oval (3).png';
import oval4 from './images/Oval (4).png';
import path from './images/Path.png';
import shape from './images/Shape.png';
import group132 from './images/Group 13 (2).png';
import object from './images/Object.svg';
import jakarta from './images/jakarta.svg';
import object1 from './images/Object (1).svg';
import object2 from './images/Object (2).svg';
import gadgets from './images/gadgets-now.svg';
import myteam from './images/myteam.png';
import facebook from './images/facebook-logo.svg';
import pinterest from './images/pinterest-logo.svg';

import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';

import './App.scss';

function App() {
  return (
    <div className="App">
       <header header >
        <div className="container">
            <div className="header__item">
                <nav>
                    <img src={logo} alt="logo" />
                    <ul>
                        <li>home</li>
                        <li>about</li>
                    </ul>
                </nav>
                <button className="btn">contact us</button>
                <div className="madal">
                    <img src={madalImg} alt="madal" />
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li><button className="btn">contact us</button></li>
                    </ul>
                </div>
            </div>
        </div>
      </header>
      
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero__item">
              <h1>About</h1>
              <div className="hero__riht">
                <hr />
                <p>We help companies build dynamic teams made up of top global talent. Using our network of
                  passionate professionals we drive innovation and deliver incredible outcomes. Talented,
                  diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="meet">
          <div className="container">
            <h2>Meet the directors</h2>
            <div className="cards">
              <div className="card">
                <img src={oval} alt="avatar" />
                <h3>Nikita Marks</h3>
                <i>Founder & CEO</i>
                <img className="push" src={group13} alt="push" />
              </div>
              <div className="card">
                <img src={oval1} alt="avatar" />
                <h3>Cristian Duncan</h3>
                <i>Co-founder & COO</i>
                <img className="push" src={group13} alt="push" />
              </div>
              <div className="card">
                <img src={oval2} alt="avatar" />
                <h3>Cruz Hamer</h3>
                <i>Co-founder & CTO</i>
                <img className="push" src={group13} alt="push" />
              </div>
              <div className="card">
                <img src={oval3} alt="avatar" />
                <h3>Drake Heaton</h3>
                <i>Business Development Lead</i>
                <img className="push" src={group13} alt="push" />
              </div>
              <div className="card">
                <img src={oval4} alt="avatar" />
                <h3>Griffin Wise</h3>
                <i>Lead Marketing</i>
                <img className="push" src={group13} alt="push" />
              </div>
              <div className="card">
                <h3>Aden Allan</h3>
                <i>“Empowered teams create truly amazing products. Set the north star and let them follow
                  it.”</i>
                <br />
                <img src={path} alt="avatar" />
                <img src={shape} alt="avatar" />
                <img className="push" src={group132} alt="push" />
              </div>
            </div>
          </div>
        </section>
        <section className="some">
          <div className="container">
            <h2>Some of our clients</h2>
            <div className="some__item">
              <img src={object} alt="icon" />
              <img src={jakarta} alt="icon" />
              <img src={object1} alt="icon" />
              <img src={object2} alt="icon" />
              <img src={gadgets} alt="icon" />
            </div>
          </div>
        </section>
        <section className="get">
          <div className="container">
            <div className="get__item">
              <h2>Ready to get started?</h2>
              <button className="btn">contact us</button>
            </div>
          </div>

        </section>
        <footer>
          <div className="container">
            <div className="footer__item">
              <div className="footer__one">
                <div>
                  <img src={myteam} alt="logo" />
                  <ul>
                    <li>home</li>
                    <li>about</li>
                  </ul>
                </div>
                <ol>
                  <li>987 Hillcrest Lane</li>
                  <li>Irvine CA</li>
                  <li>California 92714</li>
                  <li>Call Us:949-833-7432</li>
                </ol>
              </div>
              <div className="footer__two">
                <div>
                  <img src={facebook} alt="ions" />
                  <img src={pinterest} alt="ions" />
                  <img src={path} alt="ions" />
                </div>
                <p>Copyright 2020. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}

export default App;
