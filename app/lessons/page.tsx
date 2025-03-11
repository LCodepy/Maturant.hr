import BunnyVideoPlayer from "@/components/BunnyVideoPlayer";
import Navbar from "@/components/Navbar";
import PayButton from "@/components/PayButton";
import { authOptions } from "@/lib/authOptions";
import { getServerSession, Session } from "next-auth";

const Videos = async () => {
  const session = await getServerSession(authOptions);

  const url1 =
    "https://iframe.mediadelivery.net/embed/389758/6546cdb6-5395-49a9-95df-e7d533a9c8e9?token=904CFA05CAC014298C2C10AFBB72D99B1A3D0B0D5B1A01CC5C321B1B90340189&expires=1823440202";

  if (session?.user) {
    return (
      <>
        <Navbar />
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
              <h1 className="text-2xl text-center">You are not a paid user!</h1>
              <div className="w-full flex justify-center mt-10">
                <PayButton />
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-3xl m-8">Dobrodošli!</h2>
        <div></div>
      </div>
    </>
  );
};

export default Videos;
