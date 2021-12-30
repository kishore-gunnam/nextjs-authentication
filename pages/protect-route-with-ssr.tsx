import React from "react";

import { GetServerSidePropsContext } from "next";
import { getSession, useSession, signIn, signOut } from "next-auth/react";

export default function ProtectRouteWithSSR(): JSX.Element {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}
