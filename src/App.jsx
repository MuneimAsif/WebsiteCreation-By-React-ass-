import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (

<div className='MAIN_DIV'>
      {/* // banner start */}
      <div className="banner">

        <nav class="navbar navbar-expand-lg bg-transparent">
          <div class="container-fluid">
            <a class="navbar-brand text-white fw-bold fs-3 ms-5 mt-3" href="#">DORSIN</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mt-3 mb-lg-0 ul1 p-3">
                <li class="nav-item">
                  <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Services</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Team</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
                </li>
              </ul>

              <div>
                <button className='btn1 me-5 mt-3'>Try it Free</button>
              </div>
            </div>
          </div>
        </nav>

        <div className='w-100 d-flex justify-content-center align-items-center div1'>
          <div className='div2'>
            <h1 className='h1a'>We help startups launch their products</h1>
            <p className='p1'>Etiam sed.Interdum consequat proin vestibulum class at.</p>
          </div>
        </div>
      </div>
      {/* // banner end */}

      {/* //  services start */}
      <div className="div4 my-5">
        <h1 className='h1b fs-5'>OUR SERVICES</h1>
        <hr className='hr1' />
        <div className='div5'>
          <p className='p2'>We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>
        </div>
      </div>

      <div className="container1 container my-5">
        <div className="row">
          <div className="div col-lg-4 col-md-6 col-12">
            <div className='div6 p-3 my-4'>
              <img className="img1" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqPVKFkYUxBvBF2pEjeIrk2922XffVhbi9sQ&usqp=CAU' alt="" />
              <h3 className='h3a mt-3' >Digital Design</h3>
              <p className='p3 mt-4'>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
            </div>
          </div>
          <div className="div col-lg-4 col-md-6 col-12">
            <div className='div6 p-3 my-4'>
              <img className='img1' src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/38_1-512.png" alt="" />
              <h3 className='h3a mt-3' >Unlimited Colors</h3>
              <p className='p3 mt-4'>Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.</p>
            </div>
          </div>
          <div className="div col-lg-4 col-md-6 col-12">
            <div className='div6 p-3 my-4'>
              <img className='img1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThYl4EoFOwQY5JSCDdqDhcoTsck7Ni99_g2g&usqp=CAU" alt="" />
              <h3 className='h3a mt-3' >Strategy Solutions</h3>
              <p className='p3 mt-4'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="div col-lg-4 col-md-6 col-12">
            <div className='div6 p-3 my-4'>
              <h3 className='h3a mt-3' >Awesome Support</h3>
              <img className='img1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvIRaZbe7jrdU8p4j6eVlo1DgDsXf7LzCSg&usqp=CAU" alt="" />
              <p className='p3 mt-4'>It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.</p>
            </div>
          </div>
          <div className="div col-lg-4 col-md-6 col-12">
            <div className='div6 p-3 my-4'>
              <h3 className='h3a mt-3' >Truly Multipurpose</h3>
              <img className='img1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMpPzRYWNIna67BjHspkxcy8gstzeddlrRkg&usqp=CAU" alt="" />
              <p className='p3 mt-4'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
          </div>
          <div className="div col-lg-4 col-md-6 col-12">
            <div className='div6 p-3 my-4'>
              <h3 className='h3a mt-3'>Easy to customize</h3>
              <img className='img1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPpsZyeFYK5PyQASNFb2i8meDDpr4mb9Y4-9CtXK4RFbZ4F16NE8Mte416kcfWDV3-w0&usqp=CAU" alt="" />
              <p className='p3 mt-4'>Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.</p>
            </div>
          </div>
        </div>
      </div>
      {/* //  services end */}

      {/* {features start} */}
      <div className="container-fluid container-fluid1 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className='mt-4 p-3 div7'>
                <h3 className='h3b p-3'>A digital web design studio creating modern & engaging online experiences</h3>
                <p className='p3 p-3'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <ul className='ul2'>
                  <li className='li1'>We put a lot of effort in a design</li>
                  <li className='mt-2 li2'>The most important ingredient of successful website.</li>
                  <li className='mt-2 li2'>Sed ut perspiciatis unde omnis iste natus error sit.</li>
                  <li className='mt-2 li2'>Submit Your Organization.</li>
                </ul>
                <button className='btn2 mt-4'>Learn More</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className='mt-4 div8'>
                <img src="http://dorsin.react.themesbrand.com/assets/images/online-world.svg" className='img2 mt-5' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid container-fluid2 mt-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className='div9 d-flex align-items-center justify-content-center'>
              <div className='div10'>
              <h2 className='h2a fw-bold fs-1'>Build your dream website today</h2>
              <p className='p4 fs-5 mt-3'>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</p>
              <button className='btn3 mt-3'>View Plan & Pricing</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {features end} */}


     {/* {pricing start} */}
     <div className="div4 my-5">
        <h1 className='h1b fs-5'>OUR PRICING</h1>
        <hr className='hr1' />
        <div className='div5'>
          <p className='p2'>Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.</p>
        </div>
      </div>

      <div className="container">
        <div className="row g-5">

          <div className="col-lg-4 col-md-6 col-12 div10a">
            <div className='div11 p-4'>
               <p className='p5'>ECONOMY</p>
               <h1>$9.90</h1>
               <p className='p6'>BILLING PER MONTH</p>
               <hr className='hr2' />
               <ul>
                <li>Bandwih: <b>1GB</b> </li>
                <li>Online Space: <b>50MB</b> </li>
                <li> <b>No</b> Support</li>
                <li> <b>1</b>  Domain</li>
                <li> <b>No</b> Hidden Fees </li>
               </ul>
               <button className='btn2 mt-2'>Join Now</button>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 div10a">
            <div className='div11 p-4'>
               <p className='p5'>DELUXE</p>
               <h1>$19.90</h1>
               <p className='p6'>BILLING PER MONTH</p>
               <hr className='hr2' />
               <ul>
                <li>Bandwih: <b>10GB</b> </li>
                <li>Online Space: <b>500MB</b> </li>
                <li> <b>Full</b> Support</li>
                <li> <b>10</b>  Domain</li>
                <li> <b>No</b> Hidden Fees </li>
               </ul>
               <button className='btn2 mt-2'>Join Now</button>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 div10a">
            <div className='div11 p-4'>
               <p className='p5'>ULTIMATE</p>
               <h1>$29.90</h1>
               <p className='p6'>BILLING PER MONTH</p>
               <hr className='hr2' />
               <ul>
                <li>Bandwih: <b>100GB</b> </li>
                <li>Online Space: <b>2 GB</b> </li>
                <li> <b>Full</b> Support</li>
                <li> <b>Unlimited</b>  Domain</li>
                <li> <b>No</b> Hidden Fees </li>
               </ul>
               <button className='btn2 mt-2'>Join Now</button>
            </div>
          </div>
         
        </div>
      </div>
     {/* {pricing end} */}

    {/* {team start} */}
    <div className="div4 my-5">
        <h1 className='h1b fs-5'>BEHIND THE PEOPLE</h1>
        <hr className='hr1' />
        <div className='div5'>
          <p className='p2'>It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
      </div>

      <div className="container">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6 col-12">
            <div className='div12'>
              <img className='w-100' src="http://dorsin.react.themesbrand.com/assets/images/team/img-1.jpg" alt="" />
              <h6>Frank Johnson</h6>
              <p className='p5'>CEO</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className='div12'>
              <img className='w-100' src="http://dorsin.react.themesbrand.com/assets/images/team/img-2.jpg" alt="" />
              <h6>Elaine Stclair</h6>
              <p className='p5'>DESIGNER</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className='div12'>
              <img className='w-100' src="http://dorsin.react.themesbrand.com/assets/images/team/img-3.jpg" alt="" />
              <h6>Wanda Arthur</h6>
              <p className='p5'>DEVELOPER</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className='div12'>
              <img className='w-100' src="http://dorsin.react.themesbrand.com/assets/images/team/img-4.jpg" alt="" />
              <h6>Joshua Stemple</h6>
              <p className='p5'>MANAGER</p>
            </div>
          </div>
        </div>
      </div>

    {/* team start */}
    <div className="div13 mt-5 d-flex align-items-center justify-content-center">
          <div className="div4">
            <h1 className='h1b fs-4 '>WORK PROCESS</h1>
            <hr className='hr1' />
            <p className='p2'>In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web<br /> copy before the Proin vitae ipsum vel ex finibus semper design start.</p>
            </div>
        </div>


        <div className="container-fluid div14">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className='div15'>
                  <img className='img5' src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEComg91uKDEBPRRZ9c7hFrlYSqdioTKtZ9A&usqp=CAU" alt="" />
                  <h4 className='mt-4 fs-5 fw-bold'>Tell us what you need</h4>
                  <p className='p3'>The Big Oxmox advised her not to do so.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className='div15'>
                  <img className='img5' src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHfraZ1ATolu_eHLYc-iXImnUKAk92p2a0Lg&usqp=CAU" alt="" />
                  <h4 className='mt-4 fs-5 fw-bold'>Tell us what you need</h4>
                  <p className='p3'>The Big Oxmox advised her not to do so.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className='div15'>
                  <img className='img5' src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlCagczLJkoMItCuEnLugijW5qAkRWRiciQ&usqp=CAU" alt="" />
                  <h4 className='mt-4 fs-5 fw-bold'>Tell us what you need</h4>
                  <p className='p3'>The Big Oxmox advised her not to do so.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='div16 d-flex justify-content-center mt-5'>
            <button className='btn4'>GET STARTED</button>
          </div>

        </div>

        <div className="container-fluid container-fluid3 d-flex justify-content-center align-items-center">
          <div className="div4">
            <h1 className='h1b fs-2 text-white '>WORK PROCESS</h1>
            <hr className='hr1' />
            <div className='div5'>
              <p className='p2 text-white'>In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web<br /> copy before the Proin vitae ipsum vel ex finibus semper design start.</p>
              <button className='btn5 mt-3'>GET STARTED</button>
            </div>
          </div>
        </div>
        {/* team end */}


        {/* blog start */}

        <div className="container-fluid div4 blogdiv4">

          <div className='p-5 div18'>

            <h1 className='h1b h1c fs-4'>OUR BLOG</h1>
            <hr className='hr1' />

            <p className='p2' id='p2'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus ipsum vel ex finibus semper luctus quam.</p>
          </div>

          <div className="container">
            <div className="row g-5">

              <div className="col-lg-4 col-md-6 col-12">
                <div className='div17 p-3'>
                  <img className='img7' src="http://dorsin.react.themesbrand.com/assets/images/blog/img-1.jpg" alt="" />
                  <p className='p9 mt-3'>UI & UX Design</p>
                  <h4 className='h4b'>Doing a cross country road trip</h4>
                  <p className='p10'>She packed her seven versalia, put her initial into the belt and made herself on the way..</p>
                  <button className='btn6'>Read More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className='div17 p-3'>
                  <img className='img7' src="http://dorsin.react.themesbrand.com/assets/images/blog/img-2.jpg" alt="" />
                  <p className='p9 mt-3'>Digital Marketing</p>
                  <h4 className='h4b'>New exhibition at our Museum</h4>
                  <p className='p10'>Pityful a rethoric question ran over her cheek, then she continued her wa</p>
                  <button className='btn6'>Read More</button>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className='div17 p-3'>
                  <img className='img7' src="http://dorsin.react.themesbrand.com/assets/images/blog/img-3.jpg" alt="" />
                  <p className='p9 mt-3'>Travelling</p>
                  <h4 className='h4b'>Why are so many people..</h4>
                  <p className='p10'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                  <button className='btn6'>Read More</button>
                </div>
              </div>

            </div>
          </div>

        </div>
        {/* blog end */}


      {/* contact start */}
      <div className="div4 mt-5">
            <h1 className='h1b fs-4 '>GET IN TOUCH</h1>
            <hr className='hr1' />
            <p className='p2'>We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with faucibus sapien odio measurable results.</p>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className='div18 p-3'>
                    <input className='inp1 p-3' type="text" name="" id="" placeholder='Your name'/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className='div18 p-3'>
                    <input className='inp1 p-3' type="text" name="" id="" placeholder='Your email'/>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-12">
                  <div className='div18 p-3'>
                    <input className='inp1 p-3' type="text" name="" id="" placeholder='Your subject'/>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-12">
                  <div className='div18 p-3'>
                    <textarea className='p-3' name="" id="" cols="30" rows="10" placeholder='Your message'></textarea>
                  </div>
                </div>
              </div>
              <button className='btn7 me-3'>Send Message</button>
            </div>
            
      {/* contact end */}


      {/* footer start */}
      <div className='container-fluid div19 d-flex align-items-center mt-5'> 
          <div className="container mb-5">
            <div className="row g-5">
              <div className="col-lg-6 col-md-6 col-12">
                <div className='div20'>
                  <a href="tel:">+91 123 4556 789</a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className='div20'>
                  <a href="mailto:">support@info.com</a>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className="container-fluid5">
        <div className="container">
          <div className="row g-5">

            <div className="col-lg-3 col-md-6 col-12">
              <div className='div21 p-3 mt-5'>
                <h2 className='text-white fs-5 fw-bold ms-4'>DORSIN</h2>
                <ul className='ul5 mt-5' >
                  <li className=''>Home</li>
                  <li className='mt-2'>About Us</li>
                  <li className='mt-2'>Careers</li>
                  <li className='mt-2'>Contact Us</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className='div21 p-3 mt-5'>
                <h2 className='text-white fs-5 fw-bold ms-4'>INFORMATION</h2>
                <ul className='ul5 mt-5' >
                  <li className=''>Terms & Conditions</li>
                  <li className='mt-2'>About Us</li>
                  <li className='mt-2'>Jobs</li>
                  <li className='mt-2'>Bookmarks</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className='div21 p-3 mt-5'>
                <h2 className='text-white fs-5 fw-bold ms-4'>SUPPORT</h2>
                <ul className='ul5 mt-5' >
                  <li className=''>FAQ</li>
                  <li className='mt-2'>Contact</li>
                  <li className='mt-2'>Discussion</li>
                  
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className='div21 p-2 mt-5'>
                <h2 className='text-white fs-5 fw-bold'>SUBSCRIBE</h2>
                <p className='text-white p10 mt-3'>In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.</p>
                <input type="text" name="" id="" placeholder='Email' className='inp2 mt-2'/>
              </div>
            </div>


          </div>
        </div>
      </div>
      {/* footer end */}







































    </div>

  );
}

export default App;
