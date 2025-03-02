import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default async function Home() {
  return (
    <>
      <Navbar />
      <div
        className="w-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: `
          linear-gradient(rgba(200, 200, 200, 0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200, 200, 200, 0.2) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      >
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="px-20 py-48 justify-center items-center flex flex-col">
            <h1 className="text-6xl font-bold">Maturant.hr</h1>
            <p className="text-2xl mt-3">
              Prva web-stranica sa video pripremama za državnu maturu.
            </p>
            <Link href="/lessons">
              <button className="mt-12 px-6 py-3 text-white bg-rose-500 font-bold rounded-lg hover:bg-rose-400 active:bg-rose-500">
                Započni s učenjem!
              </button>
            </Link>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 px-6 text-center bg-slate-200">
            <h2 className="text-3xl font-bold mb-6">Zašto se ističemo?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold">
                  🎓 Pouzdani Instruktori
                </h3>
                <p>Učite od dobitnika stipendije na maturi.</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold">📹 HD Video Lekcije</h3>
                <p>Kvalitetni, jasni i lako razumljive video lekcije.</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold">
                  ⏳ Učite Vlastitim Tempom
                </h3>
                <p>Premotavajte i pogledajte lekcije kad kod zaželite!</p>
              </div>
            </div>
          </section>

          {/* Featured Lessons */}
          <section className="py-16 px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Odaberite Naše Lekcije</h2>
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
    </>
  );
}
