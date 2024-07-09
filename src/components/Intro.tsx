export default () => {
  return (
    <div>
      <div className="relative flex items-center gap-x-4">
        <img
          src="\pfp.jpg"
          alt=""
          className="h-10 w-10 rounded-full ring-1"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-primary">
            <a href="#">
              <span className="absolute inset-0"></span>
              Shashank Reddy
            </a>
          </p>
          <p className="text-zinc-500">
            a.k.a Quan7um L00m
          </p>
        </div>
      </div>
      <p className="text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary">
        Hey, welcome to my site!
      </p>
      <p className="mt-4 text-sm text-zinc-500  className font-light lg:text-xl">
      Embracing the art of cryptography, I actively compete in CTF challenges alongside team bi0sblr, diving into the depths of cybersecurity.
        <br />
        <br />
        Driven by an unwavering passion for computer science, I constantly push boundaries, seeking innovation and growth in every project I undertake.
      </p>
    </div>
  );
};