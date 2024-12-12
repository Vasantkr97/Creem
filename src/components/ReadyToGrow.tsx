import { links } from "../Constants/Enable"


const ReadyToGrow = () => {

  return (
      <div className="py-60 w-full overflow-hidden z-30">
        <div className="mx-auto w-full relative z-20 sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] bg-gradient-to-br from-neutral-900 to-black sm:rounded-2xl">
            <div className="relative mx-auto rounded-2xl overflow-hidden px-6 md:px-8">
                <div className="absolute w-full h-full inset-0 rounded-2xl bg-[url('https://www.creem.io/noise.webp')] [background-size:30%] opacity-10"></div>
                <div className="relative px-6 pb-14 pt-20 sm:px-10 sm:pb-20 lg:px-[4.5rem]">
                  <h2 className="text-center sm:max-w-[26rem] md:max-w-[40rem] text-balance mx-auto text-3xl md:text-5xl font-semibold tracking-[-0.0.15rem] text-white">Ready to grow your revenue?</h2>
                  <p className="mt-4 max-w-[26rem] text-center mx-auto text-base/6 text-neutral-200">
                    Start smart, and scale fast.
                    <br />
                    Set up your Creem store today.
                  </p>
                  <div className="relative mx-auto flex justify-center mt-6 px-3 space-x-3">
                    {links.map((link, ind) => (
                      <a key={ind} className="relative z-10 flex border-[1px] border-neutral-700 text-sm text-white bg-neutral-900 hover:bg-black/90 px-4 py-2 rounded-full font-medium items-center justify-center transition duration-200">{link}</a>
                    ))}
                  </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default ReadyToGrow