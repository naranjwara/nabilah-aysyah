import MilestoneReveal from "./MilestoneReveal";
import { Arrow, Container, OutlineButton, SectionHeading } from "./LandingUi";

export default function Career() {
  return (
    <section id="experience" data-layer="Career" className="Career h-full w-full self-stretch px-7 py-8 lg:p-10 relative bg-stone-50 border-t border-black/10 inline-flex justify-start items-start overflow-hidden">
        <div data-layer="Overlay+Blur" className="OverlayBlur size-96 left-[576px] top-[-95px] absolute bg-sky-200/30 rounded-full blur-[32px]" />
        <div data-layer="Overlay+Blur" className="OverlayBlur size-96 left-[40px] top-[836.25px] absolute bg-emerald-100/40 rounded-full blur-[32px]" />
        <div data-layer="Container" className="Container w-full max-w-[1280px] flex flex-col justify-start items-start gap-8">
          <div data-layer="Container" className="Container self-stretch inline-flex justify-between items-center flex-wrap gap-4">
              <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start gap-4">
                  <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-4 py-2 bg-gradient-to-r from-green-200/30 to-green-300/20 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-lime-300 inline-flex justify-start items-center gap-2">
                      <div data-svg-wrapper data-layer="Background+Shadow" className="BackgroundShadow">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_d_630_3225)">
                          <rect x="8" y="8" width="8" height="8" rx="4" fill="#86EFAC"/>
                          </g>
                          <defs>
                          <filter id="filter0_d_630_3225" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset/>
                          <feGaussianBlur stdDeviation="4"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0.52549 0 0 0 0 0.937255 0 0 0 0 0.67451 0 0 0 0.8 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_630_3225"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_630_3225" result="shape"/>
                          </filter>
                          </defs>
                          </svg>
                      </div>
                      <div data-layer="Container" className="Container size- inline-flex justify-start items-start">
                          <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">CAREER TRAJECTORY // 04</div>
                      </div>
                  </div>
                  <div data-layer="Heading 2" className="Heading2 size- inline-flex flex-wrap justify-start items-center gap-1.5">
                      <div data-layer="Text" className="Text justify-center text-zinc-900 text-4xl font-semibold font-['Syne'] leading-[50px]">Experience, Growth</div>
                      <div className="w-fit text-zinc-900 text-4xl font-semibold font-['Syne']">&amp;</div>
                      <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-4 py-1 bg-white rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/80 flex justify-start items-start">
                          <div data-layer="Text" className="Text justify-center text-zinc-900 text-4xl font-semibold font-['Syne'] leading-[50px]">Education.</div>
                      </div>
                  </div>
              </div>
              <div data-layer="Container" className="Container w-full lg:max-w-[40%] inline-flex flex-col justify-start items-start lg:items-end gap-4">
                  <div data-layer="Container" className="Container w-full justify-start items-start">
                      <div className="justify-center lg:text-right text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">
                        Three years at Emveep across QA engineering and fullstack development, alongside formal study in Information Systems.
                    </div>
                  </div>
                  <div data-layer="Container" className="inline-flex flex-wrap justify-start items-start gap-2">
                      <div data-layer="Background+Shadow" className="BackgroundShadow w-fit px-4 py-1 bg-black rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex justify-start items-start">
                          <div data-layer="Text" className="Text justify-center text-white text-xs font-normal font-['Space_Grotesk'] leading-4">All Roles</div>
                      </div>
                      <div data-layer="Background+Border" className="BackgroundBorder w-fit px-4 py-1 bg-gray-200 rounded-full outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-start">
                          <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-normal font-['Space_Grotesk'] leading-4">Quality Assurance</div>
                      </div>
                      <div data-layer="Background+Border" className="BackgroundBorder w-fit px-4 py-1 bg-gray-200 rounded-full outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-start">
                          <div data-layer="Text" className="Text justify-center w-full text-zinc-900 text-xs font-normal font-['Space_Grotesk'] leading-4">Development</div>
                      </div>
                      <div data-layer="Background+Border" className="BackgroundBorder w-fit px-4 py-1 bg-gray-200 rounded-full outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-start">
                          <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-normal font-['Space_Grotesk'] leading-4">Education</div>
                      </div>
                  </div>
              </div>
          </div>
            <div data-layer="Container" className="Container self-stretch relative flex flex-col justify-start items-start">
                <div data-layer="Gradient Timeline Connecting Line" className="GradientTimelineConnectingLine w-0.5 left-[32px] top-[40px] bottom-[40px] absolute opacity-60 bg-gradient-to-b from-sky-400 via-emerald-400 to-amber-300" />
                <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-6">
                    <div data-milestone="0" data-layer="Milestone 01: Soft Sky Blue Secondary Gradient" className="self-stretch p-6 lg:p-8 relative bg-gradient-to-r from-sky-50 via-white to-sky-50/40 rounded-[32px] shadow-[0px_16px_40px_-12px_rgba(56,189,248,0.12)] outline outline-1 outline-offset-[-1px] outline-sky-200/90 flex flex-col justify-start items-start overflow-hidden gap-4">
                        <div data-layer="Overlay+Blur" className="OverlayBlur size-64 left-[1023px] top-[-79px] absolute bg-sky-200/40 rounded-full blur-[32px]" />
                        <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pb-4 border-b border-sky-200/60 inline-flex justify-between items-center flex-wrap gap-4">
                            <div data-layer="Container" className="Container size- flex justify-start items-center gap-4">
                                <div data-layer="Background" className="Background p-2 lg:size-10 bg-sky-600 rounded-full flex justify-center items-center">
                                    <div data-svg-wrapper data-layer="Overlay+Shadow" className="OverlayShadow left-0 top-0 absolute">
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_dd_630_3252)">
                                        <rect x="5" y="1" width="40" height="40" rx="20" fill="white" fillOpacity="0.01" shapeRendering="crispEdges"/>
                                        </g>
                                        <defs>
                                        <filter id="filter0_dd_630_3252" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_630_3252"/>
                                        <feOffset dy="2"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.054902 0 0 0 0 0.647059 0 0 0 0 0.913725 0 0 0 0.2 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_630_3252"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_630_3252"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="3"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.054902 0 0 0 0 0.647059 0 0 0 0 0.913725 0 0 0 0.2 0"/>
                                        <feBlend mode="normal" in2="effect1_dropShadow_630_3252" result="effect2_dropShadow_630_3252"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_630_3252" result="shape"/>
                                        </filter>
                                        </defs>
                                        </svg>
                                    </div>
                                    <div data-layer="Text" className="Text text-center justify-center text-white text-xs font-bold font-['Space_Grotesk'] leading-4">01</div>
                                </div>
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start gap-2">
                                    <div data-layer="Container" className="Container self-stretch inline-flex flex-wrap justify-start items-center gap-2">
                                        <div data-layer="Container" className="Container w-full lg:w-fit inline-flex justify-start items-start">
                                            <div data-layer="Text" className="Text justify-center text-sky-800 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">MAR 2025 — AUG 2026</div>
                                        </div>
                                        <div data-layer="Background+Border" className="BackgroundBorder size- px-2 py-0.5 bg-sky-100 rounded-full outline outline-1 outline-offset-[-1px] outline-sky-300 inline-flex justify-start items-start">
                                            <div data-layer="Text" className="Text justify-center text-sky-900 text-xs font-semibold font-['Space_Grotesk'] leading-4">Most Recent</div>
                                        </div>
                                        <div data-layer="Overlay+Border" className="OverlayBorder size- px-2 py-0.5 bg-sky-200/60 rounded-full outline outline-1 outline-offset-[-1px] outline-sky-300 inline-flex justify-start items-start">
                                            <div data-layer="Text" className="Text justify-center text-sky-950 text-xs font-semibold font-['Space_Grotesk'] leading-4">QA Engineer</div>
                                        </div>
                                    </div>
                                    <div data-layer="Heading 3" className="Heading3 self-stretch pt-1 flex flex-col justify-start items-start">
                                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">Quality Assurance Engineer</div>
                                    </div>
                                    <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                        <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">Emveep · Hybrid</div>
                                    </div>
                                </div>
                            </div>
                            <div data-layer="Container" className="Container size- flex justify-start items-center gap-2">
                                <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow size- px-3 py-1 bg-white/90 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-sky-200/80 inline-flex justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center"><span className="text-sky-900 text-xs font-bold font-['Space_Grotesk'] leading-4">50+</span><span className="text-zinc-900 text-xs font-bold font-['Space_Grotesk'] leading-4"> Critical Defects</span></div>
                                </div>
                                <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow size- px-3 py-1 bg-white/90 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-sky-200/80 inline-flex justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center"><span className="text-sky-900 text-xs font-bold font-['Space_Grotesk'] leading-4">95%</span><span className="text-zinc-900 text-xs font-bold font-['Space_Grotesk'] leading-4"> Testing Efficiency</span></div>
                                </div>
                            </div>
                        </div>
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div className="self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-6">
                                Orchestrated end-to-end testing for international clients, ensuring 100% adherence to global quality standards. Managed the full bug-tracking lifecycle in Jira, identifying 50+ critical defects and increasing testing efficiency by 95% across three high-traffic web platforms.
                            </div>
                        </div>
                    </div>
                    <div data-milestone="1" data-layer="Milestone 02: Soft Mint/Sage Tertiary Green Gradient" className="self-stretch p-6 lg:p-8 relative bg-gradient-to-r from-emerald-50 via-white to-emerald-50/40 rounded-[32px] shadow-[0px_16px_40px_-12px_rgba(52,211,153,0.12)] outline outline-1 outline-offset-[-1px] outline-emerald-200/90 flex flex-col justify-start items-start overflow-hidden gap-4">
                        <div data-layer="Overlay+Blur" className="OverlayBlur size-64 left-[1023px] top-[-79px] absolute bg-emerald-200/40 rounded-full blur-[32px]" />
                        <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pb-4 border-b border-emerald-200/60 inline-flex justify-between items-center flex-wrap gap-4">
                            <div data-layer="Container" className="Container size- flex justify-start items-center gap-4">
                                <div data-layer="Background" className="Background p-2 lg:size-10 bg-emerald-700 rounded-full flex justify-center items-center">
                                    <div data-svg-wrapper data-layer="Overlay+Shadow" className="OverlayShadow left-0 top-0 absolute">
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_dd_630_3282)">
                                        <rect x="5" y="1" width="40" height="40" rx="20" fill="white" fillOpacity="0.01" shapeRendering="crispEdges"/>
                                        </g>
                                        <defs>
                                        <filter id="filter0_dd_630_3282" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_630_3282"/>
                                        <feOffset dy="2"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.588235 0 0 0 0 0.411765 0 0 0 0.2 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_630_3282"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_630_3282"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="3"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.588235 0 0 0 0 0.411765 0 0 0 0.2 0"/>
                                        <feBlend mode="normal" in2="effect1_dropShadow_630_3282" result="effect2_dropShadow_630_3282"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_630_3282" result="shape"/>
                                        </filter>
                                        </defs>
                                        </svg>
                                    </div>
                                    <div data-layer="Text" className="Text text-center justify-center text-white text-xs font-bold font-['Space_Grotesk'] leading-4">02</div>
                                </div>
                                <div data-layer="Container" className="Container flex-col inline-flex justify-start items-start gap-2">
                                    <div data-layer="Container" className="Container self-stretch flex-wrap inline-flex justify-start items-center gap-2">
                                        <div data-layer="Container" className="Container w-full lg:w-fit inline-flex justify-start items-start">
                                            <div data-layer="Text" className="Text justify-center text-emerald-800 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">AUG 2024 — MAR 2025</div>
                                        </div>
                                        <div data-layer="Background+Border" className="BackgroundBorder size- px-2 py-0.5 bg-emerald-100 rounded-full outline outline-1 outline-offset-[-1px] outline-emerald-300 inline-flex justify-start items-start">
                                            <div data-layer="Text" className="Text justify-center text-emerald-900 text-xs font-semibold font-['Space_Grotesk'] leading-4">Fullstack</div>
                                        </div>
                                        <div data-layer="Overlay+Border" className="OverlayBorder size- px-2 py-0.5 bg-emerald-200/60 rounded-full outline outline-1 outline-offset-[-1px] outline-emerald-300 inline-flex justify-start items-start">
                                            <div data-layer="Text" className="Text justify-center text-emerald-950 text-xs font-semibold font-['Space_Grotesk'] leading-4">Next.js / Node.js</div>
                                        </div>
                                    </div>
                                    <div data-layer="Heading 3" className="Heading3 self-stretch pt-1 flex flex-col justify-start items-start">
                                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">Fullstack Web Developer Intern (QA Support)</div>
                                    </div>
                                    <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                        <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">Emveep · Hybrid</div>
                                    </div>
                                </div>
                            </div>
                            <div data-layer="Container" className="Container size- flex justify-start items-center gap-2">
                                <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow size- px-3 py-1 bg-white/90 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-emerald-200/80 inline-flex justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center"><span className="text-emerald-900 text-xs font-bold font-['Space_Grotesk'] leading-4">90%</span><span className="text-zinc-900 text-xs font-bold font-['Space_Grotesk'] leading-4"> Faster Load</span></div>
                                </div>
                                <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow size- px-3 py-1 bg-white/90 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-emerald-200/80 inline-flex justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center"><span className="text-emerald-900 text-xs font-bold font-['Space_Grotesk'] leading-4">SEO</span><span className="text-zinc-900 text-xs font-bold font-['Space_Grotesk'] leading-4"> Rankings Up</span></div>
                                </div>
                            </div>
                        </div>
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Spearheaded the framework migration of the company profile website from React.js to Next.js, boosting page load speeds by 90% and improving SEO rankings. Developed and maintained back-end logic and responsive front-end components, and used development expertise for code reviews and root-cause analysis." className="OrchestratedHighImpactBrandOverhaulsAndEngineeredMicroInteractionKineticEnginesForTier1FintechClientsBridgedDesignTeamsWithFrontendEngineersThroughSeamlessLiveComponentSandboxesAndWebglInteractiveCards self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-6">Spearheaded the framework migration of the company profile website from React.js to Next.js, boosting page load speeds by 90% and improving SEO rankings. Developed<br/>and maintained back-end logic and responsive front-end components, and used development expertise for code reviews and root-cause analysis.</div>
                        </div>
                    </div>
                    <div data-milestone="2" data-layer="Milestone 03: Soft Lavender / Violet Subtle Pastel Gradient" className="self-stretch p-6 lg:p-8 relative bg-gradient-to-r from-violet-50 via-white to-violet-100/40 rounded-[32px] shadow-[0px_16px_40px_-12px_rgba(99,102,241,0.10)] outline outline-1 outline-offset-[-1px] outline-indigo-200/80 flex flex-col justify-start items-start overflow-hidden gap-4">
                        <div data-layer="Overlay+Blur" className="OverlayBlur size-64 left-[1023px] top-[-79px] absolute bg-indigo-200/30 rounded-full blur-[32px]" />
                        <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pb-4 border-b border-indigo-200/60 inline-flex justify-between items-center flex-wrap gap-4">
                            <div data-layer="Container" className="Container size- flex justify-start items-center gap-4">
                                <div data-layer="Background" className="Background p-2 lg:size-10 bg-indigo-600 rounded-full flex justify-center items-center">
                                    <div data-svg-wrapper data-layer="Overlay+Shadow" className="OverlayShadow left-0 top-0 absolute">
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_dd_630_3311)">
                                        <rect x="5" y="1" width="40" height="40" rx="20" fill="white" fillOpacity="0.01" shapeRendering="crispEdges"/>
                                        </g>
                                        <defs>
                                        <filter id="filter0_dd_630_3311" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_630_3311"/>
                                        <feOffset dy="2"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 0.2 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_630_3311"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_630_3311"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="3"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 0.2 0"/>
                                        <feBlend mode="normal" in2="effect1_dropShadow_630_3311" result="effect2_dropShadow_630_3311"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_630_3311" result="shape"/>
                                        </filter>
                                        </defs>
                                        </svg>
                                    </div>
                                    <div data-layer="Text" className="Text text-center justify-center text-white text-xs font-bold font-['Space_Grotesk'] leading-4">03</div>
                                </div>
                                <div data-layer="Container" className="Container flex-col inline-flex justify-start items-start gap-2">
                                    <div data-layer="Container" className="Container self-stretch flex-wrap inline-flex justify-start items-center gap-2">
                                        <div data-layer="Container" className="Container w-full lg:w-fit inline-flex justify-start items-start gap-2">
                                            <div data-layer="Text" className="Text justify-center text-indigo-800 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">JUL 2023 — SEP 2023</div>
                                        </div>
                                        <div data-layer="Background+Border" className="BackgroundBorder size- px-2 py-0.5 bg-indigo-100 rounded-full outline outline-1 outline-offset-[-1px] outline-indigo-300 inline-flex justify-start items-start">
                                            <div data-layer="Text" className="Text justify-center text-indigo-900 text-xs font-semibold font-['Space_Grotesk'] leading-4">First Role</div>
                                        </div>
                                        <div data-layer="Overlay+Border" className="OverlayBorder size- px-2 py-0.5 bg-indigo-200/60 rounded-full outline outline-1 outline-offset-[-1px] outline-indigo-300 inline-flex justify-start items-start">
                                            <div data-layer="Text" className="Text justify-center text-indigo-950 text-xs font-semibold font-['Space_Grotesk'] leading-4">Node.js / Vue.js</div>
                                        </div>
                                    </div>
                                    <div data-layer="Heading 3" className="Heading3 self-stretch pt-1 flex flex-col justify-start items-start">
                                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">Web Developer &amp; QA Intern</div>
                                    </div>
                                    <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                        <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">Emveep · Hybrid</div>
                                    </div>
                                </div>
                            </div>
                            <div data-layer="Container" className="Container size- flex justify-start items-center gap-2">
                                <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow size- px-3 py-1 bg-white/90 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-indigo-200/80 inline-flex justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center"><span className="text-indigo-900 text-xs font-bold font-['Space_Grotesk'] leading-4">50+</span><span className="text-zinc-900 text-xs font-bold font-['Space_Grotesk'] leading-4"> E2E Test Cases</span></div>
                                </div>
                                <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow size- px-3 py-1 bg-white/90 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-indigo-200/80 inline-flex justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center"><span className="text-indigo-900 text-xs font-bold font-['Space_Grotesk'] leading-4">3mo</span><span className="text-zinc-900 text-xs font-bold font-['Space_Grotesk'] leading-4"> MVP Delivered</span></div>
                                </div>
                            </div>
                        </div>
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div className="self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-6">Built a Point of Sale (POS) system from scratch with Node.js and Vue.js, delivering a functional MVP within 3 months with zero critical defects at deployment. Standardized the internal QA lifecycle by authoring 50+ comprehensive E2E test cases for client handover.</div>
                        </div>
                    </div>
                    <div data-milestone="3" data-layer="Milestone 04: Soft Amber / Warm Butter Subtle Accent" className="self-stretch p-6 lg:p-8 relative bg-gradient-to-r from-amber-50 via-white to-amber-100/50 rounded-[32px] shadow-[0px_16px_40px_-12px_rgba(245,158,11,0.12)] outline outline-1 outline-offset-[-1px] outline-amber-200/90 flex flex-col justify-start items-start overflow-hidden gap-4">
                        <div data-layer="Overlay+Blur" className="OverlayBlur size-64 left-[1023px] top-[-79px] absolute bg-amber-200/40 rounded-full blur-[32px]" />
                        <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pb-4 border-b border-amber-200/60 inline-flex justify-between items-center flex-wrap gap-4">
                            <div data-layer="Container" className="Container size- flex justify-start items-center gap-4">
                                <div data-layer="Background" className="Background p-2 lg:size-10 bg-amber-600 rounded-full flex justify-center items-center">
                                    <div data-svg-wrapper data-layer="Overlay+Shadow" className="OverlayShadow left-0 top-0 absolute">
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_dd_630_3340)">
                                        <rect x="5" y="1" width="40" height="40" rx="20" fill="white" fillOpacity="0.01" shapeRendering="crispEdges"/>
                                        </g>
                                        <defs>
                                        <filter id="filter0_dd_630_3340" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_630_3340"/>
                                        <feOffset dy="2"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.85098 0 0 0 0 0.466667 0 0 0 0 0.0235294 0 0 0 0.2 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_630_3340"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_630_3340"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="3"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.85098 0 0 0 0 0.466667 0 0 0 0 0.0235294 0 0 0 0.2 0"/>
                                        <feBlend mode="normal" in2="effect1_dropShadow_630_3340" result="effect2_dropShadow_630_3340"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_630_3340" result="shape"/>
                                        </filter>
                                        </defs>
                                        </svg>
                                    </div>
                                    <div data-layer="Text" className="Text text-center justify-center text-white text-xs font-bold font-['Space_Grotesk'] leading-4">04</div>
                                </div>
                                <div data-layer="Container" className="Container inline-flex flex-wrap justify-start items-start gap-2">
                                    <div data-layer="Container" className="Container self-stretch inline-flex flex-wrap justify-start items-center gap-2">
                                        <div data-layer="Container" className="Container w-full lg:w-fit inline-flex justify-start items-start">
                                            <div data-layer="Text" className="Text justify-center text-amber-900 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">2025 — PRESENT</div>
                                        </div>
                                        <div data-layer="Background+Border" className="BackgroundBorder size- px-2 py-0.5 bg-amber-100 rounded-full outline outline-1 outline-offset-[-1px] outline-amber-300 inline-flex justify-start items-start">
                                            <div data-layer="Text" className="Text justify-center text-amber-900 text-xs font-semibold font-['Space_Grotesk'] leading-4">Education</div>
                                        </div>
                                        <div data-layer="Overlay+Border" className="OverlayBorder size- px-2 py-0.5 bg-amber-200/60 rounded-full outline outline-1 outline-offset-[-1px] outline-amber-300 inline-flex justify-start items-start">
                                            <div data-layer="Text" className="Text justify-center text-amber-950 text-xs font-semibold font-['Space_Grotesk'] leading-4">Information Systems</div>
                                        </div>
                                    </div>
                                    <div data-layer="Heading 3" className="Heading3 self-stretch w-full flex flex-col justify-start items-start">
                                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">SATU University</div>
                                    </div>
                                    <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                        <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">Bandung, West Java</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div className="self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-6">Pursuing a Bachelor of Information Systems since September 2025, building the theory behind the testing and development work I do day to day.</div>
                        </div>
                    </div>
                    <div data-milestone="4" data-layer="Milestone 05: Soft Amber / Warm Butter Subtle Accent" className="self-stretch p-6 lg:p-8 relative bg-gradient-to-r from-amber-50 via-white to-amber-100/50 rounded-[32px] shadow-[0px_16px_40px_-12px_rgba(245,158,11,0.12)] outline outline-1 outline-offset-[-1px] outline-amber-200/90 flex flex-col justify-start items-start overflow-hidden gap-4">
                        <div data-layer="Overlay+Blur" className="OverlayBlur size-64 left-[1023px] top-[-79px] absolute bg-amber-200/40 rounded-full blur-[32px]" />
                        <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pb-4 border-b border-amber-200/60 inline-flex justify-between items-center flex-wrap">
                            <div data-layer="Container" className="Container size- flex justify-start items-center gap-4">
                                <div data-layer="Background" className="Background p-2 lg:size-10 bg-amber-600 rounded-full flex justify-center items-center">
                                    <div data-svg-wrapper data-layer="Overlay+Shadow" className="OverlayShadow left-0 top-0 absolute">
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_dd_630_3341)">
                                        <rect x="5" y="1" width="40" height="40" rx="20" fill="white" fillOpacity="0.01" shapeRendering="crispEdges"/>
                                        </g>
                                        <defs>
                                        <filter id="filter0_dd_630_3341" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_630_3340"/>
                                        <feOffset dy="2"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.85098 0 0 0 0 0.466667 0 0 0 0 0.0235294 0 0 0 0.2 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_630_3340"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_630_3340"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="3"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.85098 0 0 0 0 0.466667 0 0 0 0 0.0235294 0 0 0 0.2 0"/>
                                        <feBlend mode="normal" in2="effect1_dropShadow_630_3340" result="effect2_dropShadow_630_3340"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_630_3340" result="shape"/>
                                        </filter>
                                        </defs>
                                        </svg>
                                    </div>
                                    <div data-layer="Text" className="Text text-center justify-center text-white text-xs font-bold font-['Space_Grotesk'] leading-4">05</div>
                                </div>
                                <div data-layer="Container" className="Container inline-flex flex-col justify-start items-start gap-2">
                                    <div data-layer="Container" className="Container self-stretch inline-flex flex-wrap justify-start items-center gap-2">
                                        <div data-layer="Container" className="Container w-full lg:w-fit inline-flex justify-start items-start">
                                            <div data-layer="Text" className="Text justify-center text-amber-900 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">2021 — 2024</div>
                                        </div>
                                        <div data-layer="Background+Border" className="BackgroundBorder size- px-2 py-0.5 bg-amber-100 rounded-full outline outline-1 outline-offset-[-1px] outline-amber-300 inline-flex justify-start items-start">
                                            <div data-layer="Text" className="Text justify-center text-amber-900 text-xs font-semibold font-['Space_Grotesk'] leading-4">Education</div>
                                        </div>
                                        <div data-layer="Overlay+Border" className="OverlayBorder size- px-2 py-0.5 bg-amber-200/60 rounded-full outline outline-1 outline-offset-[-1px] outline-amber-300 inline-flex justify-start items-start">
                                            <div data-layer="Text" className="Text justify-center text-amber-950 text-xs font-semibold font-['Space_Grotesk'] leading-4">Software Engineering (RPL)</div>
                                        </div>
                                    </div>
                                    <div data-layer="Heading 3" className="Heading3 self-stretch pt-1 flex flex-col justify-start items-start">
                                        <div data-layer="Text" className="Text justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">SMK BPI Bandung</div>
                                    </div>
                                    <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                        <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">Bandung, West Java</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div className="self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-6">Graduated from the Software Engineering (RPL) programme in 2024, where I first built web applications and learned QA fundamentals.</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div data-layer="Container" className="Container self-stretch px-2 pt-4 inline-flex justify-between items-center flex-wrap">
                <div data-layer="Container" className="Container size- flex justify-start items-center gap-2">
                    <div data-svg-wrapper data-layer="Background" className="Background">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="8" height="8" rx="4" fill="black"/>
                        </svg>
                    </div>
                    <div data-layer="Container" className="Container size- inline-flex justify-start items-start">
                        <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">Currently pursuing ISTQB Foundation Level certification</div>
                    </div>
                </div>
                <div data-layer="Link" className="Link cursor-pointer size- px-6 py-3 bg-white/0 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black flex justify-start items-center gap-2">
                    <div data-svg-wrapper data-layer="Container" className="Container">
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.33333 8L2 4.66667L2.93333 3.7L4.66667 5.43333V0H6V5.43333L7.73333 3.7L8.66667 4.66667L5.33333 8V8M1.33333 10.6667C0.966667 10.6667 0.652778 10.5361 0.391667 10.275C0.130556 10.0139 0 9.7 0 9.33333V7.33333H1.33333V9.33333V9.33333V9.33333H9.33333V9.33333V9.33333V7.33333H10.6667V9.33333C10.6667 9.7 10.5361 10.0139 10.275 10.275C10.0139 10.5361 9.7 10.6667 9.33333 10.6667H1.33333V10.6667" fill="#1A1C1B"/>
                        </svg>
                    </div>
                    <div data-layer="Container" className="Container size- inline-flex justify-start items-start">
                        <div data-layer="Text" className="Textpointer justify-center text-zinc-900 text-base font-normal font-['Space_Grotesk'] leading-6">Download Full CV</div>
                    </div>
                </div>
            </div> */}
        </div>
        <MilestoneReveal />
    </section>
  );
}
