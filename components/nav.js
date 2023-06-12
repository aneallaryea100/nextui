"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

function Nav () {
    const {data: session} = useSession();
    // console.log('ttttt', {session});

    return (
        <div className="navContainer">
            {session?.user? (
                <>
                    <p>{session.user.name}</p>
                    <button onClick={() => signOut()}>logout</button>
                </>
                 
            ) : (
                <button onClick={() => signIn()}>login</button>
            )
             }
        </div>
    )
}

export default Nav