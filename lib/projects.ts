export type Project = {
    slug: string;
    title: string;
    summary: string;
    cover: string;        // Hauptbild
    gallery?: string[];   // weitere Bilder
    tags?: string[];
  };
  
  export const projects: Project[] = [
    { slug:"ecommerce-platform", title:"E-Commerce Platform",
      summary:"Modern UX & secure payments.",
      cover:"/images/advertisement.jpg",
      gallery:["/images/adv-1.jpg","/images/adv-2.jpg"], tags:["react","stripe"] },
    // ...
  ];
  