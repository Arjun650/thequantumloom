import "./styles.css"; // Import the CSS file

export default () => {
  return (
    <div className="container flex flex-col  h-full">
      <div className="content h-[95%]">
        <div className="slideshow">
          <div className="slideshow-wrapper">
            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                      <img src="\quantoomloom_2.png" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl mt-6">
                  Lexington
                </p>
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">
                  Free and premium multipage themes and UI Kits for freelancers,
                  developers, businesses, and personal use. Beautifully crafted
                  with Astro.js, and Tailwind CSS — Simple & easy to customise.
                </p>
                <div className="h-[170px]"></div>
              </div>
            </div>
            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                    <img src="\quantoomloom_2.png" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl mt-6">
                  Lexington
                </p>
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">
                  Free and premium multipage themes and UI Kits for freelancers,
                  developers, businesses, and personal use. Beautifully crafted
                  with Astro.js, and Tailwind CSS — Simple & easy to customise.
                </p>
              </div>
            </div>
            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                    <img src="\quantoomloom_2.png" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl mt-6">
                  Lexington
                </p>
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">
                  Free and premium multipage themes and UI Kits for freelancers,
                  developers, businesses, and personal use. Beautifully crafted
                  with Astro.js, and Tailwind CSS — Simple & easy to customise.
                </p>
                <div className="h-[170px]"></div>
              </div>
            </div>
            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                    <img src="\quantoomloom_2.png" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl mt-6">
                  Lexington
                </p>
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">
                  Free and premium multipage themes and UI Kits for freelancers,
                  developers, businesses, and personal use. Beautifully crafted
                  with Astro.js, and Tailwind CSS — Simple & easy to customise.
                  Free and premium multipage themes and UI Kits for freelancers,
                  developers, businesses, and personal use. Beautifully crafted
                  with Astro.js, and Tailwind CSS — Simple & easy to customise.
                  Free and premium multipage themes and UI Kits for freelancers,
                  developers, businesses, and personal use. Beautifully crafted
                  with Astro.js, and Tailwind CSS — Simple & easy to customise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<div className='block sm:hidden'> hello phone</div>*/}

      <div className="w-100 mt-8 md:max-w-xs lg:max-w-none hello   h-[7%]">
        {/* <a href="https://google.com" target='blank'> */}
        <button
          type="button"
          className="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-black dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
          onClick={() => {
            window.open("/path/to/your/pdf", "_blank");
          }}
        >
          Download my CV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-github h-6 w-6 "
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
          </svg>
          {/* <svg xmlns="http://www.w3.org/2000/svg" className='h-7 w-7' data-name="Layer 1" viewBox="0 0 24 24" id="github"><path fill="currentColor"stroke="currentColor"  d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg> */}
        </button>
        {/* </a> */}
      </div>
    </div>
  );
};
