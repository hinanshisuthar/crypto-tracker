export const CoinsList = () => {
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
      </table>
    </div>
  );
};
