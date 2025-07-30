import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-black border-t border-[#111]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
      <Image 
      src="/makimastud.png" 
      alt="MAKIMA STUDIOS" 
      width={120} 
      height={80} 
      className="w-50 h-8"
      />
      <p className="text-[#666]">© 2025 All rights reserved</p>
    </div>
    
    <div className="flex gap-8">
      {[
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" }
      ].map((item) => (
        <Link key={item.name} href={item.path} className="text-[#999] hover:text-white transition-colors">
          {item.name}
        </Link>
      ))}
    </div>
  </div>
 </div>
</footer>
  );
}
