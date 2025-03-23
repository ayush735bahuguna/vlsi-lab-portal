"use client";
import GoogleAuthButton from "@/components/GoogleAuthButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Logo from "@/assets/Logo1.png";

const App: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const user = await localStorage.getItem("user");
      if (JSON.parse(`${user}`)?.email) {
        router.replace("/Dashboard");
      } else {
        console.log("No user loged in");
      }
    })();
  }, [router]);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white/95 min-w-1/2 mx-6">
          <div className="flex items-center justify-center min-w-1/2">
            <Image
              src={Logo}
              alt="Profile"
              className="w-1/4 h-auto"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-4xl font-bold text-center text-gray-900">
              VLSI LAB
            </h2>
            <p className="text-center text-sm text-gray-500 mb-4">
              Sign in with your Google account to access the VLSI Lab resources
            </p>
          </div>
          <div className="flex items-center justify-center">
            <GoogleAuthButton />
          </div>

          <div className="px-6 py-4 bg-gray-50/80">
            <p className="text-xs text-center w-full text-gray-500">
              © {new Date().getFullYear()} VLSI Laboratory. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
