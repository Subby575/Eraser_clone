import Navbar from "./_compo/Navbar";

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar/>
          {children}
    </div>
  );
}
