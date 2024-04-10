import start from '../assets/start.jpg'

const About = () => {
    return (
        <div>
           <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={start} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Starting Up Story</h1>
      <p className="py-6">In 2015, amid a bustling cityscape, We envisioned "Z Specific" a pioneering venture specializing in designing and furnishing unique spaces for hospitals, schools, religious facilities, transportation terminals, convention centers, art galleries, and more. Our's passion for creating environments that fostered community, learning, and inspiration fueled our ambition. With meticulous attention to detail, we crafted bespoke solutions tailored to each client's needs. Despite initial skepticism, our's innovative approach quickly garnered attention. Soon, Z Specific became synonymous with excellence in spatial design. our journey had just begun, but our vision had already left an indelible mark on the landscape of architectural innovation.</p>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default About;