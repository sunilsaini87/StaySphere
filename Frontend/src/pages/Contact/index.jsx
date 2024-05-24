import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Contact() {
  return (
    <>
      <Header />
      <section
        className="min-h-screen bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="flex flex-col min-h-screen bg-black/60">
          <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
              <div className="text-white lg:w-1/2 lg:mx-6">
                <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                  Ultimate design solution
                </h1>

                <p className="max-w-xl mt-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatem quo aliquid molestiae hic incidunt beatae placeat
                  accusantium! Alias ex quisquam ab tempora. Ratione autem
                  doloremque ducimus numquam doloribus, error sed.
                </p>

                <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                  get in touch
                </button>

                <div className="mt-6 md:mt-8">
                  <h3 className="text-gray-300 ">Follow us</h3>

                  <div className="flex mt-4 -mx-1.5 ">
                    <a
                      className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                      href="#"
                    >
                      <svg
                        className="w-10 h-10 fill-current"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                      </svg>
                    </a>

                    <a
                      className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                      href="#"
                    >
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                          fill="currentColor"
                        />
                        <path
                          d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>

                    <a
                      className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                      href="#"
                    >
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>

                    <a
                      className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                      href="#"
                    >
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.4003 14.4919 11.9294 14.4919Z"
                          fill="currentColor"
                        />
                        <path
                          d="M16.7043 5.81897C16.7043 6.38171 16.2396 6.84634 15.6769 6.84634C15.1142 6.84634 14.6496 6.38171 14.6496 5.81897C14.6496 5.25623 15.1142 4.7916 15.6769 4.7916C16.2396 4.7916 16.7043 5.25623 16.7043 5.81897Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.375 0C1.50898 0 0 1.50898 0 3.375V16.625C0 18.491 1.50898 20 3.375 20H16.625C18.491 20 20 18.491 20 16.625V3.375C20 1.50898 18.491 0 16.625 0H3.375ZM18.1317 4.23384C18.5062 4.92373 18.7358 5.71556 18.7358 6.55183V13.4482C18.7358 15.8587 16.8598 17.7347 14.4482 17.7347H7.55183C5.14131 17.7347 3.26527 15.8587 3.26527 13.4482V6.55183C3.26527 4.14131 5.14131 2.26527 7.55183 2.26527H13.4482C15.0056 2.26527 16.3854 3.01801 17.2147 4.16729C17.5371 4.07147 17.8768 4.02148 18.224 4.02148C18.4192 4.02148 18.6077 4.04878 18.7872 4.10136L18.1317 4.23384Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 lg:w-1/2 lg:mx-6">
                <div className="w-full max-w-xl px-6 py-8 mx-auto bg-white rounded-md shadow-md">
                  <h1 className="text-2xl font-semibold text-gray-700">
                    Contact us
                  </h1>

                  <p className="mt-6 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Porro beatae error laborum ab amet sunt recusandae?
                    Reiciendis natus perspiciatis optio.
                  </p>

                  <form className="mt-6">
                    <div className="flex-1">
                      <label className="block mb-2 text-sm text-gray-600">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div className="flex-1 mt-6">
                      <label className="block mb-2 text-sm text-gray-600">
                        Email address
                      </label>
                      <input
                        type="email"
                        placeholder="johndoe@example.com"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div className="w-full mt-6">
                      <label className="block mb-2 text-sm text-gray-600">
                        Message
                      </label>
                      <textarea
                        className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                      get in touch
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
