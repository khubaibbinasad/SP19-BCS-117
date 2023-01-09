import React from 'react'
import photo1 from '../../assests/team/photo1.jpg'
import teams from '../data/data.json'
const Team = () => {
  return (
    <>
    <section>
            <div  className ="container">
                <div  className ="text-center">
                    <h2  className ="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3  className ="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div  className ="row">
                    {teams.map((p,q)=>
                    <div  className ="col-lg-4">
                    <div  className ="team-member">
                        <img  className ="mx-auto rounded-circle" src={photo1} alt="..." />
                        <h4>{p.title}</h4>
                        <p  className ="text-muted">{p.designation}</p>
                        <a  className ="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i  className ="fab fa-twitter"></i></a>
                        <a  className ="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i  className ="fab fa-facebook-f"></i></a>
                        <a  className ="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i  className ="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                    
                    
                    )}
                   
                    
                   
                    <div  className ="col-lg-8 mx-auto text-center"><p  className ="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
    
    
    </>
  )
}

export default Team