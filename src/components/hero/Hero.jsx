import './hero.css'
const Hero = () => {
  return (
    <section className='hero flex'>
      <div className='left-section'>
        <div className="parent-avetar flex">
          <img src="./ismail.jpg" alt="" className="avetar" />
          <div className='icon-verified'></div>
        </div>
        <h1 className='title'>
          Software Engineer
        </h1>
        <p className='sub-title'>
          I'm Ismail Dehaoui, a software engineer with a strong customer focus and expertise in backend development. Skilled in testing and maintenance, with a sharp analytical mindset. Committed to keeping up with industry trends and delivering innovative solutions.
        </p>
        <div className='all-icons flex'>
          <div className="icon icon-x"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-facebook"></div>
          <div className="icon icon-linkedin2"></div>
        </div>
      </div>
      <div className='right-section animation border'>animation</div>
    </section>
  )
}

export default Hero;
