export default () => {
  return (
    <div>
      <div className="relative flex items-center gap-x-4">
        <img
          src=""
          alt=""
          className="h-10 w-10 rounded-full ring-1"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-primary">
            <a href="#">
              <span className="absolute inset-0"></span>
              YOUR NAME
            </a>
          </p>
          <p className="text-zinc-500">
            ROLE
          </p>
        </div>
      </div>
      <p className="text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary">
        Hey, welcome to my site!
      </p>
      <p className="mt-4 text-sm text-zinc-500  className font-light lg:text-xl">
        I'm a digital designer, developer, and surfer from Malibu. In the digital world, I craft interfaces and dive into coding intricacies.
        <br />
        <br />
        Beyond screens, I find solace and joy riding waves along Malibu's shores. My life blends tech and nature, coding sessions, and catching waves.
      </p>
    </div>
  );
};