
import LazyLoadImage from '../../../components/LazyLoad';

function techSet(props:{technologies:{src:string,txt:string}[]}) {
  let {technologies}=props
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 ">
        {technologies.map((tech, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center border border-gray-400 py-6 "
            >
              <LazyLoadImage
                src={tech.src}
                className="w-16 h-16 object-contain mb-4"
              />
              <div className="text-lg text-center text-gray-600">
                {tech.txt}
              </div>
            </div>
          );
        })}
      </div>
  )
}

export default techSet