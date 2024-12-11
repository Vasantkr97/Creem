import Card1 from "./Card1"
import Card2 from "./Card2"
import Card3 from "./Card3"

const Grid = () => {
  return (
    <div className='relative z-20 pt-32 min-h-screen'>
      <div className="relative bg-neutra-800 rounded-[32px] border border-neutral-700">
        {/* <span className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-black/50 to-black scale-[1.1] pointer-events-none"></span> */}
          <div className="p-6 bg-blac border border-neutral-700 rounded-[24px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
              <Card1 />
              <Card2 />
              <Card3 />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Grid