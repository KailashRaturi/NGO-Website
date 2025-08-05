import "./About.css";

const AboutUs = () => {
  return (
    <>
      <main className="About-us" id="About">
        <div className="inner-about">
          <h2>Who We Are</h2>
          <p>
            Founded in 2012, Planet Hero Foundation is a non-profit organization
            dedicated to creating meaningful and sustainable change in
            communities across India. Our mission is to uplift lives through
            quality education, accessible healthcare, women empowerment, and
            environmental sustainability. With a strong grassroots presence in
            both rural and urban areas, we have positively impacted over 50,000
            individuals through our diverse programs and initiatives. Each of
            our projects is guided by the belief that every person deserves the
            opportunity to thrive, regardless of their background or
            circumstance.
          </p>
        </div>
        <section className="About-card">
          <h2>What We Do</h2>
          <div className="inner-card">
            <div className="card-1">
              <heading>
                <i class="fa-solid fa-book-open-reader fa-beat"></i> Education
                for All
              </heading>
              <p>
                We run free learning centers, provide school supplies, and
                support digital learning for children in underserved areas.
              </p>
            </div>
            <div className="card-1">
              <heading>
                <i class="fa-solid fa-user-nurse fa-beat"></i> Healthcare
                Outreach
              </heading>
              <p>
                Organizing monthly health camps, vaccination drives, and
                menstrual hygiene workshops in rural areas.
              </p>
            </div>
            <div className="card-1">
              <heading>
                <i class="fa-solid fa-person-dress fa-beat"></i> Women
                Empowerment
              </heading>
              <p>
                Skill development, micro-finance training, and entrepreneurship
                programs to help women build independent livelihoods.
              </p>
            </div>
            <div className="card-1">
              <heading>
                <i class="fa-solid fa-tree fa-beat"></i> Environment &
                Sustainability
              </heading>
              <p>
                Tree plantation, plastic-free campaigns, and clean water
                initiatives to protect our environment.
              </p>
            </div>
          </div>
        </section>
      </main>
      <section className="Testimonial">
        <h2>Testimonials</h2>
        <div>
          <p>
            “HopeRise Foundation changed the life of my daughter. Now she is
            going to school every day.”
          </p>
          <h2> Rekha Devi, Bihar</h2>
        </div>
        <div>
          <p>
            “The tailoring course gave me the confidence to start my own
            business.”
          </p>
          <h2> Anjali Kumari, Jharkhand</h2>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
