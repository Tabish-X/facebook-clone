import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/header/Header";
import decryptAuthToken from "@/helpers/decryptAuthToken";
import Notification from "@/components/Notification";

export const metadata: Metadata = {
  title: {
    template: "%s | Facebook",
    default: decryptAuthToken().user
      ? "Facebook"
      : "Facebook - Log in or sign up",
  },
  description: "Facebook clone with Next JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-Roboto bg-_theme_primary_gray">
        <Header/>
        {children}

        <Notification />
      </body>
    </html>
  );
}
