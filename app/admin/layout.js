import Navbar from "@/components/admin/nav/NavBar";

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col items-start w-full m-h-screen ">
      <Navbar />
      <div className="w-full px-12 py-12">{children}</div>
    </div>
  );
}
