import Image from "next/image"; //old
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";

export default function Page() {
return (
<>
<Hero />
<About />
<Portfolio />
<Contact />
<SiteFooter />
</>
);
}
