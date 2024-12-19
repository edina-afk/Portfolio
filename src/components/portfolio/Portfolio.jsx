import  "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
        <div className="title">
                 <h1>About Me</h1>
        </div>
           <div className="container">
                <div className="content">
                  <h2>Welcome to my website</h2>
                <p>
                I'm Eden, a skilled and creative full-stack developer with a passion for building beautiful, 
                responsive, and user-friendly websites. I have experience working on a variety of web projects. 
                Currently, I am working on projects such as an appointment system within a queue management platform 
                for the Ministry of Revenues of Ethiopia (Ambo Branch) and a platform that allows Ethiopian artists 
                to showcase their work.
                </p>
              </div>
            <div className="section">
             <video controls>
              <source src="image-4-1_eZquOQZO.mp4" type="video/mp4"/>
             </video>
            </div>
        </div>
    </div>
         
        
     

  )
}
