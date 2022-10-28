import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        Welcome user
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div>
      <p className="font-bold text-2xl mb-2 py-3 px-4">TESSARAC</p>
      <div className="h-[100vh] flex justify-center items-center flex-col">
        <p className="font-bold text-2xl mb-2">ADMIN</p>

        <input
          className="border py-3 px-10 mb-2 border-gray-600 rounded-md"
          placeholder="email"
        />
        <input
          placeholder="password"
          className="border py-3 px-10 border-gray-600 rounded-md mb-2"
        />
        <div className=" py-2 px-6 bg-black text-white rounded-md">Login</div>
        <p>Or</p>
        <div
          className="shadow-md px-6 py-3 rounded-lg cursor-pointer"
          onClick={() => signIn()}
        >
          Sign In with Google
        </div>
      </div>
    </div>
  );
}
