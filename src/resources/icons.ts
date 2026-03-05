import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiOutlineEye,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouse,
  PiGridFour,
  PiUserCircle,
  PiImage,
} from "react-icons/pi";

import { FaGithub, FaLinkedin, FaX, FaThreads, FaInstagram, FaXTwitter, FaFacebook, FaPinterest, FaWhatsapp, FaReddit, FaTelegram, } from "react-icons/fa6";
import { MdOutlineGroup, MdOutlinePalette, MdOutlinePersonSearch, MdOutlineToken } from "react-icons/md";
import { LuLightbulb } from "react-icons/lu";
import { RiGroupLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  // book: PiBookBookmarkDuotone,
  calendar: HiCalendarDays,
  document: HiOutlineDocument,
  email: HiEnvelope,
  eye: HiOutlineEye,
  facebook: FaFacebook,
  gallery: PiImage,
  github: FaGithub,
  globe: HiOutlineGlobeAsiaAustralia,
  grid: PiGridFour,
  home: PiHouse,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  openLink: HiOutlineLink,
  person: PiUserCircle,
  pinterest: FaPinterest,
  reddit: FaReddit,
  rocket: HiOutlineRocketLaunch,
  telegram: FaTelegram,
  threads: FaThreads,
  twitter: FaXTwitter,
  whatsapp: FaWhatsapp,
  x: FaX,
  personSearch: MdOutlinePersonSearch,
  palette: MdOutlinePalette,
  token: MdOutlineToken,
  group: MdOutlineGroup,
  bulb: LuLightbulb,
  group2: RiGroupLine,
  checkCircle: IoMdCheckmarkCircleOutline,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
