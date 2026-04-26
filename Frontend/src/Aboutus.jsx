import React from "react";
import { useNavigate } from "react-router-dom";

import Footer from "./footer";

function Aboutus() {
  const navigate = useNavigate();

  
  return (
    <>
      <div className="flex flex-row justify-between content-center">
        <div>
          <p className="font-serif p-2 text-3xl fixed">ShreeAnna.com</p>
        </div>
        <div className="p-2">
          <button onClick={() => navigate(-1)}>
            <i class="fa-solid fa-x text-2xl"></i>
          </button>
        </div>
      </div>

      <div className="m-3 sm:m-5 p-3 text-center cursor-pointer">
        {/* Heading */}
        <div className="mt-4 p-2">
          <h1 className="font-serif font-bold text-xl sm:text-3xl">
            About Millets & Our Mission
          </h1>
          <p className="font-roboto text-base sm:text-2xl font-light text-green-900">
            Millets (Shree Anna) are ancient grains that hold the key to food
            security, nutrition, and sustainable <br></br>farming in India.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid place-content-center mt-5 px-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="flex border-2 border-black rounded-xl bg-olive-200 p-3"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  {/* Icon */}
                  <div className="p-2 rounded bg-gray-400 shrink-0">
                    <i
                      className={
                        [
                          "fa-solid fa-droplet text-xl sm:text-2xl",
                          "fa-solid fa-heart text-xl sm:text-2xl",
                          "fa-solid fa-leaf text-xl sm:text-2xl",
                          "fa-solid fa-globe text-xl sm:text-2xl",
                        ][i]
                      }
                    ></i>
                  </div>

                  {/* Text */}
                  <div className="text-left">
                    <h5 className="font-serif text-sm sm:text-base">
                      {
                        [
                          "Water Efficient",
                          "Nutrient Dense",
                          "Eco-Friendly",
                          "Climate Resilient",
                        ][i]
                      }
                    </h5>

                    <p className="text-green-900 text-xs sm:text-sm leading-snug">
                      {
                        [
                          "Uses 70% less water than rice, thriving in arid regions",
                          "Rich in iron, calcium, protein, and dietary fiber",
                          "Minimal pesticides, low carbon footprint, improves soil health",
                          "Drought-tolerant, grows in poor soils with minimal inputs",
                        ][i]
                      }
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Types */}
        <div className="grid place-content-center m-5">
          <div className="w-full max-w-3xl space-y-3">
            <h3 className="text-left font-serif font-bold">Types of Millets</h3>

            {[
              [
                "Pearl Millet (Bajra)",
                "Rich in iron, great for anaemia prevention",
                "Rajasthan, Gujarat, Haryana",
              ],
              [
                "Finger Millet (Ragi)",
                "Highest calcium among cereals, ideal for bones",
                "Karnataka, Tamil Nadu, Uttarakhand",
              ],
              [
                "Foxtail Millet (Kangni)",
                "Low glycemic index, good for diabetes",
                "Andhra Pradesh, Karnataka",
              ],
              [
                "Sorghum (Jowar)",
                "Rich in antioxidants, gluten-free",
                "Maharashtra, Karnataka, Rajasthan",
              ],
              [
                "Little Millet (Kutki)",
                "High fiber, aids digestion",
                "Madhya Pradesh, Chhattisgarh, Odisha",
              ],
              [
                "Barnyard Millet (Sanwa)",
                "Lowest calories, good for weight loss",
                "Uttarakhand, Tamil Nadu",
              ],
            ].map((item, i) => (
              <div
                key={i}
                className="border-2 border-black rounded-xl bg-olive-200 p-3"
              >
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-plate-wheat text-2xl text-green-900"></i>
                    <div className="text-left">
                      <h6 className="font-serif text-sm sm:text-base">
                        {item[0]}
                      </h6>
                      <p className="text-green-900 text-xs sm:text-sm">
                        {item[1]}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-500 rounded-full px-3 py-1 text-xs self-start sm:self-center">
                    {item[2]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="grid place-content-center">
          <h3 className="text-left font-serif font-bold mb-3">Our Team</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ["Anushka", "../public/Anushka.jpeg", "2200010100009"],
              ["Divyanshu Sharma", "../public/Divyanshu.jpeg", "2200010100019"],
              ["LoveKesh Sharma", "../public/Lovekesh.jpeg", "2300010109003"],
              [
                "Shivalika Kashyap",
                "../public/Shivalika.jpeg",
                "2200010100052",
              ],
            ].map((member, i) => (
              <div
                key={i}
                className="border-2 border-black rounded-xl bg-olive-200 p-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={member[1]}
                    alt=""
                    className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full"
                  />

                  <div className="text-left">
                    <h5 className="text-sm sm:text-base">{member[0]}</h5>
                    <p className="text-xs sm:text-sm">
                      Btech CSE <br />
                      {member[2]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Aboutus;
