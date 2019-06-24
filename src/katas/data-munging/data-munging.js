import { readFileSync } from 'fs'
import * as R from 'ramda'
import * as U from '../utils'

// Part One: Weather Data
//
// In weather.dat you’ll find daily weather data for Morristown, NJ
// for June 2002. Download this text file, then write a program to output
// the day number (column one) with the smallest temperature spread
// (the maximum temperature is the 2nd column, the minimum the 3rd column).

const createTable = (textTable) =>
  R.isEmpty(textTable)
    ? []
    : parseTable(textTable)

const parseTable = (textTable) =>
  R.map(
    R.compose(
      R.filter(U.isNotEmpty), R.split(' ')),
    R.filter(U.isNotEmpty, R.split('\n', textTable)))

export default createTable
