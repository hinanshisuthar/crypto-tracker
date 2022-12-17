import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { AiOutlineStar, AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Popup } from "./Popup";
import supplyBar from "../assets/Vector.png";
import { Pagination } from "./Pagination";

export const CoinsList = ({ rows, setRows }) => {
  const [coinsData, setCoinsData] = useState([]);
  const [page, setPage] = useState(1);
  const [popup, setPopup] = useState(false);
  const [modalData, setModalData] = useState(null);

  async function fetchData() {
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=${rows}&amp;page=${page}&amp;sparkline=false&amp;price_change_percentage=24h%2C7d`
      );
      setCoinsData(res.data);
    } catch (err) {
      return console.error(err);
    }
  }

  useEffect(() => {}, []);

  const { status } = useQuery(["coins", page, rows], fetchData);

  const popupHandler = (coin) => {
    setPopup(true);
    setModalData(coin);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <table className="table-auto p-2">
        <thead>
          <tr className="border-t border-gray-200">
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
          {status === "error" && <span>Error Fetching Data</span>}
          {status === "success" &&
            coinsData.map((coin, i) => (
              <tr
                key={coin.id + i + coin.name}
                className="px-1 border-t border-gray-100"
                onClick={() => popupHandler(coin)}
              >
                <td className="px-4 py-4 text-sm font-medium">
                  <AiOutlineStar size={20} />
                </td>
                <td className="hidden md:table-cell lg:table-cell xl-table-cell 2xl:table-cell px-4 py-4 text-sm font-medium">
                  {(page - 1) * rows + (i + 1)}
                </td>
                <td className="px-4 py-4 text-sm font-medium flex items-center">
                  <img
                    src={coin.image}
                    className="w-5 h-5 m-1"
                    alt="coin-crypto"
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
      <Pagination setPage={setPage} page={page} />
    </div>
  );
};
