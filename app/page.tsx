import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default async function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center max-w-6xl px-12">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute w-full h-[800px] -top-32 animate-gradient-triangle 
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
            <Link href="/lessons">
              <button className="mt-12 px-8 py-4 text-white text-xl bg-black font-bold rounded-lg hover:bg-gray-800 active:bg-black">
                Započni s učenjem!
              </button>
            </Link>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 px-2 mt-32 text-left items-start">
            <h2 className="text-5xl font-bold mb-12">Zašto izabrati nas?</h2>
            <h3 className="text-4xl font-semibold">
              Najbolja cijena na tržištu
            </h3>
            <h3 className="text-4xl font-semibold mt-20">
              Učite svojim tempom
            </h3>
          </section>

          {/* Featured Lessons */}
          <section className="py-16 px-2 text-left items-start">
            <h2 className="text-5xl font-bold mb-6">Što nudimo?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-slate-200 rounded-lg flex items-center flex-col justify-between space-y-4">
                <Image
                  src="/math.png"
                  width={300}
                  height={200}
                  alt="Matematika"
                />
                <div>
                  <h3 className="text-xl font-semibold m-8">Matematika</h3>
                  <a
                    href="/lessons"
                    className="text-md font-semibold rounded-md py-2 px-4 border border-slate-800 shadow-md text-slate-800 mt-8 hover:bg-slate-300 active:bg-none"
                  >
                    Kreni s lekcijom
                  </a>
                </div>
              </div>
              <div className="p-8 bg-slate-200 rounded-lg flex flex-col items-center justify-between space-y-4">
                <Image
                  src="/physics.png"
                  width={300}
                  height={200}
                  alt="Fizika"
                />
                <div>
                  <h3 className="text-xl font-semibold m-8">Fizika</h3>
                  <a
                    href="/lessons"
                    className="text-md font-semibold rounded-md py-2 px-4 border border-slate-800 shadow-md text-slate-800 mt-8 hover:bg-slate-300 active:bg-none"
                  >
                    Kreni s lekcijom
                  </a>
                </div>
              </div>
              <div className="p-8 bg-slate-200 rounded-lg flex flex-col items-center justify-between space-y-4">
                <Image
                  src="/hrvatski.png"
                  width={300}
                  height={200}
                  alt="Hrvatski"
                />
                <div>
                  <h3 className="text-xl font-semibold m-8">Hrvatski</h3>
                  <a
                    href="/lessons"
                    className="text-md font-semibold rounded-md py-2 px-4 border border-slate-800 shadow-md text-slate-800 mt-8 hover:bg-slate-300 active:bg-none"
                  >
                    Kreni s lekcijom
                  </a>
                </div>
              </div>
            </div>
            <Link href="/lessons">
              <button className="mt-6 px-6 py-3 bg-rose-500 text-white font-bold rounded-lg hover:bg-rose-400 active:bg-rose-500">
                Pogledajte sve lekcije
              </button>
            </Link>
          </section>

          {/* CTA Section */}
          <section className="py-16 text-center bg-sky-500 text-white">
            <h2 className="text-3xl font-bold">Počni učiti već danas!</h2>
            <p className="text-lg mt-3">
              Napravi account i kupi svoj video bundle za državnu maturu.
            </p>
            <Link href="/lessons">
              <button className="mt-6 px-6 py-3 bg-white text-gray-800 font-bold rounded-lg hover:bg-slate-100 active:bg-white">
                Get Started
              </button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
