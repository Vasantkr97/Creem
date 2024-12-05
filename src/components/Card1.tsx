

const Card1 = () => {
  return (
    <section className="relative min-h-[500px] lg:min-h-[450px] mx-auto w-full h-full bg-black col-span-1 lg:col-span-2 rounded-2xl overflow-hidden">
        <div className="relative h-full sm:mx-0 bg-custom-radial shadow-custom-shadow overflow-hidden sm:rounded-2xl">
          <div className="h-full  px-4 py-20 sm:px-10">
            <div className="w-full h-full absolute inset-0 bg-[url('https://www.creem.io/noise.webp')] [background-size:30%] [mask-image:radial-gradient(#fff,_transparent,_75%)] opacity-10 transform scale-[1.2]"></div>
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015rem] text-primary">
                  The easiest way to sell globally
                </h2>
                <p className="mt-4 text-left text-base/6 text-neutral-200 font-medium">
                  Everyone can use Creem, from 10x engineers to Indie Hackers.
                  <br />
                  <br />
                  Focus on your business and we'll handle the boring stuff.
                </p>
              </div>
              <div className="max-w-7xl">
                <div className="min-w-full w-max">

                </div>
              </div>
              <img src="https://www.creem.io/_next/image?url=%2Fcode-pretty.png&w=640&q=75" alt="Image5"  width='400' height='400' loading="lazy" 
                  className="absolute  -right-4 lg:-right-[10%] grayscale filter -bottom-10 object-contain rounded-2xl"
                />
          </div>
        </div>
    </section>
  )
}

export default Card1