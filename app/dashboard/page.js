import Image from "next/image";
import nextImg from "@/app/next.png";


export default function Dashboard() {
    return (
      <div Classname="p-8">
        <Image 
          src={nextImg} // this can be a url or local image //
          alt="NextJS Demo" 
          width={300} 
          height={300}
          className="w-full rounded-lg border border-gray-200 shadow-lg"
        />
      </div>
    );
}



 //<div>Dashboard</div>;//