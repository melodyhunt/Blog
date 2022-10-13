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
        <BsFacebook className="mx-2 cursor-pointer hover:text-white" />
        <BsLinkedin className="mx-2 cursor-pointer hover:text-white" />
        <BsTwitter className="mx-2 cursor-pointer hover:text-white" />
        <BsInstagram className="mx-2 cursor-pointer hover:text-white" />
        <BsGithub className="mx-2 cursor-pointer hover:text-white" />
      </div>

      <div>
        <span class="text-md text-color2 sm:text-center">
          <p>© 2022 Terra Santa. Derechos Reservados.</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
