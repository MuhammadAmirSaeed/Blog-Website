// Create a file named lucide.d.ts
declare module 'lucide' {
  import React from 'react';

  // Define the type for a Lucide icon component
  export const Camera: React.FC<React.SVGProps<SVGSVGElement>>;
  // Add other Lucide icons here
  
  export const ArrowRight: React.FC<React.SVGProps<SVGSVGElement>>;
  // Optionally, export a type for all Lucide icons
  export const icons: {
    Camera: React.FC<React.SVGProps<SVGSVGElement>>;
    // Add other Lucide icons here
  };
}
