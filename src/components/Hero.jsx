import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" />
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/bhuwan-1");
          }}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize articles using <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4 </span>
      </h1>
      <h2>
        Summarize your reading with Sumz, an open-source article summarizer
        which transforms lengthy articles to short, clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
