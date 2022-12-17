import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AiOutlineStar, AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Popup } from "./Popup";
import supplyBar from "../assets/Vector.png";

export const CoinsList = ({ rows, setRows }) => {
  const [coinsData, setCoinsData] = useState([]);
  const [page, setPage] = useState(1);
  const [popup, setPopup] = useState(false);
  const [modalData, setModalData] = useState(null);

  async function fetchData() {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=${rows}&amp;page=${page}&amp;sparkline=false&amp;price_change_percentage=24h%2C7d`
      );
      //   setCoinsData(res.data);
      return res.json();
    } catch (err) {
      return console.error(err);
    }
  }

  useEffect(() => {}, []);

  const { data, status } = useQuery(["coins", page, rows], fetchData);

  const coinsDatacell = [
    "",
    "#",
    "Name",
    "Price",
    "24H",
    "7D",
    "Market Cap",
    "Volume(24H)",
    "Circulating Supply",
    "",
  ];

  const popupHandler = (coin) => {
    setPopup(true);
    setModalData(coin);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <table className="table-auto p-2">
        <thead>
          <tr>
            <th className="px-6 py-3 text-xs font-bold text-center uppercase w-max"></th>
            <th className="hidden md:table-cell lg:table-cell xl-table-cell 2xl:table-cell px-6 py-3 text-xs font-bold text-center uppercase w-max">
              #
            </th>
            <th className="px-6 py-3 text-xs font-bold text-center uppercase w-max">
              Name
            </th>
            <th className="px-6 py-3 text-xs font-bold text-center uppercase w-max">
              Price
            </th>
            <th className="px-6 py-3 text-xs font-bold text-center uppercase w-max">
              24H
            </th>
            <th className="hidden md:table-cell lg:table-cell xl-table-cell 2xl:table-cell px-6 py-3 text-xs font-bold text-center uppercase w-max">
              7D
            </th>
            <th className="hidden md:table-cell lg:table-cell xl-table-cell 2xl:table-cell px-6 py-3 text-xs font-bold text-center uppercase w-max">
              Market Cap
            </th>
            <th className="hidden md:table-cell lg:table-cell xl-table-cell 2xl:table-cell px-6 py-3 text-xs font-bold text-center uppercase w-max">
              Volume(24H)
            </th>
            <th className="hidden md:table-cell lg:table-cell xl-table-cell 2xl:table-cell px-6 py-3 text-xs font-bold text-center uppercase w-max">
              Circulating Supply
            </th>
            <th className="hidden md:table-cell lg:table-cell xl-table-cell 2xl:table-cell px-6 py-3 text-xs font-bold text-center uppercase w-max"></th>
          </tr>
        </thead>
        <tbody>
          {status === "loading" && <span>Loading</span>}
          {status === "success" &&
            data.map((coin, i) => (
              <tr
                key={coin.id + i + coin.name}
                className="px-1"
                onClick={() => popupHandler(coin)}
              >
                <td className="px-4 py-4 text-sm font-medium">
                  <AiOutlineStar size={20} />
                </td>
                <td className="hidden md:table-cell lg:table-cell xl-table-cell 2xl:table-cell px-4 py-4 text-sm font-medium">
                  {(page - 1) * 10 + (i + 1)}
                </td>
                <td className="px-4 py-4 text-sm font-medium flex items-center">
                  <img
                    src={coin.image}
                    className="w-5 h-5 m-1"
                    alt="coin-image"
                  />
                  {coin.name}
                  <span className="text-gray-400 uppercase font-lg m-1">
                    {coin.symbol}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm font-medium">
                  <span className="text-gray-400">$</span>
                  {coin.current_price}
                </td>
                <td className="px-4 py-4 text-sm font-medium text-red-500 flex items-center">
                  <AiFillCaretDown className="text-500 m-1" size={15} />
                  {coin.price_change_percentage_24h.toFixed(3)}%
                </td>
                {coin.price_change_percentage_7d_in_currency.toFixed(2) > 0 ? (
                  <td className="hidden md:table-cell lg:table-cell xl-table-cell 2xl:table-cell text-green-500 px-4 py-4 text-sm font-medium">
                    <AiFillCaretUp className="text-500 m-1" size={15} />
                    {coin.price_change_percentage_7d_in_currency.toFixed(2)}%
                  </td>
                ) : (
                  <td className="hidden md:table-cell lg:table-cell xl-table-cell 2xl:table-cell text-red-500 px-4 py-4 text-sm font-medium">
                    <AiFillCaretDown className="text-500 m-1" size={15} />
                    {coin.price_change_percentage_7d_in_currency.toFixed(2)}%
                  </td>
                )}
                <td className="hidden md:table-cell lg:table-cell xl-table-cell 2xl:table-cell px-4 py-4 text-sm font-medium">
                  $ {coin.market_cap}
                </td>
                <td className="hidden md:table-cell lg:table-cell xl-table-cell 2xl:table-cell px-4 py-4 text-sm font-medium flex">
                  $ {coin.total_volume}
                  <p className="text-gray-400 uppercase font-lg text-xs justify-self-end self-end">
                    {coin.circulating_supply}
                    <span className="text-gray-400 uppercase font-lg m-1">
                      {coin.symbol}
                    </span>
                  </p>
                </td>
                <td className="hidden md:table-cell lg:table-cell xl-table-cell 2xl:table-cell px-4 py-4 text-sm font-medium">
                  {coin.total_supply}{" "}
                  <span className="uppercase font-lg">{coin.symbol}</span>
                  <img src={supplyBar} alt="supply-bar" />
                </td>
                <td className="hidden md:table-cell lg:table-cell xl-table-cell 2xl:table-cell px-4 py-4 text-sm font-medium">
                  <BiDotsVerticalRounded />
                </td>
              </tr>
            ))}
          {popup && (
            <Popup popup={popup} setPopup={setPopup} modalData={modalData} />
          )}
        </tbody>
      </table>
      <div>
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <ul className="flex flex-1 justify-between sm:hidden">
            <li
              onClick={() => setPage((p) => p - 1)}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <FiChevronLeft className="h-5 w-5" />
            </li>
            <li
              onClick={() => setPage((p) => p + 1)}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <FiChevronRight className="h-5 w-5" />
            </li>
          </ul>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <ul
                className="isolate inline-flex -space-x-px rounded-md shadow-sm gap-2"
                aria-label="Pagination"
              >
                <button
                  className="rounded-lg relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-3 border-gray-400 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:z-20 disabled:bg-gray-400 disabled:text-white"
                  onClick={() => setPage((p) => p - 1)}
                  disabled={page === 1}
                >
                  <FiChevronLeft size={20} />
                </button>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page, i) => (
                  <a
                    key={page + i}
                    className="rounded-lg relative z-10 inline-flex items-center border border-gray-500 px-4 py-2 text-sm font-medium cursor-pointer hover:bg-gray-300"
                    onClick={() => setPage(page)}
                  >
                    {page}
                  </a>
                ))}
                <button
                  className="rounded-lg relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:z-20 disabled:bg-gray-400 disabled:text-white"
                  onClick={() => setPage((p) => p + 1)}
                  disabled={page === 10}
                >
                  <FiChevronRight size={20} />
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
