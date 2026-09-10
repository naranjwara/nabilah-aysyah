import {
  Arrow,
  Container,
  OutlineButton,
  Pill,
  PrimaryButton,
} from "./LandingUi";

const socialLinks = ["LinkedIn", "GitHub", "Instagram"];

export default function Footer() {
  return (
<footer id="contact" data-layer="Footer" className="Footer w-full h-full self-stretch px-7 lg:px-8 pt-12 pb-12 bg-stone-100 inline-flex flex-col justify-start items-start">
    <div data-layer="Container" className="Container w-full flex flex-col justify-start items-start gap-10">
        <div data-layer="Floating CTA Card" className="NeoEditorialFloatingCtaCard self-stretch px-6 py-10 lg:p-14 relative bg-white rounded-[40px] shadow-[0px_20px_50px_0px_rgba(0,0,0,0.08)] outline outline-1 outline-offset-[-1px] outline-black/10 flex flex-col justify-start items-start overflow-hidden">
            <div data-layer="Overlay+Blur" className="OverlayBlur size-96 left-[879px] top-[-63px] absolute bg-blue-100/30 rounded-full blur-[32px]" />
            <div data-layer="Overlay+Blur" className="OverlayBlur size-80 left-[-63px] top-[229px] absolute bg-lime-200/30 rounded-full blur-[32px]" />
            <div data-layer="Container" className="Container self-stretch inline-flex flex-wrap justify-center lg:justify-between items-center gap-5">
                <div data-layer="Container" className="Container inline-flex flex-col justify-start items-start gap-6 min-w-0">
                    <div data-layer="Background+Border" className="BackgroundBorder size- px-4 py-2 bg-gray-200 rounded-full outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-center gap-2">
                        <div data-svg-wrapper data-layer="Background" className="Background">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="8" height="8" rx="4" fill="#A7D384"/>
                            </svg>
                        </div>
                        <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                            <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">OPEN TO NEW OPPORTUNITIES</div>
                        </div>
                    </div>
                    <div data-layer="Heading 2" className="Heading2 self-stretch h-fit lg:max-w-[75%] inline-flex flex-wrap gap-2">
                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-4xl font-semibold font-['Syne'] leading-[50px]">Let&apos;s </div>
                        <div data-layer="Background+Border" className="BackgroundBorder size- px-2.5 py-1 bg-stone-50 rounded-full outline outline-1 outline-offset-[-1px] outline-black inline-flex justify-start items-start">
                            <div data-layer="Text" className="Text justify-center text-zinc-900 text-4xl font-semibold font-['Syne'] leading-[50px]">Test.</div>
                        </div>
                        <div data-layer="Background+Border" className="BackgroundBorder size- px-2.5 py-1 bg-blue-200 rounded-full outline outline-1 outline-offset-[-1px] outline-indigo-300 inline-flex justify-start items-start">
                            <div data-layer="Text" className="Text justify-center text-slate-600 text-4xl font-semibold font-['Syne'] leading-[50px]">Build.</div>
                        </div>
                        <div data-layer="Overlay+Border" className="OverlayBorder size- px-2.5 py-1 bg-lime-300/30 rounded-full outline outline-1 outline-offset-[-1px] outline-lime-300 inline-flex justify-start items-start">
                            <div data-layer="Text" className="Text justify-center text-zinc-900 text-4xl font-semibold font-['Syne'] leading-[50px]">Improve.</div>
                        </div>
                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-4xl font-semibold font-['Syne'] leading-[50px]"> Together.</div>
                    </div>
                    <div data-layer="Container" className="Container w-full lg:w-[576px] max-w-[576px] flex flex-col justify-start items-start gap-1">
                        <div data-layer="Container" className="Container self-stretch inline-flex justify-start items-center gap-2">
                            <div data-svg-wrapper data-layer="Background" className="Background">
                                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="6" height="6" rx="3" fill="black"/>
                                </svg>
                            </div>
                            <div data-layer="Text" className="Text justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">QA engineering roles, manual and end-to-end testing</div>
                        </div>
                        <div data-layer="Container" className="Container self-stretch inline-flex justify-start items-center gap-2">
                            <div data-svg-wrapper data-layer="Container" className="Container">
                                <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.66667 13.3333L0 8.66667L0.933333 7.73333L4 10.7833V0H5.33333V10.7833L8.4 7.71667L9.33333 8.66667L4.66667 13.3333V13.3333" fill="#444748"/>
                                </svg>
                            </div>
                            <div data-layer="Text" className="Text justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">Fullstack web development with Next.js, Node.js &amp; Vue.js</div>
                        </div>
                        <div data-layer="Container" className="Container self-stretch inline-flex justify-start items-center gap-2">
                            <div data-svg-wrapper data-layer="Container" className="Container">
                                <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 13.3333V2.55L0.933333 5.6L0 4.66667L4.66667 0L9.33333 4.66667L8.4 5.61667L5.33333 2.55V13.3333H4V13.3333" fill="#444748"/>
                                </svg>
                            </div>
                            <div data-layer="Text" className="Text justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">Based in Bandung, West Java · open to hybrid &amp; remote</div>
                        </div>
                    </div>
                    <div data-layer="Container" className="Container self-stretch pt-2 inline-flex flex-wrap justify-start items-center gap-0">
                        <div data-layer="Link" className="Link cursor-pointer size- px-8 py-4 relative bg-black rounded-full flex justify-start items-center gap-3">
                            {/* <div data-layer="Link:shadow" className="LinkShadow w-60 h-14 left-0 top-0 absolute bg-white/0 rounded-full shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)] shadow-md" /> */}
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-white text-base font-normal font-['Space_Grotesk'] leading-6">Send an Email</div>
                            </div>
                            <div data-svg-wrapper data-layer="Container" className="Container">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.05 9.75L0 8.7L7.2 1.5H0.75V0H9.75V9H8.25V2.55L1.05 9.75V9.75" fill="white"/>
                                </svg>
                            </div>
                        </div>
                        <div data-layer="Link" className="Link cursor-pointer size- px-8 py-4 rounded-full inline-flex flex-col justify-start items-start">
                            <div data-layer="Text" className="Text justify-center text-zinc-900 text-base font-normal font-['Space_Grotesk'] leading-6">View LinkedIn</div>
                        </div>
                    </div>
                </div>
                <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow w-full lg:w-fit h-fit p-6 bg-stone-100 rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-start items-start gap-4 min-w-0">
                    <div data-layer="Container" className="Container self-stretch pr-[0.01px] inline-flex justify-between items-center flex-wrap">
                        <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                            <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">GET IN TOUCH</div>
                        </div>
                        <div data-layer="Overlay" className="Overlay size-8 bg-blue-100/30 rounded-full flex justify-center items-center">
                            <div data-svg-wrapper data-layer="Container" className="Container">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 15L12 12H4.5C4.0875 12 3.73437 11.8531 3.44062 11.5594C3.14687 11.2656 3 10.9125 3 10.5V9.75H11.25C11.6625 9.75 12.0156 9.60312 12.3094 9.30937C12.6031 9.01562 12.75 8.6625 12.75 8.25V3H13.5C13.9125 3 14.2656 3.14687 14.5594 3.44062C14.8531 3.73437 15 4.0875 15 4.5V15V15M1.5 7.63125L2.38125 6.75H9.75V6.75V6.75V1.5V1.5V1.5H1.5V1.5V1.5V7.63125V7.63125M0 11.25V1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0H9.75C10.1625 0 10.5156 0.146875 10.8094 0.440625C11.1031 0.734375 11.25 1.0875 11.25 1.5V6.75C11.25 7.1625 11.1031 7.51562 10.8094 7.80937C10.5156 8.10312 10.1625 8.25 9.75 8.25H3L0 11.25V11.25M1.5 6.75V1.5V1.5V1.5V1.5V1.5V1.5V6.75V6.75V6.75V6.75V6.75V6.75" fill="#41617D"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                        <div data-layer="“Quality is never an accident // it is the result of careful testing.”" className="CollaborationCanChangeTheWorldCraftingToolsForThinkersAndCreators self-stretch justify-center text-zinc-900 text-sm font-normal font-['Space_Grotesk'] leading-5">“Quality is never an accident //<br/>it is the result of careful testing.”</div>
                    </div>
                    <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pt-2 border-t border-black/10 inline-flex justify-between items-center flex-wrap">
                        <div data-layer="Container" className="Container size- flex justify-start items-center gap-1">
                            <div data-layer="Background+Border" className="BackgroundBorder size-8 bg-slate-600 rounded-full outline outline-2 outline-offset-[-2px] outline-stone-50 flex justify-center items-center">
                                <div data-layer="Text" className="Text text-center justify-center text-white text-xs font-bold font-['Space_Grotesk'] leading-4">NA</div>
                            </div>
                            <div data-layer="Margin" className="Margin size-8 inline-flex flex-col justify-start items-start">
                                <div data-layer="Background+Border" className="BackgroundBorder size-8 bg-lime-300 rounded-full outline outline-2 outline-offset-[-2px] outline-stone-50 inline-flex justify-center items-center">
                                    <div data-layer="Text" className="Text text-center justify-center text-zinc-900 text-xs font-bold font-['Space_Grotesk'] leading-4">QA</div>
                                </div>
                            </div>
                            <div data-layer="Margin" className="Margin size-8 inline-flex flex-col justify-start items-start">
                                <div data-layer="Background+Border" className="BackgroundBorder size-8 bg-black rounded-full outline outline-2 outline-offset-[-2px] outline-stone-50 inline-flex justify-center items-center">
                                    <div data-layer="Text" className="Text text-center justify-center text-white text-xs font-bold font-['Space_Grotesk'] leading-4">FS</div>
                                </div>
                            </div>
                        </div>
                        <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                            <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] leading-4">QA &amp; Fullstack</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-layer="Multi-Column Links Grid (Image 2 style)" className="MultiColumnLinksGridImage2Style self-stretch inline-flex flex-col lg:flex-row justify-center items-start gap-8">
            <div className="Group1 w-full inline-flex justify-start items-start">
                <div data-layer="Container" className="Container w-full inline-flex flex-col justify-start items-start gap-4 min-w-0">
                    <div data-layer="Heading 4" className="Heading4 self-stretch flex flex-col justify-start items-start">
                        <div data-layer="Team" className="Team self-stretch justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">Contact</div>
                    </div>
                    <div data-layer="List" className="List self-stretch flex flex-col justify-start items-start gap-3">
                        {/* <div data-layer="Item" className="Item self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Email address" className="AlexVance self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">nabilahnajwa808@gmail.com</div>
                        </div> */}
                        <div data-layer="Item" className="Item self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Bandung, West Java" className="DesignOps self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">Bandung, West Java</div>
                        </div>
                        <div data-layer="Item" className="Item self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Contributors" className="Contributors self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">Indonesian &amp; English</div>
                        </div>
                        <div data-layer="Item" className="Item self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Download CV" className="JoinTheStudio self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">Download CV</div>
                        </div>
                    </div>
                </div>
                <div data-layer="Container" className="Container w-full inline-flex flex-col justify-start items-start gap-4 min-w-0">
                    <div data-layer="Heading 4" className="Heading4 self-stretch flex flex-col justify-start items-start">
                        <div data-layer="Legal" className="Legal self-stretch justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">Focus</div>
                    </div>
                    <div data-layer="List" className="List self-stretch flex flex-col justify-start items-start gap-3">
                        <div data-layer="Item" className="Item self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Manual Testing" className="PrivacyPolicy self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">Manual Testing</div>
                        </div>
                        <div data-layer="Item" className="Item self-stretch flex flex-col justify-start items-start">
                            <div data-layer="E2E &amp; Regression" className="TermsOfService self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">E2E &amp; Regression</div>
                        </div>
                        <div data-layer="Item" className="Item self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Legal & Rights" className="LegalRights self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">API Testing</div>
                        </div>
                        <div data-layer="Item" className="Item self-stretch flex flex-col justify-start items-start">
                            <div data-layer="License & Usage" className="LicenseUsage self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">Fullstack Development</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Group2 w-full inline-flex justify-start items-start">
                <div data-layer="Container" className="Container w-full inline-flex flex-col justify-start items-start gap-4 min-w-0">
                    <div data-layer="Heading 4" className="Heading4 self-stretch flex flex-col justify-start items-start">
                        <div data-layer="Socials" className="Socials self-stretch justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">Socials</div>
                    </div>
                    <div data-layer="List" className="List self-stretch flex flex-col justify-start items-start gap-3">
                        <div data-layer="Item → Link" className="ItemLink self-stretch inline-flex justify-start items-center gap-1">
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">GitHub</div>
                            </div>
                            <div data-svg-wrapper data-layer="Container" className="Container">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.816667 7.58333L0 6.76667L5.6 1.16667H0.583333V0H7.58333V7H6.41667V1.98333L0.816667 7.58333V7.58333" fill="#444748"/>
                                </svg>
                            </div>
                        </div>
                        <div data-layer="Item → Link" className="ItemLink self-stretch inline-flex justify-start items-center gap-1">
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">LinkedIn</div>
                            </div>
                            <div data-svg-wrapper data-layer="Container" className="Container">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.816667 7.58333L0 6.76667L5.6 1.16667H0.583333V0H7.58333V7H6.41667V1.98333L0.816667 7.58333V7.58333" fill="#444748"/>
                                </svg>
                            </div>
                        </div>
                        <div data-layer="Item → Link" className="ItemLink self-stretch inline-flex justify-start items-center gap-1">
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">Email</div>
                            </div>
                            <div data-svg-wrapper data-layer="Container" className="Container">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.816667 7.58333L0 6.76667L5.6 1.16667H0.583333V0H7.58333V7H6.41667V1.98333L0.816667 7.58333V7.58333" fill="#444748"/>
                                </svg>
                            </div>
                        </div>
                        <div data-layer="Item → Link" className="ItemLink self-stretch inline-flex justify-start items-center gap-1">
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">Portfolio</div>
                            </div>
                            <div data-svg-wrapper data-layer="Container" className="Container">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.816667 7.58333L0 6.76667L5.6 1.16667H0.583333V0H7.58333V7H6.41667V1.98333L0.816667 7.58333V7.58333" fill="#444748"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-layer="Container" className="Container w-full inline-flex flex-col justify-start items-start gap-4 min-w-0">
                    <div data-layer="Heading 4" className="Heading4 self-stretch flex flex-col justify-start items-start">
                        <div data-layer="Navigation" className="Navigation self-stretch justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">Navigation</div>
                    </div>
                    <div data-layer="List" className="List self-stretch flex flex-col justify-start items-start gap-3">
                        <div data-layer="Item" className="Item self-stretch flex flex-col justify-start items-start">
                            <a data-layer="About Me" href="#about" className="AboutStudio self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">About Me</a>
                        </div>
                        <div data-layer="Item" className="Item self-stretch flex flex-col justify-start items-start">
                            <a data-layer="Featured Work" href="#work" className="FeaturedWork self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">Featured Work</a>
                        </div>
                        <div data-layer="Item" className="Item self-stretch flex flex-col justify-start items-start">
                            <a data-layer="Capabilities" href="#quality-assurance" className="Capabilities self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">Skills</a>
                        </div>
                        <div data-layer="Item" className="Item self-stretch flex flex-col justify-start items-start">
                            <a data-layer="Pricing & Retainer" href="#experience" className="PricingRetainer self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">Experience</a>
                        </div>
                        <div data-layer="Item" className="Item self-stretch flex flex-col justify-start items-start">
                            <a data-layer="Contact" href="#contact" className="ContactAlex self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-layer="Bottom Sub-Footer" className="BottomSubFooter self-stretch pt-8 inline-flex justify-between items-center flex-wrap">
            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">© 2026 Nabilah Najwa Aysyah. All rights reserved.</div>
            </div>
            <div data-layer="Container" className="Container size- opacity-60 inline-flex flex-col justify-start items-start">
                <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">Software Quality Assurance Engineer &amp; Fullstack Web Developer.</div>
            </div>
        </div>
    </div>
</footer>
  );
}
