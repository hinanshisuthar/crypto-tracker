import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const Pagination = ({ page, setPage }) => {
  return (
    <div className="flex items-center justify-between ml-auto border-t border-gray-200 bg-white px-4 py-4 sm:px-6">
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
              <button
                key={page + i}
                className="rounded-lg relative z-10 inline-flex items-center border border-gray-500 px-4 py-2 text-sm font-medium cursor-pointer hover:bg-gray-300"
                onClick={() => setPage(page)}
              >
                {page}
              </button>
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
  );
};
