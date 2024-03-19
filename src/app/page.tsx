import Image from "next/image";

export default function Home() {
  return (
    <main>

      <p className="bg-regal-blue-100">
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
      </div>


    </main>
  );
}
