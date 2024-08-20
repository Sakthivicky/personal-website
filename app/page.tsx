import Herosection from "./components/herosection";
import Navbar from "./components/navbar";
export default function Home() {
  return (
    <>
      <main className="bg-black h-screen flex-col" >
        <div className="flex align-center ">
          <Navbar />
          <div className="container mx-auto px-12 py-32">
            <Herosection />
          </div>
        </div>
      </main>
    </>
  );
}
