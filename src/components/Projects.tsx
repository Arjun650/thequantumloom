import "./styles.css"; 

export default () => {
  return (
    <div className="container flex flex-col  h-full">
      <div className="content h-[87%]">
        <div className="slideshow">
          <div className="slideshow-wrapper">


            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                      <img src="\myweather.png" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="text-5xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mt-6">
                  myWeather
                </p>
                
                <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 font-light">
                myWeather is a Flutter application that provides current weather information for a given location. 
                It utilizes the Open Weather GeoCoder API to convert a place name to 
                coordinates and then fetches the current weather using the Open Weather Current Weather API.
                </p>
                <div className="h-[170px]"></div>
              </div>
            </div>


            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                    <img src="\adGuardian.png" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="text-5xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mt-6">
                  Ad Guardian
                </p>
                <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 font-light">
                AdGuardian is a Chrome extension that fast-forwards 
                and skips ads, providing an uninterrupted viewing experience on various websites.
                </p>
              </div>
            </div>


            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                    <img src="\audioencryption.png" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="text-5xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mt-6">
                Audio-Encryption
                </p>
                <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 font-light">
                This project introduces a novel audio encryption technique that combines 
                AES with Rule 30 cellular automata, featuring a pseudorandom layer for enhanced security.
                </p>
                <div className="h-[170px]"></div>
              </div>
            </div>


            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                    <img src="\picsort.png" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="text-5xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mt-6">
                  PicSort
                </p>
                <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 font-light">
                PicSort is a unique sorting visualizer developed by User, where pixels of 
                images are shuffled and sorted using various sorting algorithms, 
                providing a novel way to visualize sorting processes.
                </p>
              </div>
            </div>
            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                      <img src="\everyrupee.png" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="text-5xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mt-6">
                  everyRupee
                </p>
                
                <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 font-light">
                everyRupee is my latest Android project coded in Kotlin, aiming to 
                simplify personal finance management. It helps users track expenses, 
                manage budgets, and stay financially organized with ease, all from their 
                smartphones. Perfect for anyone looking to take control of their finances effortlessly!
                </p>
                <div className="h-[170px]"></div>
              </div>
            </div>

            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                      <img src="\cryptopix.png" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="text-5xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mt-6">
                  Cryptopix
                </p>
                
                <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 font-light">
                CryptoPix is a Python project that combines AES encryption with steganography 
                to hide encrypted text within an image. The project utilizes the AES 
                encryption algorithm for secure text encryption and LSB steganography for hiding 
                the encrypted text within an image without visibly altering its appearance.
                </p>
                <div className="h-[170px]"></div>
              </div>
            </div>

            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                      <img src="\ytsmartpause.png" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="text-5xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mt-6">
                  YT smart pause
                </p>
                
                <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 font-light">
                YouTube Smart Pause is a Chrome extension that automatically pauses 
                and plays YouTube videos when you switch between tabs, providing a seamless viewing experience.
                </p>
                <div className="h-[170px]"></div>
              </div>
            </div>

        


          </div>
        </div>
      </div>

      {/*<div className='block sm:hidden'> hello phone</div>*/}

      <div className="w-100 mt-8 md:max-w-xs lg:max-w-none hello   h-[7%]">
      <a href="https://github.com/shashank-amireddy" target='blank'> 
        <button
          type="button"
          className="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-black dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
        >
          Check out my GitHub
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
        </button>
        </a>
      </div>
    </div>      


  );
};
