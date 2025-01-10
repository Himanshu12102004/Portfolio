
import SkillBox from './SkillBox';
import { FaBrain, FaLaptopCode, FaSlidersH } from 'react-icons/fa';

function Intro(props: { isMobile: boolean }) {
  let { isMobile } = props;
  console.log(isMobile);
  return (
    <div className="flex flex-col">
      <div
        className={`w-full flex items-center font-sans justify-center text-center border-2 border-t-0 border-borderColor py-32 pb-14`}
      >
        <span className="font-semibold font-exo   text-5xl">Himanshu</span>
      </div>
      <div className="w-full">
        <div
          className={`flex 
          } w-full  border-collapse`}
        >
          <SkillBox
            isMobile={isMobile}
            isMiddle={false}
            icon={
              <FaLaptopCode
                color="rgb(100,100,100)"
                size={isMobile ? 25 : 40}
              ></FaLaptopCode>
            }
            head="Web Developer"
            description={`Performance Optimizer*Product Builder*API Architect`}
          />
          <SkillBox
            isMobile={isMobile}
            isMiddle={true}
            icon={
              <FaSlidersH
                size={isMobile ? 25 : 40}
                color="rgb(100,100,100)"
              ></FaSlidersH>
            }
            head="CG Programer"
            description="3D Graphics Enthusiast*Animation Architect*Shader Developer"
          />
          <SkillBox
            isMobile={isMobile}
            isMiddle={false}
            icon={
              <FaBrain
                size={isMobile ? 25 : 40}
                color="rgb(100,100,100)"
              ></FaBrain>
            }
            head="Learner"
            description="Exploration Enthusiast*Knowledge Seeker*Lifelong Learner"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
