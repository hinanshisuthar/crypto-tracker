import { GrClose } from "react-icons/gr";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import supplyBar from "../assets/Vector.png";

export const Popup = ({ modalData, setPopup }) => {
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/[.09] h-vh w-vw top-0 left-0 md:hidden lg:hidden xl:hidden 2xl:hidden ">
      <div className="relative w-[20rem] my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font=semibold flex items-center">
              <img
                src={modalData.image}
                alt="coin-img"
                className="h-8 w-8 mx-1"
              />
              {modalData.name}
            </h3>
            <button
              className="bg-transparent border-0 text-black float-right"
              onClick={() => setPopup(false)}
            >
              <span>
                <GrClose size={22} />
              </span>
            </button>
          </div>
          <div className="flex flex-wrap gap-5 items-start justify-start p-10">
            <div className="flex flex-col items-start font-bold">
              PRICE{" "}
              <span className="font-normal">${modalData.current_price} </span>
            </div>
            {modalData.price_change_percentage_24h.toFixed(2) > 0 ? (
              <div className="flex flex-col items-start font-bold">
                24H
                <span className="font-normal flex text-green-500">
                  <AiFillCaretUp className="text-500 m-1" size={15} />
                  {modalData.price_change_percentage_24h.toFixed(2)}
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-start font-bold">
                24H
                <span className="font-normal flex text-red-500">
                  <AiFillCaretDown className="text-500 m-1" size={15} />
                  {modalData.price_change_percentage_24h.toFixed(2)}
                </span>
              </div>
            )}
            {modalData.price_change_percentage_7d_in_currency.toFixed(2) > 0 ? (
              <div className="flex flex-col items-start font-bold">
                7D{" "}
                <span className="font-normal flex text-green-500">
                  <AiFillCaretUp className="text-500 m-1" size={15} />
                  {modalData.price_change_percentage_7d_in_currency.toFixed(2)}
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-start font-bold">
                7D{" "}
                <span className="font-normal flex text-red-500">
                  <AiFillCaretDown className="text-500 m-1" size={15} />
                  {modalData.price_change_percentage_7d_in_currency.toFixed(2)}
                </span>
              </div>
            )}
            <div className="flex flex-col items-start font-bold">
              MARKET CAP{" "}
              <span className="font-normal">$ {modalData.current_price}</span>
            </div>
            <div className="flex flex-col items-start font-bold">
              VOLUME (24H){" "}
              <span className="font-normal">{modalData.current_price}</span>
              <p className="text-gray-400 uppercase font-lg text-xs">
                ({modalData.circulating_supply}
                <span className="text-gray-400 uppercase font-lg m-1">
                  {modalData.symbol})
                </span>
              </p>
            </div>
            <div className="flex flex-col items-start font-bold">
              CIRCULATING SUPPLY{" "}
              <span className="font-normal uppercase">
                {modalData.total_supply}
                {modalData.symbol}
              </span>
              <img src={supplyBar} alt="supply-bar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
