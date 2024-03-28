import IconBed from "@/components/icons/IconBed";
import IconKichen from "@/components/icons/IconKichen";
import IconToilet from "@/components/icons/IconToilet";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      {/* Hero section start */}
      <section className="flex flex-col lg:flex-row gap-6 justify-center pt-28 pb-16 relative border-b-2 border-gray-200">
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-text-light font-[merriweather] lg:w-4/5">Your dream <span className="text-primary">House</span> is here.</h1>
          <p className="text-[18px] lg:text-xl text-Sans text-text-200 py-6 lg:w-[85%]">We provide a complete service for the sale, purchase or rental of real estate. We have been operating in Madrid and Barcelona more than 15 years.</p>
          <Image className="w-full" src={'/assets/banners/banner-left.png'} width={588} height={221} alt="banner left image" />
        </div>

        <div className="w-full lg:w-1/2">
        <Image className="w-full lg:h-[554px]" src={'/assets/banners/banner-right.png'} width={588} height={554} alt="banner-right.png" />
        </div>

        <div className="absolute lg:w-7/12 bg-white  lg:bottom-32 lg:right-10 p-8 rounded-lg lg:flex justify-between gap-6">
          <button className="px-6 py-3 lg:w-64 hover:bg-gray-300 font-semibold text-base text-text-300 border rounded-lg">Property type icon</button>
          <button className="px-6 py-3 lg:w-64 hover:bg-gray-300 font-semibold text-base text-text-300 border rounded-lg">Search of Location</button>
          <button className="btn-primary">Search</button>
        </div>
      </section>

      {/* Top offers  section start */}
      <section className="pt-16">
        <h2 className="font-[Merriweather] text-5xl text-text font-bold">Top Offers</h2>
        <div className="flex items-center justify-between">
          <p className="lg:w-5/12 text-text-200 text-xl pt-3">Fulfill your career dreams, enjoy all the achievements of the city center and luxury housing to the fullest.</p>
          <button className="btn-secondary">Show all offers</button>
        </div>
        <div className="grid grid-cols-3 gap-6">
        {
          [
            'card-image.png', 
            'card-image.png', 
            'card-image.png', 
            'card-image.png', 
            'card-image.png', 
            'card-image.png'
          ].map(( item:any, i:number) => {
            return(
              <div key={i} className="bg-gray-50">
                <div>
                  <Image src={`/assets/images/${item}`} width={500} height={500} alt="card image"/>
                </div>
                <div className="py-6 px-4">
                  <h4 className="text-lg">House for Sell</h4>
                  <div className=" flex items-center pt-4 pb-6">
                  <div className="flex justify-center items-center">
                    <span className="text-2xl pr-1"> <IconBed /> </span><p className="text-xs">3 Bedroom</p>
                  </div>
                  <div className="flex justify-center items-center px-5">
                    <span className="text-2xl pr-1"> <IconToilet /> </span><p className="text-xs">2 Bathroom</p>       
                  </div>
                  <div className="flex justify-center items-center">
                    <span className="text-2xl pr-1"> <IconKichen /> </span> <p className="text-xs">3 Bedroom</p>
                  </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-base font-bold text-text-light">320 000€</h4>
                      <p className="text-xs text-text-100">Barcelona IX.</p>
                    </div>
                    <button className="btn border border-gray-900 rounded-lg text-base px-6 py-3 hover:bg-gray-200">Contact seller</button>
                  </div>
                </div>
              </div>
            )
          })
        }
        </div>
      </section> 


      <section clas>
        <div>
          <h2>About us</h2>
          <p>We are a company that connects the world of real estate and finance. We provide a complete service for the sale, purchase or rental of real estate.</p>
          <p>Our advantage is more than 15 years of experience and soil in attractive locations in Slovakia with branches in Bratislava and Košice.We have a connection to all banks on the Slovak market, so we can solve everything under one roof.</p>
          <p>By constantly innovating our business activities, we move forward and we are able to offer truly above-standard services that set us apart from the competition.</p>
        </div>
        <div>
          <Image src={'/assets/images/about-us.png'} width={500} height={500} alt="about us" />
        </div>
      </section>























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
