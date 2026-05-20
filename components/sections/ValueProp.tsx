"use client";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/content/site-config";

export default function ValueProp() {
  const reduced = useReducedMotion();
  const text = siteConfig.valueProp.statement;
  const words = text.split(" ");

  return (
    <section className="section-pad bg-bg border-t border-line">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-x-8">
          <div className="col-span-12 md:col-span-2 mb-6 md:mb-0">
            <div className="eyebrow">{siteConfig.valueProp.eyebrow}</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="display-xl text-[clamp(36px,5.8vw,88px)] text-ink leading-[0.98]">
              {words.map((w, i) => (
                <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
                  <motion.span
                    initial={reduced ? {} : { y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.95,
                      delay: i * 0.03,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                  >
                    {w}{i < words.length - 1 ? " " : ""}
                  </motion.span>
                </span>
              ))}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
