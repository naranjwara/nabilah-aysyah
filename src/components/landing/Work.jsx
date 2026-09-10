import { Arrow, Container, SectionHeading } from "./LandingUi";

const stack = ["React", "Next.js", "Playwright", "Postman"];

export default function Work() {
  return (
    <section id="work" data-layer="Work" className="Work w-full self-stretch py-10 px-7 lg:p-9 bg-stone-100 rounded-tl-[48px] rounded-tr-[48px] inline-flex flex-col justify-start items-start">
        <div data-layer="Container" className="Container w-full max-w-[1280px] flex flex-col justify-start items-start gap-7 lg:gap-10">
            <div data-layer="Section Header" className="SectionHeader self-stretch inline-flex justify-between items-center flex-wrap">
                <div data-layer="Paragraph" className="Paragraph size- pt-1.5 inline-flex flex-col justify-start items-start gap-3">
                    <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">FEATURED WORK &amp; SERVICES</div>
                    <div data-layer="Heading 2 → Tested with intent.
                    Built for reliability." className="lg:max-w-[450px] justify-center text-zinc-900 text-4xl lg:text-5xl font-semibold font-['Syne'] leading-[48px]">Tested with intent. Built for reliability.</div>
                </div>
                <div data-layer="Container" className="Container size- max-w-96 inline-flex flex-col justify-start items-start">
                    <div data-layer="Text" className="Text lg:text-right justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">Selected work from three years at Emveep, spanning end-to-end testing for international clients and hands-on fullstack delivery with Next.js, Node.js, and Vue.js.</div>
                </div>
            </div>
            <div data-layer="BentoGrid Container" className="BentoGrid w-full self-stretch inline-flex flex-col justify-start items-start">
                <div data-layer="Bento Card 1: Featured Project (Large Span)" className="BentoCard1 size-lf-stretch relative bg-stone-50 rounded-[32px] shadow-[0px_16px_40px_-12px_rgba(0,0,0,0.06)] outline outline-1 outline-offset-[-1px] outline-indigo-300 inline-flex flex-col justify-between items-start overflow-hidden gap-4">
                    <div data-layer="Background+Blur" className="BackgroundBlur size-96 right-[1px] top-[1px] absolute opacity-60 bg-blue-200 rounded-full blur-[32px]" />
                    <div data-layer="Background+Blur" className="BackgroundBlur size-80 left-[-39px] bottom-[-39.38px] absolute opacity-40 bg-lime-200 rounded-full blur-[32px]" />
                    <div data-layer="Container" className="Container self-stretch inline-flex justify-between items-center flex-wrap">
                        <div data-layer="Background+Border" className="BackgroundBorder size- px-4 py-2 bg-blue-200 rounded-full outline outline-1 outline-offset-[-1px] outline-indigo-300 inline-flex flex-col justify-start items-start">
                            <div data-layer="Text" className="Text justify-center text-slate-600 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">FEATURED CASE STUDY</div>
                        </div>
                        <div data-layer="Background" className="Background size-10 bg-black rounded-full flex justify-center items-center">
                            <div data-svg-wrapper data-layer="Container" className="Container">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.05 9.75L0 8.7L7.2 1.5H0.75V0H9.75V9H8.25V2.55L1.05 9.75V9.75" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div data-layer="Margin" className="Margin self-stretch flex flex-col justify-start items-start gap-4">
                        <div data-layer="Heading 3" className="Heading3 self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Kinetic Branding & Design System for Fintech Scale- up" className="KineticBrandingDesignSystemForFintechScaleUp self-stretch justify-center text-zinc-900 text-3xl font-semibold font-['Syne'] leading-8">Company Profile Migration: React.js to Next.js</div>
                        </div>
                        <div data-layer="Container" className="Container w-full lg:w-[576px] max-w-[576px] flex flex-col justify-start items-start">
                            <div data-layer="Text" className="Text justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">Led the framework migration of Emveep&apos;s company profile website, boosting page load speed by 90% and improving SEO rankings.</div>
                        </div>
                        <div data-layer="Margin" className="Margin self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow self-stretch h-auto lg:h-96 bg-white/0 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-slate-600/20 flex flex-col justify-center items-start overflow-hidden">
                                {/* Design placeholder. next/image is intentionally not used: next.config.mjs
                                    sets output: 'export' with images.unoptimized, so <Image> would emit the
                                    same plain <img> with no optimization. Revisit if image optimization is enabled. */}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img data-layer="Image" className="Image self-stretch h-auto lg:h-96" src="https://placehold.co/739x406" alt="" loading="lazy" decoding="async" />
                            </div>
                        </div>
                    </div>
                    <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch inline-flex justify-between items-center flex-wrap">
                        <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                            <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] leading-4">01 / FRONTEND MIGRATION</div>
                        </div>
                        <div data-layer="Link" className="Link size- flex justify-start items-center gap-1">
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-sm font-semibold font-['Space_Grotesk'] leading-5">View Case Study</div>
                            </div>
                            <div data-svg-wrapper data-layer="Container" className="Container">
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.11667 6H0V4.66667H8.11667L4.38333 0.933333L5.33333 0L10.6667 5.33333L5.33333 10.6667L4.38333 9.73333L8.11667 6V6" fill="#1A1C1B"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-layer="Bento Card 2: Certifications" className="BentoCard2 self-stretch h-auto lg:h-80 p-6 lg:p-8 bg-blue-200 rounded-[32px] shadow-[0px_16px_40px_-12px_rgba(0,0,0,0.06)] outline outline-1 outline-offset-[-1px] outline-indigo-300 inline-flex flex-col justify-between items-start overflow-hidden gap-4">
                    <div data-layer="Container" className="Container self-stretch inline-flex justify-between items-center flex-wrap">
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-4 py-2 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-slate-600/20 inline-flex flex-col justify-start items-start">
                            <div data-layer="Text" className="Text justify-center text-slate-600 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">CERTIFICATIONS</div>
                        </div>
                        <div data-layer="Background+Shadow" className="BackgroundShadow size-8 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-center items-center">
                            <div data-svg-wrapper data-layer="Container" className="Container">
                                <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="5.2" r="4.1" stroke="#41617D" strokeWidth="1.3"/>
                                <path d="M3.6 9.2L2.6 14L6 12.2L9.4 14L8.4 9.2" stroke="#41617D" strokeWidth="1.3" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div data-layer="Margin" className="Margin self-stretch flex flex-col justify-start items-start">
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-4">
                            <div data-layer="Heading 3" className="Heading3 self-stretch flex flex-col justify-start items-start">
                                <div data-layer="Credentials & Ongoing Learning" className="ThePhilosophyOfNeoEditorialUx self-stretch justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">Credentials &amp; Ongoing Learning</div>
                            </div>
                            <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow self-stretch p-4 bg-stone-50 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-slate-600/20 inline-flex justify-start items-center gap-3">
                                <div data-layer="Button" className="Button size-8 bg-slate-600 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-center items-center">
                                    <div data-svg-wrapper data-layer="Container" className="Container">
                                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.25 4.6L4.05 7.4L9.75 1.6" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                <div data-layer="Container" className="Container flex-1 h-6 flex justify-start items-center gap-1 min-w-0">
                                    <div data-layer="Text" className="Text justify-center text-zinc-900 text-sm font-semibold font-['Space_Grotesk'] leading-5">ISTQB Foundation Level</div>
                                </div>
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-slate-600 text-xs font-semibold font-['Space_Grotesk'] leading-4">In progress</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pt-4 border-t border-slate-600/20 inline-flex justify-between items-center flex-wrap">
                        <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                            <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] leading-4">WGS BOOTCAMP &middot; IC3</div>
                        </div>
                        <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                            <div data-layer="Text" className="Text justify-center text-slate-600 text-xs font-semibold font-['Space_Grotesk'] leading-4">2 completed</div>
                        </div>
                    </div>
                </div>
                <div data-layer="Bento Card 3: Service Offering" className="BentoCard3 self-stretch p-6 lg:p-8 relative bg-lime-300/30 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-lime-300 inline-flex flex-col justify-between items-start gap-4">
                    {/* <div data-layer="Bento Card 3: Service Offering:shadow" className="BentoCard3ServiceOfferingShadow w-96 h-auto lg:h-80 left-0 top-0 absolute bg-white/0 rounded-[32px] shadow-[0px_16px_40px_-12px_rgba(0,0,0,0.06)]" /> */}
                    <div data-layer="Container" className="Container self-stretch inline-flex justify-between items-center flex-wrap">
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-4 py-2 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-lime-300 inline-flex flex-col justify-start items-start">
                            <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">SERVICE 01</div>
                        </div>
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size-10 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-lime-300 flex justify-center items-center">
                            <div data-svg-wrapper data-layer="Container" className="Container">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.1 6.7125L6.7125 5.08125L5.6625 4.0125L4.8375 4.8375L3.7875 3.7875L4.59375 2.9625L3.75 2.11875L2.11875 3.75L5.1 6.7125V6.7125M11.25 12.8813L12.8813 11.25L12.0375 10.4062L11.2125 11.2125L10.1625 10.1625L10.9688 9.3375L9.9 8.2875L8.2875 9.9L11.25 12.8813V12.8813M11.7 2.25L12.7688 3.31875V3.31875L11.7 2.25V2.25V2.25M3.9375 14.25H0.75V11.0625L4.03125 7.78125L0 3.75L3.75 0L7.8 4.05L10.6313 1.2C10.7813 1.05 10.95 0.9375 11.1375 0.8625C11.325 0.7875 11.5187 0.75 11.7188 0.75C11.9188 0.75 12.1125 0.7875 12.3 0.8625C12.4875 0.9375 12.6562 1.05 12.8062 1.2L13.8 2.2125C13.95 2.3625 14.0625 2.53125 14.1375 2.71875C14.2125 2.90625 14.25 3.1 14.25 3.3C14.25 3.5 14.2125 3.69063 14.1375 3.87188C14.0625 4.05313 13.95 4.21875 13.8 4.36875L10.9688 7.21875L15 11.25L11.25 15L7.21875 10.9688L3.9375 14.25V14.25M2.25 12.75H3.3L10.65 5.41875L9.58125 4.35L2.25 11.7V12.75V12.75M10.125 4.89375L9.58125 4.35V4.35L10.65 5.41875V5.41875L10.125 4.89375V4.89375" fill="#1A1C1B"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div data-layer="Margin" className="Margin self-stretch  flex flex-col justify-start items-start">
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-3">
                            <div data-layer="Heading 3" className="Heading3 self-stretch flex flex-col justify-start items-start">
                                <div data-layer="Product Design & Prototyping" className="ProductDesignPrototyping self-stretch justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">End-to-End Testing</div>
                            </div>
                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                <div data-layer="Functional, regression, smoke, and exploratory testing across web platforms, managed through Jira and a disciplined STLC workflow." className="FromLowFidelityWireframingToHighImpactInteractiveDesignSystemsBuiltForSeamlessDeveloperHandoff self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">Functional, regression, smoke, and exploratory testing across web platforms, managed through Jira and a disciplined STLC workflow.</div>
                            </div>
                        </div>
                    </div>
                    <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pt-4 border-t border-lime-300 inline-flex justify-between items-center flex-wrap">
                        <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                            <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] leading-4">MANUAL + E2E</div>
                        </div>
                        <div data-layer="Link" className="Link size-8 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-center items-center">
                            <div data-svg-wrapper data-layer="Container" className="Container">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.816667 7.58333L0 6.76667L5.6 1.16667H0.583333V0H7.58333V7H6.41667V1.98333L0.816667 7.58333V7.58333" fill="#1A1C1B"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-layer="Bento Card 4: Service Offering" className="BentoCard4 self-stretch p-6 lg:p-8 relative bg-blue-100/20 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-indigo-300 inline-flex flex-col justify-between items-start gap-4">
                    {/* <div data-layer="Bento Card 4: Service Offering:shadow" className="BentoCard4ServiceOfferingShadow w-full lg:w-[593px] h-auto lg:h-80 left-0 top-0 absolute bg-white/0 rounded-[32px] shadow-[0px_16px_40px_-12px_rgba(0,0,0,0.06)]" /> */}
                    <div data-layer="Container" className="Container self-stretch inline-flex justify-between items-center flex-wrap">
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-4 py-2 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-indigo-300 inline-flex flex-col justify-start items-start">
                            <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">SERVICE 02</div>
                        </div>
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size-10 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-indigo-300 flex justify-center items-center">
                            <div data-svg-wrapper data-layer="Container" className="Container">
                                <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 9L0 4.5L4.5 0L5.56875 1.06875L2.11875 4.51875L5.55 7.95L4.5 9V9M10.5 9L9.43125 7.93125L12.8813 4.48125L9.45 1.05L10.5 0L15 4.5L10.5 9V9" fill="#1A1C1B"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div data-layer="Margin" className="Margin self-stretch flex flex-col justify-start items-start">
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-3">
                            <div data-layer="Heading 3" className="Heading3 self-stretch flex flex-col justify-start items-start">
                                <div data-layer="Fullstack Development" className="FrontendEngineering self-stretch justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">Fullstack Development</div>
                            </div>
                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                <div data-layer="Responsive interfaces and back-end logic built with Next.js, React, Node.js, Vue.js, and PostgreSQL." className="PerformantWebApplicationsBuiltWithModernFrameworksMeticulousAnimationsAndStrictAccessibilityCompliance self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">Responsive interfaces and back-end logic built with Next.js, React, Node.js, Vue.js, and PostgreSQL.</div>
                            </div>
                        </div>
                    </div>
                    <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pt-4 border-t border-indigo-300 inline-flex justify-between items-center flex-wrap">
                        <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                            <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] leading-4">NEXT.JS / NODE.JS</div>
                        </div>
                        <div data-layer="Link" className="Link size-8 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-center items-center">
                            <div data-svg-wrapper data-layer="Container" className="Container">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.816667 7.58333L0 6.76667L5.6 1.16667H0.583333V0H7.58333V7H6.41667V1.98333L0.816667 7.58333V7.58333" fill="#1A1C1B"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-layer="Bento Card 5: Service Offering" className="BentoCard5 self-stretch p-6 lg:p-8 relative bg-amber-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-[#FDE68A] inline-flex flex-col justify-between items-start gap-4">
                    {/* <div data-layer="Bento Card 5: Service Offering:shadow" className="BentoCard5ServiceOfferingShadow w-full lg:w-[593px] h-auto lg:h-80 left-0 top-0 absolute bg-white/0 rounded-[32px] shadow-[0px_16px_40px_-12px_rgba(0,0,0,0.06)]" /> */}
                    <div data-layer="Container" className="Container self-stretch inline-flex justify-between items-center flex-wrap">
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-4 py-2 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-start items-start">
                            <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">SERVICE 03</div>
                        </div>
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size-10 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 flex justify-center items-center">
                            <div data-svg-wrapper data-layer="Container" className="Container">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.25 15V11.775C1.5375 11.125 0.984375 10.3656 0.590625 9.49687C0.196875 8.62812 0 7.7125 0 6.75C0 4.875 0.65625 3.28125 1.96875 1.96875C3.28125 0.65625 4.875 0 6.75 0C8.3125 0 9.69687 0.459375 10.9031 1.37812C12.1094 2.29687 12.8938 3.49375 13.2563 4.96875L14.2312 8.8125C14.2937 9.05 14.25 9.26563 14.1 9.45938C13.95 9.65313 13.75 9.75 13.5 9.75H12V12C12 12.4125 11.8531 12.7656 11.5594 13.0594C11.2656 13.3531 10.9125 13.5 10.5 13.5H9V15H7.5V12H10.5V12V12V8.25H12.525L11.8125 5.34375C11.525 4.20625 10.9125 3.28125 9.975 2.56875C9.0375 1.85625 7.9625 1.5 6.75 1.5C5.3 1.5 4.0625 2.00625 3.0375 3.01875C2.0125 4.03125 1.5 5.2625 1.5 6.7125C1.5 7.4625 1.65313 8.175 1.95938 8.85C2.26563 9.525 2.7 10.125 3.2625 10.65L3.75 11.1V15H2.25V15M7.0125 8.25V8.25V8.25V8.25V8.25V8.25V8.25V8.25V8.25V8.25V8.25V8.25V8.25V8.25V8.25V8.25V8.25V8.25M6 9.75H7.5L7.6125 8.8125C7.7125 8.775 7.80313 8.73125 7.88438 8.68125C7.96563 8.63125 8.0375 8.575 8.1 8.5125L8.9625 8.8875L9.7125 7.6125L8.9625 7.05C8.9875 6.95 9 6.85 9 6.75C9 6.65 8.9875 6.55 8.9625 6.45L9.7125 5.8875L8.9625 4.6125L8.1 4.9875C8.0375 4.925 7.96563 4.86875 7.88438 4.81875C7.80313 4.76875 7.7125 4.725 7.6125 4.6875L7.5 3.75H6L5.8875 4.6875C5.7875 4.725 5.69687 4.76875 5.61562 4.81875C5.53437 4.86875 5.4625 4.925 5.4 4.9875L4.5375 4.6125L3.7875 5.8875L4.5375 6.45C4.5125 6.55 4.5 6.65 4.5 6.75C4.5 6.85 4.5125 6.95 4.5375 7.05L3.7875 7.6125L4.5375 8.8875L5.4 8.5125C5.4625 8.575 5.53437 8.63125 5.61562 8.68125C5.69687 8.73125 5.7875 8.775 5.8875 8.8125L6 9.75V9.75M6.75 7.875C6.4375 7.875 6.17188 7.76562 5.95312 7.54688C5.73438 7.32812 5.625 7.0625 5.625 6.75C5.625 6.4375 5.73438 6.17188 5.95312 5.95312C6.17188 5.73438 6.4375 5.625 6.75 5.625C7.0625 5.625 7.32812 5.73438 7.54688 5.95312C7.76562 6.17188 7.875 6.4375 7.875 6.75C7.875 7.0625 7.76562 7.32812 7.54688 7.54688C7.32812 7.76562 7.0625 7.875 6.75 7.875V7.875" fill="#1A1C1B"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div data-layer="Margin" className="Margin self-stretch flex flex-col justify-start items-start">
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-3">
                            <div data-layer="Heading 3" className="Heading3 self-stretch flex flex-col justify-start items-start">
                                <div data-layer="Brand Strategy & Direction" className="BrandStrategyDirection self-stretch justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">API &amp; Automation Testing</div>
                            </div>
                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                <div data-layer="REST endpoint verification with Postman, plus BDD scenarios in Gherkin and automation practice with Playwright and Cypress." className="UncoveringCoreValuePropositionsAndEstablishingCohesiveVisualLanguagesForAmbitiousCreatorEconomyStartups self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">REST endpoint verification with Postman, plus BDD scenarios in Gherkin and automation practice with Playwright and Cypress.</div>
                            </div>
                        </div>
                    </div>
                    <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pt-4 border-t border-black/10 inline-flex justify-between items-center flex-wrap">
                        <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                            <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] leading-4">POSTMAN / BDD</div>
                        </div>
                        <div data-layer="Link" className="Link size-8 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-center items-center">
                            <div data-svg-wrapper data-layer="Container" className="Container">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.816667 7.58333L0 6.76667L5.6 1.16667H0.583333V0H7.58333V7H6.41667V1.98333L0.816667 7.58333V7.58333" fill="#1A1C1B"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

