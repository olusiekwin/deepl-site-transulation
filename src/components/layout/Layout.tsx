import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Full-bleed background on all pages */}
      <div className="fixed inset-0 -z-10 bg-gradient-hero min-h-screen" aria-hidden />
      <Header />
      <main className="flex-1 pt-24 relative">
        {children}
      </main>
      <Footer />
    </div>
  );
}
