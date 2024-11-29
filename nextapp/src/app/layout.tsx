import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Providers } from "./providers";
import "react-loading-skeleton/dist/skeleton.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "elevareapp",
  description: "Elevate the way of handling your mails with elevareapp",
  other: {
    "google-site-verification": "du5i7A2AeolTZjy9AXJXKcWd0B8g_wG9MLH0h6_DPQ0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body style={{ fontFamily: "SFProDisplayMedium" }}>
        <Providers>
          {children}
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 2000,
              },
              error: {
                duration: 3000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "black",
                color: "white",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
