import Navbar from "~/components/Navbar/Navbar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default DefaultLayout;
