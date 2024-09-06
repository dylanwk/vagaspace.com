import ContactForm from "@/components/Contact";


const Contact = () => {


  return (
    <div className="bg-background">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black lg:text-5xl">
            Contact us
          </h2>
          <p className="mt-1 text-neutral-700 font-light text-lg">
          Got a technical issue? Want to send feedback about our site? Need details about our Business plan? We are happy to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
            <ContactForm />
          </div>

          <div className="space-y-14">
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 w-6 h-6 text-neutral-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <div className="grow">
                <h4 className="text-black font-semibold">Email us:</h4>

                <a
                  className="mt-1 text-neutral-600 font-light hover:underline focus:underline"
                  href="mailto:example@site.co"
                  target="_blank"
                >
                  hello@vagaspace.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
