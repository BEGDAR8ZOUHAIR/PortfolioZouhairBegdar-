import { StaticImageData } from "next/image";
import GithubDarkIcon from "../assets/svg/GithubDarkIcon.svg";
import GithubIcon from "../assets/svg/GithubIcon.svg";
import InstagramDarkIcon from "../assets/svg/InstagramDarkIcon.svg";
import InstagramIcon from "../assets/svg/InstagramIcon.svg";
import LinkedinDarkIcon from "../assets/svg/LinkedinDarkIcon.svg";
import LinkedinIcon from "../assets/svg/LinkedinIcon.svg";
import YoutubeDarkIcon from "../assets/svg/YoutubeDarkIcon.svg";
import YoutubeIcon from "../assets/svg/YoutubeIcon.svg";

export interface Sosmed {
  nama: string;
  icon: StaticImageData;
  darkIcon: StaticImageData;
  link: string;
}

export const sosmed: Sosmed[] = [
  {
    nama: "Github",
    icon: GithubIcon,
    darkIcon: GithubDarkIcon,
    link: "https://github.com/BEGDAR8ZOUHAIR",
  },
  {
    nama: "Linkedin",
    icon: LinkedinIcon,
    darkIcon: LinkedinDarkIcon,
    link: "https://www.linkedin.com/in/zouhair-begdar/",
  },
  {
    nama: "Youtube",
    icon: YoutubeIcon,
    darkIcon: YoutubeDarkIcon,
    link: "https://www.youtube.com/@zouhairbegdar98",
  },
  {
    nama: "Instagram",
    icon: InstagramIcon,
    darkIcon: InstagramDarkIcon,
    link: "https://www.instagram.com/zouhair_begdar/",
  },
];
