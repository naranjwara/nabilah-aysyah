'use client';

import { useI18n } from '@/i18n/LanguageProvider';

export default function Certificates() {
  const { t } = useI18n();

    return (
        <div data-layer="Certificates" className="Certificates w-full h-full self-stretch px-7 lg:px-10 py-10 lg:py-10 lg:mt-10 bg-stone-50 border-t border-black/10 inline-flex flex-col justify-start items-start overflow-hidden">
            <div data-layer="Container" className="Container w-full max-w-[1280px] flex flex-col justify-start items-start gap-6">
                <div data-layer="Container" className="Container self-stretch inline-flex justify-between items-center flex-wrap gap-4 lg:gap-0">
                    <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start gap-4">
                        <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow size- px-4 py-2 bg-blue-100/20 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-indigo-300 inline-flex justify-start items-center gap-2">
                            <div data-svg-wrapper data-layer="Background" className="Background">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="8" height="8" rx="4" fill="#41617D"/>
                                </svg>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">{t.certificates.eyebrow}</div>
                            </div>
                        </div>
                        <div data-layer="Heading 2 → Verified Expertise & Professional
                        Credentials" className="Heading2VerifiedExpertiseProfessionalCredentials justify-center text-zinc-900 text-4xl font-semibold font-['Syne'] leading-[50px]">{t.certificates.headline1}<br/>{t.certificates.headline2}</div>
                    </div>
                    <div data-layer="Container" className="Container size- max-w-96 pr-1.5 inline-flex flex-col justify-start items-start">
                        <div data-layer="Text" className="Text justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">{t.certificates.intro}</div>
                    </div>
                </div>
                <div data-layer="Container" className="Container self-stretch inline-flex flex-wrap justify-center items-start gap-6">
                    <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow w-full p-6 lg:p-8 bg-white rounded-[32px] shadow-[0px_16px_40px_-12px_rgba(0,0,0,0.06)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-between items-start overflow-hidden gap-4">
                        <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pb-4 border-b border-black/10 inline-flex justify-between items-center flex-wrap gap-2">
                            <div data-layer="Overlay+Border" className="OverlayBorder size- px-4 py-2 bg-blue-100/20 rounded-full outline outline-1 outline-offset-[-1px] outline-indigo-300 inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-slate-600 text-xs font-semibold font-['Space_Grotesk'] leading-4">{t.certificates.cert1Issuer}</div>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-medium font-['Liberation_Mono'] leading-4">2202001/08/WGSID-BC/02/2024</div>
                            </div>
                        </div>
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-3">
                            <div data-layer="Heading 3" className="Heading3 self-stretch flex flex-col justify-start items-start">
                                <div data-layer="WGS Bootcamp — NodeJS & ReactJS" className="AdvancedWebglThreeJsArchitectureSpecialist self-stretch justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">{t.certificates.cert1Title}</div>
                            </div>
                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                <div data-layer="Completed the 9th batch of the Walden Global Services fullstack bootcamp, covering Node.js back-end services and React.js interfaces." className="VerifiedMasteryOfCustomShadersRaycastingPipelinesAndHighPerformanceRenderLoopsInNextJs self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">{t.certificates.cert1Body1}<br/>{t.certificates.cert1Body2}</div>
                            </div>
                        </div>
                        <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pt-4 border-t border-black/10 inline-flex justify-between items-center flex-wrap">
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-emerald-800 text-xs font-semibold font-['Space_Grotesk'] leading-4">{t.certificates.cert1Status}</div>
                            </div>
                            <div data-layer="Link" className="Link size- px-4 py-2 bg-black rounded-full flex justify-start items-center gap-1">
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-white text-xs font-medium font-['Space_Grotesk'] leading-4">{t.certificates.viewCertificate}</div>
                                </div>
                                <div data-svg-wrapper data-layer="Container" className="Container">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.816667 7.58333L0 6.76667L5.6 1.16667H0.583333V0H7.58333V7H6.41667V1.98333L0.816667 7.58333V7.58333" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow w-full p-6 lg:p-8 bg-blue-200/30 rounded-[32px] shadow-[0px_16px_40px_-12px_rgba(0,0,0,0.06)] outline outline-1 outline-offset-[-1px] outline-indigo-300 inline-flex flex-col justify-between items-start overflow-hidden gap-4">
                        <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pb-4 border-b border-indigo-300 inline-flex justify-between items-center flex-wrap">
                            <div data-layer="Background+Border" className="BackgroundBorder size- px-4 py-2 bg-stone-50 rounded-full outline outline-1 outline-offset-[-1px] outline-indigo-300 inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-slate-600 text-xs font-semibold font-['Space_Grotesk'] leading-4">{t.certificates.cert2Issuer}</div>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-medium font-['Liberation_Mono'] leading-4">Exam #42950403</div>
                            </div>
                        </div>
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-3">
                            <div data-layer="Heading 3" className="Heading3 self-stretch flex flex-col justify-start items-start">
                                <div data-layer="IC3 Digital Literacy Certification — GS6 Level 1" className="PrincipalCloudSystemsDistributedCrowdfundingInfrastructure self-stretch justify-center text-zinc-900 text-xl font-semibold font-['Space_Grotesk'] leading-6">{t.certificates.cert2Title}<br/>GS6 Level 1</div>
                            </div>
                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                <div data-layer="Passed with a score of 735 against a 700 requirement, covering technology fundamentals, digital citizenship, information management, and online safety." className="ExpertiseInFaultTolerantEventStreamsSecureWebhookProcessingAndScalableEdgeDeliveryArchitecture self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">{t.certificates.cert2Body1}<br/>{t.certificates.cert2Body2}</div>
                            </div>
                        </div>
                        <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pt-4 border-t border-indigo-300 inline-flex justify-between items-center flex-wrap">
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-slate-600 text-xs font-semibold font-['Space_Grotesk'] leading-4">{t.certificates.cert2Status}</div>
                            </div>
                            <div data-layer="Link" className="Link size- px-4 py-2 bg-stone-50 rounded-full outline outline-1 outline-offset-[-1px] outline-indigo-300 flex justify-start items-center gap-1">
                                <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.certificates.viewCertificate}</div>
                                </div>
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
        </div>
    )
}