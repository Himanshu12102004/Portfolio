import clsx from 'clsx';

interface Props {
  tags: string[];
}

function Tag(props: { tag: string }) {
  const { tag } = props;
  let classTag=tag;
  if(tag=='Data structures'){
   classTag="DataStructures"
  }
  if(tag=='C++'){
    classTag="DataStructures"
   }
  const className = clsx(`text-${classTag}`, 'font-semibold');
  return <div className={`${className}`}>{tag}</div>;
}

function Tags(props: Props) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-0 font-exo font-semibold text-sm align-middle justify-end">
      {props.tags.map((content, index) => {
        return <Tag tag={content} key={index}></Tag>;
      })}
    </div>
  );
}

export default Tags;
