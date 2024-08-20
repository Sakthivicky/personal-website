import Aboutsection from "./components/aboutsection";
import Herosection from "./components/herosection";
import Navbar from "./components/navbar";
export default function Home() {
  return (
    <>
      <main className="bg-black min-h-screen flex-col" >
        <div className="flex align-center ">
          <Navbar />
          <div className="container mx-auto px-12 py-4 mt-24">
            <Herosection />
            <Aboutsection />
          </div>
        </div>
      </main>
    </>
  );
}
