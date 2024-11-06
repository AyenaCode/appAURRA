import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { defaultMetadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
          <Toaster richColors position="top-center" />
        </main>
      </body>
    </html>
  );
}
