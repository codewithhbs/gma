"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const awards = [
  "/images/awards/award-1.webp",
  "/images/awards/award-1-1.webp",
  "/images/awards/award-1-11.webp",
];
const awards2022 = ["/images/awards/award-2022.webp"];
const awards2020 = ["/images/awards/award-2020.webp"];
const awards2018 = ["/images/awards/award-2018.webp"];

export default function AwardsRecognition() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % awards.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
     
      <section className="w-full bg-gray-50 py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Row 1 */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                Award By Education World
              </h2>
              <p className="text-gray-600 text-lg">
                Award received in Jan – 2025
              </p>
            </motion.div>

            {/* Image Slider */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-72 lg:h-96 overflow-hidden rounded-2xl shadow-lg"
            >
              {awards.map((src, index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-0 ${
                    index === current ? "block" : "hidden"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === current ? 1 : 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src={src}
                    alt={`Award ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Image Slider */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-72 lg:h-96 overflow-hidden rounded-2xl shadow-lg order-2 lg:order-1"
            >
              {awards2022.map((src, index) => (
                <motion.div
                  key={index}
                  // className={`absolute inset-0 ${index === current ? 'block' : 'hidden'}`}
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: index === current ? 1 : 0 }}
                  // transition={{ duration: 0.8 }}
                >
                  <Image
                    src={src}
                    alt={`Award ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 order-1 lg:order-2"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                Indian Education Excellence Awards 2022
              </h2>
              <p className="text-gray-600 text-lg">
                Granmother’s Arms School has being awarded as the best
                preschools in Indian Education Excellence Award 2022! This is a
                great honor and a testament to the hard work and dedication of
                the school staff, students, and parents.
              </p>
            </motion.div>
          </div>

          {/* Row 3 */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                BWI Education Excellence Awards 2020
              </h2>
              <p className="text-gray-600 text-lg">
                Granmother’s Arms School has being awarded as the best
                preschools in dwarka in BWI Education Excellence Award 2020!
                This is a great honor and a testament to the hard work and
                dedication of the school staff, students, and parents.
              </p>
            </motion.div>

            {/* Image Slider */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-72 lg:h-96 overflow-hidden rounded-2xl shadow-lg"
            >
              {awards2020.map((src, index) => (
                <motion.div
                  key={index}
                  // className={`absolute inset-0 ${index === current ? 'block' : 'hidden'}`}
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: index === current ? 1 : 0 }}
                  // transition={{ duration: 0.8 }}
                >
                  <Image
                    src={src}
                    alt={`Award ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Row 4 */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Image Slider */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-72 lg:h-96 overflow-hidden rounded-2xl shadow-lg order-2 lg:order-1"
            >
              {awards2018.map((src, index) => (
                <motion.div
                  key={index}
                  // className={`absolute inset-0 ${index === current ? 'block' : 'hidden'}`}
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: index === current ? 1 : 0 }}
                  // transition={{ duration: 0.8 }}
                >
                  <Image
                    src={src}
                    alt={`Award ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 order-1 lg:order-2"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                Indian Business Awards 2018
              </h2>
              <p className="text-gray-600 text-lg">
                Congratulations to Granmother’s Arm School for being awarded
                with “Most Promising Pre-School in Dwarka”! This is a great
                achievement that reflects the commitment and dedication of the
                entire staff and management of Granmother’s Arm School. We are
                proud of the success of this school and we look forward to
                seeing even more success in the years to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
