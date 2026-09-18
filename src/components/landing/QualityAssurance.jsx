'use client';

import { useI18n } from '@/i18n/LanguageProvider';

export default function QualityAssurance() {
  const { t } = useI18n();

    return (
        <section id="quality-assurance" data-layer="QualityAssurance" className="QualityAssurance w-full self-stretch px-7 lg:px-10 py-10 lg:py-16 relative bg-stone-50 border-t border-black/10 inline-flex flex-col justify-start items-start overflow-hidden">
            <div data-layer="Overlay+Blur" className="OverlayBlur size-96 left-[-64px] top-[-79px] absolute bg-blue-100/20 rounded-full blur-[32px]" />
            <div data-layer="Overlay+Blur" className="OverlayBlur size-96 left-[856px] top-[657px] absolute bg-lime-200/20 rounded-full blur-[32px]" />
            <div data-layer="Container" className="Container w-full max-w-[1280px] flex flex-col justify-start items-start gap-8 lg:gap-12">
                <div data-layer="Container" className="Container self-stretch inline-flex flex-wrap justify-between items-center gap-4">
                    <div data-layer="Container" className="Container lg:max-w-[75%] inline-flex flex-col justify-start items-start gap-4">
                        <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow size- px-4 py-2 bg-blue-100/20 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-indigo-300 inline-flex justify-start items-center gap-2">
                            <div data-svg-wrapper data-layer="Background" className="Background">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="8" height="8" rx="4" fill="#41617D"/>
                                </svg>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">{t.qa.eyebrow}</div>
                            </div>
                        </div>
                        <div data-layer="Heading 2" className="Heading2 gap-1 inline-flex flex-wrap justify-start items-start">
                            <div data-layer="Reliable Releases with" className="BulletproofReleasesWith w-[300px] lg:w-max justify-center text-zinc-900 text-4xl lg:text-5xl font-semibold font-['Syne'] leading-50px]">{t.qa.headline1}</div>
                            <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-4 py-1 bg-white rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/80 flex justify-start items-start">
                                <div data-layer="Precision QA" className="PrecisionQa justify-center text-zinc-900 text-4xl lg:text-5xl font-semibold font-['Syne'] leading-[50px]">{t.qa.headline2}</div>
                            </div>
                            <div data-layer="&" className="justify-center text-zinc-900 text-4xl lg:text-5xl font-semibold font-['Syne'] leading-50px]">&amp;</div>
                            <div data-layer="E2E Coverage." className="E2eVectors justify-center text-zinc-900 text-4xl lg:text-5xl font-semibold font-['Syne'] leading-[50px]">{t.qa.headline3}</div>
                        </div>
                    </div>
                    <div data-layer="Container" className="Container size- inline-flex flex-col justify-center lg:items-end gap-2">
                        <div data-layer="Overlay+Border+Shadow" className="OverlayBorderShadow  w-fit size- px-4 py-2 bg-emerald-100/40 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-emerald-200/80 inline-flex justify-start items-center gap-2">
                            <div data-svg-wrapper data-layer="Background" className="Background">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="8" height="8" rx="4" fill="#047857"/>
                                </svg>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-emerald-950 text-xs font-semibold font-['Space_Grotesk'] leading-4">{t.qa.badge1}</div>
                            </div>
                        </div>
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow w-fit  size- px-4 py-2 bg-gray-200 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-center gap-2">
                            <div data-svg-wrapper data-layer="Container" className="Container">
                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.82083 9.45L6.83958 5.83333H4.50625L4.92917 2.52292L2.23125 6.41667H4.25833L3.82083 9.45V9.45M2.33333 11.6667L2.91667 7.58333H0L5.25 0H6.41667L5.83333 4.66667H9.33333L3.5 11.6667H2.33333V11.6667M4.53542 5.97917V5.97917V5.97917V5.97917V5.97917V5.97917V5.97917V5.97917" fill="#41617D"/>
                                </svg>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.qa.badge2}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-layer="QA Metrics Section (Above Artifact Cards)" className="QaMetricsSection self-stretch flex justify-start items-start">
                    <div data-layer="Metric 1: Total Test Cases Executed" className="Metric1 self-stretch p-6 bg-white rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 md:w-fit  md:flex-1 inline-flex flex-col justify-between items-start">
                        <div data-layer="Container" className="Container self-stretch inline-flex justify-between items-center">
                            <div data-layer="Container" className="Container size- pr-3 inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">{t.qa.metric1Label}</div>
                            </div>
                            <div data-layer="Background" className="Background size-6 bg-gray-200 rounded-full flex justify-center items-center">
                                <div data-svg-wrapper data-layer="Container" className="Container">
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.2 11.2C0.87 11.2 0.5875 11.0825 0.3525 10.8475C0.1175 10.6125 0 10.33 0 10V1.2C0 0.87 0.1175 0.5875 0.3525 0.3525C0.5875 0.1175 0.87 0 1.2 0H11.6C11.93 0 12.2125 0.1175 12.4475 0.3525C12.6825 0.5875 12.8 0.87 12.8 1.2V10C12.8 10.33 12.6825 10.6125 12.4475 10.8475C12.2125 11.0825 11.93 11.2 11.6 11.2H1.2V11.2M1.2 10H11.6V10V10V1.2V1.2V1.2H1.2V1.2V1.2V10V10V10V10M1.91667 8.81667H5.11667V7.61667H1.91667V8.81667V8.81667M8.1 7.6L10.9333 4.76667L10.0833 3.91667L8.1 5.9L7.25 5.05L6.4 5.9L8.1 7.6V7.6M1.91667 6.2H5.11667V5H1.91667V6.2V6.2M1.91667 3.6H5.11667V2.4H1.91667V3.6V3.6M1.2 10V10V10V10V1.2V1.2V1.2V1.2V1.2V1.2V10V10V10V10" fill="#41617D"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div data-layer="Margin" className="Margin self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-1.5">
                                <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-900 text-4xl font-bold font-['Syne'] leading-9">1,840+</div>
                                </div>
                                <div data-layer="Container" className="Container self-stretch pt-1 flex flex-col justify-start items-start">
                                    <div data-layer="Executed Across Test Cycles" className="ExecutedAcrossTestCycles self-stretch justify-center text-zinc-900 text-sm font-semibold font-['Space_Grotesk'] leading-5">{t.qa.metric1Title}</div>
                                </div>
                                <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                    <div data-layer="E2E, Integration, Regression & API" className="E2eIntegrationRegressionApi self-stretch justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.qa.metric1Body}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-layer="Metric 2: Bugs Reported" className="Metric2 self-stretch p-6 bg-white rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 md:w-fit  md:flex-1 inline-flex flex-col justify-between items-start">
                        <div data-layer="Container" className="Container self-stretch inline-flex justify-between items-center">
                            <div data-layer="Container" className="Container size- pr-3.5 inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">{t.qa.metric2Label}</div>
                            </div>
                            <div data-layer="Background" className="Background size-6 bg-emerald-100 rounded-full flex justify-center items-center">
                                <div data-svg-wrapper data-layer="Container" className="Container">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.8 10C5.34083 10 5.80382 9.80556 6.18896 9.41667C6.5741 9.02778 6.77778 8.55556 6.8 8V4.8C6.82222 4.24444 6.63611 3.77222 6.24167 3.38333C5.84722 2.99444 5.36944 2.8 4.80833 2.8C4.24722 2.8 3.775 2.99444 3.39167 3.38333C3.00833 3.77222 2.81111 4.24444 2.8 4.8V8C2.78889 8.55556 2.97778 9.02778 3.36667 9.41667C3.75556 9.80556 4.23333 10 4.8 10V10M3.6 8H6V6.8H3.6V8V8M3.6 6H6V4.8H3.6V6V6M4.8 6.43333V6.43333V6.43333V6.43333V6.43333V6.43333V6.43333V6.43333V6.43333V6.43333V6.43333V6.43333M4.8 11.2C4.13333 11.2 3.52778 11.0194 2.98333 10.6583C2.43889 10.2972 2.05556 9.81111 1.83333 9.2H0V8H1.6C1.6 7.83333 1.6 7.66667 1.6 7.5C1.6 7.33333 1.6 7.16667 1.6 7H0V5.8H1.6C1.6 5.63333 1.6 5.46667 1.6 5.3C1.6 5.13333 1.6 4.96667 1.6 4.8H0V3.6H1.83333C1.92222 3.31111 2.06557 3.04949 2.26336 2.81515C2.46116 2.58081 2.69004 2.37576 2.95 2.2L1.6 0.85L2.45 0L4.13333 1.66667C4.35401 1.61111 4.57862 1.58333 4.80717 1.58333C5.03572 1.58333 5.26111 1.61111 5.48333 1.66667L7.15 0L8 0.85L6.65 2.2C6.90556 2.37778 7.12778 2.58333 7.31667 2.81667C7.50556 3.05 7.65556 3.31111 7.76667 3.6H9.6V4.8H8C8 4.96667 8 5.13333 8 5.3C8 5.46667 8 5.63333 8 5.8H9.6V7H8C8 7.16667 8 7.33333 8 7.5C8 7.66667 8 7.83333 8 8H9.6V9.2H7.76667C7.54444 9.81111 7.16111 10.2972 6.61667 10.6583C6.07222 11.0194 5.46667 11.2 4.8 11.2V11.2" fill="#064E3B"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div data-layer="Margin" className="Margin self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-1.5">
                                <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                    <div data-layer="312" className="self-stretch justify-center text-zinc-900 text-4xl font-bold font-['Syne'] leading-9">312</div>
                                </div>
                                <div data-layer="Container" className="Container self-stretch pt-1 flex flex-col justify-start items-start">
                                    <div data-layer="Identified & Resolved" className="IdentifiedResolved self-stretch justify-center text-zinc-900 text-sm font-semibold font-['Space_Grotesk'] leading-5">{t.qa.metric2Title}</div>
                                </div>
                                <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                    <div data-layer="98.4% Verified Fix Resolution" className="4VerifiedFixResolution self-stretch justify-center text-emerald-800 text-xs font-semibold font-['Space_Grotesk'] leading-4">{t.qa.metric2Body}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-layer="Metric 3: Requirement Coverage" className="Metric3 self-stretch p-6 bg-white rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 md:w-fit  md:flex-1 inline-flex flex-col justify-between items-start">
                        <div data-layer="Container" className="Container self-stretch inline-flex justify-between items-center">
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">{t.qa.metric3Label}</div>
                            </div>
                            <div data-layer="Overlay" className="Overlay size-6 bg-blue-100/30 rounded-full inline-flex justify-center items-center">
                                <div data-svg-wrapper data-layer="Container" className="Container">
                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.05 10.1333L7.2 9.28333L8.75 7.73333L7.2 6.18333L8.05 5.33333L9.6 6.88333L11.15 5.33333L12 6.18333L10.45 7.73333L12 9.28333L11.15 10.1333L9.6 8.58333L8.05 10.1333V10.1333M9.11667 4.53333L6.85 2.26667L7.7 1.41667L9.11667 2.83333L11.9333 0L12.8 0.85L9.11667 4.53333V4.53333M0 8.53333V7.33333H5.6V8.53333H0V8.53333M0 3.33333V2.13333H5.6V3.33333H0V3.33333" fill="#41617D"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div data-layer="Margin" className="Margin self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-1.5">
                                <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-900 text-4xl font-bold font-['Syne'] leading-9">100%</div>
                                </div>
                                <div data-layer="Container" className="Container self-stretch pt-1 flex flex-col justify-start items-start">
                                    <div data-layer="RTM Traceability Matrix" className="RtmTraceabilityMatrix self-stretch justify-center text-zinc-900 text-sm font-semibold font-['Space_Grotesk'] leading-5">{t.qa.metric3Title}</div>
                                </div>
                                <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                    <div data-layer="Full PRD to Test Linkage" className="FullPrdToTestLinkage self-stretch justify-center text-slate-600 text-xs font-semibold font-['Space_Grotesk'] leading-4">{t.qa.metric3Body}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-layer="Metric 4: API Endpoints Tested" className="Metric4 self-stretch p-6 bg-white rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 md:w-fit  md:flex-1 inline-flex flex-col justify-between items-start">
                        <div data-layer="Container" className="Container self-stretch inline-flex justify-between items-center">
                            <div data-layer="Container" className="Container size- pr-3.5 inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">{t.qa.metric4Label}</div>
                            </div>
                            <div data-layer="Overlay" className="Overlay size-5 bg-lime-300/30 rounded-full flex justify-center items-center">
                                <div data-svg-wrapper data-layer="Container" className="Container">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.2 8.8L5.6 7.2L7.2 5.6L8.8 7.2L7.2 8.8V8.8M5.76667 4.63333L4.16667 3.03333L7.2 0L10.2333 3.03333L8.63333 4.63333L7.2 3.2L5.76667 4.63333V4.63333M3.03333 10.2333L0 7.2L3.03333 4.16667L4.63333 5.76667L3.2 7.2L4.63333 8.63333L3.03333 10.2333V10.2333M11.3667 10.2333L9.76667 8.63333L11.2 7.2L9.76667 5.76667L11.3667 4.16667L14.4 7.2L11.3667 10.2333V10.2333M7.2 14.4L4.16667 11.3667L5.76667 9.76667L7.2 11.2L8.63333 9.76667L10.2333 11.3667L7.2 14.4V14.4" fill="#1A1C1B"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div data-layer="Margin" className="Margin self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-1.5">
                                <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                    <div data-layer="160+" className="self-stretch justify-center text-zinc-900 text-4xl font-bold font-['Syne'] leading-9">160+</div>
                                </div>
                                <div data-layer="Container" className="Container self-stretch pt-1 flex flex-col justify-start items-start">
                                    <div data-layer="Automated Contract Suites" className="AutomatedContractSuites self-stretch justify-center text-zinc-900 text-sm font-semibold font-['Space_Grotesk'] leading-5">{t.qa.metric4Title}</div>
                                </div>
                                <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                    <div data-layer="Schema Validation & Boundary Tests" className="SchemaValidationBoundaryTests self-stretch justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.qa.metric4Body}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-layer="4 Core Work Artifact Cards (2x2 Grid)" className="CoreWorkArtifact self-stretch inline-flex flex-col justify-start items-start gap-6">
                    <div className="Artifact1 self-stretch p-7 bg-white rounded-[32px] shadow-[0px_16px_40px_-12px_rgba(0,0,0,0.06)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-start md:justify-between items-center gap-4 overflow-hidden">
                        <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pb-3 border-b border-black/10 inline-flex justify-between items-center">
                            <div data-layer="Paragraph" className="Paragraph inline-flex flex-col justify-start items-start gap-1.5">
                                <div data-layer="Text" className="Text justify-center text-slate-600 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">{t.qa.card1Eyebrow}</div>
                                <div data-layer="Heading 3 → Master Test
                                Plan" className="Heading3MasterTestPlan justify-center text-zinc-900 text-xl font-bold font-['Syne'] leading-6">{t.qa.card1Title}</div>
                            </div>
                            <div data-layer="Background+Border" className="BackgroundBorder size- px-4 py-2 bg-gray-200 rounded-full outline outline-1 outline-offset-[-1px] outline-black/10 md:inline-flex hidden flex-col justify-start items-start">
                                <div data-layer="DOC-TP- 2024" className="DocTp2024 justify-center text-zinc-900 text-xs font-bold font-['JetBrains_Mono'] uppercase leading-4">DOC-TP-2024</div>
                            </div>
                        </div>
                        <div data-layer="Document-Style Preview Thumbnail:margin" className="DocumentStylePreviewThumbnailMargin self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Document-Style Preview Thumbnail" className="DocumentStylePreviewThumbnail self-stretch p-5 bg-stone-100 rounded-2xl shadow-[inset_0px_2px_4px_1px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 flex flex-col justify-start items-start gap-3 overflow-hidden">
                                <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pb-4 border-b border-black/10 inline-flex justify-start items-center gap-2.5">
                                    <div data-layer="Container" className="Container flex-1 flex justify-start items-center gap-3">
                                        <div data-svg-wrapper data-layer="Container" className="Container">
                                            <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.7 11.7H8.1V10.35H2.7V11.7V11.7M2.7 9H8.1V7.65H2.7V9V9M1.34469 14.4C0.973229 14.4 0.65625 14.2678 0.39375 14.0034C0.13125 13.7391 0 13.4213 0 13.05V1.35C0 0.97875 0.132187 0.660938 0.396562 0.396563C0.660938 0.132188 0.97875 0 1.35 0H7.2L10.8 3.6V13.05C10.8 13.4213 10.6677 13.7391 10.4032 14.0034C10.1387 14.2678 9.8207 14.4 9.44924 14.4H1.34469V14.4M6.3 4.5V1.35H1.35V1.35V1.35V13.05V13.05V13.05H9.45V13.05V13.05V4.5H6.3V4.5M1.35 1.35V1.35V4.89375V4.89375V1.35V4.89375V4.89375V13.05V13.05V13.05V13.05V13.05V13.05V1.35V1.35V1.35V1.35" fill="#41617D"/>
                                            </svg>
                                        </div>
                                        <div data-layer="Container" className="Container flex-1 inline-flex flex-col justify-start items-start">
                                            <div data-layer="Prospera_v3.2_Release_TestPlan.md" className="ProsperaV32ReleaseTestplanMd self-stretch justify-center text-zinc-900 text-xs font-medium font-['JetBrains_Mono'] leading-4">Prospera_v3.2_Release_TestPlan.md</div>
                                        </div>
                                    </div>
                                </div>
                                <div data-layer="Container" className="Container self-stretch flex flex-wrap justify-start items-center gap-2">
                                    <div data-layer="Background+Border" className="BackgroundBorder w-full md:flex-1 self-stretch px-3.5 py-2 bg-stone-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-black/10 flex flex-col md:justify-start justify-between items-start gap-1">
                                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                            <div data-layer="Staging · Sandbox · Prod" className="StagingSandboxProd self-stretch justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] leading-4">Staging · Sandbox · Prod</div>
                                        </div>
                                        <div data-layer="Text" className="Text justify-center text-zinc-700 text-[10px] font-semibold font-['Space_Grotesk'] uppercase leading-4">{t.qa.card1Meta1Label}</div>
                                    </div>
                                    <div data-layer="Background+Border" className="BackgroundBorder w-full md:flex-1 self-stretch px-3.5 py-2 bg-stone-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-black/10 flex flex-col md:justify-start justify-between items-start gap-1">
                                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                            <div data-layer="Risk-Based + Shift Left" className="RiskBasedShiftLeft self-stretch justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] leading-4">{t.qa.card1Meta2Value}</div>
                                        </div>
                                        <div data-layer="TESTING APPROACH" className="TestingApproach justify-center text-zinc-700 text-[10px] font-semibold font-['Space_Grotesk'] uppercase leading-4">{t.qa.card1Meta2Label}</div>
                                    </div>
                                    <div data-layer="Background+Border" className="BackgroundBorder w-full md:flex-1 self-stretch px-3.5 py-2 bg-stone-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-black/10 flex flex-col md:justify-start justify-between items-start gap-1">
                                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                            <div data-layer="8 P0 High Impact" className="P0HighImpact self-stretch justify-center text-emerald-900 text-xs font-semibold font-['Space_Grotesk'] leading-4">{t.qa.card1Meta3Value}</div>
                                        </div>
                                        <div data-layer="MITIGATED RISKS" className="MitigatedRisks justify-center text-zinc-700 text-[10px] font-semibold font-['Space_Grotesk'] uppercase leading-4">{t.qa.card1Meta3Label}</div>
                                    </div>
                                </div>
                                <div data-layer="Background+Border" className="BackgroundBorder self-stretch p-3 bg-stone-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-black/10 flex flex-col justify-start items-start gap-1">
                                    <div data-layer="Container" className="Container self-stretch inline-flex justify-start items-center gap-1">
                                        <div data-svg-wrapper data-layer="Background" className="Background">
                                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="5.92" height="6" rx="2.96" fill="black"/>
                                            </svg>
                                        </div>
                                        <div data-layer="Objectives & Boundary Conditions" className="ObjectivesBoundaryConditions justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] leading-4">{t.qa.card1NoteTitle}</div>
                                    </div>
                                    <div data-layer="Container" className="Container self-stretch pb-[0.69px] flex flex-col justify-start items-start">
                                        <div data-layer="Full validation of tier-split pledges, Stripe 3DS payment lifecycle, and cross-browser visual fidelity down to 320px breakpoints." className="FullValidationOfTierSplitPledgesStripe3dsPaymentLifecycleAndCrossBrowserVisualFidelityDownTo320pxBreakpoints self-stretch justify-center text-zinc-700 text-xs font-normal font-['Space_Grotesk'] leading-4">{t.qa.card1NoteBody}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Defines testing scope, strategy, environments (Staging/Sandbox/Prod), entry/exit criteria, and automated regression contingencies before sign-off." className="DefinesTestingScopeStrategyEnvironmentsStagingSandboxProdEntryExitCriteriaAndAutomatedRegressionContingenciesBeforeSignOff self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">{t.qa.card1Body}</div>
                        </div>
                        <div data-layer="Margin" className="Margin self-stretch flex flex-col justify-start items-start">
                            <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pt-4 border-t border-black/10 inline-flex justify-between items-center">
                                <div data-layer="Container" className="Container size- pr-4 inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] leading-4">{t.qa.card1Artifact}</div>
                                </div>
                                <a href="#" data-layer="Link" className="Link size- px-6 py-2 bg-black rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-start items-center gap-1">
                                    <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                        <div data-layer="Text" className="Text justify-center text-white text-xs font-medium font-['Space_Grotesk'] leading-4">{t.qa.card1Cta}</div>
                                    </div>
                                    <div data-svg-wrapper data-layer="Container" className="Container">
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.74375 7.7L0 6.95625L5.90625 1.05H0.7V0H7.7V7H6.65V1.79375L0.74375 7.7V7.7" fill="white"/>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="Artifact2 self-stretch p-8 bg-white rounded-[32px] shadow-[0px_16px_40px_-12px_rgba(0,0,0,0.06)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-between items-start gap-4 overflow-hidden">
                        <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pb-3 border-b border-black/10 inline-flex justify-between items-center">
                            <div data-layer="Paragraph" className="Paragraph flex-1 py-px inline-flex flex-col justify-start items-start gap-2">
                                <div data-layer="DEFECT REPORTING EXPERIENCE" className="DefectReportingExperience self-stretch justify-center text-red-700 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">{t.qa.card2Eyebrow}</div>
                                <div data-layer="Jira-Style Bug Report" className="JiraStyleBugReport self-stretch justify-center text-zinc-900 text-xl font-bold font-['Syne'] leading-6">{t.qa.card2Title}</div>
                            </div>
                        </div>
                        <div data-layer="Jira-Inspired Bug Report Preview:margin" className="JiraInspiredBugReportPreviewMargin self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Jira-Inspired Bug Report Preview" className="JiraInspiredBugReportPreview self-stretch p-5 bg-stone-100 rounded-2xl shadow-[inset_0px_2px_4px_1px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 flex flex-col justify-start items-start gap-3">
                                <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pb-2 border-b border-black/10 inline-flex justify-between items-center">
                                    <div data-layer="Container" className="Container flex-1 pr-1.5 inline-flex flex-col justify-start items-start">
                                        <div data-layer="QA-408: Race condition in Stripe 3DS auth" className="Qa408RaceConditionInStripe3dsAuth self-stretch justify-center text-zinc-900 text-xs font-bold font-['JetBrains_Mono'] leading-4">{t.qa.card2Ticket}</div>
                                    </div>
                                    <div data-layer="Background" className="Background size- pl-2 pr-5 py-0.5 bg-emerald-100 rounded-xl md:inline-flex hidden flex-col justify-start items-start">
                                        <div data-layer="Text" className="Text justify-center text-emerald-950 text-[10px] font-semibold font-['Space_Grotesk'] leading-4">{t.qa.card2Status}</div>
                                    </div>
                                </div>
                                <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-3">
                                    <div data-layer="Background+Border" className="BackgroundBorder self-stretch p-3 bg-stone-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-black/10 flex flex-col justify-start items-start gap-1">
                                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                            <div data-layer="Reproduction Steps:" className="ReproductionSteps self-stretch justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] leading-4">{t.qa.card2StepsTitle}</div>
                                        </div>
                                        <div data-layer="Ordered List" className="OrderedList self-stretch flex flex-col justify-start items-start gap-1">
                                            <div data-layer="Item" className="Item self-stretch inline-flex justify-center items-center">
                                                <div data-layer="Initiate campaign pledge on throttled Slow 3G network" className="InitiateCampaignPledgeOnThrottledSlow3gNetwork flex-1 justify-center text-zinc-700 text-xs font-normal font-['JetBrains_Mono'] leading-4">{t.qa.card2Step1}</div>
                                            </div>
                                            <div data-layer="Item" className="Item self-stretch inline-flex justify-center items-center">
                                                <div data-layer="Trigger 3DS challenge window & submit SCA authorization" className="Trigger3dsChallengeWindowSubmitScaAuthorization flex-1 justify-center text-zinc-700 text-xs font-normal font-['JetBrains_Mono'] leading-4">{t.qa.card2Step2}</div>
                                            </div>
                                            <div data-layer="Item" className="Item self-stretch inline-flex justify-center items-center">
                                                <div data-layer="Simulate concurrent webhook delivery before client redirect" className="SimulateConcurrentWebhookDeliveryBeforeClientRedirect flex-1 justify-center text-zinc-700 text-xs font-normal font-['JetBrains_Mono'] leading-4">{t.qa.card2Step3}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-layer="Container" className="Container self-stretch inline-flex justify-center items-start gap-2.5">
                                        <div data-layer="Background+Border" className="BackgroundBorder flex-1 self-stretch p-2 bg-rose-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-rose-200 inline-flex flex-col justify-start items-start gap-2">
                                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                                <div data-layer="ACTUAL RESULT" className="ActualResult self-stretch justify-center text-rose-950 text-[10px] font-semibold font-['Space_Grotesk'] uppercase leading-4">{t.qa.card2ActualLabel}</div>
                                            </div>
                                            <div data-layer="Text" className="Text justify-center text-rose-900 text-xs font-normal font-['Space_Grotesk'] leading-4">{t.qa.card2Actual}</div>
                                        </div>
                                        <div data-layer="Background+Border" className="BackgroundBorder flex-1 self-stretch p-2 bg-emerald-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-emerald-200 inline-flex flex-col justify-between items-start">
                                            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                                                <div data-layer="EXPECTED RESULT" className="ExpectedResult self-stretch justify-center text-emerald-950 text-[10px] font-semibold font-['Space_Grotesk'] uppercase leading-4">{t.qa.card2ExpectedLabel}</div>
                                            </div>
                                            <div data-layer="Text" className="Text justify-center text-emerald-900 text-xs font-normal font-['Space_Grotesk'] leading-4">{t.qa.card2Expected}</div>
                                        </div>
                                    </div>
                                    <div data-layer="Background+Border" className="BackgroundBorder self-stretch px-3 py-2 bg-stone-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-black/10 flex flex-col justify-start items-start gap-2">
                                        <div data-layer="Container" className="Container self-stretch inline-flex justify-start items-center gap-2">
                                            <div data-svg-wrapper data-layer="Container" className="Container">
                                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.125 10.5C0.815625 10.5 0.550781 10.388 0.330469 10.1641C0.110156 9.9401 0 9.67708 0 9.375V1.125C0 0.822917 0.110156 0.559896 0.330469 0.335938C0.550781 0.111979 0.815625 0 1.125 0H9.375C9.68438 0 9.94922 0.111979 10.1695 0.335938C10.3898 0.559896 10.5 0.822917 10.5 1.125V9.375C10.5 9.67708 10.3898 9.9401 10.1695 10.1641C9.94922 10.388 9.68438 10.5 9.375 10.5H1.125V10.5M1.125 9.375H9.375V9.375V9.375V1.125V1.125V1.125H1.125V1.125V1.125V9.375V9.375V9.375V9.375M1.875 8.25H8.625L6.375 5.25L4.6875 7.5L3.5625 6L1.875 8.25V8.25M1.125 9.375V9.375V9.375V1.125V1.125V1.125V1.125V1.125V1.125V9.375V9.375V9.375V9.375V9.375" fill="#41617D"/>
                                                </svg>
                                            </div>
                                            <div data-layer="Container" className="Container flex-1 inline-flex flex-col justify-start items-start">
                                                <div data-layer="evidence_network_trace_3ds_bug.har (2.4 MB)" className="EvidenceNetworkTrace3dsBugHar24Mb self-stretch justify-center text-zinc-700 text-xs font-normal font-['JetBrains_Mono'] leading-4">evidence_network_trace_3ds_bug.har (2.4 MB)</div>
                                            </div>
                                        </div>
                                        <div data-layer="Container" className="Container size- inline-flex justify-start items-start">
                                            <div data-layer="SCREENSHOT / HAR ATTACHED" className="ScreenshotHarAttached justify-center text-slate-600 text-[10px] font-semibold font-['Space_Grotesk'] uppercase leading-4">{t.qa.card2AttachmentLabel}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Defect reports with granular reproduction steps, expected vsactual outcomes, severity ratings,and network HAR trace evidence." className="DefectReportsWithGranularReproductionStepsExpectedVsactualOutcomesSeverityRatingsAndNetworkHarTraceEvidence self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">{t.qa.card2Body}</div>
                        </div>
                        <div data-layer="Margin" className="Margin self-stretch flex flex-col justify-start items-start">
                            <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pt-4 border-t border-black/10 inline-flex justify-between items-center">
                                <div data-layer="Container" className="Container size- pr-6 inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] leading-4">{t.qa.card2Artifact}</div>
                                </div>
                                <a href="#" data-layer="Link" className="Link size- px-6 py-2 bg-black rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-start items-center gap-1">
                                    <div data-layer="Container" className="Container size- pr-1 inline-flex flex-col justify-start items-start">
                                        <div data-layer="Text" className="Text justify-center text-white text-xs font-medium font-['Space_Grotesk'] leading-4">{t.qa.card2Cta}</div>
                                    </div>
                                    <div data-svg-wrapper data-layer="Container" className="Container">
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.74375 7.7L0 6.95625L5.90625 1.05H0.7V0H7.7V7H6.65V1.79375L0.74375 7.7V7.7" fill="white"/>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="Artifact3 self-stretch p-8 bg-white rounded-[32px] shadow-[0px_16px_40px_-12px_rgba(0,0,0,0.06)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-between items-start overflow-hidden gap-4">
                        <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pb-3 border-b border-black/10 inline-flex justify-between items-center">
                            <div data-layer="Paragraph" className="Paragraph py-px inline-flex flex-col justify-start items-start gap-2">
                                <div data-layer="REQUIREMENT TRACEABILITY" className="RequirementTraceability self-stretch justify-center text-slate-600 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">{t.qa.card3Eyebrow}</div>
                                <div data-layer="TraceabilityMatrix (RTM)" className="TraceabilitymatrixRtm justify-center text-zinc-900 text-xl font-bold font-['Syne'] leading-6">{t.qa.card3Title}</div>
                            </div>
                            <div data-layer="Overlay+Border" className="OverlayBorder size- px-4 py-2 bg-lime-300/30 rounded-full outline outline-1 outline-offset-[-1px] outline-lime-300 inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-semibold font-['Space_Grotesk'] leading-4">{t.qa.card3Badge}</div>
                            </div>
                        </div>
                        <div data-layer="Miniature Traceability Matrix Table:margin" className="MiniatureTraceabilityMatrixTableMargin self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Miniature Traceability Matrix Table" className="MiniatureTraceabilityMatrixTable self-stretch p-4 bg-stone-100 rounded-2xl shadow-[inset_0px_2px_4px_1px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 flex flex-col justify-start items-start overflow-y-auto">
                                <div data-layer="Container" className="Container w-full min-w-80 inline-flex flex-col justify-start items-start gap-2">
                                    <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch px-2 pb-1 border-b border-black/10 inline-flex justify-start items-start">
                                        <div data-layer="Container" className="Container flex-1 inline-flex flex-col justify-start items-start">
                                            <div data-layer="Text" className="Text justify-center text-zinc-700 text-[10px] font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">{t.qa.card3Col1}</div>
                                        </div>
                                        <div data-layer="Container" className="Container flex-1 inline-flex flex-col justify-start items-start">
                                            <div data-layer="Text" className="Text justify-center text-zinc-700 text-[10px] font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">{t.qa.card3Col2}</div>
                                        </div>
                                        <div data-layer="Container" className="Container flex-1 inline-flex flex-col justify-start items-end">
                                            <div data-layer="Text" className="Text text-right justify-center text-zinc-700 text-[10px] font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">{t.qa.card3Col3}</div>
                                        </div>
                                    </div>
                                    <div data-layer="Background+Border" className="BackgroundBorder self-stretch p-2 bg-stone-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-start">
                                        <div data-layer="Container" className="Container flex-1 inline-flex flex-col justify-start items-start">
                                            <div data-layer="REQ-101 Payment Gateway" className="Req101PaymentGateway justify-center text-zinc-900 text-xs font-bold font-['JetBrains_Mono'] leading-4">{t.qa.card3Row1Req}</div>
                                        </div>
                                        <div data-layer="Container" className="Container flex-1 inline-flex flex-col justify-start items-start">
                                            <div data-layer="TC-340: 3DS SCA Challenge" className="Tc3403dsScaChallenge justify-center text-zinc-700 text-xs font-normal font-['JetBrains_Mono'] leading-4">TC-340: 3DS SCA Challenge</div>
                                        </div>
                                        <div data-layer="Container" className="Container flex-1 inline-flex flex-col justify-start items-end">
                                            <div data-layer="Paragraph+Background" className="ParagraphBackground w-fit px-2 py-1 inline-flex bg-emerald-100 rounded-full">
                                                <div data-layer="Text" className="Text text-right justify-center text-emerald-950 text-[10px] font-semibold font-['Space_Grotesk'] leading-4">{t.qa.card3Passed}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-layer="Background+Border" className="BackgroundBorder self-stretch p-2 bg-stone-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-start">
                                        <div data-layer="Container" className="Container flex-1 inline-flex flex-col justify-start items-start">
                                            <div data-layer="REQ-104 Multi- Currency" className="Req104MultiCurrency justify-center text-zinc-900 text-xs font-bold font-['JetBrains_Mono'] leading-4">{t.qa.card3Row2Req}</div>
                                        </div>
                                        <div data-layer="Container" className="Container flex-1 inline-flex flex-col justify-start items-start">
                                            <div data-layer="TC-348: JPY/USD Rounding" className="Tc348JpyUsdRounding justify-center text-zinc-700 text-xs font-normal font-['JetBrains_Mono'] leading-4">TC-348: JPY/USD Rounding</div>
                                        </div>
                                        <div data-layer="Container" className="Container flex-1 inline-flex flex-col justify-start items-end">
                                            <div data-layer="Paragraph+Background" className="ParagraphBackground w-fit py-1 px-2 inline-flex bg-emerald-100 rounded-full">
                                                <div data-layer="Text" className="Text text-right justify-center text-emerald-950 text-[10px] font-semibold font-['Space_Grotesk'] leading-4">{t.qa.card3Passed}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-layer="Background+Border" className="BackgroundBorder self-stretch p-2 bg-stone-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-start">
                                        <div data-layer="Container" className="Container flex-1 inline-flex flex-col justify-start items-start">
                                            <div data-layer="REQ-109 Webhook Sync" className="Req109WebhookSync justify-center text-zinc-900 text-xs font-bold font-['JetBrains_Mono'] leading-4">{t.qa.card3Row3Req}</div>
                                        </div>
                                        <div data-layer="Container" className="Container flex-1 inline-flex flex-col justify-start items-start">
                                            <div data-layer="TC-352: Idempotency Retries" className="Tc352IdempotencyRetries justify-center text-zinc-700 text-xs font-normal font-['JetBrains_Mono'] leading-4">TC-352: Idempotency Retries</div>
                                        </div>
                                        <div data-layer="Container" className="Container flex-1 inline-flex flex-col justify-start items-end">
                                            <div data-layer="Background" className="Background size- px-2 py-1 bg-emerald-100 rounded-full inline-flex justify-end items-start">
                                                <div data-layer="Text" className="Text text-right justify-center text-emerald-950 text-[10px] font-semibold font-['Space_Grotesk'] leading-4">{t.qa.card3Verified}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-layer="Container" className="Container self-stretchflex flex-col justify-start items-start">
                            <div data-layer="Text" className="Text justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">{t.qa.card3Body}</div>
                        </div>
                        <div data-layer="Margin" className="Margin self-stretch flex flex-col justify-start items-start">
                            <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pt-4 border-t border-black/10 inline-flex justify-between items-center">
                                <div data-layer="Container" className="Container size- pr-9 inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] leading-4">{t.qa.card3Artifact}</div>
                                </div>
                                <a href="#" data-layer="Link" className="Link size- px-6 py-2 bg-black rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-start items-center gap-1">
                                    <div data-layer="Container" className="Container size- pr-3 inline-flex flex-col justify-start items-start">
                                        <div data-layer="Text" className="Text justify-center text-white text-xs font-medium font-['Space_Grotesk'] leading-4">{t.qa.card3Cta}</div>
                                    </div>
                                    <div data-svg-wrapper data-layer="Container" className="Container">
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.74375 7.7L0 6.95625L5.90625 1.05H0.7V0H7.7V7H6.65V1.79375L0.74375 7.7V7.7" fill="white"/>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="Artifact4 self-stretch p-8 bg-white rounded-[32px] shadow-[0px_16px_40px_-12px_rgba(0,0,0,0.06)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-between items-start gap-4 overflow-hidden">
                        <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pb-4 border-b border-black/10 inline-flex justify-between items-center">
                            <div data-layer="Paragraph" className="Paragraph max-w-[60%] inline-flex flex-col justify-start items-start gap-1.5">
                                <div data-layer="Text" className="Text justify-center text-slate-600 text-xs font-semibold font-['Space_Grotesk'] uppercase leading-4 tracking-wide">{t.qa.card4Eyebrow}</div>
                                <div className="Heading3PostmanApiTestingCollection justify-center text-zinc-900 text-xl font-bold font-['Syne'] leading-6">{t.qa.card4Title}</div>
                            </div>
                            <div data-layer="Overlay+Border" className="OverlayBorder max-w-[30%] px-3 bg-blue-100/30 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-indigo-300 inline-flex flex-col justify-start items-start">
                                <div data-layer="Postman / Newman" className="PostmanNewman self-stretch justify-center text-slate-600 text-xs font-semibold font-['Space_Grotesk'] leading-4">Postman / Newman</div>
                            </div>
                        </div>
                        <div data-layer="Postman-Inspired Collection Preview:margin" className="PostmanInspiredCollectionPreviewMargin self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Postman-Inspired Collection Preview" className="PostmanInspiredCollectionPreview self-stretch p-4 bg-stone-100 rounded-2xl shadow-[inset_0px_2px_4px_1px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 flex flex-col justify-start items-start gap-2 overflow-x-auto">
                                <div data-layer="Container" className="Container size- flex flex-col justify-start items-start gap-3 overflow-hidden">
                                    <div data-layer="Background+Border" className="BackgroundBorder w-96 md:w-full p-3 bg-stone-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-between items-center">
                                        <div data-layer="Container" className="Container size- flex justify-start items-center gap-2">
                                            <div data-layer="Background" className="Background size- px-1.5 py-0.5 bg-emerald-600 rounded-2xl inline-flex flex-col justify-start items-start">
                                                <div data-layer="Text" className="Text justify-center text-white text-[10px] font-bold font-['JetBrains_Mono'] leading-4">POST</div>
                                            </div>
                                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                                <div data-layer="/api/v1/auth/session" className="ApiV1AuthSession justify-center text-zinc-900 text-xs font-normal font-['JetBrains_Mono']">/api/v1/auth/session</div>
                                            </div>
                                        </div>
                                        <div data-layer="Container" className="Container size- flex justify-start items-center gap-2">
                                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                                <div data-layer="201 Created" className="Created justify-center text-emerald-800 text-xs font-bold font-['JetBrains_Mono'] leading-4">201 Created</div>
                                            </div>
                                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                                <div data-layer="Text" className="Text justify-center text-zinc-700 text-[10px] font-normal font-['JetBrains_Mono'] leading-4">42ms</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-layer="Background+Border" className="BackgroundBorder w-96 md:w-full p-3 bg-stone-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-between items-center">
                                        <div data-layer="Container" className="Container size- flex justify-start items-center gap-2">
                                            <div data-layer="Background" className="Background size- px-1.5 py-0.5 bg-sky-600 rounded-2xl inline-flex flex-col justify-start items-start">
                                                <div data-layer="Text" className="Text justify-center text-white text-[10px] font-bold font-['JetBrains_Mono'] leading-4">GET</div>
                                            </div>
                                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                                <div data-layer="/api/v1/campaigns/pledge" className="ApiV1CampaignsPledge justify-center text-zinc-900 text-xs font-normal font-['JetBrains_Mono']">/api/v1/campaigns/pledge</div>
                                            </div>
                                        </div>
                                        <div data-layer="Container" className="Container size- flex justify-start items-center gap-2">
                                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                                <div data-layer="201 Created" className="Created justify-center text-emerald-800 text-xs font-bold font-['JetBrains_Mono'] leading-4">201 Created</div>
                                            </div>
                                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                                <div data-layer="Text" className="Text justify-center text-zinc-700 text-[10px] font-normal font-['JetBrains_Mono'] leading-4">68ms</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-layer="Background+Border" className="BackgroundBorder w-96 md:w-full p-3 bg-stone-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-between items-center">
                                        <div data-layer="Container" className="Container size- flex justify-start items-center gap-2">
                                            <div data-layer="Background" className="Background size- px-1.5 py-0.5 bg-emerald-600 rounded-2xl inline-flex flex-col justify-start items-start">
                                                <div data-layer="Text" className="Text justify-center text-white text-[10px] font-bold font-['JetBrains_Mono'] leading-4">POST</div>
                                            </div>
                                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                                <div data-layer="/api/v1/webhooks/stripe" className="ApiV1WebhooksStripe justify-center text-zinc-900 text-xs font-normal font-['JetBrains_Mono']">/api/v1/webhooks/stripe</div>
                                            </div>
                                        </div>
                                        <div data-layer="Container" className="Container size- flex justify-start items-center gap-2">
                                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                                <div data-layer="201 Created" className="Created justify-center text-emerald-800 text-xs font-bold font-['JetBrains_Mono'] leading-4">201 Created</div>
                                            </div>
                                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                                <div data-layer="Text" className="Text justify-center text-zinc-700 text-[10px] font-normal font-['JetBrains_Mono'] leading-4">94ms</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-layer="Background" className="Background self-stretch p-3 bg-stone-900 rounded-xl inline-flex justify-start items-center gap-4">
                                        <div data-layer="Code" className="Code size- flex justify-center items-center gap-2.5">
                                            <div className="PmTestStatusIs200SchemaValidPmResponseToHaveStatus200 justify-center text-white/90 text-xs font-normal font-['JetBrains_Mono'] leading-4">pm.test(&quot;Status is 200 &amp; Schema valid&quot;, () =&gt; pm.response.to.have.status(200));</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div className="self-stretch justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5">{t.qa.card4Body}</div>
                        </div>
                        <div data-layer="Margin" className="Margin self-stretch flex flex-col justify-start items-start">
                            <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pt-4 border-t border-black/10 inline-flex justify-between items-center">
                                <div data-layer="Container" className="Container size- pr-4 inline-flex flex-col justify-start items-start">
                                    <div data-layer="Text" className="Text justify-center text-zinc-700 text-xs font-semibold font-['Space_Grotesk'] leading-4">{t.qa.card4Artifact}</div>
                                </div>
                                <a href="#" data-layer="Link" className="Link size- px-6 py-2 bg-black rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-start items-center gap-1">
                                    <div data-layer="Container" className="Container size- pr-[1.70px] inline-flex flex-col justify-start items-start">
                                        <div data-layer="Text" className="Text justify-center text-white text-xs font-medium font-['Space_Grotesk'] leading-4">{t.qa.card4Cta}</div>
                                    </div>
                                    <div data-svg-wrapper data-layer="Container" className="Container">
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.74375 7.7L0 6.95625L5.90625 1.05H0.7V0H7.7V7H6.65V1.79375L0.74375 7.7V7.7" fill="white"/>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-layer="Tools & Platforms Ecosystem Section" className="ToolsPlatformsEcosystemSection self-stretch p-8 bg-gray-200 rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-start items-start gap-4">
                    <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-2">
                        <div data-layer="Container" className="Container self-stretch inline-flex justify-start items-center gap-2">
                            <div data-svg-wrapper data-layer="Background" className="Background">
                                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="7.89" height="10" rx="3.945" fill="black"/>
                                </svg>
                            </div>
                            <div data-layer="Text" className="Text justify-center text-zinc-900 text-xl font-semibold font-['Syne'] leading-6">{t.qa.toolsTitle}</div>
                        </div>
                        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
                            <div data-layer="Hands-on test automation, management & CI/CD toolchain" className="HandsOnTestAutomationManagementCiCdToolchain self-stretch justify-center text-zinc-700 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.qa.toolsSubtitle}</div>
                        </div>
                    </div>
                    <div data-layer="Container" className="Container self-stretch flex flex-wrap justify-start items-start gap-2">
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-3 py-2 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-center gap-2">
                            <div data-svg-wrapper data-layer="Background" className="Background">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="8" height="8" rx="4" fill="#0052CC"/>
                                </svg>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.qa.tool1}</div>
                            </div>
                        </div>
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-3 py-2 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-center gap-2">
                            <div data-svg-wrapper data-layer="Background" className="Background">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="8" height="8" rx="4" fill="#E11D48"/>
                                </svg>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.qa.tool2}</div>
                            </div>
                        </div>
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-3 py-2 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-center gap-2">
                            <div data-svg-wrapper data-layer="Background" className="Background">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="8" height="8" rx="4" fill="#FF6C37"/>
                                </svg>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.qa.tool3}</div>
                            </div>
                        </div>
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-3 py-2 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-center gap-2">
                            <div data-svg-wrapper data-layer="Background" className="Background">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="8" height="8" rx="4" fill="#059669"/>
                                </svg>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.qa.tool4}</div>
                            </div>
                        </div>
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-3 py-2 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-center gap-2">
                            <div data-svg-wrapper data-layer="Background" className="Background">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="8" height="8" rx="4" fill="#0369A1"/>
                                </svg>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.qa.tool5}</div>
                            </div>
                        </div>
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-3 py-2 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-center gap-2">
                            <div data-svg-wrapper data-layer="Background" className="Background">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="8" height="8" rx="4" fill="#0D9488"/>
                                </svg>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.qa.tool6}</div>
                            </div>
                        </div>
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-3 py-2 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-center gap-2">
                            <div data-svg-wrapper data-layer="Background" className="Background">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="8" height="8" rx="4" fill="#10B981"/>
                                </svg>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.qa.tool7}</div>
                            </div>
                        </div>
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-3 py-2 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-center gap-2">
                            <div data-svg-wrapper data-layer="Background" className="Background">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="8" height="8" rx="4" fill="#111827"/>
                                </svg>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.qa.tool8}</div>
                            </div>
                        </div>
                        <div data-layer="Background+Border+Shadow" className="BackgroundBorderShadow size- px-3 py-2 bg-stone-50 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-center gap-2">
                            <div data-svg-wrapper data-layer="Background" className="Background">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="8" height="8" rx="4" fill="#0078D7"/>
                                </svg>
                            </div>
                            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                                <div data-layer="Text" className="Text justify-center text-zinc-900 text-xs font-medium font-['Space_Grotesk'] leading-4">{t.qa.tool9}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}