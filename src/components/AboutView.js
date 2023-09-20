
import Hero from './Hero';

const AboutView = () => {
    return (
      <div>
            <Hero text="About Us" />
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 my-5">
                  <p className="lead">
                  The research project titled “Effects of ICT Utilization on Stress Management among Undergraduate Students of the University of Abuja” presents insightful findings on the intricate relationship between Information and Communication Technology (ICT) utilization and stress levels among students. The study establishes a compelling correlation, revealing a significant negative link between the incorporation of ICT tools in teaching methods and the academic stress experienced by University of Abuja students.

                  </p>
                </div>
              </div>
          </div>
      </div>
    )
  }

  export default AboutView;