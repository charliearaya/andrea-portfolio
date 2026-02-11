import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
} from "react-icons/si";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaInstagram, FaXTwitter, FaFacebook, FaPinterest, FaWhatsapp, FaReddit, FaTelegram, } from "react-icons/fa6";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineGroup, MdOutlinePalette, MdOutlinePersonSearch, MdOutlineToken } from "react-icons/md";
import { LuLightbulb, LuPenTool } from "react-icons/lu";
import { RiGroupLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export const iconLibrary: Record<string, IconType> = {
  arrowRight: HiArrowRight,
  arrowUpRight: HiArrowUpRight,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  book: PiBookBookmarkDuotone,
  calendar: HiCalendarDays,
  circlePlus: AiOutlinePlusCircle,
  discord: FaDiscord,
  document: HiOutlineDocument,
  email: HiEnvelope,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  facebook: FaFacebook,
  figma: SiFigma,
  gallery: PiImageDuotone,
  github: FaGithub,
  globe: HiOutlineGlobeAsiaAustralia,
  grid: PiGridFourDuotone,
  home: PiHouseDuotone,
  instagram: FaInstagram,
  javascript: SiJavascript,
  linkedin: FaLinkedin,
  nextjs: SiNextdotjs,
  openLink: HiOutlineLink,
  person: PiUserCircleDuotone,
  pinterest: FaPinterest,
  reddit: FaReddit,
  rocket: HiOutlineRocketLaunch,
  supabase: SiSupabase,
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
  pen: LuPenTool,
  checkCircle: IoMdCheckmarkCircleOutline,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
