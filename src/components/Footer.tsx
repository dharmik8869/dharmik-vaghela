import { Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-8 ${
        darkMode
          ? 'bg-gray-950 border-t border-gray-800'
          : 'bg-gray-900 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-gray-300">
            Copyright © {currentYear} Dharmik Vaghela. Made with{' '}
            <Heart size={16} className="text-red-500 fill-red-500" /> in India
          </p>
          <p className="mt-2 text-sm text-gray-500">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
