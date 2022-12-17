import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import image from "../assets/Image.png";
import image1 from "../assets/Image (1).png";
import image2 from "../assets/Image (2).png";

export const Main = ({ rows, setRows }) => {
  const cards = [
    {
      id: 0,
      subtitle: "Take a quiz!",
      title: "Learn and earn $CKB",
      img: image,
    },
    {
      id: 1,
      subtitle: "Portfolio🔥",
      title: "Track your trades in one place, not all over the place",
      img: image1,
    },
    {
      id: 2,
      subtitle: "Portfolio",
      title: "Track your trades in one place, not all over the place",
      img: image2,
    },
  ];

  const categories = ["CryptoCurrencies", "DeFi", "Nfts & Collectibles"];

  return (
    <>
      <div className="bg-slate-50 p-2 flex items-center justify-center gap-3">
        <IoIosArrowDropleftCircle
          size={23}
          className="text-gray-400 hidden md:inline lg:inline xl:inline 2xl:inline"
        />
        <div className="overflow-x-auto">
          <ul className="flex items-center gap-4 p-5 overflow-x-auto">
            {cards.map((card) => (
              <li
                key={card.img}
                className={
                  card.id !== 0
                    ? "bg-white rounded-xl flex items-center justify-between p-2 w-80 shadow-lg text-left hidden md:flex lg:flex xl:flex 2xl:flex"
                    : "bg-white rounded-xl flex items-center justify-between p-2 w-80 shadow-lg text-left block"
                }
              >
                <div>
                  <img
                    src={card.img}
                    alt="card-img"
                    className="object-cover h-20 w-28 rounded-lg p-1"
                  />
                </div>
                <section>
                  <p className="text-gray-500">{card.subtitle}</p>
                  <h3>{card.title}</h3>
                </section>
              </li>
            ))}
          </ul>
        </div>
        <IoIosArrowDroprightCircle
          size={23}
          className="text-gray-400 hidden md:inline lg:inline xl:inline 2xl:inline"
        />
      </div>
      <div className="md:hidden lg:hidden xl:hidden 2xl:hidden h-5 w-5 flex items-center justify-center w-full">
        <div className="h-2.5 w-2.5 border border-blue-500 rounded-full mx-2"></div>
        <div className="h-2.5 w-2.5 bg-blue-500 rounded-full mx-2"></div>
        <div className="h-2.5 w-2.5 border border-blue-500 rounded-full mx-2"></div>
        <div className="h-2.5 w-2.5 border border-blue-500 rounded-full mx-2"></div>
      </div>
      <div className="m-auto p-5 bg-slate-50 p-2 md:px-[12rem] lg:px-[12rem] xl:px-[12rem] 2xl:px-[12rem]">
        <h2 className="text-xl font-bold text-left">
          Top 100 Cryptocurrencies by Market Cap
        </h2>
        <div className="hidden sm:flex md:flex lg:flex xl-flex 2xl:flex overflow-x-auto">
          <ul className="flex items-center gap-4 my-4 w-full font-[600]">
            <li className="flex items-center bg-gray-200 px-3 py-1 rounded-md gap-1 text-sm">
              <AiOutlineStar size={17} />
              Favorites
            </li>
            {categories.map((cat, i) => (
              <li
                key={cat}
                className={
                  i === 0
                    ? "bg-gray-200 px-3 py-1 rounded-md text-sm text-blue-500"
                    : "bg-gray-200 px-3 py-1 rounded-md text-sm"
                }
              >
                {cat}
              </li>
            ))}
            <li className="flex items-center justify-self-end ml-auto text-gray-500 text-sm">
              show rows
              
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
