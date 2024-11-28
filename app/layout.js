
import {Raleway} from "next/font/google";
import "./globals.css";







const raleway = Raleway({
  subsets: ['latin'],
    weight: ["300","400","500","600"]
  });

export const metadata = {
  title: "avajah pottery",
  description: "handmade ceramic goods",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body
       className={raleway.className}
      > 
     
      {children}
   
       
      
      </body>
    </html>
    </>
  );
}

