const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-500">
          <img
            src="/images/vagaspace_logo.svg"
            alt="Vagaspace Logo"
            className="h-[40px] w-[40px] opacity-40"
          />
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75"
              href="/about"
            >
              {" "}
              About{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75"
              href="/s?locationValue=Anywhere"
            >
              {" "}
              Locations{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75"
              href="/blog"
            >
              {" "}
              Blog{" "}
            </a>
          </li>
          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75"
              href="/contact"
            >
              {" "}
              Contact{" "}
            </a>
          </li>
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8"></ul>
      </div>
    </footer>
  );
};

export default Footer;
