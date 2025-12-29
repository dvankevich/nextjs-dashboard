import "@/app/ui/global.css";
//import { Roboto } from "next/font/google";
import { inter } from "@/app/ui/fonts";

// const roboto = Roboto({
//     weight: "400",
//     subsets: ["latin"],
// });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
