export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Author Bio */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center font-bold text-gray-600 text-2xl">
              BC
            </div>

            {/* Bio Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <span key={i} className="text-lg">
                      ⭐
                    </span>
                  ))}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Written by: Benjamin Carter
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Benjamin is a men's health advocate and product reviewer who specializes in intimate
                health solutions and telehealth innovations. With a background in health journalism
                and a commitment to destigmatizing men's wellness, Benjamin tests treatments that
                help men maintain confidence and relationship satisfaction. He focuses on
                evidence-based solutions that work in real-world situations and always strives to
                deliver honest assessments about what's worth your money and what isn't.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div id="disclosure" className="bg-gray-50 rounded-lg p-6 mb-12 text-sm text-gray-700">
          <p className="mb-4">
            This site is a free online resource that strives to offer helpful content and
            comparison features to its visitors. Please be advised that the operator of this site
            accepts advertising compensation from companies that appear on the site, and such
            compensation impacts the location and order in which the companies (and/or their
            products) are presented, and in some cases may also impact the rating that is assigned
            to them. To the extent that ratings appear on this site, such rating is determined by
            our subjective opinion and based on a methodology that aggregates our analysis of brand
            market share and reputation, each brand's conversion rates, compensation paid to us and
            general consumer interest. Company listings on this page DO NOT imply endorsement. Except
            as expressly set forth in our Terms of Use, all representations and warranties regarding
            the information presented on this page are disclaimed. The information, including pricing,
            which appears on this site is subject to change at any time.
          </p>
        </div>

        {/* Footer Links and Copyright */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              About Us
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Terms of Use
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Privacy Policy
            </a>
            <span className="text-gray-400">|</span>
            <a href="#disclosure" className="text-gray-600 hover:text-blue-600">
              Advertising Disclosure
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Contact us
            </a>
          </div>

          <p className="text-sm text-gray-600">
            Copyright © 2025 - HealthCompare.Review All Rights Reserved
          </p>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-6 text-gray-600 hover:text-blue-600 font-semibold text-sm"
          >
            Back To Top
          </button>
        </div>
      </div>
    </footer>
  );
}
