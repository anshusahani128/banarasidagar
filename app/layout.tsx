import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Banarasi Dagar | Explore the Soul of Kashi",
  description:
    "Book Banarasi Yatra, Temple Tours, Taxi Service, Hotel Booking, Boat Ride and Airport Pickup in Varanasi.",
  keywords: [
    "Banaras",
    "Varanasi Tour",
    "Kashi Vishwanath",
    "Banarasi Dagar",
    "Temple Tour",
    "Taxi Service",
  ],
  authors: [{ name: "Anshu Sahani" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}