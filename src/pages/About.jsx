import start from '../assets/start.jpg'
import mission from '../assets/mission.png'
import qna from '../assets/answer.jpeg'

const About = () => {
    return (
        <div>
           <div data-aos="fade-left"  data-aos-duration="1000" className="hero mt-10 ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={start} className="lg:max-w-lg rounded-lg shadow-2xl border-4 border-white h-[250px] w-[400px]" />
    <div>
      <h1 className="lg:text-5xl font-bold text-white">Starting Up Story</h1>
      <p className="py-6 text-white">In 2015, amid a bustling cityscape, We envisioned "Z Specific" a pioneering venture specializing in designing and furnishing unique spaces for hospitals, schools, religious facilities, transportation terminals, convention centers, art galleries, and more. Our's passion for creating environments that fostered community, learning, and inspiration fueled our ambition. With meticulous attention to detail, we crafted bespoke solutions tailored to each client's needs. Despite initial skepticism, our's innovative approach quickly garnered attention. Soon, Z Specific became synonymous with excellence in spatial design. our journey had just begun, but our vision had already left an indelible mark on the landscape of architectural innovation.</p>
     
    </div>
  </div>
</div>

<div data-aos="fade-right"  data-aos-duration="1000" className="hero mt-10 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={mission} className="lg:max-w-lg rounded-lg shadow-2xl border-4 border-white h-[250px] w-[400px]" />
    <div>
      <h1 className="lg:text-5xl font-bold text-white">Core values, Mission, Beliefs, and Vision
</h1>
      <p className="py-6 text-white">At Z Specific, our core values revolve around creativity, collaboration, integrity, and excellence. Our mission is to redefine spaces, creating environments that inspire, connect, and empower individuals and communities. Grounded in the belief that every space has the potential to shape experiences and foster growth, we approach each project with dedication and innovation. Our vision is to be the premier provider of transformative spatial solutions, setting the standard for design excellence and leaving a lasting impact on the built environment. Through our passion for design and commitment to our clients' visions, we strive to bring dreams to life, one space at a time.</p>
     
    </div>
  </div>
</div>
<div data-aos="fade-left"  data-aos-duration="1000" className="hero mt-10 ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={qna} className="lg:max-w-lg rounded-lg shadow-2xl border-4 border-white h-[250px] w-[400px]" />
    <div>
      <h1 className="lg:text-5xl font-bold text-white">Have any Questions</h1>
      <p className="py-6 text-white">Consumers may wonder about Z Specific's range of services, which encompass designing and furnishing diverse environments such as hospitals, schools, religious facilities, transportation terminals, convention centers, and art galleries. They may inquire about our approach to customization, where we tailor solutions to meet individual client needs and preferences. Additionally, they might ask about our portfolio of past projects and client testimonials, which showcase our commitment to excellence and customer satisfaction. Furthermore, consumers may seek information about our sustainability practices, emphasizing our dedication to environmentally responsible design. Overall, we aim to provide transparent, informative, and responsive communication to address any consumer inquiries comprehensively.</p>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default About;