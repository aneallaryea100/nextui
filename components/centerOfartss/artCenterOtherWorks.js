import { AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import Link from "next/link";

function ArtCenterOtherWorks({otherWorks}) {
  return (
    <div className='mt-5 mx-3'>
        <h2 className="font-bold text-2xl m-1">Other works by {otherWorks.name}</h2>
        <div className="grid grid-cols-2 gap-1 auto-cols-auto w-full md:grid-cols-3 gap-2 lg:grid-cols-4 gap-3">
            {otherWorks.relatedWorks.map((otherworks) =>
            (
                <div className="p-0 h-min shadow-md" key={otherworks.id}>
                  <Link href={`/centerofart/${otherworks.name}`}>
                      <div><img src={otherworks.image} alt={otherworks.name} className="w-full"/></div>
                      <div className="flex justify-between p-1">
                        <div className="flex flex-col">
                          <h2 className="block font-bold capitalize">{otherworks.name}</h2>
                          <h4 className="block text-sm">{otherworks.subtitle}</h4>
                          <span className="font-bold">${otherworks.price}</span>
                        </div>
                        <div><span><AiOutlineHeart /></span></div>
                      </div>
                  </Link>
                </div>
            )
            )}
        </div>
      
    </div>
  )
}

export default ArtCenterOtherWorks
