import { FooterConstants } from "../Constants/Enable"


const Footer = () => {

  return (
    <div className="relative ">
        <div className="relative border-t z-0 border-neutral-800 px-8 pt-20 pb-32 bg-black">
            <div className="absolute inset-0 z-999999 flex items-center justify-center overflow-hidden bg-transparent">
                <p className="text-center z-9999999 text-9xl md:text-[12rem] lg:text-[18rem] font-bold text-transparent bg-gradient-to-b from-neutral-950 via-neutral-800 to-[#FFBE98]/30 bg-clip-text">
                    CREEM
                </p>
            </div>
            <div className="z-0 max-w-7xl mx-auto text-sm text-neutral-400 flex sm:flex-row flex-col items-start justify-between">
                <div>
                    <div className="mr-4 md:flex mb-4">
                        <a href="/" className="relative z-20 mr-4 flex items-center py-1 px-2 gap-2 text-sm font-normal text-black">
                            <img src="https://www.creem.io/_next/image?url=https%3A%2F%2Fnucn5fajkcc6sgrd.public.blob.vercel-storage.com%2Fcreem-icon-peach-TUPs31vHVRGWsxVlbie6kdL0KyFBQC.svg&w=32&q=75" alt="logo" width='25' height='25' className="h-auto max-w-[100%] "/>
                            <span className="font-medium text-white">Creem</span>
                        </a>
                    </div>
                    <div className="relative z-10">
                        Copyright © 2024 Armitage Labs OÜ
                    </div>
                    <p className="mt-2 relative z-10">All rights reserved</p>
                </div>
                <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
                    {
                        Object.values(FooterConstants).map((item, ind) => (
                            <div key={ind} className="relative z-10 flex justify-center space-y-4 flex-col ">
                                {item.map((label, index) => (
                                    <a key={index} className="hover:text-neutral-400 text-sm">{label}</a>
                                ))}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer