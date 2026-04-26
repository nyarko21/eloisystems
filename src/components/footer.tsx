import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="Eloi Systems Logo" className="h-10 w-auto border-none" />
              <span className="font-bold text-lg">Eloi Systems</span>
            </div>
            <p className="text-gray-400 text-sm">
              Systems infrastructure for emerging networks.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-blue-400 transition">Cybersecurity</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Networking</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Storage</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Research</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link href="#careers" className="hover:text-blue-400 transition">Careers</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Blog</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Eloi Systems. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-400">
          {/*  <a href="#" className="hover:text-blue-400 transition text-sm">Twitter</a> */}
          {/*}  <a href="#" className="hover:text-blue-400 transition text-sm">LinkedIn</a> */}
           {/* <a href="#" className="hover:text-blue-400 transition text-sm">GitHub</a> */}
           {/*} <a href="#" className="hover:text-blue-400 transition text-sm">Instagram</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
