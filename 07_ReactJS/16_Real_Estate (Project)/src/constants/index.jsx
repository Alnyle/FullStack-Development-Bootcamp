import { HiShieldCheck } from "react-icons/hi2";
import { IoCloseCircle } from "react-icons/io5";
import { HiChartSquareBar } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { BiSolidMessageAlt } from "react-icons/bi";



export const navLinks = [
    { href: "/", label: "Residencies" },
    { href: "/", label: "Our value" },
    { href: "/", label: "Contact Us" },
    { href: "/", label: "Get Started" },
]



export const heroContent = {
    title: "Discover most suitable property",
    subtitle1: "Find a variety of properties that suit you very easilty",
    subtitle2: "Forget all difficulties in finding a residence for you",
    tags: [
        { statis: "9,000",  name: "Premium Product"},
        { statis: "2,000",  name: "Happy Customer"},
        { statis: "28",  name: "Awards Winning"},
    ]
}

export const valuesInfo = [
    {
        icon: <HiShieldCheck/>,
        title: "Best interest rates on the market",
        description: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
    },
    {
        icon: <IoCloseCircle />,
        title: "Prevent unstable prices",
        description: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
    },
    {
        icon: <HiChartSquareBar/>,
        title: "Best interest rates on the market",
        description: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
    }
]

export const contactInfo = [
    {
        icon: <IoIosCall />,
        title: "Call",
        number: "021 123 145 14",
        btn: "Call now"
    },
    {
        icon: <IoChatbubbleEllipses />,
        title: "Chat",
        number: "021 123 145 14",
        btn: "Chat now"
    },
    {
        icon: <IoChatbubbleEllipses />,
        title: "Video",
        number: "021 123 145 14",
        btn: "Video Call now"
    },
    {
        icon: <BiSolidMessageAlt />,
        title: "Message",
        number: "021 123 145 14",
        btn: "Message now"
    }
]


export const footerLinks = [
    { href: "/", label: "Property" },
    { href: "/", label: "Services" },
    { href: "/", label: "Product" },
    { href: "/", label: "About Us" },
] 