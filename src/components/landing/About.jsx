import Image from "next/image";
import { Container, Pill } from "./LandingUi";

const tenets = [
  [
    "01 / CLARITY",
    "Make complexity feel simple.",
    "Systems, flows, and interfaces that help people move with confidence.",
    "bg-white",
  ],
  [
    "02 / QUALITY",
    "Build things that last.",
    "Thoughtful QA and resilient code are part of the design, not an afterthought.",
    "bg-[#eafade]",
  ],
  [
    "03 / CURIOSITY",
    "Keep asking better questions.",
    "The best work starts by listening closely and testing assumptions early.",
    "bg-[#e8f4ff]",
  ],
];

export default function About() {
  return (
    <section id="about" data-layer="About Me" className="w-full AboutMe self-stretch px-7 lg:px-9 py-10 bg-stone-50 border-t border-black/10 inline-flex flex-col justify-start items-start overflow-hidden">
        <div data-layer="Container" className="Container w-full max-w-[1280px] flex flex-col justify-start items-start gap-10">
            <div data-layer="Header & Pill Badges" className="HeaderPillBadges self-stretch flex flex-col justify-start items-start gap-3">
                <div data-layer="Overlay+Border" className="OverlayBorder size- px-4 py-2 bg-lime-300/20 rounded-full outline outline-1 outline-offset-[-1px] outline-lime-300 inline-flex justify-start items-center gap-2">
                    <div data-svg-wrapper data-layer="Background" className="Background">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="8" height="8" rx="4" fill="#A7D384"/>
                        </svg>
                    </div>
                    <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">ABOUT NABILAH AYSYAH // 01</div>
                    </div>
                </div>
                <div data-layer="Heading 2:margin" className="Heading2Margin w-full max-w-[896px] pt-2 inline-flex flex-col justify-start items-start">
                    <div data-layer="Heading 2" className="Heading2 self-stretch inline-flex flex-wrap justify-start items-start gap-1.5">
                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-4xl lg:text-5xl lg:font-semibold font-bold font-['Syne'] leading-[50px]">Bridging the</div>
                        <div data-layer="worlds of" className="WorldsOf justify-center text-zinc-900 text-4xl lg:text-5xl lg:font-semibold font-bold font-['Syne'] leading-[50px]">worlds of</div>
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-4 py-1 bg-white rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black flex justify-start items-center">
                            <div data-layer="Text" className="Text justify-center text-zinc-900 text-4xl lg:text-5xl lg:font-semibold font-bold font-['Syne'] leading-[50px]">Design</div>
                        </div>
                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-4xl font-bold font-['Syne'] leading-[50px]">,</div>
                        <div className="group inline-flex gap-1.5">
                            <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-4 py-1 bg-blue-200 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-indigo-300 flex justify-start items-center">
                                <div data-layer="Text" className="Text justify-center text-slate-600 text-4xl lg:text-5xl lg:font-semibold font-bold font-['Syne'] leading-[50px]">Code</div>
                            </div>
                            <div data-layer="Text" className="Text justify-center text-zinc-900 text-4xl lg:text-5xl lg:font-semibold font-bold font-['Syne'] leading-[50px]"> &amp;</div>
                        </div>
                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-4xl lg:text-5xl lg:font-semibold font-bold font-['Syne'] leading-[50px]">Strategic Vision.</div>
                    </div>
                </div>
            </div>
            <div data-layer="Editorial Asymmetric Grid" className="EditorialAsymmetricGrid self-stretch flex flex-col sm:flex-row justify-start items-start gap-10">
                <div data-layer="Left Column: Editorial Studio Portrait" className="LeftColumnEditorialStudioPortrait inline-flex flex-col justify-center items-center gap-4">
                    <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow w-full lg:w-full lg:max-w-[479px] h-[387.5px] lg:h-[606px] self-stretch relative bg-gray-200 rounded-[32px] shadow-[0px_20px_50px_0px_rgba(0,0,0,0.08)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-center items-start overflow-hidden">
                        <Image data-layer="Nabilah Najwa Aysyah portrait" className="NabilahNajwa self-stretch h-full w-auto object-cover relative" src={'/images/profile-nabilah-aysyah.jpg'} alt="Portrait of Nabilah Najwa Aysyah" width={1248} height={832} loading="lazy" decoding="async" />
                        <div data-layer="Floating Overlay Pill Badge" className="FloatingOverlayPillBadge w-[calc(100%-60px)] bottom-[25px] left-[30px] h-fit p-4 absolute bg-stone-50/90 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/50 backdrop-blur-[6px] inline-flex flex-col justify-start items-start gap-1">
                            {/* <div data-layer="Floating Overlay Pill Badge:shadow" className="FloatingOverlayPillBadgeShadow left-0 top-0 absolute bg-white/0 rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)]" /> */}
                            <div data-layer="Container" className="Container self-stretch inline-flex justify-between items-center flex-wrap">
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] leading-4 tracking-tight">QA Engineer &amp; Fullstack Developer</div>
                            </div>
                            <div data-svg-wrapper data-layer="Background" className="Background">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="8" height="8" rx="4" fill="#A7D384"/>
                                </svg>
                            </div>
                            </div>
                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Based in Bandung, West Java" className="StudioBasedInTokyoSanFrancisco self-stretch justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">Based in Bandung, West Java</div>
                            </div>
                        </div>
                        <div data-layer="Overlay+Border+Shadow+OverlayBlur" className="OverlayBorderShadowOverlayblur size- px-2 py-1 left-[30px] top-[25px] absolute bg-stone-50/90 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 backdrop-blur-[6px] inline-flex justify-start items-center gap-1">
                            <div data-svg-wrapper data-layer="Background" className="Background">
                                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="6" height="6" rx="3" fill="black"/>
                                </svg>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">COMPONENT: AVATAR // V2.4</div>
                            </div>
                        </div>
                        <div data-layer="Background+Border+Shadow+OverlayBlur" className="BackgroundBorderShadowOverlayblur size- px-2 py-1 right-[30px] top-[25px] absolute bg-stone-50/95 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 backdrop-blur-[6px] inline-flex justify-start items-center gap-1.5">
                            <div data-layer="Container" className="Container size- flex justify-start items-center">
                                <div data-svg-wrapper data-layer="Background+Border" className="BackgroundBorder">
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="9" height="9" rx="4.5" fill="black" stroke="#F9F9F7"/>
                                    </svg>
                                </div>
                                <div data-svg-wrapper data-layer="Margin" className="Margin">
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="9" height="9" rx="4.5" fill="#BCDEFE" stroke="#F9F9F7"/>
                                    </svg>
                                </div>
                                <div data-svg-wrapper data-layer="Margin" className="Margin">
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="9" height="9" rx="4.5" fill="#C2F09E" stroke="#F9F9F7"/>
                                    </svg>
                                </div>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">Swatches</div>
                            </div>
                        </div>
                        <div data-layer="Background" className="Background h-5 px-2 py-1 right-[-11px] top-[292.75px] hidden md:inline-flex absolute bg-black rounded-full justify-start items-center gap-1">
                            <div data-layer="Overlay+Shadow" className="OverlayShadow w-28 h-5 left-0 top-0 absolute bg-white/0 rounded-full shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)]" />
                            <div data-svg-wrapper data-layer="Container" className="Container">
                                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.95 9L3.525 5.475L0 4.05V3.35L9 0L5.65 9H4.95V9M5.275 7.15L7.3 1.7L1.85 3.725L4.3 4.7L5.275 7.15V7.15M4.3 4.7V4.7V4.7V4.7V4.7V4.7" fill="white"/>
                                </svg>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-white text-xs font-medium font-['Space_Grotesk'] leading-4">Nabilah A. (editing)</div>
                            </div>
                        </div>
                        <div data-layer="Overlay+Border+Shadow+OverlayBlur" className="hidden md:inline-flex size- px-2 py-0.5 right-[17px] bottom-[107px] absolute bg-stone-50/90 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 backdrop-blur-[6px] justify-start items-center">
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-slate-600 text-[10px] font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">RADIUS: 32PX</div>
                            </div>
                        </div>
                    </div>
                    <div data-layer="Container" className="Container self-stretch inline-flex flex-wrap justify-start items-start gap-3 lg:gap-4overflow-hidden">
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow w-fit px-3 py-2 bg-gray-200 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 flex justify-start items-center gap-2">
                            <div data-svg-wrapper data-layer="Container" className="Container">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.33333 12C0.966667 12 0.652778 11.8694 0.391667 11.6083C0.130556 11.3472 0 11.0333 0 10.6667V1.33333C0 0.966667 0.130556 0.652778 0.391667 0.391667C0.652778 0.130556 0.966667 0 1.33333 0H10.6667C11.0333 0 11.3472 0.130556 11.6083 0.391667C11.8694 0.652778 12 0.966667 12 1.33333V10.6667C12 11.0333 11.8694 11.3472 11.6083 11.6083C11.3472 11.8694 11.0333 12 10.6667 12H1.33333ZM1.33333 10.6667H10.6667V1.33333H1.33333V10.6667ZM1.33333 10.6667V1.33333V10.6667Z" fill="#41617D"/>
                                </svg>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">Auto-layout [8px]</div>
                            </div>
                        </div>
                        <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow w-fit px-3 py-2 bg-blue-100/20 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-indigo-300 flex justify-start items-center gap-2">
                            <div data-svg-wrapper data-layer="Background" className="Background">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="8" height="8" rx="4" fill="#41617D"/>
                                </svg>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">✦ 100% Vector</div>
                            </div>
                        </div>
                        <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow w-fit px-3 py-2 bg-lime-300/30 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-lime-300 inline-flex justify-start items-center gap-2">
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-slate-600 text-sm font-bold font-['Space_Grotesk'] leading-4">#</div>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">Token: sys.fluid.01</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-layer="Right Column: Narrative, 3 Tenets & Signature Quote" className="RightColumnNarrative3TenetsSignatureQuote w-full lg:w-[690px] inline-flex flex-col justify-start items-start gap-7">
                    <div data-layer="Narrative" className="Narrative w-full self-stretch p-4 bg-stone-100 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-center items-center">
                        <div data-layer="Container" className="Container flex-wrap inline-flex justify-start items-start gap-2">
                            <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-3 py-1 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 flex justify-start items-center gap-1.5">
                                <div data-svg-wrapper data-layer="SVG" className="Svg relative">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_668_738)">
                                    <path d="M8 7.99967C8 6.52692 9.19391 5.33301 10.6667 5.33301C12.1394 5.33301 13.3333 6.52692 13.3333 7.99967C13.3333 9.47243 12.1394 10.6663 10.6667 10.6663C9.19391 10.6663 8 9.47243 8 7.99967Z" fill="#1ABCFE"/>
                                    <path d="M2.66675 13.3337C2.66675 11.8609 3.86065 10.667 5.33341 10.667H8.00008V13.3337C8.00008 14.8064 6.80617 16.0003 5.33341 16.0003C3.86065 16.0003 2.66675 14.8064 2.66675 13.3337Z" fill="#0ACF83"/>
                                    <path d="M8 0V5.33333H10.6667C12.1394 5.33333 13.3333 4.13942 13.3333 2.66667C13.3333 1.19391 12.1394 0 10.6667 0H8Z" fill="#FF7262"/>
                                    <path d="M2.66675 2.66667C2.66675 4.13942 3.86065 5.33333 5.33341 5.33333H8.00008V0H5.33341C3.86065 0 2.66675 1.19391 2.66675 2.66667Z" fill="#F24E1E"/>
                                    <path d="M2.66675 7.99967C2.66675 9.47243 3.86065 10.6663 5.33341 10.6663H8.00008V5.33301H5.33341C3.86065 5.33301 2.66675 6.52692 2.66675 7.99967Z" fill="#A259FF"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_668_738">
                                    <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                </div>
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">Figma</div>
                                </div>
                            </div>
                            <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-4 py-1 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 flex justify-start items-center gap-1.5">
                                <div data-svg-wrapper data-layer="Container" className="Container">
                                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.33333 10.6667C0.966667 10.6667 0.652778 10.5361 0.391667 10.275C0.130556 10.0139 0 9.7 0 9.33333V1.33333C0 0.966667 0.130556 0.652778 0.391667 0.391667C0.652778 0.130556 0.966667 0 1.33333 0H12C12.3667 0 12.6806 0.130556 12.9417 0.391667C13.2028 0.652778 13.3333 0.966667 13.3333 1.33333V9.33333C13.3333 9.7 13.2028 10.0139 12.9417 10.275C12.6806 10.5361 12.3667 10.6667 12 10.6667H1.33333ZM1.33333 9.33333H12V2.66667H1.33333V9.33333ZM3.66667 8.66667L2.73333 7.73333L4.45 6L2.71667 4.26667L3.66667 3.33333L6.33333 6L3.66667 8.66667ZM6.66667 8.66667V7.33333H10.6667V8.66667H6.66667Z" fill="#41617D"/>
                                    </svg>
                                </div>
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] leading-4">Core Stack</div>
                                </div>
                            </div>
                            <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-3 py-1 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 flex justify-start items-center gap-1.5">
                                <div data-svg-wrapper data-layer="SVG" className="Svg relative">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_668_756)">
                                    <path d="M8.00073 3.2002C5.8674 3.2002 4.53407 4.26686 4.00073 6.4002C4.80073 5.33353 5.73407 4.93353 6.80073 5.2002C7.4094 5.3522 7.84407 5.79353 8.32607 6.28286C9.11073 7.07886 10.0181 8.0002 12.0007 8.0002C14.1341 8.0002 15.4674 6.93353 16.0007 4.8002C15.2007 5.86686 14.2674 6.26686 13.2007 6.0002C12.5921 5.8482 12.1574 5.40686 11.6754 4.91753C10.8901 4.12153 9.9834 3.2002 8.00073 3.2002ZM4.00073 8.0002C1.8674 8.0002 0.534066 9.06686 0.000732422 11.2002C0.800732 10.1335 1.73407 9.73353 2.80073 10.0002C3.4094 10.1522 3.84407 10.5935 4.32607 11.0829C5.11073 11.8789 6.01807 12.8002 8.00073 12.8002C10.1341 12.8002 11.4674 11.7335 12.0007 9.6002C11.2007 10.6669 10.2674 11.0669 9.20073 10.8002C8.59207 10.6482 8.1574 10.2069 7.6754 9.71753C6.89007 8.92153 5.9834 8.0002 4.00073 8.0002Z" fill="#38BDF8"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_668_756">
                                    <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                </div>
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">Tailwind CSS</div>
                                </div>
                            </div>
                            <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-3 py-1 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 flex justify-start items-center gap-1.5">
                                <div data-svg-wrapper data-layer="SVG" className="Svg relative">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_668_747)">
                                    <path d="M6.57373 8.00031C6.57373 8.78738 7.21274 9.42639 7.99982 9.42639C8.7869 9.42639 9.4259 8.78738 9.4259 8.00031C9.4259 7.21323 8.7869 6.57422 7.99982 6.57422C7.21274 6.57422 6.57373 7.21323 6.57373 8.00031Z" fill="#61DAFB"/>
                                    <path d="M0.347656 7.99986C0.347656 9.61242 3.77648 10.9216 7.99983 10.9216C12.2232 10.9216 15.652 9.61242 15.652 7.99986C15.652 6.38731 12.2232 5.07812 7.99983 5.07812C3.77648 5.07812 0.347656 6.38731 0.347656 7.99986V7.99986" stroke="#61DAFB" strokeWidth="0.695652"/>
                                    <path d="M4.1738 1.37298C2.77729 2.17925 3.35792 5.8033 5.46959 9.46082C7.58127 13.1183 10.4295 15.4332 11.826 14.6269C13.2225 13.8207 12.6419 10.1966 10.5302 6.53908C8.41851 2.88156 5.57031 0.566703 4.1738 1.37298V1.37298" stroke="#61DAFB" strokeWidth="0.695652"/>
                                    <path d="M16.8866 -11.881C15.4901 -12.6872 12.6419 -10.3724 10.5302 -6.71487C8.41851 -3.05734 7.83789 0.566703 9.2344 1.37298C10.6309 2.17925 13.4791 -0.135599 15.5908 -3.79313C17.7025 -7.45065 18.2831 -11.0747 16.8866 -11.881V-11.881" stroke="#61DAFB" strokeWidth="0.695652"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_668_747">
                                    <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                </div>
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">React / Next.js</div>
                                </div>
                            </div>
                            <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-3 py-1 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 flex justify-start items-center gap-1.5">
                                <div data-svg-wrapper data-layer="SVG" className="Svg relative">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_668_762)">
                                    <path d="M7.99992 1.33301L1.33325 4.66634L7.99992 7.99967L14.6666 4.66634L7.99992 1.33301V1.33301M1.33325 11.333L7.99992 14.6663L14.6666 11.333M1.33325 7.99967L7.99992 11.333L14.6666 7.99967" stroke="#1A1C1B" strokeWidth="1.2"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_668_762">
                                    <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                </div>
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">Three.js / WebGL</div>
                                </div>
                            </div>
                            <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-3 py-1 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 flex justify-start items-center gap-1.5">
                                <div data-svg-wrapper data-layer="SVG" className="Svg relative">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_668_767)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.192 9.024L6.976 15.808C7.232 16.064 7.648 16.064 7.904 15.808L15.808 7.904C16.064 7.648 16.064 7.232 15.808 6.976L9.024 0.192C8.768 -0.064 8.352 -0.064 8.096 0.192L0.192 8.096C-0.064 8.352 -0.064 8.768 0.192 9.024ZM7.68 13.312L2.688 8.32L8.32 2.688L13.312 7.68L7.68 13.312Z" fill="#1A1C1B"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_668_767">
                                    <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                </div>
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">Linear</div>
                                </div>
                            </div>
                            <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-3 py-1 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-center gap-1.5">
                                <div data-svg-wrapper data-layer="Background" className="Background">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="8" height="8" rx="4" fill="#A7D384"/>
                                    </svg>
                                </div>
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">Active Production</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-4">
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Professional summary paragraph 1" className="OverThePastDecadeIVeWorkedAcrossDigitalBrandCreationEarlyStageProductAccelerationAndOpenCrowdfundingInfrastructureMyBackgroundMergesStructuralArchitecturalThoughtWithTheFluidResponsivenessOfModernWebTechnology self-stretch justify-center text-zinc-900 text-base font-medium font-['Space_Grotesk'] leading-6">Since 2023 I have worked across manual and end-to-end testing, bug lifecycle management, and fullstack web development at Emveep. My background lets me read the code behind a defect, not just the symptom, and turn that into a clear, reproducible report.</div>
                        </div>
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div data-layer="I believe reliable software comes from rigorous process and close collaboration: structured STLC practice, disciplined regression coverage, and honest communication with developers and stakeholders inside an Agile/Scrum team." className="IBelieveHighTrustDigitalExperiencesRequireBothTheAestheticDisciplineOfClassicSwissAndNeoBrutalistTypographyAndTheOrganicWarmthOfHumanInteractionEveryProjectIsConceivedAsAnEditorialArtifactDeliberateResilientAndCraftedToEndure self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-6">I believe reliable software comes from rigorous process and close collaboration: structured STLC practice, disciplined regression coverage, and honest communication with developers and stakeholders inside an Agile/Scrum team.</div>
                        </div>
                    </div>
                    <div data-layer="3 Highlight Cards / Tenets" className="self-stretch inline-flex flex-col lg:flex-row justify-center items-start gap-5">
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow lg:h-[172px] flex-1 p-5 bg-stone-100 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-start items-start gap-2.5 min-w-0">
                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                <div data-layer="01 / QUALITY" className="Architecture self-stretch justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">01 / QUALITY</div>
                            </div>
                            <div data-layer="Heading 3" className="Heading3 self-stretch flex flex-col justify-start items-start">
                                <div data-layer="Systemic Rigor" className="SystemicRigor self-stretch justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">Systematic Testing</div>
                            </div>
                            <div data-layer="Margin" className="Margin self-stretch pt-1 flex flex-col justify-start items-start">
                                <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                    <div data-layer="Functional, regression, smoke, and exploratory testing grounded in STLC." className="ModularDesignSystemsTypeScalesAndPredictableCodeStructures self-stretch justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">Functional, regression, smoke, and exploratory testing grounded in STLC.</div>
                                </div>
                            </div>
                        </div>
                        <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow lg:h-[172px] flex-1 p-5 bg-blue-100/20 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-indigo-300 inline-flex flex-col justify-start items-start gap-2.5 min-w-0">
                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                <div data-layer="02 / ENGINEERING" className="Ergonomics self-stretch justify-center text-slate-600 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">02 / ENGINEERING</div>
                            </div>
                            <div data-layer="Heading 3" className="Heading3 self-stretch flex flex-col justify-start items-start">
                                <div data-layer="Organic Fluidity" className="OrganicFluidity self-stretch justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">Fullstack Insight</div>
                            </div>
                            <div data-layer="Margin" className="Margin self-stretch pt-1 flex flex-col justify-start items-start">
                                <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                    <div data-layer="Next.js, Node.js, and SQL knowledge used for real root-cause analysis." className="TactileMicroInteractionsResponsiveKineticsAndFrictionlessFlows self-stretch justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">Next.js, Node.js, and SQL knowledge used for real root-cause analysis.</div>
                                </div>
                            </div>
                        </div>
                        <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow lg:h-[172px] flex-1 p-5 bg-lime-300/20 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-lime-300 inline-flex flex-col justify-start items-start gap-2.5 min-w-0">
                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                <div data-layer="03 / COLLABORATION" className="Collective self-stretch justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">03 / COLLABORATION</div>
                            </div>
                            <div data-layer="Heading 3" className="Heading3 self-stretch flex flex-col justify-start items-start">
                                <div data-layer="Impact & Scale" className="ImpactScale self-stretch justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">Agile Delivery</div>
                            </div>
                            <div data-layer="Margin" className="Margin self-stretch pt-1 flex flex-col justify-start items-start">
                                <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                    <div data-layer="Cross-functional Scrum work with developers, designers, and stakeholders." className="DecentralizedCrowdfundingRailsAndCommunityDrivenDigitalPlatforms self-stretch justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">Cross-functional Scrum work with developers, designers, and stakeholders.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-layer="Signature Block & Action Links" className="SignatureBlockActionLinks self-stretch p-5 lg:p-6 gap-3 bg-gray-200 rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col lg:flex-row justify-between items-start flex-wrap">
                        <div data-layer="Container" className="Container flex-1 inline-flex flex-col justify-start items-start gap-2 min-w-0">
                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                <div data-layer="“Good design isn't just how it looks; it's how it invites participation.”" className="GoodDesignIsnTJustHowItLooksItSHowItInvitesParticipation self-stretch justify-center text-zinc-900 text-sm font-normal font-['Space_Grotesk'] leading-5">“A bug report is only useful if someone else can reproduce it on the first try.”</div>
                            </div>
                            <div data-layer="Container" className="Container self-stretch pt-1 inline-flex justify-start items-center gap-2">
                                <div data-layer="Background" className="Background size-6 bg-black rounded-full flex justify-center items-center">
                                    <div data-layer="AV" className="Av flex-1 text-center justify-center text-white text-xs font-bold font-['Space_Grotesk'] leading-4 min-w-0">NA</div>
                                </div>
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                    <div data-layer="NABILAH NAJWA AYSYAH — QA ENGINEER" className="AlexVanceFounderLead self-stretch justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">NABILAH NAJWA AYSYAH — QA ENGINEER</div>
                                </div>
                            </div>
                        </div>
                        <div data-layer="Container" className="Container size- flex justify-start items-center gap-3">
                            <div data-layer="Link" className="Link cursor-pointer size- px-6 py-3 rounded-full outline outline-1 outline-offset-[-1px] outline-black inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-base font-normal font-['Space_Grotesk'] leading-6">Download CV (PDF)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
