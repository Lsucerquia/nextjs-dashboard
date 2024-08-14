import '@/app/ui/global.css';//cambio la fecha por una linea azul gruesa
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,//llegan todos los componenet sque se dibujen
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
   
      <body className={`${inter.className} antialiased`}>{children}</body>
      
    </html>
  );
}
