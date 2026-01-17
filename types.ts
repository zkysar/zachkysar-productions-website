export type Category = 'all' | 'concert' | 'wedding' | 'music-video';

export interface PortfolioItem {
  id: string;
  type: 'photo' | 'video';
  category: 'concert' | 'wedding' | 'music-video';
  src: string;
  title: string;
  description: string;
  span?: string; // 'col-span-1' | 'col-span-2' for grid variety
  gallery?: string[]; // Array of image URLs for galleries with multiple images
  link?: { url: string; label: string }; // Optional external link
}

export interface ServicePackage {
  title: string;
  price: string;
  features: string[];
  category: 'concert' | 'wedding' | 'music-video';
  icon: any;
}

export interface InquiryState {
  rawInput: string;
  generatedDraft: string | null;
  isLoading: boolean;
  error: string | null;
}