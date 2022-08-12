import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-center flex mb-8 justify-center">
      <a
        href="https://www.sojourn.llc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <Image
            className="w-4 h-4 m-auto mb-4"
            src="/elbitapmoC.svg"
            alt="Logo, Stamping the footer featuring Bazell"
            fill="intrinsic"
            height={75}
            width={75}
          />
          <p>&copy; elbitapmoC | 2022</p>
        </span>
      </a>
    </footer>
  );
};

export default Footer;
