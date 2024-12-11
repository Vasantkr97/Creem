import globeImage from '../assets/globe.png'

const Card2 = () => {

  return (
    <section className="relative min-h-[400px] mx-auto w-full col-span-1 rounded-2xl bg-black overflow-hidden">
      <div className="relative h-full overflow-hidden bg-custom-radial shadow-custom-shadow rounded-2xl">
        <div className="w-full h-full absolute inset-0 bg-[url('https://www.creem.io/noise.webp')] [background-size:30%] [mask-image:radial-gradient(#fff,_transparent,_75%)] opacity-10 transform scale-[1.2]"></div>
          <div className="h-full px-4 py-20 sm:px-10">
              <h2 className="max-w-80 font-semibold text-base md:text-xl lg:text-3xl text-balance text-left text-primary tracking-[-0.015rem]">
                0% fees until product market fit
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-white">
                0% fees on your first $1,000 processed.
                <br />
                <br />
                <strong>Let's grow together.</strong>
                <br />
                Start for free — our pricing only applies when you scale up.
              </p>
              <div className="h-full flex flex-col items-center relative bg-transparent mt-10">
                  <img src={globeImage} alt="globe"  className='absolute md:-bottom-80 md:-right-80 sm:-bottom-60 sm:-right-60 lg:-bottom-0 lg:-right-60'/>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Card2