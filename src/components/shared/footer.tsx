import Link from "next/link";
import Image from "next/image";
import { footer } from "@/constants/footer";

export function Footer() {
  return (
    <footer className=" border-t pt-12 md:pt-16 lg:pt-[64px] bg-[#0A0A0B]">
      <div className="container *:w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 place-content-between border-b pb-6 md:pb-10 lg:pb-[40px]">
        <div className="md:col-span-3 lg:col-span-1 mb-6 lg:mb-0 flex flex-col">
          <Image
            src="/log.png"
            alt="Orba innovations company logo"
            width={48}
            height={48}
          />
          <p className="h6 pt-[32px] pb-[16px] text-gray-200">
            Crafting culinary delights with passion, quality, and innovation.
          </p>
          <h5 className="h6 text-gray-200">+8801789 654123</h5>
        </div>

        <div>
          <h6 className="h4 text-white">{footer.service.label}</h6>
          <div className="flex flex-col gap-y-3 mt-6 ">
            {footer.service.links.map(({ label }, index) => (
              <p key={index} className="h6 text-gray-200">
                {label}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h6 className="h4 text-white">{footer.company.label}</h6>
          <div className="flex flex-col gap-y-3 mt-6 ">
            {footer.company.links.map(({ href, label }) => (
              <Link key={href} href={href} className="text-gray-200">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h6 className="h4 text-white">{footer.contact.label}</h6>
            <div className="flex flex-col gap-y-3 mt-6 ">
              {footer.contact.links.map(({ label }, index) => (
                <p key={index} className="h6 text-gray-200">
                  {label}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-4 pb-12">
        <div className="flex justify-between">
          <p className="h6 text-gray-300">
            <span className="font-semibold text-gray-300">Company- </span>
            All Rights Reserved
          </p>
          <p className="h6 text-gray-300">Privacy - Terms - Sitemap</p>
        </div>
      </div>
    </footer>
  );
}
