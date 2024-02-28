import PropTypes from 'prop-types';
import LoadingCard from './LoadingCard';

export default function LoadingCards({ qty }) {
  const loadingCardsArray = new Array(qty).fill(null);

  return (
    <div className="flex gap-4 flex-wrap">
      {loadingCardsArray.map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  );
}

LoadingCards.propTypes = {
  qty: PropTypes.number.isRequired,
};
