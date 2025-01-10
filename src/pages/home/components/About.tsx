import LazyLoadImage from '../../../components/LazyLoad';
function About(props: { isMobile: boolean }) {
  let { isMobile } = props;
  return (
    <div className=" animate-fadeIn relative">
      <div className={`flex ${isMobile ? 'flex-col' : 'justify-between'}`}>
        <div
          className={`flex flex-col ${isMobile ? '' : 'w-2/3'}  z-10 relative`}
        >
          <div className="text-3xl font-urbanist mt-10">About</div>
          <div className="mt-4  font-urbanist text-justify ">
            Hello there,
            I’m Himanshu, a Computer Science student at NIT Hamirpur. I work on
          computer graphics and web development.
            I specialize in creating immersive interactive simulations,
            blending technical precision with creative design.
            
            My focus is on transforming ideas into dynamic, engaging
            experiences, constantly exploring new
             technologies to push boundaries and deliver impactful
            solutions.
          </div>
          <div className="elementor-widget-container"></div>
        </div>
        <div className="mt-5">
          <LazyLoadImage
            height={isMobile ? 200 : 300}
            width={400}
            src={'projectImages/sketchyDemo.png'}
          />
          <i>
            <div className="font-urbanist text-center  pt-3">
              Sketchy: A software that sketches SVGs
            </div>
          </i>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default About;
