import Avatar from '../components/avatar'
import CoverImage from '../components/cover-image'

export default function PostHeader({ title, thumbnailImage, categoryNew, contentType, contentTypeIcon, bgColor, author }) {
  return (
    <>
      <div className="mb-8 mx-0 sm:mx-10 md:mx-12 lg:mx-48 xl:mx-64">
        <CoverImage 
          title={title} 
          url={thumbnailImage} 
          categoryNew={categoryNew} 
          contentType={contentType} 
          contentTypeIcon={contentTypeIcon}  
          bgColor={bgColor}  
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </>
  )
}
