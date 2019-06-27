import { readFileSync } from 'fs'
import * as R from 'ramda'
import * as U from '../utils'

// Part One: Weather Data
//
// In weather.dat you’ll find daily weather data for Morristown, NJ
// for June 2002. Download this text file, then write a program to output
// the day number (column one) with the smallest temperature spread
// (the maximum temperature is the 2nd column, the minimum the 3rd column).

export const createTable = (textTable) =>
  R.isEmpty(textTable)
    ? []
    : parseTable(textTable)

const parseTable =
  R.compose(
    R.map(
      R.compose(R.filter(U.isNotEmpty), R.split(' '))),
    R.compose(R.filter(U.isNotEmpty), R.split('\n')))

export const loadTextTable = (path) =>
  readFileSync(path, 'utf8')

export const loadTable =
  R.compose(createTable, loadTextTable)

export const tableHeader = R.head
export const tableRows = R.tail
export const day = row => row[0]
export const maxTemp = row => parseInt(row[1])
export const minTemp = row => parseInt(row[2])
export const deltaTemp = (t1, t2) => Math.abs(t1 - t2)
export const deltaTempRow = (row) => deltaTemp(maxTemp(row), minTemp(row))

const DEFAULT_WEATHER_ROW = [0, 1000, -1000] // day, maxTemp, minTemp
export const minTempSpreadDay = (table) =>
  day(R.reduce((minRow, row) =>
    deltaTempRow(minRow) < deltaTempRow(row) ? minRow : row,
    DEFAULT_WEATHER_ROW,
    tableRows(table)))

// Part Two: Soccer League Table
//
// The file football.dat contains the results from the English Premier League
// for 2001/2. The columns labeled ‘F’ and ‘A’ contain the total number of
// goals scored for and against each team in that season (so Arsenal scored
// 79 goals against opponents, and had 36 goals scored against them). Write
// a program to print the name of the team with the smallest difference in
// ‘for’ and ‘against’ goals.
