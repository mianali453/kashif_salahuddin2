import React, { useState, useRef } from "react";
import svgPaths from "./svg-k80nrigi6e";
import imgImage6 from "./ff096eab6273d38dc67d30a0a7ce6d2313cce1ab.png";
import imgImage4 from "./aa657f4fa22ef926586f7e8f1e899b13d2aabab7.png";
import imgImage171 from "./ca543d5264aebf5d9426e80142bbcd568c1ecb00.png";
import imgImage9 from "./8e73b8238d14bf31948a8351675520eb6e955c13.png";
import imgDownload11 from "./7e038803d44a35e66363cf1a048e79444959ddb5.png";
import img57Eb4E2A01A343549A4C0Ab07Ffdd9341 from "./27ed000fd129edabc49dc29a591ba20c50aa56ff.png";
import imgLumsLogoWhite1 from "./de4b490b6efec868f96daf49f7017187416afea7.png";
import { imgGroup } from "./svg-2v0zk";
import Herosection from "../Herosection-1/Herosection-3-1846";

function H1() {
  return (
    <div className="flex flex-col items-center pb-[6.01px] relative shrink-0 text-[36px] md:text-[54px] text-center text-white w-full" data-name="h3">
      <div className="flex flex-col font-[‘DM_Sans:Bold’,sans-serif] font-bold justify-center relative shrink-0" style={{ fontVariationSettings: "’opsz’ 14" }}>
        <p className="leading-[1.2] mb-0">Your next breakthrough</p>
      </div>
      <div className="flex flex-col font-[‘IBM_Plex_Serif:Medium_Italic’,sans-serif] italic justify-center relative shrink-0">
        <p className="leading-[1.2]">is closer than you think.</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="flex flex-col items-center pt-[10px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-[‘DM_Sans:Regular’,sans-serif] font-normal justify-center relative shrink-0 text-[16px] md:text-[17.6px] text-center text-white" style={{ fontVariationSettings: "’opsz’ 14" }}>
        <p className="leading-[1.4] mb-0">Whether it’s one bold move or ten subtle shifts, Jay helps you uncover</p>
        <p className="leading-[1.4]">the growth hiding in plain sight without adding risk, cost or complexity.</p>
      </div>
    </div>
  );
}

function ArrowRightBlackSvg() {
  return (
    <div className="h-[11px] relative shrink-0 w-[14px]" data-name="arrow-right-black.svg">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[11px] overflow-clip relative shrink-0 w-[13.2px]" data-name="Component 1">
          <div className="absolute inset-[50.92%_12.5%_49.08%_0]" data-name="Vector">
            <div className="absolute inset-[-0.83px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5504 1.65">
                <path d="M0 0.825H11.5504" id="Vector" stroke="var(--stroke-0, #342646)" strokeWidth="1.65" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[10%_9.17%_45%_53.33%]" data-name="Vector">
            <div className="absolute inset-[-11.79%_-11.78%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.11683 6.11641">
                <path d={svgPaths.p2114ec00} id="Vector" stroke="var(--stroke-0, #342646)" strokeWidth="1.65" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[45.92%_8.33%_9.08%_54.17%]" data-name="Vector">
            <div className="absolute inset-[-11.79%_-11.78%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.11683 6.11642">
                <path d={svgPaths.p1361e780} id="Vector" stroke="var(--stroke-0, #342646)" strokeWidth="1.65" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ACtaMargin() {
  return (
    <div className="flex flex-col items-center relative shrink-0" data-name="a.cta:margin">
      <a className="bg-[#efac25] content-stretch cursor-pointer flex gap-[10px] items-center justify-center pb-[17.39px] pl-[36px] pr-[46px] pt-[16px] relative rounded-[40px] shrink-0" data-name="Component 2" href="#">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[40px]" />
        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#02103f] text-[0px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="cursor-pointer leading-[22.4px] text-[16px]" role="link" style={{ fontVariationSettings: "'opsz' 14" }} tabIndex="0">{`Apply now `}</p>
        </div>
        <ArrowRightBlackSvg />
      </a>
    </div>
  );
}

function DivCtaCenter() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pt-px relative shrink-0 w-full" data-name="div.cta-center">
      <ACtaMargin />
    </div>
  );
}

function DivSingleInner() {
  return (
    <div className="flex flex-col gap-[29px] items-center relative shrink-0 w-full" data-name="div.single-inner-600">
      <H1 />
      <P />
      <DivCtaCenter />
    </div>
  );
}

function DivContent() {
  return (
    <div className="flex flex-col items-center max-w-[1440px] py-[80px] md:py-[120px] px-[24px] md:px-[276px] relative shrink-0 w-full" data-name="div.content">
      <DivSingleInner />
    </div>
  );
}

function SectionSingleCta() {
  return (
    <div className="bg-[#1c3980] flex flex-col items-center w-full" data-name="section.single-cta">
      <DivContent />
    </div>
  );
}

// ─── Social icon SVGs ────────────────────────────────────────────────────────

function FacebookIcon() {
  return (
    <svg width="7" height="13" viewBox="0 0 6.97 12.1247" fill="none">
      <path d={svgPaths.p2e2c1d80} fill="black" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="13" height="11" viewBox="0 0 12.29 10.3827" fill="none">
      <path d={svgPaths.p3fbe1400} fill="black" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path clipRule="evenodd" d={svgPaths.p191bbe00} fill="black" fillRule="evenodd" />
      <path d={svgPaths.p1c82c200} fill="black" />
      <path d={svgPaths.p1b755c00} fill="black" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path clipRule="evenodd" d={svgPaths.p7e30c00} fill="black" fillRule="evenodd" />
      <path clipRule="evenodd" d={svgPaths.p20d00c00} fill="black" fillRule="evenodd" />
      <path d={svgPaths.p1d2ad800} fill="black" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 10.6144" fill="none">
      <path d={svgPaths.p35749800} fill="black" />
    </svg>
  );
}

function SocialButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-[#ededed] cursor-pointer flex items-center justify-center rounded-full shrink-0 size-[35px] hover:border-black transition-colors"
    >
      {children}
    </a>
  );
}

// ─── Footer link helper ───────────────────────────────────────────────────────

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="font-['DM_Sans:Regular',sans-serif] font-normal text-[16px] leading-[22.4px] text-black hover:underline py-[4px]"
      style={{ fontVariationSettings: "'opsz' 14" }}
    >
      {children}
    </a>
  );
}

// ─── Footer section heading ───────────────────────────────────────────────────

function FooterHeading({ label }: { label: string }) {
  return (
    <p
      className="font-['DM_Sans:Bold',sans-serif] font-bold text-[16px] leading-[22.4px] text-black uppercase mb-[10px]"
      style={{ fontVariationSettings: "'opsz' 14" }}
    >
      {label}
    </p>
  );
}

// ─── SectionFooter ────────────────────────────────────────────────────────────

function DivColumn() {
  return null; // replaced by SectionFooter below
}

function Li() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0 w-full" data-name="li">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black uppercase w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[22.4px]">CONNECT</p>
      </div>
    </div>
  );
}

function Li1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5.41px] pt-[4px] relative shrink-0 w-full" data-name="li">
      <a className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black w-full" href="#" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="cursor-pointer text-[16px]">
          <span className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[22.4px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            About K
          </span>
          <span className="leading-[22.4px]">ashif</span>
        </p>
      </a>
    </div>
  );
}

function Li2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5.41px] pt-[4px] relative shrink-0 w-full" data-name="li">
      <a className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black w-full" href="#" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="cursor-pointer leading-[22.4px] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Contact
        </p>
      </a>
    </div>
  );
}

function Li3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5.41px] pt-[4px] relative shrink-0 w-full" data-name="li">
      <a className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black w-full" href="#" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="cursor-pointer leading-[22.4px] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Media Speaking
        </p>
      </a>
    </div>
  );
}

function Li4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5.41px] pt-[4px] relative shrink-0 w-full" data-name="li">
      <a className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black w-full" href="#" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="cursor-pointer leading-[22.4px] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Membership Access
        </p>
      </a>
    </div>
  );
}

function Ul() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[19px] relative shrink-0 w-full" data-name="ul">
      <Li />
      <Li1 />
      <Li2 />
      <Li3 />
      <Li4 />
    </div>
  );
}

function DivColumn1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[129.63px] relative shrink-0 w-[172.8px]" data-name="div.column">
      <Ul />
    </div>
  );
}

function Li5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0 w-full" data-name="li">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black uppercase w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[22.4px]">POLICIES</p>
      </div>
    </div>
  );
}

function Li6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5.41px] pt-[4px] relative shrink-0 w-full" data-name="li">
      <a className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black w-full" href="#" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="cursor-pointer leading-[22.4px] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Disclaimer
        </p>
      </a>
    </div>
  );
}

function Li7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5.41px] pt-[4px] relative shrink-0 w-full" data-name="li">
      <a className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black w-full" href="#" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="cursor-pointer leading-[22.4px] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Anti-Spam Policy
        </p>
      </a>
    </div>
  );
}

function Li8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5.41px] pt-[4px] relative shrink-0 w-full" data-name="li">
      <a className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black w-full" href="#" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="cursor-pointer leading-[22.4px] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Email Policy
        </p>
      </a>
    </div>
  );
}

function Li9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5.41px] pt-[4px] relative shrink-0 w-full" data-name="li">
      <a className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black w-full" href="#" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="cursor-pointer leading-[22.4px] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Earnings Disclaimer
        </p>
      </a>
    </div>
  );
}

function Li10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5.41px] pt-[4px] relative shrink-0 w-full" data-name="li">
      <a className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black w-full" href="#" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="cursor-pointer leading-[22.4px] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          External Links Policy
        </p>
      </a>
    </div>
  );
}

function Li11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5.41px] pt-[4px] relative shrink-0 w-full" data-name="li">
      <a className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black w-full" href="#" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="cursor-pointer leading-[22.4px] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Privacy Policy
        </p>
      </a>
    </div>
  );
}

function Li12() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5.41px] pt-[4px] relative shrink-0 w-full" data-name="li">
      <a className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black w-full" href="#" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="cursor-pointer leading-[22.4px] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Terms of Use
        </p>
      </a>
    </div>
  );
}

function Li13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5.41px] pt-[4px] relative shrink-0 w-full" data-name="li">
      <a className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black w-full" href="#" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="cursor-pointer leading-[22.4px] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Testimonial Disclaimer
        </p>
      </a>
    </div>
  );
}

function Ul1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[19px] relative shrink-0 w-[172.8px]" data-name="ul">
      <Li5 />
      <Li6 />
      <Li7 />
      <Li8 />
      <Li9 />
      <Li10 />
      <Li11 />
      <Li12 />
      <Li13 />
    </div>
  );
}

function Li14() {
  return (
    <div className="absolute bottom-[55px] left-0 top-[5px]" data-name="li">
      <div className="content-stretch flex flex-col h-full items-start py-[5px] relative">
        <a className="content-stretch cursor-pointer flex items-center justify-center p-px relative rounded-[17.5px] shrink-0 size-[35px]" data-name="Component 4" href="#">
          <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[17.5px]" />
          <div className="h-[13px] relative shrink-0 w-[7px]" data-name="Component 1">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[0_0.43%_6.73%_0]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.97 12.1247">
                  <path d={svgPaths.p2e2c1d80} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

function Li15() {
  return (
    <div className="absolute bottom-[55px] left-[45px] top-[5px]" data-name="li">
      <div className="content-stretch flex flex-col h-full items-start py-[5px] relative">
        <a className="content-stretch cursor-pointer flex items-center justify-center p-px relative rounded-[17.5px] shrink-0 size-[35px]" data-name="Component 4" href="#">
          <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[17.5px]" />
          <div className="h-[11px] relative shrink-0 w-[13px]" data-name="Component 1">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[0_5.46%_5.61%_0]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.29 10.3827">
                  <path d={svgPaths.p3fbe1400} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

function Li16() {
  return (
    <div className="absolute bottom-[55px] left-[90px] top-[5px]" data-name="li">
      <div className="content-stretch flex flex-col h-full items-start py-[5px] relative">
        <a className="content-stretch cursor-pointer flex items-center justify-center p-px relative rounded-[17.5px] shrink-0 size-[35px]" data-name="Component 4" href="#">
          <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[17.5px]" />
          <div className="relative shrink-0 size-[12px]" data-name="Component 1">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[0_75.27%_75.27%_0]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.9671 2.9671">
                  <path d={svgPaths.p191bbe00} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[32.98%_75.27%_1.08%_0]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.9671 7.91229">
                  <path d={svgPaths.p1c82c200} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[28.28%_1.08%_1.67%_32.98%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.91224 8.40684">
                  <path d={svgPaths.p1b755c00} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

function Li17() {
  return (
    <div className="absolute bottom-[55px] left-[135px] top-[5px]" data-name="li">
      <div className="content-stretch flex flex-col h-full items-start py-[5px] relative">
        <a className="content-stretch cursor-pointer flex items-center justify-center p-px relative rounded-[17.5px] shrink-0 size-[35px]" data-name="Component 4" href="#">
          <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[17.5px]" />
          <div className="relative shrink-0 size-[13px]" data-name="Component 1">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[1.92%_3.37%_3.37%_1.92%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3125 12.3125">
                  <path clipRule="evenodd" d={svgPaths.p7e30c00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[28.61%_30.05%_30.05%_28.61%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.375 5.375">
                  <path clipRule="evenodd" d={svgPaths.p20d00c00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[18.37%_22.69%_71.2%_66.88%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.35625 1.35625">
                  <path d={svgPaths.p1d2ad800} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[14.62%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.6144">
        <g id="Group">
          <path d={svgPaths.p35749800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SvgRepoIconCarrier() {
  return (
    <div className="absolute contents inset-[14.62%_0]" data-name="SVGRepo_iconCarrier">
      <Group />
    </div>
  );
}

function Li18() {
  return (
    <div className="absolute bottom-[55px] left-[180px] top-[5px]" data-name="li">
      <div className="content-stretch flex flex-col h-full items-start py-[5px] relative">
        <a className="content-stretch cursor-pointer flex items-center justify-center p-px relative rounded-[17.5px] shrink-0 size-[35px]" data-name="Component 4" href="#">
          <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[17.5px]" />
          <div className="relative shrink-0 size-[15px]" data-name="Component 1">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <SvgRepoIconCarrier />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

function UlSocial() {
  return (
    <div className="h-[63px] relative shrink-0 w-full" data-name="ul.social">
      <Li14 />
      <Li15 />
      <Li16 />
      <Li17 />
      <Li18 />
    </div>
  );
}

function P1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12.8px] text-[rgba(0,0,0,0.5)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[17.92px] mb-0">Copyright © 2026 Kashif Salahuddin</p>
        <p className="leading-[17.92px]">Group. All Rights Reserved</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col gap-[19.5px] items-start min-w-[230.38999938964844px] pb-[20.01px] relative shrink-0 w-[230.39px]" data-name="div">
      <UlSocial />
      <P1 />
    </div>
  );
}

function DivColumn2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[230.39px]" data-name="div.column">
      <Div />
    </div>
  );
}

function DivContent1() {
  return (
    <div className="content-stretch flex gap-[11.5px] items-start justify-center max-w-[1440px] py-[60px] relative shrink-0 w-[988px]" data-name="div.content">
      <DivColumn />
      <DivColumn1 />
      <Ul1 />
      <DivColumn2 />
    </div>
  );
}

function SectionFooter() {
  return (
    <footer className="bg-white w-full" data-name="section.footer">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[144px] py-[60px]" data-name="div.content">
        <div className="flex flex-col md:flex-row gap-10 md:gap-6 items-start justify-between">

          {/* Logo column */}
          <div className="shrink-0 md:w-[241px]" data-name="div.column">
            <p className="font-['IBM_Plex_Serif:Medium_Italic',sans-serif] italic text-[20px] leading-[1.3] text-black">
              <span className="font-medium">KASHIF </span>
              <span className="font-['IBM_Plex_Serif:ExtraLight_Italic',sans-serif] font-extralight">SALAHUDDIN</span>
            </p>
          </div>

          {/* Connect column */}
          <div className="flex flex-col items-start md:w-[173px]" data-name="div.column">
            <FooterHeading label="CONNECT" />
            <FooterLink href="#">About Kashif</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="#">Media Speaking</FooterLink>
            <FooterLink href="#">Membership Access</FooterLink>
          </div>

          {/* Policies column */}
          <div className="flex flex-col items-start md:w-[173px]" data-name="ul">
            <FooterHeading label="POLICIES" />
            <FooterLink href="#">Disclaimer</FooterLink>
            <FooterLink href="#">Anti-Spam Policy</FooterLink>
            <FooterLink href="#">Email Policy</FooterLink>
            <FooterLink href="#">Earnings Disclaimer</FooterLink>
            <FooterLink href="#">External Links Policy</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Use</FooterLink>
            <FooterLink href="#">Testimonial Disclaimer</FooterLink>
          </div>

          {/* Social + Copyright column */}
          <div className="flex flex-col gap-5 md:w-[230px]" data-name="div.column">
            {/* Social icons */}
            <div className="flex flex-row flex-wrap gap-[10px]" data-name="ul.social">
              <SocialButton href="#">
                <FacebookIcon />
              </SocialButton>
              <SocialButton href="#">
                <TwitterIcon />
              </SocialButton>
              <SocialButton href="#">
                <LinkedInIcon />
              </SocialButton>
              <SocialButton href="#">
                <InstagramIcon />
              </SocialButton>
              <SocialButton href="#">
                <YoutubeIcon />
              </SocialButton>
            </div>

            {/* Copyright */}
            <p
              className="font-['DM_Sans:Regular',sans-serif] font-normal text-[12.8px] leading-[17.92px] text-[rgba(0,0,0,0.5)]"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              Copyright © 2026 Kashif Salahuddin<br />Group. All Rights Reserved
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}



function SectionSectionSideBySide() {
  return (
    <div className="about-section-wrap" data-name="section.section-side-by-side">
      <style>{`
        .about-section-wrap {
          background: #10245f;
          width: 100%;
          box-sizing: border-box;
          padding: 80px 144px 0;
        }
        .about-sbs {
          display: flex;
          flex-direction: row;
          gap: 80px;
          align-items: flex-start;
          width: 100%;
        }
        .about-left {
          flex: 1 0 0;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .about-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: white;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin: 0;
        }
        .about-heading {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .about-heading-bold {
          font-family: 'IBM Plex Serif', serif;
          font-weight: 700;
          font-style: normal;
          font-size: clamp(32px, 3.8vw, 54px);
          line-height: 1.2;
          color: white;
          display: block;
        }
        .about-heading-italic {
          font-family: 'IBM Plex Serif', serif;
          font-weight: 500;
          font-style: italic;
          font-size: clamp(32px, 3.8vw, 54px);
          line-height: 1.2;
          color: white;
          display: block;
        }
        .about-right {
          flex: 1 0 0;
          display: flex;
          flex-direction: column;
          gap: 22px;
          padding-top: 60px;
        }
        .about-para {
          font-family: 'DM Sans', sans-serif;
          font-size: 17px;
          line-height: 1.6;
          color: white;
          margin: 0;
        }
        .about-stats-wrap {
          width: 100%;
          margin-top: 60px;
          border-top: 1px solid rgba(237,237,237,0.35);
          border-bottom: 1px solid rgba(237,237,237,0.35);
          padding: 40px 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          box-sizing: border-box;
        }
        .about-stat-box {
          background: rgba(255,255,255,0.18);
          border-radius: 20px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .about-stat-number {
          font-family: 'IBM Plex Serif', serif;
          font-weight: 500;
          font-size: clamp(48px, 5vw, 75px);
          color: white;
          line-height: 1;
          text-align: center;
        }
        .about-stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: white;
          text-align: center;
        }
        @media (max-width: 768px) {
          .about-section-wrap {
            padding: 48px 24px 0;
          }
          .about-sbs {
            flex-direction: column;
            gap: 28px;
          }
          .about-left,
          .about-right {
            flex: unset;
            width: 100%;
          }
          .about-right {
            padding-top: 0;
          }
          .about-stats-wrap {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 40px;
          }
        }
        @media (min-width: 769px) and (max-width: 1100px) {
          .about-section-wrap {
            padding: 60px 40px 0;
          }
          .about-sbs {
            gap: 40px;
          }
          .about-right {
            padding-top: 20px;
          }
        }
      `}</style>

      <div className="about-sbs">
        <div className="about-left">
          <p className="about-label">About Kashif Salahuddin</p>
          <div className="about-heading">
            <span className="about-heading-bold">Trusted by CEOs to stop firefighting</span>
            <span className="about-heading-italic">and build businesses that run without them</span>
          </div>
        </div>
        <div className="about-right">
          <p className="about-para">Kashif Salahuddin is the structured thinking behind measurable leadership transformations across Pakistan and beyond.</p>
          <p className="about-para">But his edge isn't in adding more systems — it's in removing what's broken.</p>
          <p className="about-para">Sometimes it's one accountability gap. More often, it's one quiet structural failure that has been draining control for years.</p>
          <p className="about-para">From scaling founder-led businesses to enterprise leadership teams, Kashif helps high-performing CEOs unlock more control, clarity and growth — without chaos, reinvention or burnout.</p>
        </div>
      </div>

      <div className="about-stats-wrap">
        <div className="about-stat-box">
          <span className="about-stat-number">+10</span>
          <span className="about-stat-label">CEOs Coached Privately</span>
        </div>
        <div className="about-stat-box">
          <span className="about-stat-number">+20</span>
          <span className="about-stat-label">Organizations Worked With</span>
        </div>
        <div className="about-stat-box">
          <span className="about-stat-number">5x</span>
          <span className="about-stat-label">Revenue Growth Delivered</span>
        </div>
      </div>
    </div>
  );
}

function H3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3">
      <p className="font-['Gellix:SemiBold',sans-serif] not-italic text-[28px] md:text-[36px] leading-[1.44] md:leading-[52px] text-black text-center md:text-left w-full">
        <span>{`One coach. `}</span>
        <span className="text-[#1947d0]">6 engagement models.</span>
        <span className="text-[#10245f]">{` `}</span>
        <span>Choose the model that matches your moment.</span>
      </p>
    </div>
  );
}

function DivSideBySideLeft1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[2px] relative" data-name="div.side-by-side-left">
      <H3 />
    </div>
  );
}

function P12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <p className="font-['Gellix:Regular',sans-serif] leading-normal not-italic text-[#999393] text-[18px] md:text-[32px] text-center md:text-left w-full">{`One thing stays constant: clarity comes fast and the fixes run deep. Kashif doesn't sell a program. He builds a working relationship.`}</p>
    </div>
  );
}

function DivSideBySideRight1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.side-by-side-right">
      <P12 />
    </div>
  );
}

function DivSideBySideRightMargin1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[9px] relative" data-name="div.side-by-side-right:margin">
      <DivSideBySideRight1 />
    </div>
  );
}

function DivSideBySideWr1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.side-by-side-wr">
      <div className="flex flex-col md:flex-row gap-[24px] md:gap-[48px] lg:gap-[115px] md:items-start w-full">
        <div className="w-full md:flex-1 pt-[2px]">
          <H3 />
        </div>
        <div className="w-full md:flex-1 md:pt-[9px]">
          <P12 />
        </div>
      </div>
    </div>
  );
}

function P13() {
  return (
    <div className="flex-[1_0_0] h-[61.38px] min-h-px min-w-px relative" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Gellix:Bold',sans-serif] h-[62px] justify-center leading-[0] left-0 not-italic text-[21.9px] text-black top-[29.85px] w-[150.41px]">
          <p className="leading-[30.69px]">Strategic Discovery Call</p>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[6.26%_20.82%_6.26%_20.83%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.7565 34.119">
        <g id="Group">
          <path d={svgPaths.p1f10980} fill="var(--fill-0, #1947D0)" id="Vector" />
          <path d={svgPaths.p5118680} fill="var(--fill-0, #1947D0)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="overflow-clip relative shrink-0 size-[39px]" data-name="Frame">
      <Group1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#d8e3ff] h-[52px] relative rounded-[8px] shrink-0 w-[53px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Frame />
      </div>
    </div>
  );
}

function DivBoxTop() {
  return (
    <div className="content-stretch flex gap-[43.61px] h-[133px] items-start pb-[41px] relative shrink-0 w-full" data-name="div.box-top">
      <div aria-hidden="true" className="absolute border-[#022886] border-b border-solid inset-0 pointer-events-none" />
      <P13 />
      <Frame11 />
    </div>
  );
}

function DivBoxTopMargin() {
  return (
    <div className="h-[193px] mb-[-0.805px] relative shrink-0 w-full" data-name="div.box-top:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[60px] relative size-full">
        <DivBoxTop />
      </div>
    </div>
  );
}

function P14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17.6px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24.64px]">Free Discovery Call Gratis for approved CEOs Kashif invites you to a focused diagnostic conversation before you commit to anything. No pitch. No pressure.</p>
      </div>
    </div>
  );
}

function ArrowRightBlackSvg1() {
  return (
    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}>
      <path d="M0 5.5H12" stroke="#022886" strokeWidth="1.65" />
      <path d="M7.5 0.5L13 5.5" stroke="#022886" strokeWidth="1.65" />
      <path d="M7.5 10.5L13 5.5" stroke="#022886" strokeWidth="1.65" />
    </svg>
  );
}

function Component() {
  return (
    <a className="absolute bottom-[0.13px] content-stretch cursor-pointer flex gap-[10px] items-center left-0" data-name="Component 8" href="#">
      <div className="flex flex-col font-['Gellix:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#022886] text-[17.6px] text-left whitespace-nowrap">
        <p className="leading-[24.64px]">{`Read more `}</p>
      </div>
      <ArrowRightBlackSvg1 />
    </a>
  );
}

function DivBoxBtm() {
  return (
    <div className="flex-[1_0_0] mb-[-0.805px] min-h-px min-w-px relative w-full" data-name="div.box-btm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[30px] items-start pb-[25px] relative size-full">
        <P14 />
        <Component />
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#f4f5fa] flex flex-col items-start p-[40px] rounded-[20px] h-full" data-name="Component 9">
      <div className="flex gap-[43px] items-start w-full pb-[41px] mb-[60px] border-b border-[#022886]">
        <div className="flex-1 font-['Gellix:Bold',sans-serif] not-italic text-[21.9px] text-black">
          <p className="leading-[30.69px]">Strategic Discovery Call</p>
        </div>
        <Frame11 />
      </div>
      <div className="flex flex-col gap-[30px] flex-1 w-full">
        <div className="font-['DM_Sans:Regular',sans-serif] font-normal text-[17.6px] text-black leading-[24.64px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p>Free Discovery Call Gratis for approved CEOs Kashif invites you to a focused diagnostic conversation before you commit to anything. No pitch. No pressure.</p>
        </div>
        <a className="flex gap-[10px] items-center cursor-pointer" href="#">
          <span className="font-['Gellix:SemiBold',sans-serif] not-italic text-[#022886] text-[17.6px] leading-[24.64px]">Read more </span>
          <ArrowRightBlackSvg1 />
        </a>
      </div>
    </div>
  );
}

function P15() {
  return (
    <div className="flex-[1_0_0] h-[61.38px] min-h-px min-w-px relative" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Gellix:Bold',sans-serif] h-[62px] justify-center leading-[0] left-[-0.35px] not-italic text-[21.9px] text-black top-[30px] w-[212px]">
          <p className="leading-[30.69px]">Business Breakthrough Diagnosis</p>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[6.26%_6.46%_6.26%_6.47%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.9561 34.1152">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p39dc00} fill="var(--fill-0, #1947D0)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[39px]" data-name="Frame">
      <Group2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#d8e3ff] h-[52px] relative rounded-[8px] shrink-0 w-[53px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Frame1 />
      </div>
    </div>
  );
}

function DivBoxTop1() {
  return (
    <div className="content-stretch flex gap-[43.61px] h-[133px] items-start pb-[41px] relative shrink-0 w-full" data-name="div.box-top">
      <div aria-hidden="true" className="absolute border-[#022886] border-b border-solid inset-0 pointer-events-none" />
      <P15 />
      <Frame12 />
    </div>
  );
}

function DivBoxTopMargin1() {
  return (
    <div className="h-[193px] mb-[-0.805px] relative shrink-0 w-full" data-name="div.box-top:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[60px] relative size-full">
        <DivBoxTop1 />
      </div>
    </div>
  );
}

function P16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17.6px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24.64px]">{`Breakthrough Diagnosis Day Starting from PKR 150,000 A full-day intensive to expose what's broken, what's repeating, and what must be fixed first.`}</p>
      </div>
    </div>
  );
}

function ArrowRightBlackSvg2() {
  return <ArrowRightBlackSvg1 />;
}

function Component2() {
  return (
    <a className="absolute bottom-[0.13px] content-stretch cursor-pointer flex gap-[10px] items-center left-0" data-name="Component 8" href="#">
      <div className="flex flex-col font-['Gellix:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#022886] text-[17.6px] text-left whitespace-nowrap">
        <p className="leading-[24.64px]">{`Read more `}</p>
      </div>
      <ArrowRightBlackSvg2 />
    </a>
  );
}

function DivBoxBtm1() {
  return (
    <div className="flex-[1_0_0] mb-[-0.805px] min-h-px min-w-px relative w-full" data-name="div.box-btm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[30px] items-start pb-[25px] relative size-full">
        <P16 />
        <Component2 />
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-[#f4f5fa] flex flex-col items-start p-[40px] rounded-[20px] h-full" data-name="Component 12">
      <div className="flex gap-[43px] items-start w-full pb-[41px] mb-[60px] border-b border-[#022886]">
        <div className="flex-1 font-['Gellix:Bold',sans-serif] not-italic text-[21.9px] text-black">
          <p className="leading-[30.69px]">Business Breakthrough Diagnosis</p>
        </div>
        <Frame12 />
      </div>
      <div className="flex flex-col gap-[30px] flex-1 w-full">
        <div className="font-['DM_Sans:Regular',sans-serif] font-normal text-[17.6px] text-black leading-[24.64px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p>{`Breakthrough Diagnosis Day Starting from PKR 150,000 A full-day intensive to expose what's broken, what's repeating, and what must be fixed first.`}</p>
        </div>
        <a className="flex gap-[10px] items-center cursor-pointer" href="#">
          <span className="font-['Gellix:SemiBold',sans-serif] not-italic text-[#022886] text-[17.6px] leading-[24.64px]">Read more </span>
          <ArrowRightBlackSvg2 />
        </a>
      </div>
    </div>
  );
}

function P17() {
  return (
    <div className="flex-[1_0_0] h-[61.38px] min-h-px min-w-px relative" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Gellix:Bold',sans-serif] h-[62px] justify-center leading-[0] left-0 not-italic text-[21.9px] text-black top-[29.85px] w-[150.41px]">
          <p className="leading-[30.69px]">Elite CEO Coaching</p>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[5%_4.95%_5%_5%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.1189 35.1007">
        <g id="Group">
          <path d={svgPaths.p28a76980} fill="var(--fill-0, #1947D0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[39px]" data-name="Frame">
      <Group3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#d8e3ff] h-[52px] relative rounded-[8px] shrink-0 w-[53px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Frame2 />
      </div>
    </div>
  );
}

function DivBoxTop2() {
  return (
    <div className="content-stretch flex gap-[43.61px] h-[133px] items-start pb-[41px] relative shrink-0 w-full" data-name="div.box-top">
      <div aria-hidden="true" className="absolute border-[#022886] border-b border-solid inset-0 pointer-events-none" />
      <P17 />
      <Frame13 />
    </div>
  );
}

function DivBoxTopMargin2() {
  return (
    <div className="h-[193px] mb-[-0.805px] relative shrink-0 w-full" data-name="div.box-top:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[60px] relative size-full">
        <DivBoxTop2 />
      </div>
    </div>
  );
}

function P18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17.6px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24.64px]">Private CEO Coaching Starting from PKR 400,000 Deep, ongoing engagement. Custom systems. Real accountability. For CEOs serious about building a business that runs without them.</p>
      </div>
    </div>
  );
}

function ArrowRightBlackSvg3() {
  return <ArrowRightBlackSvg1 />;
}

function Component3() {
  return (
    <a className="absolute bottom-[0.13px] content-stretch cursor-pointer flex gap-[10px] items-center left-0" data-name="Component 8" href="#">
      <div className="flex flex-col font-['Gellix:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#022886] text-[17.6px] text-left whitespace-nowrap">
        <p className="leading-[24.64px]">{`Read more `}</p>
      </div>
      <ArrowRightBlackSvg3 />
    </a>
  );
}

function DivBoxBtm2() {
  return (
    <div className="flex-[1_0_0] mb-[-0.805px] min-h-px min-w-px relative w-full" data-name="div.box-btm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[30px] items-start pb-[25px] relative size-full">
        <P18 />
        <Component3 />
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-[#f4f5fa] flex flex-col items-start p-[40px] rounded-[20px] h-full" data-name="Component 13">
      <div className="flex gap-[43px] items-start w-full pb-[41px] mb-[60px] border-b border-[#022886]">
        <div className="flex-1 font-['Gellix:Bold',sans-serif] not-italic text-[21.9px] text-black">
          <p className="leading-[30.69px]">Elite CEO Coaching</p>
        </div>
        <Frame13 />
      </div>
      <div className="flex flex-col gap-[30px] flex-1 w-full">
        <div className="font-['DM_Sans:Regular',sans-serif] font-normal text-[17.6px] text-black leading-[24.64px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p>Private CEO Coaching Starting from PKR 400,000 Deep, ongoing engagement. Custom systems. Real accountability. For CEOs serious about building a business that runs without them.</p>
        </div>
        <a className="flex gap-[10px] items-center cursor-pointer" href="#">
          <span className="font-['Gellix:SemiBold',sans-serif] not-italic text-[#022886] text-[17.6px] leading-[24.64px]">Read more </span>
          <ArrowRightBlackSvg3 />
        </a>
      </div>
    </div>
  );
}

function P19() {
  return (
    <div className="flex-[1_0_0] h-[61.38px] min-h-px min-w-px relative" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Gellix:Bold',sans-serif] h-[62px] justify-center leading-[0] left-0 not-italic text-[21.9px] text-black top-[29.85px] w-[150.41px]">
          <p className="leading-[30.69px]">CEO Growth Immersion</p>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[3.18%_3.13%_3.12%_3.1%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.5703 36.5406">
        <g id="Group">
          <path d={svgPaths.p27ec0d00} fill="var(--fill-0, #1947D0)" id="Vector" />
          <path d={svgPaths.p289bbe00} fill="var(--fill-0, #1947D0)" id="Vector_2" />
          <path d={svgPaths.p16377000} fill="var(--fill-0, #1947D0)" id="Vector_3" />
          <path d={svgPaths.p3c034d00} fill="var(--fill-0, #1947D0)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[39px]" data-name="Frame">
      <Group4 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#d8e3ff] h-[52px] relative rounded-[8px] shrink-0 w-[53px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Frame3 />
      </div>
    </div>
  );
}

function DivBoxTop3() {
  return (
    <div className="content-stretch flex gap-[43.61px] h-[133px] items-start pb-[41px] relative shrink-0 w-full" data-name="div.box-top">
      <div aria-hidden="true" className="absolute border-[#022886] border-b border-solid inset-0 pointer-events-none" />
      <P19 />
      <Frame14 />
    </div>
  );
}

function DivBoxTopMargin3() {
  return (
    <div className="h-[193px] mb-[-0.805px] relative shrink-0 w-full" data-name="div.box-top:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[60px] relative size-full">
        <DivBoxTop3 />
      </div>
    </div>
  );
}

function P20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17.6px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24.64px]">{` Group CEO Immersion Starting from PKR 75,000 A small cohort of non-competing CEOs. Structured over multiple sessions. Breakthroughs built in community.`}</p>
      </div>
    </div>
  );
}

function ArrowRightBlackSvg4() {
  return <ArrowRightBlackSvg1 />;
}

function Component7() {
  return (
    <a className="absolute bottom-[0.13px] content-stretch cursor-pointer flex gap-[10px] items-center left-0" data-name="Component 8" href="#">
      <div className="flex flex-col font-['Gellix:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#022886] text-[17.6px] text-left whitespace-nowrap">
        <p className="leading-[24.64px]">{`Read more `}</p>
      </div>
      <ArrowRightBlackSvg4 />
    </a>
  );
}

function DivBoxBtm3() {
  return (
    <div className="flex-[1_0_0] mb-[-0.805px] min-h-px min-w-px relative w-full" data-name="div.box-btm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[30px] items-start pb-[25px] relative size-full">
        <P20 />
        <Component7 />
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-[#f4f5fa] flex flex-col items-start p-[40px] rounded-[20px] h-full" data-name="Component 14">
      <div className="flex gap-[43px] items-start w-full pb-[41px] mb-[60px] border-b border-[#022886]">
        <div className="flex-1 font-['Gellix:Bold',sans-serif] not-italic text-[21.9px] text-black">
          <p className="leading-[30.69px]">CEO Growth Immersion</p>
        </div>
        <Frame14 />
      </div>
      <div className="flex flex-col gap-[30px] flex-1 w-full">
        <div className="font-['DM_Sans:Regular',sans-serif] font-normal text-[17.6px] text-black leading-[24.64px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p>{` Group CEO Immersion Starting from PKR 75,000 A small cohort of non-competing CEOs. Structured over multiple sessions. Breakthroughs built in community.`}</p>
        </div>
        <a className="flex gap-[10px] items-center cursor-pointer" href="#">
          <span className="font-['Gellix:SemiBold',sans-serif] not-italic text-[#022886] text-[17.6px] leading-[24.64px]">Read more </span>
          <ArrowRightBlackSvg4 />
        </a>
      </div>
    </div>
  );
}

function P21() {
  return (
    <div className="flex-[1_0_0] h-[61.38px] min-h-px min-w-px relative" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Gellix:Bold',sans-serif] h-[62px] justify-center leading-[0] left-[-0.35px] not-italic text-[21.9px] text-black top-[29.54px] w-[196px]">
          <p className="leading-[30.69px]">Leadership Execution Training</p>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[16.9%_9.8%_16.8%_9.9%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.317 25.857">
        <g id="Group">
          <path d={svgPaths.p39c04400} fill="var(--fill-0, #1947D0)" id="Vector" />
          <path d={svgPaths.p1b55fe00} fill="var(--fill-0, #1947D0)" id="Vector_2" />
          <path d={svgPaths.p10ff980} fill="var(--fill-0, #1947D0)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[16.9%_9.8%_16.8%_9.9%]" data-name="Group">
      <Group7 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[16.9%_9.8%_16.8%_9.9%]" data-name="Group">
      <Group6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[39px]" data-name="Frame">
      <Group5 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#d8e3ff] h-[52px] relative rounded-[8px] shrink-0 w-[53px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Frame4 />
      </div>
    </div>
  );
}

function DivBoxTop4() {
  return (
    <div className="content-stretch flex gap-[43.61px] h-[133px] items-start pb-[41px] relative shrink-0 w-full" data-name="div.box-top">
      <div aria-hidden="true" className="absolute border-[#022886] border-b border-solid inset-0 pointer-events-none" />
      <P21 />
      <Frame15 />
    </div>
  );
}

function DivBoxTopMargin4() {
  return (
    <div className="h-[193px] mb-[-0.805px] relative shrink-0 w-full" data-name="div.box-top:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[60px] relative size-full">
        <DivBoxTop4 />
      </div>
    </div>
  );
}

function P22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17.6px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24.64px]">Leadership Team Training Starting from PKR 200,000 Turn your second layer into execution owners. Kashif has trained 600+ professionals at Pak Suzuki, PureLogics and more.</p>
      </div>
    </div>
  );
}

function ArrowRightBlackSvg5() {
  return <ArrowRightBlackSvg1 />;
}

function Component9() {
  return (
    <a className="absolute bottom-[0.13px] content-stretch cursor-pointer flex gap-[10px] items-center left-0" data-name="Component 8" href="#">
      <div className="flex flex-col font-['Gellix:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#022886] text-[17.6px] text-left whitespace-nowrap">
        <p className="leading-[24.64px]">{`Read more `}</p>
      </div>
      <ArrowRightBlackSvg5 />
    </a>
  );
}

function DivBoxBtm4() {
  return (
    <div className="flex-[1_0_0] mb-[-0.805px] min-h-px min-w-px relative w-full" data-name="div.box-btm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[30px] items-start pb-[25px] relative size-full">
        <P22 />
        <Component9 />
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="bg-[#f4f5fa] flex flex-col items-start p-[40px] rounded-[20px] h-full" data-name="Component 15">
      <div className="flex gap-[43px] items-start w-full pb-[41px] mb-[60px] border-b border-[#022886]">
        <div className="flex-1 font-['Gellix:Bold',sans-serif] not-italic text-[21.9px] text-black">
          <p className="leading-[30.69px]">Leadership Execution Training</p>
        </div>
        <Frame15 />
      </div>
      <div className="flex flex-col gap-[30px] flex-1 w-full">
        <div className="font-['DM_Sans:Regular',sans-serif] font-normal text-[17.6px] text-black leading-[24.64px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p>Leadership Team Training Starting from PKR 200,000 Turn your second layer into execution owners. Kashif has trained 600+ professionals at Pak Suzuki, PureLogics and more.</p>
        </div>
        <a className="flex gap-[10px] items-center cursor-pointer" href="#">
          <span className="font-['Gellix:SemiBold',sans-serif] not-italic text-[#022886] text-[17.6px] leading-[24.64px]">Read more </span>
          <ArrowRightBlackSvg5 />
        </a>
      </div>
    </div>
  );
}

function P23() {
  return (
    <div className="flex-[1_0_0] h-[61.38px] min-h-px min-w-px relative" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Gellix:Bold',sans-serif] h-[62px] justify-center leading-[0] left-[0.31px] not-italic text-[21.9px] text-black top-[29.54px] w-[199px]">
          <p className="leading-[30.69px]">Executive Legacy Mentorship</p>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[0.06%_0_6.05%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.0001 36.6174">
        <g id="Group">
          <path d={svgPaths.p9a09900} fill="var(--fill-0, #1947D0)" id="Vector" />
          <path d={svgPaths.p116cc80} fill="var(--fill-0, #1947D0)" id="Vector_2" />
          <path d={svgPaths.p338f5b00} fill="var(--fill-0, #1947D0)" id="Vector_3" />
          <path d={svgPaths.p13531800} fill="var(--fill-0, #1947D0)" id="Vector_4" />
          <path d={svgPaths.p2dff7700} fill="var(--fill-0, #1947D0)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[39px]" data-name="Frame">
      <Group8 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#d8e3ff] h-[52px] relative rounded-[8px] shrink-0 w-[53px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Frame5 />
      </div>
    </div>
  );
}

function DivBoxTop5() {
  return (
    <div className="content-stretch flex gap-[43.61px] h-[133px] items-start pb-[41px] relative shrink-0 w-full" data-name="div.box-top">
      <div aria-hidden="true" className="absolute border-[#022886] border-b border-solid inset-0 pointer-events-none" />
      <P23 />
      <Frame16 />
    </div>
  );
}

function DivBoxTopMargin5() {
  return (
    <div className="h-[193px] mb-[-0.805px] relative shrink-0 w-full" data-name="div.box-top:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[60px] relative size-full">
        <DivBoxTop5 />
      </div>
    </div>
  );
}

function P24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17.6px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24.64px]">Executive Mentorship Starting from PKR 300,000 Long-term mentorship for leaders who want to think bigger, lead better and build something that outlasts them.</p>
      </div>
    </div>
  );
}

function ArrowRightBlackSvg6() {
  return <ArrowRightBlackSvg1 />;
}

function Component11() {
  return (
    <a className="absolute bottom-[0.13px] content-stretch cursor-pointer flex gap-[10px] items-center left-0" data-name="Component 8" href="#">
      <div className="flex flex-col font-['Gellix:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#022886] text-[17.6px] text-left whitespace-nowrap">
        <p className="leading-[24.64px]">{`Read more `}</p>
      </div>
      <ArrowRightBlackSvg6 />
    </a>
  );
}

function DivBoxBtm5() {
  return (
    <div className="flex-[1_0_0] mb-[-0.805px] min-h-px min-w-px relative w-full" data-name="div.box-btm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[30px] items-start pb-[25px] relative size-full">
        <P24 />
        <Component11 />
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="bg-[#f4f5fa] flex flex-col items-start p-[40px] rounded-[20px] h-full" data-name="Component 16">
      <div className="flex gap-[43px] items-start w-full pb-[41px] mb-[60px] border-b border-[#022886]">
        <div className="flex-1 font-['Gellix:Bold',sans-serif] not-italic text-[21.9px] text-black">
          <p className="leading-[30.69px]">Executive Legacy Mentorship</p>
        </div>
        <Frame16 />
      </div>
      <div className="flex flex-col gap-[30px] flex-1 w-full">
        <div className="font-['DM_Sans:Regular',sans-serif] font-normal text-[17.6px] text-black leading-[24.64px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p>Executive Mentorship Starting from PKR 300,000 Long-term mentorship for leaders who want to think bigger, lead better and build something that outlasts them.</p>
        </div>
        <a className="flex gap-[10px] items-center cursor-pointer" href="#">
          <span className="font-['Gellix:SemiBold',sans-serif] not-italic text-[#022886] text-[17.6px] leading-[24.64px]">Read more </span>
          <ArrowRightBlackSvg6 />
        </a>
      </div>
    </div>
  );
}

function DivBoxesWr() {
  const [activeCard, setActiveCard] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll<HTMLElement>(".snap-card");
    if (!cards.length) return;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - containerCenter);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActiveCard(closest);
  };

  const cardList = [
    <Component1 />,
    <Component4 />,
    <Component5 />,
    <Component6 />,
    <Component8 />,
    <Component10 />,
  ];

  return (
    <div className="w-full" data-name="div.boxes-wr">
      {/* Desktop (≥1024px): 3-column grid */}
      <div className="hidden lg:grid grid-cols-3 gap-[20px]">
        {cardList}
      </div>
      {/* Tablet (768px–1023px): 2-column grid */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-[20px]">
        {cardList}
      </div>
      {/* Mobile (<768px): horizontal scroll carousel */}
      <div className="md:hidden">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-[16px] px-[24px] pb-[4px]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {cardList.map((card, i) => (
            <div key={i} className="snap-card snap-center shrink-0 w-[85vw]">
              {card}
            </div>
          ))}
        </div>
        {/* Dot indicators */}
        <div className="flex justify-center items-center gap-[8px] mt-[24px]">
          {cardList.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${
                i === activeCard
                  ? "w-[32px] h-[8px] bg-[#022886]"
                  : "w-[8px] h-[8px] bg-[#d9d9d9]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function DivSideC1() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] md:gap-[90px] items-start w-full pb-[80px] md:pb-[121px] pt-[60px] md:pt-[120px] relative" data-name="div.side-c">
      <div aria-hidden="true" className="absolute border-[#ededed] border-b border-solid inset-0 pointer-events-none" />
      <DivSideBySideWr1 />
      <DivBoxesWr />
    </div>
  );
}

function SectionSectionSideBySide1() {
  return (
    <div className="bg-white flex flex-col items-center w-full px-[0px] md:px-[40px] lg:px-[144px]" data-name="section.section-side-by-side">
      <DivSideC1 />
    </div>
  );
}

function H4() {
  return (
    <div className="flex flex-col items-center text-center text-black w-full max-w-[750px]" data-name="h3">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="text-[36px] md:text-[54px] leading-[1.2] md:leading-[64.8px]">Clarity. Structure.</p>
      </div>
      <div className="flex flex-col font-['IBM_Plex_Serif:Medium_Italic',sans-serif] italic justify-center">
        <p className="text-[36px] md:text-[54px] leading-[1.2] md:leading-[64.8px]">{` Control Restored.`}</p>
      </div>
    </div>
  );
}

function P25() {
  return (
    <div className="flex flex-col items-center w-full max-w-[750px] text-center px-[24px] md:px-0" data-name="p">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal text-[17.6px] text-black leading-[24.64px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span className="font-['DM_Sans:SemiBold',sans-serif] font-semibold text-[#022886]" style={{ fontVariationSettings: "'opsz' 14" }}>{`CEO Coaching `}</span>
        <span>{`is a high-leverage intervention that redefines what's possible using what you already have. There are three levels of change Kashif works through:`}</span>
      </p>
    </div>
  );
}

function P26() {
  return (
    <div className="flex-[1_0_0] h-[61.38px] min-h-px min-w-px relative" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[62px] justify-center leading-[0] left-0 text-[21.9px] text-white top-[29.85px] w-[157.9px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[30.69px]">Rapid Stabilization</p>
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[9.66%_1.56%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.5 38.7228">
        <g id="Group">
          <path d={svgPaths.p37c65b80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Frame">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group9 />
      </div>
    </div>
  );
}

function DivBoxTop6() {
  return (
    <div className="content-stretch flex gap-[33.61px] h-[102px] items-start pb-[41px] relative shrink-0 w-full" data-name="div.box-top">
      <div aria-hidden="true" className="absolute border-[#ededed] border-b border-solid inset-0 pointer-events-none" />
      <P26 />
      <Frame6 />
    </div>
  );
}

function DivBoxTopMargin6() {
  return (
    <div className="h-[162px] mb-[-0.56px] relative shrink-0 w-full" data-name="div.box-top:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[60px] relative size-full">
        <DivBoxTop6 />
      </div>
    </div>
  );
}

function P27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17.6px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24.64px] mb-0">Tactical shifts (pricing,</p>
        <p className="leading-[24.64px] mb-0">messaging, packaging) that</p>
        <p className="leading-[24.64px] mb-0">multiply results fast with zero</p>
        <p className="leading-[24.64px]">extra cost.</p>
      </div>
    </div>
  );
}

function DivBoxBtm6() {
  return (
    <div className="flex-[1_0_0] mb-[-0.56px] min-h-px min-w-px relative w-full" data-name="div.box-btm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] relative size-full">
        <P27 />
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="bg-[#10245f] flex flex-col items-start p-[40px] rounded-[20px]" data-name="Component 9">
      <div className="flex gap-[33px] items-start w-full pb-[41px] mb-[60px] border-b border-[#ededed]">
        <div className="flex-1 font-['DM_Sans:Bold',sans-serif] font-bold text-[21.9px] text-white leading-[30.69px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p>Rapid Stabilization</p>
        </div>
        <Frame6 />
      </div>
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal text-[17.6px] text-white leading-[24.64px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p>Tactical shifts (pricing, messaging, packaging) that multiply results fast with zero extra cost.</p>
      </div>
    </div>
  );
}

function P28() {
  return (
    <div className="flex-[1_0_0] h-[61.38px] min-h-px min-w-px relative" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[62px] justify-center leading-[0] left-0 text-[21.9px] text-white top-[29.85px] w-[157.9px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[30.69px]">Organizational Restructuring</p>
        </div>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[3.54%_2.54%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.5625 44.6032">
        <g id="Group">
          <path d={svgPaths.p29c19300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Frame">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group10 />
      </div>
    </div>
  );
}

function DivBoxTop7() {
  return (
    <div className="h-[102px] relative shrink-0 w-full" data-name="div.box-top">
      <div aria-hidden="true" className="absolute border-[#ededed] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[30px] items-start pb-[41px] relative size-full">
        <P28 />
        <Frame7 />
      </div>
    </div>
  );
}

function DivBoxTopMargin7() {
  return (
    <div className="h-[162px] mb-[-0.56px] relative shrink-0 w-full" data-name="div.box-top:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[60px] relative size-full">
        <DivBoxTop7 />
      </div>
    </div>
  );
}

function P29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17.6px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24.64px] mb-0">Mid-size shifts to models,</p>
        <p className="leading-[24.64px] mb-0">positioning and systems that</p>
        <p className="leading-[24.64px] mb-0">create sustainable performance</p>
        <p className="leading-[24.64px]">improvements.</p>
      </div>
    </div>
  );
}

function DivBoxBtm7() {
  return (
    <div className="flex-[1_0_0] mb-[-0.56px] min-h-px min-w-px relative w-full" data-name="div.box-btm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] relative size-full">
        <P29 />
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="bg-[#10245f] flex flex-col items-start p-[40px] rounded-[20px]" data-name="Component 9">
      <div className="flex gap-[30px] items-start w-full pb-[41px] mb-[60px] border-b border-[#ededed]">
        <div className="flex-1 font-['DM_Sans:Bold',sans-serif] font-bold text-[21.9px] text-white leading-[30.69px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p>Organizational Restructuring</p>
        </div>
        <Frame7 />
      </div>
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal text-[17.6px] text-white leading-[24.64px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p>Mid-size shifts to models, positioning and systems that create sustainable performance improvements.</p>
      </div>
    </div>
  );
}

function P30() {
  return (
    <div className="flex-[1_0_0] h-[61.38px] min-h-px min-w-px relative" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[62px] justify-center leading-[0] left-0 text-[21.9px] text-white top-[29.85px] w-[182.72px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[30.69px]">Business Transformation</p>
        </div>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[0.84%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.0002 47.1945">
        <g id="Group">
          <path d={svgPaths.p1b452080} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3d595f80} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Frame">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group11 />
      </div>
    </div>
  );
}

function DivBoxTop8() {
  return (
    <div className="content-stretch flex gap-[32.61px] h-[102px] items-start pb-[41px] relative shrink-0 w-full" data-name="div.box-top">
      <div aria-hidden="true" className="absolute border-[#ededed] border-b border-solid inset-0 pointer-events-none" />
      <P30 />
      <Frame8 />
    </div>
  );
}

function DivBoxTopMargin8() {
  return (
    <div className="h-[162px] relative shrink-0 w-full" data-name="div.box-top:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[60px] relative size-full">
        <DivBoxTop8 />
      </div>
    </div>
  );
}

function P31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17.6px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24.64px] mb-0">Rare, tectonic changes that</p>
        <p className="leading-[24.64px] mb-0">redefine your company, and often</p>
        <p className="leading-[24.64px]">your category.</p>
      </div>
    </div>
  );
}

function DivBoxBtm8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div.box-btm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] relative size-full">
        <P31 />
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="bg-[#10245f] flex flex-col items-start p-[40px] rounded-[20px]" data-name="Component 9">
      <div className="flex gap-[32px] items-start w-full pb-[41px] mb-[60px] border-b border-[#ededed]">
        <div className="flex-1 font-['DM_Sans:Bold',sans-serif] font-bold text-[21.9px] text-white leading-[30.69px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p>Business Transformation</p>
        </div>
        <Frame8 />
      </div>
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal text-[17.6px] text-white leading-[24.64px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p>Rare, tectonic changes that redefine your company, and often your category.</p>
      </div>
    </div>
  );
}

function DivBoxesWr1() {
  return (
    <div className="w-full pt-[71px]" data-name="div.boxes-wr">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
        <Component12 />
        <Component13 />
        <Component14 />
      </div>
    </div>
  );
}

function PMarginTop() {
  return <div className="h-[66px] w-full" data-name="p.margin-top" />;
}

function DivJayBlock() {
  return (
    <div className="relative w-full flex-1 min-h-[360px] md:min-h-[500px] overflow-hidden rounded-2xl" data-name="div.jay-block" style={{ minHeight: 360 }}>
      <img
        alt="Kashif on stage"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={imgImage6}
      />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </div>
  );
}

function DivSideBySideLeft2() {
  return (
    <div className="w-full md:flex-1 flex flex-col items-start self-stretch" data-name="div.side-by-side-left">
      <DivJayBlock />
    </div>
  );
}

function PFaqQuestion() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.faq_question">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] pr-[40px] relative w-full">
        <div className="absolute flex h-[2px] items-center justify-center right-[9px] top-[19px] w-[20px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="bg-[#02103f] h-[20px] w-[2px]" data-name="::before" />
          </div>
        </div>
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[25.6px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[35.84px]">What does a breakthrough look like?</p>
        </div>
        <div className="absolute bg-[#02103f] h-[2px] right-[9px] top-[20px] w-[20px]" data-name="::after" />
      </div>
    </div>
  );
}

function P32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17.6px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24.64px]">All real. All executed. All safe.</p>
      </div>
    </div>
  );
}

function CheckBlack2SvgClip() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0.69px_0_0_0] items-start overflow-clip pb-[34.517px] pr-[502.39px] pt-[3px]" data-name="check-black-2.svg clip">
      <div className="h-[11.733px] overflow-clip relative shrink-0 w-[16px]" data-name="Component 1">
        <div className="absolute inset-[11.16%_11.81%_16.11%_8.06%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-8.32%_-17.68%_-8.32%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9536 11.1084">
              <path d={svgPaths.p15a74d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2.13333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckSvg() {
  return (
    <svg width="16" height="12" viewBox="0 0 14.9536 11.1084" fill="none" style={{ flexShrink: 0, marginTop: 6 }}>
      <path d={svgPaths.p15a74d00} stroke="black" strokeLinecap="round" strokeWidth="2.13333" />
    </svg>
  );
}

const breakthroughItems: { text: string; bold: boolean }[] = [
  { text: "Timeshare protection company → 4x growth, 4x margin via pricing loophole", bold: false },
  { text: "SaaS platform → Became recommended vendor; 6x revenue—no risk, no extra spend", bold: true },
  { text: "Health business → $1.9M net profit uplift via simple partner strategy", bold: false },
  { text: "Supplement brand → 3x sales from a semantic shift", bold: true },
  { text: "Entrepreneur Magazine → 9x revenue by repurposing underutilized IP", bold: false },
  { text: "Repositioned offer → Became #1 in category", bold: true },
  { text: "Tweaked sales narrative → Cut CAC by 41%", bold: false },
  { text: "Found $4M/year in trapped revenue via underused partnerships", bold: true },
];

function UlBlackList() {
  return (
    <div className="flex flex-col gap-[19.3px] w-full" data-name="ul.black-list">
      {breakthroughItems.map((item, i) => (
        <div key={i} className="flex items-start gap-[14px] w-full">
          <CheckSvg />
          <p
            className={`text-[17.6px] leading-[24.64px] text-black m-0 ${item.bold ? "font-['DM_Sans:Bold',sans-serif] font-bold" : "font-['DM_Sans:Regular',sans-serif] font-normal"}`}
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}

function P33() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[0.7px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17.6px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24.64px]">Some are small. Some are strategic. All are exponential.</p>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[29.3px] items-start relative w-full">
        <P32 />
        <UlBlackList />
        <P33 />
      </div>
    </div>
  );
}

function PFaqQuestion1() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.faq_question">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] pr-[40px] relative w-full">
        <div className="absolute bg-[#02103f] h-[20px] right-[17.61px] top-[10px] w-[2px]" data-name="::before" />
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[25.6px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[35.84px]">What happens when you engage Kashif?</p>
        </div>
        <div className="absolute bg-[#02103f] h-[2px] right-[8.61px] top-[20px] w-[20px]" data-name="::after" />
      </div>
    </div>
  );
}

function DivFaqRow() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.faq_row">
      <div aria-hidden="true" className="absolute border-[#ededed] border-b border-solid inset-0 pointer-events-none" />
      <PFaqQuestion1 />
    </div>
  );
}

function PFaqQuestion2() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.faq_question">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] pr-[40px] relative w-full">
        <div className="absolute bg-[#02103f] h-[20px] right-[17.61px] top-[10px] w-[2px]" data-name="::before" />
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[25.6px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[35.84px]">Who is this for?</p>
        </div>
        <div className="absolute bg-[#02103f] h-[2px] right-[8.61px] top-[20px] w-[20px]" data-name="::after" />
      </div>
    </div>
  );
}

function DivFaqRow1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.faq_row">
      <div aria-hidden="true" className="absolute border-[#ededed] border-b border-solid inset-0 pointer-events-none" />
      <PFaqQuestion2 />
    </div>
  );
}

function DivFaqSectionRow() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="div.faq_section_row">
      <div className="content-stretch flex flex-col items-start pb-[40.99px] relative shrink-0 w-full" data-name="Component 10">
        <div aria-hidden="true" className="absolute border-[#02103f] border-b border-solid inset-0 pointer-events-none" />
        <PFaqQuestion />
        <Div1 />
      </div>
      <DivFaqRow />
      <DivFaqRow1 />
    </div>
  );
}

function DivSideBySideRight2() {
  return (
    <div className="w-full md:flex-1 flex flex-col items-start" data-name="div.side-by-side-right">
      <DivFaqSectionRow />
    </div>
  );
}

function DivSideBySideWr2() {
  return (
    <div className="flex flex-col md:flex-row items-start pt-[71px] w-full gap-[40px] md:gap-[115px]" data-name="div.side-by-side-wr">
      <DivSideBySideLeft2 />
      <DivSideBySideRight2 />
    </div>
  );
}

function DivSideC2() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-center w-full pb-[80px] md:pb-[120px] pt-[51px] relative" data-name="div.side-c">
      <div className="flex flex-col font-['Gellix:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[#022886] text-[21.9px] text-center">
        <p className="leading-[30.69px]">WHAT IS CEO COACHING?</p>
      </div>
      <H4 />
      <P25 />
      <DivBoxesWr1 />
      <PMarginTop />
      <DivSideBySideWr2 />
    </div>
  );
}

function SectionSectionSideBySide2() {
  return (
    <div className="bg-white flex flex-col items-center w-full px-[24px] md:px-[144px]" data-name="section.section-side-by-side">
      <DivSideC2 />
    </div>
  );
}

function H5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6.2px] relative shrink-0 text-[36px] md:text-[54px] text-black w-full" data-name="h3">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[13px] text-[#022886] uppercase tracking-[1.5px] mb-3">
        <p className="leading-[1.4]">WHO IS THIS FOR?</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0">
        <p className="leading-[1.2] mb-0">Why CEOs come to</p>
        <p className="leading-[1.2]">Kashif Salahuddin</p>
      </div>
    </div>
  );
}

function P34() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[11.2px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17.6px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24.64px] mb-2">When you want a training program, you call a corporate trainer.</p>
        <p className="leading-[24.64px] mb-2">When you want the firefighting to actually stop, you call Kashif.</p>
        <p className="leading-[24.64px]">Because the right structural fix, placed precisely, outperforms months of effort. Here's why CEOs trust Kashif:</p>
      </div>
    </div>
  );
}

function DivSideBySideLeft3() {
  return (
    <div className="flex flex-col md:flex-[1_0_0] gap-[28.8px] items-start w-full md:min-h-px md:min-w-px pt-[2px] relative" data-name="div.side-by-side-left">
      <H5 />
      <P34 />
    </div>
  );
}

const whoSteps = [
  {
    num: "01.",
    title: "Real results, not theory",
    body: "Kashif has delivered measurable outcomes — 5x revenue, 40% client growth, 600+ people trained — across industries and organization types.",
  },
  {
    num: "02.",
    title: "Cross-sector pattern recognition",
    body: "Insights drawn from coaching, training and advising across tech, manufacturing, education, development and enterprise. No tunnel vision.",
  },
  {
    num: "03.",
    title: "Clarity over complexity",
    body: "Kashif simplifies. No extra layers. No chaos. Just smarter execution of what's already working — and removal of what isn't.",
  },
  {
    num: "04.",
    title: "Direct. No filters. No committees.",
    body: "Private, 1:1 access. You work with Kashif directly, not a junior associate or a framework handed off by someone else.",
  },
  {
    num: "05.",
    title: "Built for your specific situation",
    body: "Whether you need 10 tactical fixes, one structural reset, or a full leadership rebuild — Kashif meets you where your business actually is.",
  },
];

function DivStepsBox() { return null; }
function DivStepsBox1() { return null; }
function DivStepsBox2() { return null; }
function DivStepsBox3() { return null; }
function DivStepsBox4() { return null; }

function DivSideBySideRight3() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="div.side-by-side-right">
      {whoSteps.map((step, i) => (
        <div key={i} className="content-stretch flex flex-col gap-[12.8px] items-start pb-[41px] relative shrink-0 w-full border-b border-[#ededed]" data-name="div.steps-box">
          <p className="font-['IBM_Plex_Serif:Medium_Italic',sans-serif] italic text-[#a2a1a1] text-[31.2px] leading-[31.2px] m-0">{step.num}</p>
          <p className="font-['DM_Sans:Bold',sans-serif] font-bold text-[26.7px] leading-[37.41px] text-black m-0" style={{ fontVariationSettings: "'opsz' 14" }}>{step.title}</p>
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal text-[17.6px] leading-[24.64px] text-black m-0" style={{ fontVariationSettings: "'opsz' 14" }}>{step.body}</p>
        </div>
      ))}
    </div>
  );
}

function DivSideBySideRightMargin2() {
  return (
    <div className="flex md:flex-[1_0_0] flex-col items-start w-full md:min-h-px md:min-w-px md:pt-[60px] relative" data-name="div.side-by-side-right:margin">
      <DivSideBySideRight3 />
    </div>
  );
}

function DivSideBySideWr3() {
  return (
    <div className="flex flex-col md:flex-row gap-[40px] md:gap-[115px] items-start relative w-full" data-name="div.side-by-side-wr">
      <DivSideBySideLeft3 />
      <DivSideBySideRightMargin2 />
    </div>
  );
}

function DivSideC3() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1440px] py-[80px] md:py-[120px] relative w-full" data-name="div.side-c">
      <DivSideBySideWr3 />
    </div>
  );
}

function SectionSectionSideBySide3() {
  return (
    <div className="bg-[#f4f5fa] flex flex-col items-center w-full px-[24px] md:px-[144px]" data-name="section.section-side-by-side">
      <DivSideC3 />
    </div>
  );
}

function H6() {
  return (
    <div className="w-full" data-name="h3">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.2] text-[32px] md:text-[54px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">{`Growth isn't about`}</p>
        <p className="mb-0">
          <span className="font-['DM_Sans:Bold',sans-serif] font-bold text-black" style={{ fontVariationSettings: "'opsz' 14" }}>{`doing more. It's about `}</span>
          <span className="font-['IBM_Plex_Serif:Light_Italic',sans-serif] italic">knowing where to apply force.</span>
        </p>
      </div>
    </div>
  );
}

function P36() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[10.01px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17.6px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24.64px]">When you want a report, you call a consulting firm. When you want the firefighting to stop, you call Kashif.</p>
      </div>
    </div>
  );
}

function P37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17.6px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24.64px]">Cross-sector pattern recognition Insights from tech, manufacturing, education, development and enterprise. No tunnel vision.</p>
      </div>
    </div>
  );
}

function P38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17.6px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24.64px]">{`Clarity over complexity No extra layers. No chaos. Just smarter execution of what's already working.`}</p>
      </div>
    </div>
  );
}

function P39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17.6px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24.64px]">Direct. No filters. No committees. Private 1:1 access. You work with Kashif directly — not a framework handed to a junior.</p>
      </div>
    </div>
  );
}

function P40() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[0.7px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17.6px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24.64px]">Built for your specific situation Whether you need tactical fixes, a structural reset, or a full leadership rebuild — Kashif meets you where you are.</p>
      </div>
    </div>
  );
}

function DivSideBySideRight4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[29.3px] items-start min-h-px min-w-px relative" data-name="div.side-by-side-right">
      <H6 />
      <P36 />
      <P37 />
      <P38 />
      <P39 />
      <P40 />
    </div>
  );
}

function DivJayBlock1() {
  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "566/670" }} data-name="div.jay-block">
      <img alt="" className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none" src={imgImage4} />
    </div>
  );
}

function DivSideBySideLeft4() {
  return (
    <div className="w-full md:flex-[1_0_0] md:min-h-px md:min-w-px relative" data-name="div.side-by-side-left">
      <DivJayBlock1 />
    </div>
  );
}

function DivSideBySideWr4() {
  return (
    /* Image is first in DOM → top on mobile; CSS order flips it right on desktop */
    <div className="flex flex-col md:flex-row gap-[40px] md:gap-[115px] items-start relative w-full" data-name="div.side-by-side-wr">
      <DivSideBySideLeft4 />
      <DivSideBySideRight4 />
    </div>
  );
}

function DivSideC4() {
  return (
    <div className="flex flex-col items-start max-w-[1440px] py-[80px] md:py-[120px] relative w-full" data-name="div.side-c">
      <DivSideBySideWr4 />
    </div>
  );
}

function SectionSectionSideBySide4() {
  return (
    <div className="bg-white flex flex-col items-center w-full px-[24px] md:px-[144px]" data-name="section.section-side-by-side">
      <DivSideC4 />
    </div>
  );
}

function MenuHamburgerWhiteSvg() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[30px]" data-name="menu-hamburger-white.svg">
      <div className="h-[19.714px] overflow-clip relative shrink-0 w-[30px]" data-name="Component 1">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 19.7142">
          <g id="Layer 1">
            <path d={svgPaths.p3d742900} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AMenuToggle() {
  return (
    <a className="cursor-pointer relative shrink-0" data-name="a#menu-toggle" href="#">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <MenuHamburgerWhiteSvg />
      </div>
    </a>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[919px] items-center pb-[21px] pt-[20px] relative shrink-0 w-full" data-name="nav">
      <div aria-hidden="true" className="absolute border-[#ededed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['IBM_Plex_Serif:Medium_Italic',sans-serif] h-[35px] italic justify-center leading-[0] relative shrink-0 text-[#eee9e9] text-[24px] w-[239px]">
        <p>
          <span className="leading-[65.47px]">{`KASHIF `}</span>
          <span className="font-['IBM_Plex_Serif:ExtraLight_Italic',sans-serif] italic leading-[65.47px]">SALAHUDDIN</span>
        </p>
      </div>
      <AMenuToggle />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.24)] content-stretch flex h-[68px] items-center justify-center left-0 px-[24px] py-[10px] rounded-[48px] top-[-11px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="flex flex-col font-['Gellix:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[1px] uppercase w-[425px]">
        <p className="leading-[22.4px]">{` CEO Coach. 20+ Organizations. 5x Revenue Growth.`}</p>
      </div>
    </div>
  );
}

function PTopHeader1() {
  return (
    <div className="h-[44.78px] relative shrink-0 w-[576px]" data-name="p.top-header">
      <Frame17 />
    </div>
  );
}

function H() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Serif:Medium_Italic',sans-serif] gap-[4.5px] italic items-start leading-[0] pb-[4.97px] relative shrink-0 text-[54.6px] text-white w-full whitespace-nowrap" data-name="h1">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[65.47px]">One structured mind.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[65.47px]">Total control. Zero</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[65.47px]">firefighting.</p>
      </div>
    </div>
  );
}

function P41() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Gellix:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[24.64px]">{`Whether you're stuck in daily operations, losing decisions to chaos, or building a team that still depends on you, you're likely one structural fix away. Kashif helps you find it and build it.`}</p>
      </div>
    </div>
  );
}

function ArrowRightBlackSvg7() {
  return (
    <div className="h-[11px] relative shrink-0 w-[14px]" data-name="arrow-right-black.svg">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[11px] overflow-clip relative shrink-0 w-[13.2px]" data-name="Component 1">
          <div className="absolute inset-[50.92%_12.5%_49.08%_0]" data-name="Vector">
            <div className="absolute inset-[-0.83px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5504 1.65">
                <path d="M0 0.825H11.5504" id="Vector" stroke="var(--stroke-0, #342646)" strokeWidth="1.65" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[10%_9.17%_45%_53.33%]" data-name="Vector">
            <div className="absolute inset-[-11.79%_-11.78%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.11683 6.11641">
                <path d={svgPaths.p2114ec00} id="Vector" stroke="var(--stroke-0, #342646)" strokeWidth="1.65" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[45.92%_8.33%_9.08%_54.17%]" data-name="Vector">
            <div className="absolute inset-[-11.79%_-11.78%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.11683 6.11642">
                <path d={svgPaths.p1361e780} id="Vector" stroke="var(--stroke-0, #342646)" strokeWidth="1.65" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ACtaMargin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pr-[5px] top-0" data-name="a.cta:margin">
      <a className="bg-[#efac25] content-stretch cursor-pointer flex gap-[10px] items-center justify-center pb-[17.39px] pl-[36px] pr-[46px] pt-[16px] relative rounded-[40px] shrink-0" data-name="Component 2" href="#">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[40px]" />
        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#02103f] text-[0px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[22.4px] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Book a Coaching session
          </p>
        </div>
        <ArrowRightBlackSvg7 />
      </a>
    </div>
  );
}

function DivCtaLeft() {
  return (
    <div className="h-[56.39px] relative shrink-0 w-full" data-name="div.cta-left">
      <ACtaMargin1 />
    </div>
  );
}

function DivBannerLeft() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[576px]" data-name="div.banner-left">
      <PTopHeader1 />
      <H />
      <P41 />
      <DivCtaLeft />
    </div>
  );
}

function DivBanner() {
  return (
    <div className="content-stretch flex items-start py-[140px] relative shrink-0 w-[576px]" data-name="div.banner">
      <DivBannerLeft />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[110px] items-start relative shrink-0">
      <div className="h-[788.306px] relative shrink-0 w-[592px]" data-name="image 9">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[104.3%] left-[-15.97%] max-w-none top-[-1.16%] w-[138.89%]" src={imgImage9} />
        </div>
      </div>
      <DivBanner />
    </div>
  );
}

function DivContent2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[864px] items-start left-1/2 max-w-[1440px] top-1/2 w-[1262px]" data-name="div.content">
      <Nav />
      <Frame10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[864px] left-0 top-0 w-[1440px]">
      <div className="absolute h-[864px] left-0 top-0 w-[1440px]" data-name="image 17 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.02%] max-w-none top-[0.01%] w-[109.07%]" src={imgImage171} />
        </div>
      </div>
      <DivContent2 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#111010] h-[864px] left-[0.02px] top-[0.09px] w-[1440px]" />
      <div className="absolute left-[785.02px] size-[233px] top-[254.09px]">
        <div className="absolute inset-[-161.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 985.8 985.8">
            <g filter="url(#filter0_f_1_1558)" id="Ellipse 1">
              <circle cx="492.9" cy="492.9" fill="var(--fill-0, white)" r="116.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="985.8" id="filter0_f_1_1558" width="985.8" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_1558" stdDeviation="188.2" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame9 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[0_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.008px_0px] mask-size-[136px_49px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136.023 49.0006">
        <g id="Group">
          <path d={svgPaths.p27d43800} fill="var(--fill-0, #868686)" id="Vector" />
          <path d={svgPaths.p1061f100} fill="var(--fill-0, #868686)" id="Vector_2" />
          <path d={svgPaths.p274a7200} fill="var(--fill-0, #868686)" id="Vector_3" />
          <path d={svgPaths.p3434200} fill="var(--fill-0, #868686)" id="Vector_4" />
          <path d={svgPaths.p17516c80} fill="var(--fill-0, #868686)" id="Vector_5" />
          <path d={svgPaths.p1521be00} fill="var(--fill-0, #868686)" id="Vector_6" />
          <path d={svgPaths.p20476c80} fill="var(--fill-0, #868686)" id="Vector_7" />
          <path d={svgPaths.p2be28f00} fill="var(--fill-0, #868686)" id="Vector_8" />
          <path d={svgPaths.p2d11c1b0} fill="var(--fill-0, #868686)" id="Vector_9" />
          <path d={svgPaths.pe40f180} fill="var(--fill-0, #868686)" id="Vector_10" />
          <path d={svgPaths.p26b67f80} fill="var(--fill-0, #868686)" id="Vector_11" />
          <path d={svgPaths.p388e9c00} fill="var(--fill-0, #868686)" id="Vector_12" />
          <path d={svgPaths.p3bf94400} fill="var(--fill-0, #868686)" id="Vector_13" />
          <path d={svgPaths.p30cdb200} fill="var(--fill-0, #868686)" id="Vector_14" />
          <path d={svgPaths.p14483600} fill="var(--fill-0, #868686)" id="Vector_15" />
          <path d={svgPaths.p36650e00} fill="var(--fill-0, #868686)" id="Vector_16" />
          <path d={svgPaths.p3b5a2c00} fill="var(--fill-0, #868686)" id="Vector_17" />
          <path d={svgPaths.pdda4380} fill="var(--fill-0, #868686)" id="Vector_18" />
          <path d={svgPaths.p11e60440} fill="var(--fill-0, #868686)" id="Vector_19" />
          <path d={svgPaths.p34702b0} fill="var(--fill-0, #868686)" id="Vector_20" />
          <path d={svgPaths.p35ec6100} fill="var(--fill-0, #868686)" id="Vector_21" />
          <path d={svgPaths.p682d980} fill="var(--fill-0, #868686)" id="Vector_22" />
          <path d={svgPaths.p28186900} fill="var(--fill-0, #868686)" id="Vector_23" />
          <path d={svgPaths.p17557b00} fill="var(--fill-0, #868686)" id="Vector_24" />
          <path d={svgPaths.p3ae4a080} fill="var(--fill-0, #868686)" id="Vector_25" />
          <path d={svgPaths.p20786900} fill="var(--fill-0, #868686)" id="Vector_26" />
          <path d={svgPaths.p22271e00} fill="var(--fill-0, #868686)" id="Vector_27" />
          <path d={svgPaths.pb4870c0} fill="var(--fill-0, #868686)" id="Vector_28" />
          <path d={svgPaths.p313fd120} fill="var(--fill-0, #868686)" id="Vector_29" />
          <path d={svgPaths.p367f0500} fill="var(--fill-0, #868686)" id="Vector_30" />
          <path d={svgPaths.p356bd500} fill="var(--fill-0, #868686)" id="Vector_31" />
          <path d={svgPaths.p147b9c00} fill="var(--fill-0, #868686)" id="Vector_32" />
          <path d={svgPaths.p3e927400} fill="var(--fill-0, #868686)" id="Vector_33" />
          <path d={svgPaths.p1d247b00} fill="var(--fill-0, #868686)" id="Vector_34" />
          <path d={svgPaths.p37bbbf00} fill="var(--fill-0, #868686)" id="Vector_35" />
          <path d={svgPaths.pc56bff0} fill="var(--fill-0, #868686)" id="Vector_36" />
          <path d={svgPaths.p2830bf80} fill="var(--fill-0, #868686)" id="Vector_37" />
          <path d={svgPaths.p1b444800} fill="var(--fill-0, #868686)" id="Vector_38" />
          <path d={svgPaths.p1d2e1ff0} fill="var(--fill-0, #868686)" id="Vector_39" />
          <path d={svgPaths.p15656500} fill="var(--fill-0, #868686)" id="Vector_40" />
          <path d={svgPaths.p5d1f980} fill="var(--fill-0, #868686)" id="Vector_41" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group13 />
    </div>
  );
}

function Download() {
  return (
    <div className="h-[49px] overflow-clip relative shrink-0 w-[136px]" data-name="download 8">
      <ClipPathGroup />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[1.26%_0_1.94%_0.37%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 210.226 53.2381">
        <g id="Group">
          <path d={svgPaths.p226b7500} fill="var(--fill-0, #828282)" id="Vector" />
          <path d={svgPaths.p36f77600} fill="var(--fill-0, #828282)" id="Vector_2" />
          <path d={svgPaths.p30acc700} fill="var(--fill-0, #828282)" id="Vector_3" />
          <path d={svgPaths.p2b1f300} fill="var(--fill-0, #828282)" id="Vector_4" />
          <path d={svgPaths.p2c32d280} fill="var(--fill-0, #828282)" id="Vector_5" />
          <path d={svgPaths.p3d932300} fill="var(--fill-0, #828282)" id="Vector_6" />
          <path d={svgPaths.p24738080} fill="var(--fill-0, #828282)" id="Vector_7" />
          <path d={svgPaths.p160d0300} fill="var(--fill-0, #828282)" id="Vector_8" />
          <path d={svgPaths.p9de8b40} fill="var(--fill-0, #828282)" id="Vector_9" />
          <g id="Group_2">
            <path d={svgPaths.p3963e730} fill="var(--fill-0, #828282)" id="Vector_10" />
            <path d={svgPaths.p1ebc9200} fill="var(--fill-0, #828282)" id="Vector_11" />
          </g>
          <path d={svgPaths.p19f9b100} fill="var(--fill-0, #828282)" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function FinalLogo() {
  return (
    <div className="h-[55px] overflow-clip relative shrink-0 w-[211px]" data-name="Final-Logo 1">
      <Group14 />
    </div>
  );
}

function SvgviewerOutput() {
  return (
    <div className="h-[31px] overflow-clip relative shrink-0 w-[169px]" data-name="svgviewer-output (3) 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 169.004 31.0008">
        <g id="Group 304970">
          <path d={svgPaths.p225a5600} fill="var(--fill-0, #828282)" id="Path 1" />
          <path d={svgPaths.p166e3f70} fill="var(--fill-0, #828282)" id="Path 2" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="orgs-frame w-full">
      {/* Title */}
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(24px, 4vw, 48px)",
          color: "#000",
          textAlign: "center",
          lineHeight: 1.35,
          padding: "40px 20px 0",
        }}
      >
        Organizations Kashif has worked with
      </div>

      {/* Logos — single row desktop, 3-col grid mobile */}
      <div
        className="orgs-logos-grid"
        style={{
          borderTop: "1px solid #ededed",
          borderBottom: "1px solid #ededed",
          margin: "32px 0 0",
          padding: "32px 40px",
        }}
      >
        {/* Solvefy */}
        <div className="orgs-logo-item">
          <Download />
        </div>
        {/* SoftMind */}
        <div className="orgs-logo-item">
          <div style={{ position: "relative", width: 229, height: 70 }}>
            <img alt="SoftMind Solutions" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", opacity: 0.4 }} src={imgDownload11} />
          </div>
        </div>
        {/* PureLogics */}
        <div className="orgs-logo-item">
          <FinalLogo />
        </div>
        {/* Global Shapers */}
        <div className="orgs-logo-item">
          <div style={{ position: "relative", width: 87, height: 75 }}>
            <img alt="Global Shapers Community" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", opacity: 0.4 }} src={img57Eb4E2A01A343549A4C0Ab07Ffdd9341} />
          </div>
        </div>
        {/* Suzuki */}
        <div className="orgs-logo-item">
          <SvgviewerOutput />
        </div>
        {/* LUMS */}
        <div className="orgs-logo-item">
          <div style={{ position: "relative", width: 133, height: 55 }}>
            <img alt="LUMS" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", opacity: 0.5 }} src={imgLumsLogoWhite1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="home-responsive bg-white" data-name="Home">
      {/* Hero */}
      <div className="hero-responsive w-full">
        <Herosection />
      </div>
      {/* Organisations strip */}
      <div className="orgs-responsive w-full overflow-hidden">
        <Frame18 />
      </div>
      {/* About section */}
      <div className="about-responsive w-full">
        <SectionSectionSideBySide />
      </div>
      {/* Engagement models */}
      <div className="models-responsive w-full">
        <SectionSectionSideBySide1 />
      </div>
      {/* Coaching section 1 */}
      <div className="coaching-responsive w-full">
        <SectionSectionSideBySide2 />
      </div>
      {/* Coaching section 2 */}
      <div className="coaching-responsive w-full">
        <SectionSectionSideBySide3 />
      </div>
      {/* Coaching section 3 */}
      <div className="coaching-responsive w-full">
        <SectionSectionSideBySide4 />
      </div>
      {/* Single CTA */}
      <div className="cta-responsive w-full">
        <SectionSingleCta />
      </div>
      {/* Footer */}
      <div className="footer-responsive w-full">
        <SectionFooter />
      </div>
    </div>
  );
}