import PropTypes from 'prop-types';

export default function LoadingCard({ fullWidth }) {
  return (
    <div
      role="status"
      className={`max-w-sm animate-pulse flex-1 relative min-w-72 bg-white px-6 py-8 shadow-xl sm:max-w-full lg:max-w-${
        fullWidth ? 'full' : '[352px]'
      } rounded-md sm:px-10 border`}
    >
      <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mt-8 mb-6"></div>
      <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[200px] my-4"></div>
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-3"></div>
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-3"></div>
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-3"></div>
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-3"></div>
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-3"></div>
      <div className="h-6 bg-gray-200 rounded-md dark:bg-gray-700 max-w-[100px] mt-6 mb-3"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

LoadingCard.propTypes = {
  fullWidth: PropTypes.bool,
};
