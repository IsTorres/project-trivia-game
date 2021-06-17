const POINTS = 'POINTS';
const intialState = {
  points: 0,
};

const pointsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
  case POINTS:
    return {
      points: payload.points.player.score,
    };
  default:
    return state;
  }
};

export default pointsReducer;
