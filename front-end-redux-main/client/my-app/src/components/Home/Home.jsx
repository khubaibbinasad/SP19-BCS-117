import React from 'react'

import About from '../About/About'
import Clients from '../Client/Clients'
import Contact from '../contacts/Contact'
import Footer from '../Footer/Footer'

// import Navbar from './Navbar'

import Team from '../Team/Team'







const Home = () => {

    
  return (


<div>

    

<body id="page-top">
        {/* <!-- Navigation--> */}
       
           {/* <Navbar/>  */}
        {/* <!-- Masthead--> */}
        <header  className ="masthead">
            <div  className ="container">
                <div  className ="masthead-subheading">Welcome To Our Studio!</div>
                <div  className ="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <a  className ="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
            </div>
        </header>

        <div  className ="container1">
    <div  className ="row height d-flex justify-content-center align-items-center">
        <div  className ="col-md-8">
            <div  className ="search"> <i  className ="fa fa-search"></i> <input type="text"  className ="form-control" placeholder="Have a question? Ask Now"/> <button  className ="btn btn-primary">Search</button> </div>
        </div>
    </div>
</div>
        {/* <!-- Services--> */}
        <section  className ="page-section" id="services">
            <div  className ="container">
                <div  className ="text-center">
                    <h2  className ="section-heading text-uppercase">Services</h2>
                    <h3  className ="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div  className ="row text-center">
                    <div  className ="col-md-4">
                        <span  className ="fa-stack fa-4x">
                            <i  className ="fas fa-circle fa-stack-2x text-primary"></i>
                            <i  className ="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4  className ="my-3">E-Commerce</h4>
                        <p  className ="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div  className ="col-md-4">
                        <span  className ="fa-stack fa-4x">
                            <i  className ="fas fa-circle fa-stack-2x text-primary"></i>
                            <i  className ="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4  className ="my-3">Responsive Design</h4>
                        <p  className ="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div  className ="col-md-4">
                        <span  className ="fa-stack fa-4x">
                            <i  className ="fas fa-circle fa-stack-2x text-primary"></i>
                            <i  className ="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4  className ="my-3">Web Security</h4>
                        <p  className ="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </div>
        </section>
      
    
      <About/>
   <Team  />
      <Clients/>
      <Contact/>
      <Footer/>

      

</body>

    </div>
  )
}

export default Home