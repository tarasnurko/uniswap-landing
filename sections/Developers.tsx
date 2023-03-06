"use client";
import {
  ArrowLink,
  Block,
  Title,
  Text,
  ButtonLink,
  DiagArrowLink,
} from "@/components";
import { developersBg, apply } from "@/assets/images";
import Image from "next/image";

const Developers = () => {
  return (
    <section className="py-10 px-8 container w-full flex flex-col gap-6">
      <ArrowLink text="DEVELOPERS" href="#" />
      <div className="grid grid-cols-3 auto-rows-min gap-4">
        <Block
          imgSrc={developersBg}
          imgAlt="developers"
          imgStyles="w-full h-[421px]"
          blockStyles="col-span-2 p-8 flex justify-end w-full h-[421px] flex flex-col gap-4 z-20"
        >
          <div className="max-w-xl flex flex-col gap-4 z-20">
            <Title type="title1" text="Superpowers for DeFi developers." />
            <Text text="Build Defi apps and tools on the largest crypto project on Ethereum. Get started with quick start guides, protocol documentation, a Javascript SDK, and fully open source code." />
            <ButtonLink text="Documentation" href="#" />
          </div>
        </Block>
        <Block blockStyles="row-span-2 p-8">
          <div className="w-full h-full flex flex-col gap-5">
            <Image src={apply} alt="apply" />
            <Title
              type="title2"
              text="Apply for funding from the Uniswap Grants Program"
            />
            <Text text="Get paid to build the future of finance. Uniswap Governance offers grant funding for people building apps, tools, and activities on the Uniswap Protocol." />
            <ButtonLink text="Documentation" href="#" />
          </div>
        </Block>
        <Block blockStyles="flex">
          <div className="w-full h-full p-6 flex items-center">
            <DiagArrowLink text="V3 Whitepaper" href="#" space />
          </div>
        </Block>
        <Block blockStyles="flex">
          <div className="w-full h-full p-6 flex items-center">
            <DiagArrowLink text="Github" href="#" space />
          </div>
        </Block>
      </div>
    </section>
  );
};

export default Developers;
