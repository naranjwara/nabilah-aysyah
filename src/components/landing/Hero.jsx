import HeroAnimation from "./HeroAnimation";
import {
  Arrow,
  Container,
  OutlineButton,
  Pill,
  PrimaryButton,
} from "./LandingUi";

const stats = [
  ["4+", "Years Exp.", "bg-[#eafade]"],
  ["30+", "Projects", "bg-[#cce5ff]"],
  ["99%", "Satisfaction", "bg-[#eeeeec]"],
];

export default function Hero() {
  return (
    <section id="top" data-layer="Hero Section" className="HeroSection self-stretch w-full h-full lg:max-h-[calc(100vh-80px)] px-7 py-8 mt-5 lg:mt-10 lg:p-10 flex justify-start items-start overflow-hidden">
        <div data-layer="Container" className="Container w-full h-full flex flex-col lg:flex-row justify-start items-start lg:gap-9 gap-6">
            <div className="LeftColumnTypographyBadges w-full relative inline-flex flex-col justify-start items-start gap-5 lg:gap-7">
                <div data-layer="Overlay+Blur" className="OverlayBlur size-72 z-[-1] left-[-40px] top-[-40px] absolute bg-lime-300/20 rounded-full blur-[32px]" />
                <div data-layer="Overlay+Blur" className="OverlayBlur size-80 left-[250px] top-[287px] absolute bg-blue-100/20 rounded-full blur-[32px]" />
                <div data-layer="Outlined Pill Badges" className="OutlinedPillBadges self-stretch inline-flex justify-between lg:justify-start items-center gap-4">
                    <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow size- px-2 py-2 sm:px-4  sm:py-2 bg-blue-100/20 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-indigo-300 inline-flex flex-col justify-start items-start">
                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">TEST.</div>
                    </div>
                    <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow size- px-2 py-2 sm:px-4  sm:py-2 bg-lime-300/30 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-lime-300 inline-flex flex-col justify-start items-start">
                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">AUTOMATE.</div>
                    </div>
                    <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-2 py-2 sm:px-4  sm:py-2 bg-blue-200 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-indigo-300 inline-flex flex-col justify-start items-start">
                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">DEVELOP.</div>
                    </div>
                    <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow size- px-2 py-2 sm:px-4  sm:py-2 bg-lime-200/30 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-lime-300 inline-flex flex-col justify-start items-start">
                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">DELIVER.</div>
                    </div>
                </div>
                <div data-layer="Heading 1 - Headline" className="Heading1Headline self-stretch flex flex-col justify-start items-start">
                    <div data-layer="Building reliable web products with tested precision." className="CraftingDigitalNarrativesWithEditorialPrecision self-stretch justify-center"><span className="text-zinc-900 text-5xl lg:text-6xl font-bold font-['Syne'] leading-[58px] lg:leading-[62px]">Building reliable web products with </span><span className="text-zinc-900 text-5xl lg:text-6xl font-bold font-['Syne'] underline leading-[58px] lg:leading-[62px]">tested precision.</span></div>
                </div>
                <div data-layer="Short Bio" className="ShortBio w-full max-w-[681px] flex flex-col justify-start items-start">
                    <div data-layer="I’m Nabilah Najwa Aysyah, a Software QA Engineer with a fullstack development background. I pair hands-on Next.js and Node.js experience with rigorous end-to-end testing to ship software that holds up in production." className="IMAlexVanceAMultidisciplinaryDesignerAndEngineerBridgingTheGapNeoBrutalistUtilityAndSoftOrganicFluidityBuildingTheNextOfWebExperiences self-stretch justify-center text-zinc-700 text-base font-medium font-['Space_Grotesk'] leading-6">I’m Nabilah Najwa Aysyah, a Software QA Engineer with a fullstack development background. I pair hands-on Next.js and Node.js experience with rigorous end-to-end testing to ship software that holds up in production.</div>
                </div>
                <div data-layer="CTAs & Stats Bar" className="CtasStatsBar self-stretch inline-flex flex-col sm:flex-row justify-start items-start gap-3">
                    <div data-layer="Link" className="Link w-auto cursor-pointer px-8 py-4 relative bg-black rounded-full flex justify-start items-center gap-3">
                        {/* <div data-layer="Link:shadow" className="LinkShadow w-52 h-14 left-0 top-0 absolute bg-white/0 rounded-full shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)] shadow-md" /> */}
                        <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                            <div data-layer="Text" className="Text justify-center w-full text-white text-base font-normal font-['Space_Grotesk'] leading-6">View My Work</div>
                        </div>
                        <div data-svg-wrapper data-layer="Container" className="Container">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.05 9.75L0 8.7L7.2 1.5H0.75V0H9.75V9H8.25V2.55L1.05 9.75V9.75" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div data-layer="Link" className="Link w-auto cursor-pointer size- px-8 py-4 rounded-full inline-flex flex-col justify-start items-start">
                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-base font-normal font-['Space_Grotesk'] leading-6">Contact Me</div>
                    </div>
                </div>
                <div data-layer="Stats Micro-Pod" className="StatsMicroPod w-full inline-flex justify-start items-start gap-4">
                    <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow p-4 lg:min-w-36 bg-lime-300/30 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-lime-300 inline-flex flex-col justify-start items-start gap-1">
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div data-layer="3+" className="self-stretch justify-center text-zinc-900 text-3xl font-semibold font-['Syne'] leading-8">3+</div>
                        </div>
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div data-layer="YEARS EXP." className="YearsExp self-stretch justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] uppercase leading-4 tracking-wide">YEARS EXPERIENCE</div>
                        </div>
                    </div>
                    <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow p-4 lg:min-w-36 bg-blue-200 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-indigo-300 inline-flex flex-col justify-start items-start gap-1">
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div data-layer="50+" className="self-stretch justify-center text-zinc-900 text-3xl font-semibold font-['Syne'] leading-8">50+</div>
                        </div>
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div data-layer="BUGS FOUND" className="Projects self-stretch justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] uppercase leading-4 tracking-wide">BUGS FOUND</div>
                        </div>
                    </div>
                    <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow p-4 lg:min-w-36 bg-gray-200 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-start items-start gap-1">
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div data-layer="95%" className="self-stretch justify-center text-zinc-900 text-3xl font-semibold font-['Syne'] leading-8">95%</div>
                        </div>
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div data-layer="TEST EFFICIENCY" className="Satisfaction self-stretch justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] uppercase leading-4 tracking-wide">TEST EFFICIENCY</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="RightColumnOrganicFluidPortraitWithInteractive3dSculpture w-full lg:max-w-[400px] h-full flex justify-center items-start">
                <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow flex-1 self-stretch p-7 relative bg-gradient-to-b from-sky-50/40 via-white to-emerald-50/40 rounded-[32px] shadow-[0px_20px_50px_0px_rgba(0,0,0,0.08)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-between items-center overflow-hidden min-w-0">
                    <div data-layer="Overlay+Blur" className="OverlayBlur size-64 left-[257px] top-[-63px] absolute bg-blue-100/25 rounded-full blur-[32px]" />
                    <div data-layer="Overlay+Blur" className="OverlayBlur size-64 left-[-63px] top-[404.50px] absolute bg-lime-300/20 rounded-full blur-[32px]" />
                    <div data-layer="Top Header Overlay Badges" className="TopHeaderOverlayBadges self-stretch px-3 py-3 bg-stone-50/90 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 backdrop-blur-[6px] sm:inline-flex flex flex-col justify-center items-start gap-1">
                        <div data-layer="Container" className="Container size- flex justify-start items-center gap-2">
                            <div data-svg-wrapper data-layer="Background" className="Background">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="8" height="8" rx="4" fill="#41617D"/>
                                </svg>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="3D INTERACTIVE SCULPTURE" className="DInteractiveSculpture justify-center text-slate-600 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">3D INTERACTIVE SCULPTURE</div>
                            </div>
                        </div>
                        <div data-layer="Container" className="Container size- flex justify-start items-center gap-1.5">
                            <div data-layer="Background+Border" className="BackgroundBorder size- px-2 py-0.5 bg-blue-200 rounded-full outline outline-1 outline-offset-[-1px] outline-indigo-300 inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-slate-600 text-[10px] font-semibold font-['Space_Grotesk'] leading-4">Kinetic WebGL</div>
                            </div>
                            <div data-layer="Overlay+Border" className="OverlayBorder size- px-2 py-0.5 bg-lime-300/30 rounded-full outline outline-1 outline-offset-[-1px] outline-lime-300 inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-[10px] font-semibold font-['Space_Grotesk'] leading-4">Three.js Mesh</div>
                            </div>
                        </div>
                    </div>
                    <div data-layer="Center 3D Interactive Animation Container:margin" className="Center3dInteractiveAnimationContainerMargin self-stretch flex-1 min-h-0 flex flex-col justify-center items-stretch min-w-0">
                        <div data-layer="Center 3D Interactive Animation Container" className="Center3dInteractiveAnimationContainer self-stretch flex-1 min-h-0 rounded-2xl flex justify-center items-center overflow-hidden min-w-0">
                            <div data-layer="STITCH_THREEJS_START:ANIMATION_10" className="StitchThreejsStartAnimation10ClassWFullHFullMinH500pxBgTransparentRounded32pxO w-full h-full min-h-[320px] bg-transparent rounded-[32px] flex flex-col justify-center items-start overflow-hidden">
                                <HeroAnimation className="w-full h-full" />
                            </div>
                        </div>
                    </div>
                    <div data-layer="Bottom Overlay Controls & Metadata" className="BottomOverlayControlsMetadata self-stretch flex flex-col justify-start items-start gap-2">
                        <div data-layer="Overlay+Border+Shadow+OverlayBlur" className="OverlayBorderShadowOverlayblur self-stretch p-3 bg-stone-50/90 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 backdrop-blur-[6px] inline-flex justify-between items-center flex-wrap">
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-700 text-[10px] font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">RENDERER MODE</div>
                                </div>
                                <div data-layer="Container" className="Container self-stretch inline-flex justify-start items-center gap-1.5">
                                    <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-xl font-bold font-['Syne'] leading-6">60 FPS</div>
                                    </div>
                                    <div data-layer="Background" className="Background size- px-1.5 py-0.5 bg-emerald-100 rounded-full inline-flex flex-col justify-start items-start">
                                        <div data-layer="Text" className="Text justify-center text-emerald-800 text-[10px] font-semibold font-['Space_Grotesk'] leading-4">Synced</div>
                                    </div>
                                </div>
                            </div>
                            <div data-layer="Container" className="Container size- flex justify-start items-center gap-2">
                                <div data-layer="Background+Border" className="BackgroundBorder size- px-2 py-1 bg-gray-200 rounded-full outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-900 text-[10px] font-medium font-['Space_Grotesk'] leading-4">Drag &amp; Hover to Orbit</div>
                                </div>
                                <div data-layer="Background+Shadow" className="BackgroundShadow size-8 bg-black rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-center items-center">
                                    <div data-svg-wrapper data-layer="Container" className="Container">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.66667 13.3333C5.74444 13.3333 4.87778 13.1583 4.06667 12.8083C3.25556 12.4583 2.55 11.9833 1.95 11.3833C1.35 10.7833 0.875 10.0778 0.525 9.26667C0.175 8.45556 0 7.58889 0 6.66667H1.33333C1.33333 7.94444 1.73611 9.07222 2.54167 10.05C3.34722 11.0278 4.37778 11.6444 5.63333 11.9L4.66667 10.9333L5.6 10L8.63333 13.0333C8.31111 13.1444 7.98611 13.2222 7.65833 13.2667C7.33056 13.3111 7 13.3333 6.66667 13.3333V13.3333M7 8.66667V4.66667H9C9.18889 4.66667 9.34722 4.73056 9.475 4.85833C9.60278 4.98611 9.66667 5.14444 9.66667 5.33333V8C9.66667 8.18889 9.60278 8.34722 9.475 8.475C9.34722 8.60278 9.18889 8.66667 9 8.66667H7V8.66667M3.66667 8.66667V7.66667H5.33333V7H4.33333V6.33333H5.33333V5.66667H3.66667V4.66667H5.66667C5.85556 4.66667 6.01389 4.73056 6.14167 4.85833C6.26944 4.98611 6.33333 5.14444 6.33333 5.33333V8C6.33333 8.18889 6.26944 8.34722 6.14167 8.475C6.01389 8.60278 5.85556 8.66667 5.66667 8.66667H3.66667V8.66667M8 7.66667H8.66667V7.66667V7.66667V5.66667V5.66667V5.66667H8V7.66667V7.66667M12 6.66667C12 5.38889 11.5972 4.26111 10.7917 3.28333C9.98611 2.30556 8.95556 1.68889 7.7 1.43333L8.66667 2.4L7.73333 3.33333L4.7 0.3C5.02222 0.188889 5.34722 0.111111 5.675 0.0666667C6.00278 0.0222222 6.33333 0 6.66667 0C7.58889 0 8.45556 0.175 9.26667 0.525C10.0778 0.875 10.7833 1.35 11.3833 1.95C11.9833 2.55 12.4583 3.25556 12.8083 4.06667C13.1583 4.87778 13.3333 5.74444 13.3333 6.66667H12V6.66667" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-layer="Container" className="Container self-stretch px-2 pt-1 inline-flex justify-between items-center flex-wrap">
                            <div data-layer="Container" className="Container size- flex justify-start items-center gap-1.5">
                                <div data-svg-wrapper data-layer="Background" className="Background">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="8" height="8" rx="4" fill="#A7D384"/>
                                    </svg>
                                </div>
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">Available for QA &amp; Dev roles</div>
                                </div>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-slate-600 text-xs font-semibold font-['Space_Grotesk'] leading-4">Bandung, West Java</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

function StatCards() {
  return stats.map(([value, label, color]) => (
    <div
      className={`rounded-[18px] border border-[#dfe2df] p-3 shadow-[0_8px_24px_rgba(26,28,27,.03)] transition duration-300 hover:-translate-y-1 ${color}`}
      key={label}
    >
      <strong className="block font-display text-[21px] font-bold min-[521px]:text-[26px]">
        {value}
      </strong>
      <small className="text-[10px] uppercase tracking-[.08em] text-[#626766]">
        {label}
      </small>
    </div>
  ));
}
