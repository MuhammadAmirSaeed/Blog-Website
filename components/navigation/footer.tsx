import React from "react";
import siteConfig from "./config/siteConfig";
import PaddingContainer from "../padding/padding-container";
import Link from "next/link";
import SocialLinks from "../element/SocialLinks";

const footer = () => {
  return (
    <div className="border-t mt-10 py-8">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
          <p className="text-lg max-w-md text-neutral-400">{siteConfig.description}</p>
        </div>

        <div className=" flex flex-wrap justify-between gap-4  mt-6">
          <div>
            <div className="  text-lg font-medium">#exploretheworld</div>
            <div>Social Links
            </div>
          </div>

          <div>
          <div className="text-sm text-neutral-400">currentlyAt</div>
          <div className="flex items-center px-3 py-2 bg-white rounded-md shadow-md">
          <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
          {siteConfig.currentlyAt}
          </div>
        </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6"></div>

        <div className="flex flex-wrap  items-center justify-between gap-4 py-4 border-t">
            <div className="text-sm text-neutral-300">
              All rights are reserved | Copyright {new Date().getFullYear()}
            </div>
            <div className="text-sm" >Made by{" "}
            <Link href="https://www.twitter.com" 
            className="underline underline-offset-4">
                @AmirSaeed

            </Link></div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default footer;
