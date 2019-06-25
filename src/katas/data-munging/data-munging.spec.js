import {
  createTable, loadTextTable, loadTable
} from './data-munging'

const TEXT_TABLE = '  col1 col2\n     1    2\n    10   20\n'
const TABLE = [
  ['col1', 'col2'],
  ['1', '2'],
  ['10', '20']
]

const TEST_DATA_PATH = 'src/katas/data-munging/test.dat'
const WEATHER_DATA_PATH = 'src/katas/data-munging/weather.dat'

describe('createTable', () => {
  describe('given empty text table', () => {
    it('returns empty table', () => {
      expect(createTable('')).toEqual([])
    })
  })

  describe('given text table', () => {
    it('returns table', () => {
      expect(createTable(TEXT_TABLE)).toEqual(TABLE)
    })
  })
})

describe('loadTextTable', () => {
  describe('given text table file path', () => {
    it('returns text table', () => {
      expect(loadTextTable(TEST_DATA_PATH)).toEqual(TEXT_TABLE)
    })
  })
})

describe('loadTable', () => {
  describe('given text table file path', () => {
    it('returns table', () => {
      expect(loadTable(TEST_DATA_PATH)).toEqual(TABLE)
    })
  })
})
