import { FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

function Footer(props: { isMobile: boolean }) {
  let { isMobile } = props;
  isMobile = true;
  return (
    <div
      style={{ 
        // backgroundColor: 'rgba(217, 119 ,6 ,0.8)' 

      }}
      className={`bg-neutral-800 ${
        isMobile ? 'p-5 items-center flex-col' : 'p-10 justify-between '
      } text-gray-100 font-urbanist flex `}
    >
      <div className={`flex flex-col gap-2 ${isMobile ? 'items-center' : ''}`}>
        <div className="text-center">Designed and Developed by Himanshu</div>
        <div className="mb-4">
          Copyright &copy; {new Date().getFullYear()} Himanshu Gupta
        </div>
      </div>
      <div className={`flex flex-col ${isMobile ? 'items-center' : ''}`}>
        {/* <div>{isMobile ? "Contact me here" : "Socials:"}</div> */}
        <div
          className={`flex ${
            isMobile ? 'flex-row' : 'flex-col'
          } gap-4 mt-3 items-cente`}
        >
          <a
            href="https://www.linkedin.com/in/himanshu-g12/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center"
          >
            <FaLinkedin size={20} />
            {!isMobile && (
              <span className="ml-2">linkedin.com/in/himanshu-g12/</span>
            )}
          </a>
          <a
            href="https://youtube.com/@fractalverse12?si=R6iq0uNXALrc4L1f"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex items-center"
          >
            <FaYoutube size={24} />
            {!isMobile && (
              <span className="ml-2">youtube.com/@fractalVerse12</span>
            )}
          </a>
          <a
          target='_blank'
  href="mailto:himanshu12102004@gmail.com"
  aria-label="Email"
  className="flex items-center"
>
  <MdEmail size={24} />
  {!isMobile && <span className="ml-2">himanshu12102004@gmail.com</span>}
</a>



          <a
            href="https://github.com/Himanshu12102004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center"
          >
            <FaGithub size={24} />
            {!isMobile && <span className="ml-2">GitHub</span>}
          </a>
        </div>
        {/* <div className="mt-5">See my stats</div> */}
        <div
          className={`flex ${isMobile ? 'flex-row' : 'flex-col'} gap-4 mt-3`}
        >
          <a
            href="https://leetcode.com/u/himanshu12102004/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="flex items-center"
          >
            <SiLeetcode size={24} />
            {!isMobile && <span className="ml-2">LeetCode</span>}
          </a>
          <a
            href="https://codeforces.com/profile/himanshu12102004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Codeforces"
            className="flex items-center"
          >
            <SiCodeforces size={24} />
            {!isMobile && <span className="ml-2">Codeforces</span>}
          </a>
        </div>
      </div>
    

    </div>
  );
}

export default Footer;
