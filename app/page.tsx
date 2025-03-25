import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default async function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        <Navbar />
        <div className="w-full flex flex-col justify-center">
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute w-full h-[860px] -top-32 animate-gradient-triangle 
                        bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-50 
                        blur-2xl clip-triangle"
            ></div>
          </div>
          <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-40 justify-center flex flex-col">
              <h1 className="text-7xl font-semibold">Maturant.hr</h1>
              <p className="text-4xl mt-4">
                Želite li se pripremiti za maturu na najbolji način?
              </p>
              <Link
                href="/lessons"
                className="w-fit mt-12 px-8 py-3 text-white text-lg bg-black font-bold rounded-lg hover:bg-gray-800 active:bg-black"
              >
                Započni s učenjem!
              </Link>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 mt-12 text-left items-start">
              <h2 className="text-5xl font-bold mb-12">Zašto izabrati nas?</h2>
              <h3 className="text-4xl font-semibold">
                Daleko najbolja cijena na tržištu
              </h3>
              <h3 className="text-4xl font-semibold mt-20">
                Učite svojim tempom
              </h3>
              <h3 className="text-4xl font-semibold mt-20">
                Najbolje znamo kako učiti za maturu
              </h3>
            </section>

            {/* Featured Lessons */}
            <section className="py-16 mb-40 text-left items-start">
              <h2 className="text-5xl font-bold mb-6">Što nudimo?</h2>

              <Link href="/lessons">
                <button className="mt-6 px-6 py-3 bg-rose-500 text-white font-bold rounded-lg hover:bg-rose-400 active:bg-rose-500">
                  Pogledajte sve lekcije
                </button>
              </Link>
            </section>
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center">
        <div className="w-full max-w-6xl">
          <Footer />
        </div>
        <div className="absolute bottom-0 w-full h-[700px] bg-gray-100 clip-triangle-bottom -z-10"></div>
      </div>
    </div>
  );
}
