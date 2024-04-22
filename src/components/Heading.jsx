import TagLine from "./TagLine"


const Heading = ({className , title , text , tag}) => {
  return (
    <div className={`${className}  mx-auto mb-12 mt-12 mw-[50rem] lg:mb-20 md:text-center`}>
        {tag && <TagLine className={` mb-4 md:justify-center `}>{tag}</TagLine>}
        {title && <h2 className={`h2`}>{title}</h2>}
        {text && <p className={`body-2 mt-4 text-n-4`}>{text}</p>}



       
    </div>
  )
}

export default Heading











