"use client";

import { useRouter } from "next/navigation";

import React from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleAuthButton: React.FC = () => {
  const router = useRouter();

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const decodedUser = jwtDecode(credentialResponse.credential);
      localStorage.setItem("user", JSON.stringify(decodedUser));
      await localStorage.setItem("user", JSON.stringify(decodedUser));
      router.replace("/Dashboard");
    }
  };

  return clientId ? (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.error("Login Failed")}
      />
    </GoogleOAuthProvider>
  ) : (
    <div />
  );
};

export default GoogleAuthButton;
