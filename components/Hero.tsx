import Image from "next/image";
import Stats from "./Stats";

export default function Hero() {
  return (
    <section id="home" className="relative bg-sky overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 pt-8 pb-8 sm:px-8 sm:pt-14 lg:pb-14">
        {/* On desktop, this grid now only serves to space out the left content columns properly */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8">
          
          {/* Copy column */}
          <div className="relative z-10">
            <h1 className="font-display text-[2.6rem] font-semibold leading-[1.05] text-ink sm:text-6xl lg:text-[3.4rem]">
              Find A House
              <br />
              That Suits You
            </h1>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate sm:text-base">
              Want to find a home? We are ready to help you find one that
              suits your lifestyle and needs.
            </p>

            <a
              href="#search"
              className="mt-7 inline-block rounded-md bg-ink px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Started
            </a>

            <div className="mt-10 sm:mt-12">
              <Stats />
            </div>
          </div>

          {/* Image column - Using absolute positioning on desktop to prevent compression */}
          <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[45vw] xl:w-[48vw] h-[300px] sm:h-[450px] lg:h-full rounded-2xl lg:rounded-l-3xl lg:rounded-r-none overflow-hidden">
            <Image
              src="/images/hero-building.jpg"
              alt="Modern residential building"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
}