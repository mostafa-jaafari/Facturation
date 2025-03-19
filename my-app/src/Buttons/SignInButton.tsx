'use client';

import { LucideIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import React from "react";

export const SignInButton = ({provider, label}: {label?: React.ReactNode; provider: string;}) => {
    return (
        <button onClick={() => signIn(provider)} 
            className="w-full flex justify-center py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700">
            {label}
        </button>
    )
}