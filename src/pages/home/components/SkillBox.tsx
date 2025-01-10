interface Props {
  icon: any;
  head: string;
  description: string;
  isMiddle: boolean;
  isMobile:boolean;
}
function SkillBox(prop: Props) {
  const { icon, head, description, isMiddle ,isMobile} = prop;
  return (
    <div
      className={`flex flex-col text-center ${isMobile?"w-full":"w-1/3"} ${
        isMiddle ? '' : 'border-t-0 border-b-0 border-2'
      } border-borderColor h-full  ${isMobile?"py-7":"py-20"}`}
    >
      <div className="flex justify-center ">{icon}</div>
      <div className="font-exo font-bold mt-4  text-sm">{head}</div>
      {!isMobile&&<div className="mt-4 font-urbanist text-sm">
        {description.split('*').map((line, index) => (
          <div style={{ margin: '5px' }} key={index}>
            {line}
          </div>
        ))}
      </div>}
    </div>
  );
}

export default SkillBox;
