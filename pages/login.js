import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
function Login({ Providers }) {
  console.log(Object.values(Providers));

  return (
    <div className="flex flex-col bg-black min-h-screen items-center justify-center w-full">
      <Image
        className="w-52 mb-5"
        src="/Images/Spotify-Icon-Logo.wine.png"
        alt="Spotify Icon"
        width={300}
        height={200}
      />

      {Object.values(Providers).map((provider) => {
        return (
          <div key={provider.name}>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className="bg-[#18D860] text-white p-5 rounded-full"
            >
              Login with {provider.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default Login;

export async function getServerSideProps() {
  const Providers = await getProviders();

  return {
    props: {
      Providers,
    },
  };
}
