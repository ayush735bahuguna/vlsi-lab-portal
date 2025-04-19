"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useMemo } from "react";
import Logo from "@/assets/Logo1.png";
import Link from "next/link";
import {
  LogOut,
  FileText,
  BookOpen,
  File,
  ListChecks,
  HelpCircle,
} from "lucide-react";
import Cryptr from "cryptr";

type GoogleUser = {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  nbf: number;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  iat: number;
  exp: number;
  jti: string;
};

export default function Page() {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [user, setUser] = useState<GoogleUser | null>(null);

  const cryptr = useMemo(
    () => new Cryptr(process.env.NEXT_PUBLIC_SECRET_KEY || "key"),
    []
  );

  const backToLogin = () => {
    localStorage.removeItem("user");
    router.replace("/");
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (!storedUser?.email) {
      router.replace("/");
      return;
    }

    setUser(storedUser);

    const allowedEmails: string =
      "bb736cdff658c5a14481cb46ca2ff1a33d2b4f3c53ff8a780b855096842b2405679b82d783ef0ad088e7a8cde1cce308ebb5c278fbde0dc6fb404eb5697e6a25c41a2c3d708eabb72b53f567a51684aa50f35f047e3251a4704c918d0ce33cebecff08a2dcd7bd08ebdceb088510a346433ab2e1efdedf234e2780a0bb4ab9aa53bb9b562979b3d31861de13f12800bf5a59fd9dc6e9b1";

    const EmailsArray = JSON.parse(cryptr.decrypt(allowedEmails));

    if (allowedEmails) {
      setIsVerified(EmailsArray.includes(storedUser.email));
      return;
    }
    setIsVerified(false);
  }, [router, cryptr]);

  if (isVerified === null)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-semibold text-gray-700">loading...</p>
      </div>
    );

  if (!isVerified)
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6 ">
        <div className="p-8 bg-white text-center rounded-lg shadow-md">
          <Image
            src={Logo}
            alt="Access Denied"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h1 className="text-2xl font-semibold text-gray-800">
            Access Denied
          </h1>
          <p className="mt-2 text-gray-600">
            You don’t have permission to view this page.
          </p>
          <button
            onClick={backToLogin}
            className="mt-6 w-full flex items-center justify-center gap-2 rounded-lg bg-red-500 px-6 py-2 text-white text-lg font-semibold transition-all duration-300 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            <LogOut size={20} /> Back to Login
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      {user && (
        <>
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 rounded-full overflow-hidden border border-gray-200">
              <Image
                src={user.picture}
                alt={user.name}
                width={100}
                height={100}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="font-medium text-lg mt-2">
              {user.name?.toUpperCase()}
            </h3>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
          <button
            className="mt-4 flex items-center justify-center gap-2 min-w-[200px] py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition"
            onClick={backToLogin}
          >
            <LogOut size={20} /> Sign Out
          </button>
        </>
      )}

      <div className="flex items-center justify-center gap-6 mt-6 text-gray-700 flex-wrap">
        <Link
          href="/assignments"
          className="flex items-center gap-2 hover:underline"
        >
          <FileText size={20} /> Assignments
        </Link>
        <Link href="/pdfs" className="flex items-center gap-2 hover:underline">
          <File size={20} /> Documents
        </Link>
        <Link
          href="/lectures"
          className="flex items-center gap-2 hover:underline"
        >
          <BookOpen size={20} /> Lectures
        </Link>
        <Link
          href="/task-force"
          className="flex items-center gap-2 hover:underline"
        >
          <ListChecks size={20} /> Task Force
        </Link>
        <Link href="/faqs" className="flex items-center gap-2 hover:underline">
          <HelpCircle size={20} /> FAQ
        </Link>
        <Link
          href="https://youtube.com/playlist?list=PLAHCLYSq3g_iqVrCNHigtGFH-QWdFdEA5&si=A7RotX4WpZuJvoRs"
          className="flex items-center gap-2 hover:underline"
        >
          <File size={20} /> External Videos
        </Link>
      </div>
    </div>
  );
}
