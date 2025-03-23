"use client";
import { db } from "@/lib/firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Logo from "@/assets/Logo1.png";

export default function Page() {
  const router = useRouter();
  const [isVerified, setisVerified] = useState<boolean | undefined>(undefined);

  const backToLogin = () => {
    localStorage.removeItem("user");
    router.replace("/");
  };

  useEffect(() => {
    (async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        if (!user?.email) {
          router.replace("/");
          return;
        }

        const docRef = doc(collection(db, "config"), "allowedUsersList");
        const docSnap = await getDoc(docRef);

        const AllowedEmails = docSnap.exists()
          ? docSnap.data().allowedUsers
          : [""];

        setisVerified(AllowedEmails.includes(user.email));
      } catch (error) {
        setisVerified(false);
        console.log(error);
      }
    })();
  }, [router]);

  if (isVerified === undefined)
    return (
      <div className="flex items-center justify-center h-dvh w-dvw">
        <p>Loading...</p>
      </div>
    );
  return isVerified ? (
    <>
      <div>Dashboard</div>
      <button
        onClick={backToLogin}
        className="mt-6 w-full rounded-lg bg-red-500 px-6 py-2 text-white transition-all duration-300 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300"
      >
        Log out
      </button>
    </>
  ) : (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="min-w-1/2 p-8 ">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center min-w-1/2">
            <Image
              src={Logo}
              alt="Profile"
              className="w-1/4 h-auto"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Access Denied
          </h1>
          <p className="mt-2 text-gray-600">
            You don’t have permission to view this page.
          </p>
          <button
            onClick={backToLogin}
            className="mt-6 w-full rounded-lg bg-red-500 px-6 py-2 text-white transition-all duration-300 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}
