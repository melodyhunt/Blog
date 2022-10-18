import {
  BsLinkedin,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer class="border-t-2 py-8 flex flex-col justify-center bg-color5">
      <div className="flex flex-row justify-center mb-6 text-3xl text-color2">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          without
          rel="noreferrer"
          className="mx-2 cursor-pointer hover:text-white"
        >
          <BsFacebook />
        </a>
        <a
          without
          rel="noreferrer"
          href="https://www.linkedin.com/in/maria-melody-hunt-23924523b/"
          target="_blank"
          className="mx-2 cursor-pointer hover:text-white"
        >
          <BsLinkedin />
        </a>
        <a
          without
          rel="noreferrer"
          href="https://www.twitter.com/"
          target="_blank"
          className="mx-2 cursor-pointer hover:text-white"
        >
          {" "}
          <BsTwitter />
        </a>
        <a
          without
          rel="noreferrer"
          href="https://www.instagram.com/melodyhuntt/"
          target="_blank"
          className="mx-2 cursor-pointer hover:text-white"
        >
          <BsInstagram />
        </a>
        <a
          without
          rel="noreferrer"
          href="https://github.com/melodyhunt"
          target="_blank"
          className="mx-2 cursor-pointer hover:text-white"
        >
          <BsGithub />
        </a>
      </div>

      <div>
        <span class="text-md text-color2 text-center">
          <p>© 2022 Terra Santa. Derechos Reservados.</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
