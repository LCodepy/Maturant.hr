import BunnyVideoPlayer from "@/components/bunny/BunnyVideoPlayer";
import DarkNavbar from "@/components/navbar/DarkNavbar";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PayButton from "@/components/buttons/PayButton";
import { authOptions } from "@/lib/authOptions";
import { getServerSession, Session } from "next-auth";
import BuyLessonButton from "@/components/buttons/BuyLessonButton";

const Lessons = async () => {
  const session = await getServerSession(authOptions);

  const url1 =
    "https://iframe.mediadelivery.net/embed/389758/6546cdb6-5395-49a9-95df-e7d533a9c8e9?token=904CFA05CAC014298C2C10AFBB72D99B1A3D0B0D5B1A01CC5C321B1B90340189&expires=1823440202";

  if (session?.user) {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl">
          <div className="absolute inset-0 -z-10">
            <div className="absolute w-full h-[800px]"></div>
          </div>
          <DarkNavbar />
          <div className="w-full mt-20 justify-center items-center flex flex-col">
            <h2 className="text-3xl inline text-center">
              Welcome back{" "}
              <p className="text-3xl inline text-blue-600 text-center">
                {session?.user.username || session?.user.name}
              </p>
            </h2>
            {session?.user.isPaid ? (
              <div className="w-full">
                <ul className="flex flex-row p-20 justify-between">
                  <li className="w-1/4">
                    <BunnyVideoPlayer videoUrl={url1} />
                  </li>
                  <li className="w-1/4 bg-slate-200"></li>
                  <li className="w-1/4 bg-slate-200"></li>
                </ul>
              </div>
            ) : (
              <div className="w-full">
                <h1 className="text-2xl text-center">
                  You are not a paid user!
                </h1>
                <div className="w-full flex justify-center mt-10">
                  <PayButton />
                </div>
              </div>
            )}
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

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute w-full h-[860px] -top-[100px] animate-gradient-triangle 
                        bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-50 
                        blur-2xl clip-angle-line"
        ></div>
      </div>
      <div className="w-full max-w-6xl">
        <DarkNavbar />
        <div className="w-full flex flex-col justify-center py-64 mt-2">
          <h1 className="text-5xl font-semibold text-black">Dobrodošli!</h1>
          <h2 className="text-3xl mt-4">
            Ovdje možete vidjeti sve naše pakete.
          </h2>
          <div className="my-20 mt-40">
            <div>
              <h2 className="text-4xl">Matematika</h2>
              <div className="py-8 flex flex-row space-x-8">
                <div className="bg-slate-100 rounded-md p-8 flex flex-col justify-between shadow-md">
                  <div>
                    <h2 className="text-3xl">Matematika A</h2>
                    <div className="text-lg mt-4">
                      <p>- 15 video lekcija teorije</p>
                      <p>- 10 video lekcija zadataka</p>
                      <p>- Sve to za samo 40 eura</p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-center justify-center mt-8">
                    <BuyLessonButton />
                  </div>
                </div>
                <div className="bg-slate-100 rounded-md p-8 flex flex-col justify-between shadow-md">
                  <div>
                    <h2 className="text-3xl">Matematika B</h2>
                    <div className="text-lg mt-4">
                      <p>- 15 video lekcija teorije</p>
                      <p>- 10 video lekcija zadataka</p>
                      <p>- Sve to za samo 40 eura</p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-center justify-center mt-8">
                    <BuyLessonButton />
                  </div>
                </div>
                <div className="bg-slate-100 rounded-md p-8 flex flex-col justify-between shadow-md">
                  <div>
                    <h2 className="text-3xl">Zadaci A</h2>
                    <div className="text-lg mt-4">
                      <p>- 10 video lekcija zadataka</p>
                      <p>- Sve to za samo 30 eura</p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-center justify-center mt-8">
                    <BuyLessonButton />
                  </div>
                </div>
                <div className="bg-slate-100 rounded-md p-8 flex flex-col justify-between shadow-md">
                  <div>
                    <h2 className="text-3xl">Zadaci B</h2>
                    <div className="text-lg mt-4">
                      <p>- 10 video lekcija zadataka</p>
                      <p>- Sve to za samo 30 eura</p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-center justify-center mt-8">
                    <BuyLessonButton />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl mt-12">Fizika</h2>
              <div className="py-8 flex flex-row space-x-8">
                <div className="bg-slate-100 rounded-md p-8 flex flex-col justify-between shadow-md">
                  <div>
                    <h2 className="text-3xl">Fizika</h2>
                    <div className="text-lg mt-4">
                      <p>- 15 video lekcija teorije</p>
                      <p>- 10 video lekcija zadataka</p>
                      <p>- Sve to za samo 40 eura</p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-center justify-center mt-8">
                    <BuyLessonButton />
                  </div>
                </div>
                <div className="bg-slate-100 rounded-md p-8 flex flex-col justify-between shadow-md">
                  <div>
                    <h2 className="text-3xl">Zadaci</h2>
                    <div className="text-lg mt-4">
                      <p>- 10 video lekcija zadataka</p>
                      <p>- Sve to za samo 30 eura</p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-center justify-center mt-8">
                    <BuyLessonButton />
                  </div>
                </div>
              </div>
            </div>
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
};

export default Lessons;
