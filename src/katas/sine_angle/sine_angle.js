import * as R from 'ramda'

// The sine of an angle (specified in radians) can be computed
// by making use of the approximation sin x = x if x is sufficiently small,
// and the trigonometric identity:
//
// sin(r) = 3sin(r/3) -. 4sin^3(r/3)

const tierce = x => x / 3.0

const sine = (angle) =>
  Math.abs(angle) < 0.1
    ? angle
    : 3 * sine(tierce(angle)) - 4 * sine(tierce(angle))**3

export default sine
