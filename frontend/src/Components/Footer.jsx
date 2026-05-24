import React from "react";

const footerColumns = [
  ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
  ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"],
  ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
  ["Media Center", "Terms of Use", "Contact Us", "Netflix Originals"],
];

function Footer() {
  return (
    <footer className="bg-[#141414] text-[#757575] px-6 py-8 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm mb-6">
          Questions? Call{" "}
          <a href="tel:0942419800" className="text-white hover:underline">
            0942419800
          </a>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 text-sm">
          {footerColumns.map((column, columnIndex) => (
            <ul key={columnIndex} className="space-y-2">
              {column.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:underline text-[#757575] hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <p className="text-sm text-[#757575] mt-8">Netflix Ethiopia</p>
      </div>
    </footer>
  );
}

export default Footer;
