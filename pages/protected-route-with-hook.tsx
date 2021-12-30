import React from "react";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

const protectedRouteWithHook = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <SessionProvider session={session}>
          Signed in as {session?.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </SessionProvider>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default protectedRouteWithHook;
