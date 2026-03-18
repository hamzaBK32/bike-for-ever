export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Mountain' | 'Road' | 'Electric' | 'Kids';
  rating: number;
  reviews: number;
  image: string;
  description: string;
  specs: {
    frame: string;
    fork: string;
    groupset: string;
    wheels: string;
  };
  features: string[];
  stock: number;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Summit Pro X1',
    price: 2499,
    category: 'Mountain',
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1576433734880-5fbd38173171?auto=format&fit=crop&q=80&w=800',
    description: 'The ultimate mountain conqueror. Built for the most demanding trails with a lightweight carbon frame and top-tier suspension.',
    specs: {
      frame: 'Carbon Fiber T800',
      fork: 'Fox 36 Float Factory 160mm',
      groupset: 'SRAM X01 Eagle 12-speed',
      wheels: 'DT Swiss M1900'
    },
    features: ['Internal cable routing', 'Dropper post included', 'Tubeless ready'],
    stock: 5,
    isBestSeller: true
  },
  {
    id: '2',
    name: 'Velocity Aero 7',
    price: 3200,
    category: 'Road',
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800',
    description: 'Slice through the wind with our most aerodynamic road bike yet. Perfect for racing and long-distance speed.',
    specs: {
      frame: 'Aero Carbon Monocoque',
      fork: 'Full Carbon Tapered',
      groupset: 'Shimano Ultegra Di2',
      wheels: 'Vision 55 Carbon'
    },
    features: ['Integrated cockpit', 'Hydraulic disc brakes', 'Electronic shifting'],
    stock: 3,
    isBestSeller: true
  },
  {
    id: '3',
    name: 'Volt City E-Bike',
    price: 1899,
    category: 'Electric',
    rating: 4.7,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?auto=format&fit=crop&q=80&w=800',
    description: 'Effortless commuting. The Volt City combines a powerful motor with a sleek design for the modern urban explorer.',
    specs: {
      frame: 'Aluminum 6061',
      fork: 'Suntour NEX-E25',
      groupset: 'Shimano Nexus 7-speed',
      wheels: 'Double Wall Alloy'
    },
    features: ['250W Mid-drive motor', '500Wh Battery', 'Integrated lights'],
    stock: 12
  },
  {
    id: '4',
    name: 'Junior Trail Blazer',
    price: 450,
    category: 'Kids',
    rating: 4.6,
    reviews: 56,
    image: 'https://images.unsplash.com/photo-1532124958905-df23d4c508f9?auto=format&fit=crop&q=80&w=800',
    description: 'Start them young. A rugged, safe, and fun bike for the next generation of riders.',
    specs: {
      frame: 'Lightweight Alloy',
      fork: 'Rigid Steel',
      groupset: 'Shimano Tourney 7-speed',
      wheels: '20-inch Alloy'
    },
    features: ['Easy-reach brakes', 'Safety reflectors', 'Kickstand included'],
    stock: 15
  },
  {
    id: '5',
    name: 'Apex Gravel G1',
    price: 2100,
    category: 'Road',
    rating: 4.8,
    reviews: 74,
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&q=80&w=800',
    description: 'Where the road ends, the fun begins. A versatile gravel bike for any surface.',
    specs: {
      frame: 'Aluminum with Carbon Fork',
      fork: 'Carbon Gravel Specific',
      groupset: 'Shimano GRX 800',
      wheels: 'WTB ST i23'
    },
    features: ['Multiple mount points', 'Wide tire clearance', 'Flared handlebars'],
    stock: 8
  },
  {
    id: '6',
    name: 'Thunder DH-9',
    price: 4500,
    category: 'Mountain',
    rating: 5.0,
    reviews: 32,
    image: 'https://images.unsplash.com/photo-1501147830916-ce44a6359892?auto=format&fit=crop&q=80&w=800',
    description: 'Pure downhill adrenaline. Built to take the biggest hits and stay glued to the track.',
    specs: {
      frame: 'Alloy DH Optimized',
      fork: 'RockShox Boxxer Ultimate',
      groupset: 'SRAM GX DH',
      wheels: 'E*Thirteen LG1'
    },
    features: ['200mm travel', 'Quad-piston brakes', 'Chain guide included'],
    stock: 2
  }
];
