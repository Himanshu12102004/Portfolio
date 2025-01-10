import LazyLoadImage from '../../../components/LazyLoad';
import Tags from './Tags';

interface Props {
  data: {
    head: string;
    image: string[];
    description: string;
    tags: string[];
    link?: string;
    linkText?: string;
    textBelowImage?: string;
  }[];
  isMobile: boolean;
}
function ProjectSet(props: Props) {
  let isMobile = props.isMobile;
  return (
    <div className="flex flex-col gap-6">
      {props.data.map((project, index) => {
        return (
          <div
            className={`border border-gray-400 ${
              isMobile ? 'p-4' : 'p-7'
            } flex flex-col`}
          >
            <div
              key={index}
              className={`flex ${
                isMobile ? 'flex-col' : ''
              }  justify-center items-center gap-6 `}
            >
              <div className={`${isMobile ? '' : ' flex-[2]'} `}>
                <div className="flex flex-col justify-center ">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <div className="font-exo text-xl mr-2 font-medium">
                        {project.head}
                      </div>
                      {!isMobile && <Tags tags={project.tags}></Tags>}
                    </div>
                    <div className="font-urbanist  text-justify">
                      {project.description}
                    </div>
                  </div>

                  {project.link && !isMobile && (
                    <div className={`mt-5 ${isMobile ? 'm-auto' : ''}`}>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-urbanist font-semibold text-sm bg-primary-600 inline-block py-2 px-4 rounded-sm"
                      >
                        {project.linkText}
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-[1] relative">
                <div className="flex justify-center align-middle">
                  <div
                    className={`flex  justify-${
                      project.image.length > 1 ? 'between' : 'center'
                    } w-[17.6rem]`}
                  >
                    {project.image.map((img, index) => {
                      return (
                        <LazyLoadImage
                          key={index}
                          src={`projectImages/${img}`}
                          className="h-[11rem] w-auto object-cover"
                        />
                      );
                    })}
                  </div>
                </div>
                {project.textBelowImage && (
                  <i>
                    <div
                      className="font-urbanist mt-3  text-center"
                      dangerouslySetInnerHTML={{
                        __html: project.textBelowImage,
                      }}
                    />
                  </i>
                )}
              </div>
            </div>
            {project.link && isMobile && (
              <div className={`mt-5  ${isMobile ? 'm-auto' : ''}`}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-urbanist font-semibold text-sm bg-primary-600 inline-block py-2 px-8 rounded-sm"
                >
                  {project.linkText}
                </a>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
export default ProjectSet;
