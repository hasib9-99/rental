import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <header className="container flex flex-col lg:flex-row gap-6 justify-center pt-28 relative">
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-text-light font-[merriweather] lg:w-4/5">Your dream <span className="text-primary">House</span> is here.</h1>
          <p className="text-[18px] lg:text-xl text-Sans text-text-200 py-6 lg:w-[85%]">We provide a complete service for the sale, purchase or rental of real estate. We have been operating in Madrid and Barcelona more than 15 years.</p>
          <Image className="w-full" src={'/assets/banners/banner-left.png'} width={588} height={221} alt="banner left image" />
        </div>
        <div className="w-full lg:w-1/2">
        <Image className="w-full lg:h-[554px]" src={'/assets/banners/banner-right.png'} width={588} height={554} alt="banner-right.png" />
        </div>
        <div className="absolute lg:w-7/12 bg-white bottom-6 lg:right-36 p-8 rounded-lg flex justify-between gap-6">
          <button className="px-6 py-3 lg:w-64 hover:bg-gray-300 font-semibold text-base text-text-300 border rounded-lg">Property type icon</button>
          <button className="px-6 py-3 lg:w-64 hover:bg-gray-300 font-semibold text-base text-text-300 border rounded-lg">Search of Location</button>
          <button className="btn-primary">Search</button>
        </div>
      </header>























      {/* <p className="bg-regal-blue-100">
        this is home page
      </p>

      <button className="btn-primary">Button Primary</button>
      <button className="btn bg-gray-300 hover:bg-gray-400">Button Secondary</button>

      <div className="grid grid-cols-3 gap-5">
        {
          ["floki.jpg", "floki.jpg", "floki.jpg", "floki.jpg", "floki.jpg", "floki.jpg"].map((item: any, i: any) => {
            return (
              <div className="shadow-md bg-blue-300 p-5">
                <Image src={`/assets/images/${item}`} width={300} height={400} alt="Floki the dog" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, modi!</p>
              </div>
            )
          })
        }
      </div> */}


    </main>
  );
}
