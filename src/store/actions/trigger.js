export const TRANSPARENT_TOP_NAV = 'TRANSPARENT_TOP_NAV';
export const OPAQUE_TOP_NAV = 'OPAQUE_TOP_NAV';
export const makeTopNavTransparent = () => (dispatch) => {
  dispatch({ type: TRANSPARENT_TOP_NAV });
};

export const makeTopNavOpaque = () => async (dispatch) => {
  dispatch({ type: OPAQUE_TOP_NAV });
};
