

const Footer = () => {

  return (
    <div className="relative ">
        <div className="relative border-t z-0 border-neutral-800 px-8 pt-20 pb-20 bg-black">
            <div className="absolute inset-0 z-999999 flex items-center justify-center overflow-hidden bg-transparent">
                <p className="text-center z-9999999 text-5xl md:text-9xl lg:text-[18rem] font-bold text-transparent bg-gradient-to-b from-neutral-950 via-neutral-800 to-[#FFBE98]/30 bg-clip-text">
                    CREEM
                </p>
            </div>
            <div className="z-0 max-w-7xl mx-auto text-sm text-neutral-400 flex sm:flex-row flex-col items-start justify-between">
                <div>
                    <div></div>
                    <div className="relative z-10">
                        Copyright © 2024 Armitage Labs OÜ
                    </div>
                    <p className="mt-2 relative z-10">All rights reserved</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer