'use client';

import Image from "next/image";
import { Container, Pill } from "./LandingUi";
import { useI18n } from '@/i18n/LanguageProvider';

// Disabled: unused placeholder data, and its figures are not in the CV.
/*
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
*/

export default function About() {
  const { t } = useI18n();

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
                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">{t.about.eyebrow}</div>
                    </div>
                </div>
                <div data-layer="Heading 2:margin" className="Heading2Margin w-full max-w-[896px] pt-2 inline-flex flex-col justify-start items-start">
                    <div data-layer="Heading 2" className="Heading2 self-stretch inline-flex flex-wrap justify-start items-start gap-1.5">
                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-4xl lg:text-5xl lg:font-semibold font-bold font-['Syne'] leading-[50px]">{t.about.headline1}</div>
                        <div data-layer="worlds of" className="WorldsOf justify-center text-zinc-900 text-4xl lg:text-5xl lg:font-semibold font-bold font-['Syne'] leading-[50px]">{t.about.headline2}</div>
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-4 py-1 bg-white rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black flex justify-start items-center">
                            <div data-layer="Text" className="Text justify-center text-zinc-900 text-4xl lg:text-5xl lg:font-semibold font-bold font-['Syne'] leading-[50px]">{t.about.headlineDesign}</div>
                        </div>
                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-4xl font-bold font-['Syne'] leading-[50px]">,</div>
                        <div className="group inline-flex gap-1.5">
                            <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-4 py-1 bg-blue-200 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-indigo-300 flex justify-start items-center">
                                <div data-layer="Text" className="Text justify-center text-slate-600 text-4xl lg:text-5xl lg:font-semibold font-bold font-['Syne'] leading-[50px]">{t.about.headlineCode}</div>
                            </div>
                            <div data-layer="Text" className="Text justify-center text-zinc-900 text-4xl lg:text-5xl lg:font-semibold font-bold font-['Syne'] leading-[50px]"> &amp;</div>
                        </div>
                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-4xl lg:text-5xl lg:font-semibold font-bold font-['Syne'] leading-[50px]">{t.about.headlineVision}</div>
                    </div>
                </div>
            </div>
            <div data-layer="Editorial Asymmetric Grid" className="EditorialAsymmetricGrid self-stretch flex flex-col lg:flex-row justify-start items-start gap-10">
                <div data-layer="Left Column: Editorial Studio Portrait" className="LeftColumnEditorialStudioPortrait inline-flex flex-col justify-center items-center gap-4">
                    <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow w-full lg:w-full lg:max-w-[479px] h-[387.5px] lg:h-[606px] self-stretch relative bg-gray-200 rounded-[32px] shadow-[0px_20px_50px_0px_rgba(0,0,0,0.08)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-center items-start overflow-hidden">
                        <Image data-layer="Nabilah Najwa Aysyah portrait" className="NabilahNajwa self-stretch h-full w-auto object-cover relative" src={'/images/profile-nabilah-aysyah.jpg'} alt="Portrait of Nabilah Najwa Aysyah" width={1248} height={832} loading="lazy" decoding="async" />
                        <div data-layer="Floating Overlay Pill Badge" className="FloatingOverlayPillBadge w-[calc(100%-60px)] bottom-[25px] left-[30px] h-fit p-4 absolute bg-stone-50/90 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/50 backdrop-blur-[6px] inline-flex flex-col justify-start items-start gap-1">
                            {/* <div data-layer="Floating Overlay Pill Badge:shadow" className="FloatingOverlayPillBadgeShadow left-0 top-0 absolute bg-white/0 rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)]" /> */}
                            <div data-layer="Container" className="Container self-stretch inline-flex justify-between items-center flex-wrap">
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] leading-4 tracking-tight">QA Engineer &middot; Project Manager &middot; Fullstack Developer</div>
                            </div>
                            <div data-svg-wrapper data-layer="Background" className="Background">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="8" height="8" rx="4" fill="#A7D384"/>
                                </svg>
                            </div>
                            </div>
                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Based in Bandung, West Java" className="StudioBasedInTokyoSanFrancisco self-stretch justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.about.location}</div>
                            </div>
                        </div>
                        {/* Disabled: not supported by the CV. */}
                        
                        <div data-layer="Overlay+Border+Shadow+OverlayBlur" className="OverlayBorderShadowOverlayblur size- px-2 py-1 left-[30px] top-[25px] absolute bg-stone-50/90 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 backdrop-blur-[6px] inline-flex justify-start items-center gap-1">
                            <div data-svg-wrapper data-layer="Background" className="Background">
                                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="6" height="6" rx="3" fill="black"/>
                                </svg>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">{t.about.avatarComponent}</div>
                            </div>
                        </div>
                       
                        {/* Disabled: not supported by the CV. */}
                        
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
                                <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.about.swatches}</div>
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
                                <div data-layer="Text" className="Text justify-center text-white text-xs font-medium font-['Space_Grotesk'] leading-4">{t.about.editing}</div>
                            </div>
                        </div>
                        {/* Disabled: not supported by the CV. */}
                        {/*
                        <div data-layer="Overlay+Border+Shadow+OverlayBlur" className="hidden md:inline-flex size- px-2 py-0.5 right-[17px] bottom-[107px] absolute bg-stone-50/90 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 backdrop-blur-[6px] justify-start items-center">
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-slate-600 text-[10px] font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">RADIUS: 32PX</div>
                            </div>
                        </div>
                        */}
                    </div>
                    {/* <div data-layer="Container" className="Container self-stretch inline-flex flex-wrap justify-start items-start gap-3 lg:gap-4overflow-hidden">
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
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.about.vector}</div>
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
                    </div> */}
                </div>
                <div data-layer="Right Column: Narrative, 3 Tenets & Signature Quote" className="RightColumnNarrative3TenetsSignatureQuote w-full lg:w-[690px] inline-flex flex-col justify-start items-start gap-7">
                    <div data-layer="Narrative" className="Narrative w-full self-stretch p-4 bg-stone-100 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-center items-center">
                        <div data-layer="Container" className="Container flex-wrap inline-flex justify-start items-start gap-2">
                            <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-4 py-1 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 flex justify-start items-center gap-1.5">
                                <div data-svg-wrapper data-layer="Container" className="Container">
                                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.33333 10.6667C0.966667 10.6667 0.652778 10.5361 0.391667 10.275C0.130556 10.0139 0 9.7 0 9.33333V1.33333C0 0.966667 0.130556 0.652778 0.391667 0.391667C0.652778 0.130556 0.966667 0 1.33333 0H12C12.3667 0 12.6806 0.130556 12.9417 0.391667C13.2028 0.652778 13.3333 0.966667 13.3333 1.33333V9.33333C13.3333 9.7 13.2028 10.0139 12.9417 10.275C12.6806 10.5361 12.3667 10.6667 12 10.6667H1.33333ZM1.33333 9.33333H12V2.66667H1.33333V9.33333ZM3.66667 8.66667L2.73333 7.73333L4.45 6L2.71667 4.26667L3.66667 3.33333L6.33333 6L3.66667 8.66667ZM6.66667 8.66667V7.33333H10.6667V8.66667H6.66667Z" fill="#41617D"/>
                                    </svg>
                                </div>
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] leading-4">{t.about.coreStack}</div>
                                </div>
                            </div>
                            <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-2 py-1 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-center gap-1.5">
                                <div data-layer="SVG" className="Svg size-4 relative overflow-hidden">
                                    <div data-svg-wrapper data-layer="react-icon 1" className="ReactIcon1 left-[0.59px] top-[0.50px] absolute">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.75585 7.48853C8.75585 6.81615 8.19368 6.271 7.50012 6.271C6.80665 6.271 6.24438 6.81615 6.24438 7.48853C6.24438 8.161 6.80665 8.70611 7.50012 8.70611C8.19368 8.70611 8.75585 8.161 8.75585 7.48853Z" fill="#53C1DE"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5783 5.2283C11.8435 4.18349 12.1768 2.24601 11.0017 1.58914C9.83217 0.935132 8.31019 2.18833 7.50652 2.94055C6.70519 2.19582 5.14045 0.947985 3.96639 1.60694C2.79727 2.26314 3.1578 4.1685 3.42886 5.21986C2.33827 5.52019 0.46875 6.16706 0.46875 7.4887C0.46875 8.80659 2.33632 9.51037 3.42046 9.81042C3.1484 10.8676 2.80592 12.7457 3.97653 13.4005C5.15498 14.0593 6.71484 12.8412 7.52597 12.0807C8.3348 12.8374 9.84216 14.0635 11.012 13.4069C12.1854 12.7483 11.8798 10.8367 11.6087 9.7793C12.6597 9.47859 14.5312 8.79014 14.5312 7.4887C14.5312 6.17977 12.6517 5.52764 11.5783 5.2283ZM11.4451 9.21891C11.2671 8.67262 11.0269 8.0917 10.733 7.49161C11.0135 6.90567 11.2444 6.33225 11.4174 5.78948C12.2043 6.01069 13.9305 6.51623 13.9305 7.4887C13.9305 8.47031 12.274 8.98064 11.4451 9.21891ZM10.7109 12.9028C9.83813 13.3927 8.54161 12.2201 7.94428 11.6629C8.34056 11.2427 8.73656 10.7542 9.12305 10.2117C9.80292 10.1532 10.4452 10.0576 11.0276 9.92705C11.2184 10.675 11.5876 12.4108 10.7109 12.9028ZM4.2767 12.8958C3.4038 12.4078 3.80277 10.7318 4.00292 9.95311C4.57891 10.0767 5.21653 10.1655 5.898 10.2191C6.28702 10.7499 6.6945 11.2379 7.10513 11.6652C6.5978 12.141 5.15367 13.3861 4.2767 12.8958ZM1.06945 7.4887C1.06945 6.50344 2.78535 6.00155 3.59017 5.78091C3.76618 6.33586 3.99701 6.91612 4.27558 7.50291C3.9934 8.09841 3.75927 8.68786 3.58165 9.24937C2.81423 9.03637 1.06945 8.47458 1.06945 7.4887ZM4.26736 2.11103C5.14383 1.61914 6.50377 2.81711 7.08558 3.35631C6.67706 3.78166 6.27333 4.26591 5.88764 4.79367C5.22628 4.85311 4.59316 4.94855 4.01114 5.07642C3.79277 4.22846 3.39184 2.6024 4.26736 2.11103ZM9.5528 5.42677C10.0015 5.48166 10.4314 5.55469 10.835 5.64403C10.7138 6.02062 10.5628 6.41442 10.3849 6.81811C10.1271 6.34373 9.85027 5.87887 9.5528 5.42677ZM7.5067 3.77255C7.78378 4.06358 8.06128 4.38858 8.33428 4.74117C7.78055 4.71576 7.22592 4.71567 6.67219 4.7408C6.94542 4.39147 7.22531 4.06696 7.5067 3.77255ZM4.62023 6.81769C4.44529 6.41541 4.29562 6.01987 4.17338 5.63789C4.57462 5.55084 5.0025 5.47969 5.44828 5.42569C5.14997 5.87681 4.87364 6.34148 4.62023 6.81769ZM5.46108 9.5933C5.00058 9.54347 4.56622 9.47592 4.16511 9.39126C4.28927 9.00258 4.44224 8.59852 4.62092 8.18756C4.87781 8.66873 5.15836 9.13791 5.46108 9.5933ZM7.52334 11.246C7.23863 10.9481 6.95461 10.6186 6.67725 10.2643C7.23412 10.2855 7.79208 10.2855 8.34891 10.2614C8.07506 10.6222 7.79855 10.9522 7.52334 11.246ZM10.3906 8.16666C10.5786 8.58206 10.737 8.98392 10.8629 9.36605C10.4551 9.45628 10.0149 9.52894 9.55111 9.58289C9.85078 9.1222 10.132 8.65012 10.3906 8.16666ZM8.7878 9.65348C7.93598 9.7125 7.07888 9.71184 6.22678 9.65831C5.74261 8.97258 5.31159 8.25141 4.93955 7.50272C5.30981 6.75558 5.73769 6.03581 6.21956 5.35116C7.07227 5.28867 7.93022 5.28848 8.78292 5.35153C9.26067 6.03614 9.68789 6.75403 10.0667 7.49442C9.69239 8.24119 9.26227 8.96241 8.7878 9.65348ZM10.7017 2.09372C11.5784 2.584 11.1882 4.32528 10.9966 5.08247C10.4132 4.95192 9.77967 4.8548 9.11639 4.79442C8.72995 4.26096 8.32959 3.77587 7.92769 3.35601C8.51695 2.80519 9.83348 1.60823 10.7017 2.09372Z" fill="#53C1DE"/>
                                        </svg>
                                    </div>
                                </div>
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">React / Next.js</div>
                                </div>
                            </div>
                            <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-3 py-1 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 flex justify-start items-center gap-1.5">
                                <div data-svg-wrapper data-layer="SVG" className="Svg relative">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_662_765)">
                                    <path d="M8.00073 3.2002C5.8674 3.2002 4.53407 4.26686 4.00073 6.4002C4.80073 5.33353 5.73407 4.93353 6.80073 5.2002C7.4094 5.3522 7.84407 5.79353 8.32607 6.28286C9.11073 7.07886 10.0181 8.0002 12.0007 8.0002C14.1341 8.0002 15.4674 6.93353 16.0007 4.8002C15.2007 5.86686 14.2674 6.26686 13.2007 6.0002C12.5921 5.8482 12.1574 5.40686 11.6754 4.91753C10.8901 4.12153 9.9834 3.2002 8.00073 3.2002ZM4.00073 8.0002C1.8674 8.0002 0.534066 9.06686 0.000732422 11.2002C0.800732 10.1335 1.73407 9.73353 2.80073 10.0002C3.4094 10.1522 3.84407 10.5935 4.32607 11.0829C5.11073 11.8789 6.01807 12.8002 8.00073 12.8002C10.1341 12.8002 11.4674 11.7335 12.0007 9.6002C11.2007 10.6669 10.2674 11.0669 9.20073 10.8002C8.59207 10.6482 8.1574 10.2069 7.6754 9.71753C6.89007 8.92153 5.9834 8.0002 4.00073 8.0002Z" fill="#38BDF8"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_662_765">
                                    <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                </div>
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">Tailwind CSS</div>
                                </div>
                            </div>
                            <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-2.5 py-1 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-center gap-1.5">
                                <div data-layer="SVG" className="Svg size-4 relative overflow-hidden">
                                    <div data-svg-wrapper data-layer="nodejs-icon 1" className="NodejsIcon1 left-[0.08px] top-[0.50px] absolute">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_783_621)">
                                        <path d="M7.50004 14.9722C7.29372 14.9722 7.10115 14.9171 6.92234 14.8209L5.09294 13.7342C4.81785 13.5829 4.95539 13.5279 5.03792 13.5004C5.4093 13.3766 5.47808 13.3491 5.86322 13.129C5.90448 13.1015 5.9595 13.1153 6.00076 13.1428L7.40376 13.9818C7.45878 14.0093 7.52755 14.0093 7.56882 13.9818L13.057 10.8044C13.112 10.7769 13.1395 10.7219 13.1395 10.6531V4.31215C13.1395 4.24338 13.112 4.18836 13.057 4.16085L7.56882 0.997228C7.5138 0.969718 7.44502 0.969718 7.40376 0.997228L1.91557 4.16085C1.86055 4.18836 1.83304 4.25713 1.83304 4.31215V10.6531C1.83304 10.7082 1.86055 10.7769 1.91557 10.8044L3.41485 11.671C4.22639 12.0836 4.73532 11.6022 4.73532 11.1208V4.86234C4.73532 4.77981 4.80409 4.69729 4.90037 4.69729H5.60187C5.6844 4.69729 5.76693 4.76606 5.76693 4.86234V11.1208C5.76693 12.2074 5.17547 12.8402 4.14386 12.8402C3.8275 12.8402 3.57991 12.8402 2.87841 12.4963L1.43415 11.671C1.07652 11.4647 0.856445 11.0795 0.856445 10.6669V4.3259C0.856445 3.91326 1.07652 3.52812 1.43415 3.3218L6.92234 0.144426C7.26621 -0.048142 7.73388 -0.048142 8.07775 0.144426L13.5659 3.3218C13.9236 3.52812 14.1436 3.91326 14.1436 4.3259V10.6669C14.1436 11.0795 13.9236 11.4647 13.5659 11.671L8.07775 14.8484C7.89893 14.9309 7.69261 14.9722 7.50004 14.9722ZM9.19189 10.6119C6.78479 10.6119 6.28962 9.51149 6.28962 8.57616C6.28962 8.49363 6.35839 8.4111 6.45467 8.4111H7.16993C7.25246 8.4111 7.32123 8.46612 7.32123 8.54865C7.43127 9.27765 7.74763 9.63528 9.20565 9.63528C10.3611 9.63528 10.8562 9.37394 10.8562 8.75497C10.8562 8.39734 10.7187 8.136 8.91679 7.95719C7.41751 7.80588 6.48218 7.47577 6.48218 6.27909C6.48218 5.16495 7.41751 4.50472 8.98557 4.50472C10.7462 4.50472 11.6127 5.10993 11.7228 6.4304C11.7228 6.47166 11.709 6.51293 11.6815 6.55419C11.654 6.5817 11.6127 6.60921 11.5715 6.60921H10.8562C10.7875 6.60921 10.7187 6.55419 10.7049 6.48542C10.5399 5.7289 10.1135 5.48131 8.98557 5.48131C7.72012 5.48131 7.56882 5.92147 7.56882 6.25158C7.56882 6.65048 7.74763 6.77427 9.45323 6.99435C11.1451 7.21443 11.9429 7.53079 11.9429 8.71371C11.9291 9.92413 10.9388 10.6119 9.19189 10.6119Z" fill="#539E43"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_783_621">
                                        <rect width="15" height="15" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                    <div data-layer="Node / Express.js" className="NodeExpressJs justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">Node / Express.js</div>
                                </div>
                            </div>
                            <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-3 py-1 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-center gap-1.5">
                                <div data-svg-wrapper data-layer="SVG" className="Svg relative">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0709 0.5H1.93607C0.978166 0.5 0.20127 1.27718 0.199965 2.23672V13.3742C0.198113 13.8367 0.380197 14.2808 0.70598 14.6085C1.03176 14.9361 1.47441 15.1203 1.93607 15.1203H13.0709C13.5322 15.1197 13.9742 14.9352 14.2995 14.6076C14.6248 14.28 14.8065 13.8363 14.8047 13.3742V2.23672C14.8034 1.27809 14.0279 0.501291 13.0709 0.5ZM6.49857 11.0305C6.49795 11.185 6.4359 11.333 6.32614 11.4416C6.21637 11.5503 6.06793 11.6106 5.91363 11.6094H3.4803C3.16204 11.6081 2.90472 11.3493 2.90472 11.0305V3.77656C2.90472 3.45775 3.16204 3.19895 3.4803 3.19766H5.91363C6.23228 3.19894 6.49027 3.45738 6.49155 3.77656L6.49857 11.0305ZM12.114 7.7C12.114 7.85476 12.0521 8.00308 11.9422 8.11185C11.8323 8.22062 11.6835 8.28079 11.529 8.27895H9.09568C8.77704 8.27762 8.51905 8.01919 8.51777 7.7V3.77656C8.51905 3.45738 8.77704 3.19894 9.09568 3.19766H11.529C11.8473 3.19895 12.1046 3.45775 12.1046 3.77656L12.114 7.7Z" fill="url(#paint0_linear_662_776)"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_662_776" x1="7.50934" y1="15.1203" x2="7.50934" y2="0.5" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0052CC"/>
                                    <stop offset="1" stop-color="#2684FF"/>
                                    </linearGradient>
                                    </defs>
                                    </svg>
                                </div>
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                    <div data-layer="Trello / Jira" className="TrelloJira justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">Trello / Jira</div>
                                </div>
                            </div>
                            <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-2.5 py-1 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-center gap-1.5">
                                <div data-layer="SVG" className="Svg size-4 relative overflow-hidden">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_786_690)">
                                    <rect width="15" height="15" fill="url(#pattern0_786_690)"/>
                                    </g>
                                    <defs>
                                    <pattern id="pattern0_786_690" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use href="#image0_786_690" transform="scale(0.00195312)"/>
                                    </pattern>
                                    <clipPath id="clip0_786_690">
                                    <rect width="15" height="15" fill="white"/>
                                    </clipPath>
                                    <image id="image0_786_690" width="512" height="512" preserveAspectRatio="none" href="data:image/png;base64,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"/>
                                    </defs>
                                    </svg>
                                </div>
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                    <div data-layer="Postman / Swagger" className="PostmanSwagger justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">Postman / Swagger</div>
                                </div>
                            </div>
                            <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-3 py-1 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-center gap-1.5">
                                <div data-svg-wrapper data-layer="SVG" className="Svg relative">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_662_747)">
                                    <path d="M8 8.00016C8 6.5274 9.19391 5.3335 10.6667 5.3335C12.1394 5.3335 13.3333 6.5274 13.3333 8.00016C13.3333 9.47292 12.1394 10.6668 10.6667 10.6668C9.19391 10.6668 8 9.47292 8 8.00016Z" fill="#1ABCFE"/>
                                    <path d="M2.66675 13.3332C2.66675 11.8604 3.86065 10.6665 5.33341 10.6665H8.00008V13.3332C8.00008 14.8059 6.80617 15.9998 5.33341 15.9998C3.86065 15.9998 2.66675 14.8059 2.66675 13.3332Z" fill="#0ACF83"/>
                                    <path d="M8 0V5.33333H10.6667C12.1394 5.33333 13.3333 4.13942 13.3333 2.66667C13.3333 1.19391 12.1394 0 10.6667 0H8Z" fill="#FF7262"/>
                                    <path d="M2.66675 2.66667C2.66675 4.13942 3.86065 5.33333 5.33341 5.33333H8.00008V0H5.33341C3.86065 0 2.66675 1.19391 2.66675 2.66667Z" fill="#F24E1E"/>
                                    <path d="M2.66675 8.00016C2.66675 9.47292 3.86065 10.6668 5.33341 10.6668H8.00008V5.3335H5.33341C3.86065 5.3335 2.66675 6.5274 2.66675 8.00016Z" fill="#A259FF"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_662_747">
                                    <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                </div>
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">Figma</div>
                                </div>
                            </div>
                            <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-3 py-1 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-center gap-1.5">
                                <div data-svg-wrapper data-layer="Background" className="Background">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="8" height="8" rx="4" fill="#A7D384"/>
                                    </svg>
                                </div>
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.about.activeProduction}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-4">
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Professional summary paragraph 1" className="OverThePastDecadeIVeWorkedAcrossDigitalBrandCreationEarlyStageProductAccelerationAndOpenCrowdfundingInfrastructureMyBackgroundMergesStructuralArchitecturalThoughtWithTheFluidResponsivenessOfModernWebTechnology self-stretch justify-center text-zinc-900 text-base font-medium font-['Space_Grotesk'] leading-6">{t.about.paragraph1}</div>
                        </div>
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div data-layer="I believe reliable software comes from rigorous process and close collaboration: structured STLC practice, disciplined regression coverage, and honest communication with developers and stakeholders inside an Agile/Scrum team." className="IBelieveHighTrustDigitalExperiencesRequireBothTheAestheticDisciplineOfClassicSwissAndNeoBrutalistTypographyAndTheOrganicWarmthOfHumanInteractionEveryProjectIsConceivedAsAnEditorialArtifactDeliberateResilientAndCraftedToEndure self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-6">{t.about.paragraph2}</div>
                        </div>
                    </div>
                    <div data-layer="3 Highlight Cards / Tenets" className="self-stretch inline-flex flex-col lg:flex-row justify-center items-start gap-5">
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow lg:h-[172px] flex-1 p-5 bg-stone-100 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-start items-start gap-2.5 min-w-0">
                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                <div data-layer="01 / QUALITY" className="Architecture self-stretch justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">{t.about.tenet1Label}</div>
                            </div>
                            <div data-layer="Heading 3" className="Heading3 self-stretch flex flex-col justify-start items-start">
                                <div data-layer="Systemic Rigor" className="SystemicRigor self-stretch justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">{t.about.tenet1Title}</div>
                            </div>
                            <div data-layer="Margin" className="Margin self-stretch pt-1 flex flex-col justify-start items-start">
                                <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                    <div data-layer="Functional, regression, smoke, and exploratory testing grounded in STLC." className="ModularDesignSystemsTypeScalesAndPredictableCodeStructures self-stretch justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.about.tenet1Body}</div>
                                </div>
                            </div>
                        </div>
                        <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow lg:h-[172px] flex-1 p-5 bg-blue-100/20 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-indigo-300 inline-flex flex-col justify-start items-start gap-2.5 min-w-0">
                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                <div data-layer="02 / ENGINEERING" className="Ergonomics self-stretch justify-center text-slate-600 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">{t.about.tenet2Label}</div>
                            </div>
                            <div data-layer="Heading 3" className="Heading3 self-stretch flex flex-col justify-start items-start">
                                <div data-layer="Organic Fluidity" className="OrganicFluidity self-stretch justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">{t.about.tenet2Title}</div>
                            </div>
                            <div data-layer="Margin" className="Margin self-stretch pt-1 flex flex-col justify-start items-start">
                                <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                    <div data-layer="Next.js, Node.js, and SQL knowledge used for real root-cause analysis." className="TactileMicroInteractionsResponsiveKineticsAndFrictionlessFlows self-stretch justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.about.tenet2Body}</div>
                                </div>
                            </div>
                        </div>
                        <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow lg:h-[172px] flex-1 p-5 bg-lime-300/20 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-lime-300 inline-flex flex-col justify-start items-start gap-2.5 min-w-0">
                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                <div data-layer="03 / COLLABORATION" className="Collective self-stretch justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">{t.about.tenet3Label}</div>
                            </div>
                            <div data-layer="Heading 3" className="Heading3 self-stretch flex flex-col justify-start items-start">
                                <div data-layer="Impact & Scale" className="ImpactScale self-stretch justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">{t.about.tenet3Title}</div>
                            </div>
                            <div data-layer="Margin" className="Margin self-stretch pt-1 flex flex-col justify-start items-start">
                                <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                    <div data-layer="Cross-functional Scrum work with developers, designers, and stakeholders." className="DecentralizedCrowdfundingRailsAndCommunityDrivenDigitalPlatforms self-stretch justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.about.tenet3Body}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-layer="Signature Block & Action Links" className="SignatureBlockActionLinks self-stretch p-5 lg:p-6 gap-3 bg-gray-200 rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col lg:flex-row justify-between items-start flex-wrap">
                        <div data-layer="Container" className="Container flex-1 inline-flex flex-col justify-start items-start gap-2 min-w-0">
                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                <div data-layer="“Good design isn't just how it looks; it's how it invites participation.”" className="GoodDesignIsnTJustHowItLooksItSHowItInvitesParticipation self-stretch justify-center text-zinc-900 text-sm font-normal font-['Space_Grotesk'] leading-5">{t.about.quote}</div>
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
                            <a
                                data-layer="Link"
                                href="/cv/nabilah-najwa-aysyah-cv.pdf"
                                target="_blank"
                                download
                                className="Link cursor-pointer size- px-6 py-3 rounded-full outline outline-1 outline-offset-[-1px] outline-black inline-flex flex-col justify-start items-start"
                            >
                                <span data-layer="Text" className="Text justify-center text-zinc-900 text-base font-normal font-['Space_Grotesk'] leading-6">{t.about.downloadCv}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
