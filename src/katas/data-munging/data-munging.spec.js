import {
  createTable,
  loadTextTable,
  loadTable,
  tableHeader,
  tableRows,
  day,
  maxTemp,
  minTemp,
  deltaTemp,
  deltaTempRow,
  minTempSpreadDay
} from './data-munging'

const TEXT_TABLE = '  Dy MxT   MnT\n   1  82*   64\n  10  72    59*\n  20  80    68\n'
const TABLE = [
  ['Dy', 'MxT', 'MnT'],
  ['1',  '82*', '64'],
  ['10', '72',  '59*'],
  ['20', '80',  '68']
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

describe('tableHeader', () => {
  describe('given table', () => {
    it('returns table header', () => {
      expect(tableHeader(TABLE)).toEqual(['Dy', 'MxT', 'MnT'])
    })
  })
})

describe('tableRows', () => {
  describe('given table', () => {
    it('returns table rows', () => {
      expect(tableRows(TABLE)).toEqual([
        ['1',  '82*', '64'],
        ['10', '72',  '59*'],
        ['20', '80',  '68']
      ])
    })
  })
})

describe('day', () => {
  describe('given weather table row', () => {
    it('returns day value', () => {
      expect(day(['1', '82*', '64'])).toEqual('1')
    })
  })
})

describe('maxTemp', () => {
  describe('given weather table row', () => {
    it('returns max temp value', () => {
      expect(maxTemp(['1', '82', '64'])).toEqual(82)
    })
  })

  describe('given weather table row with max value (*)', () => {
    it('returns max temp value', () => {
      expect(maxTemp(['1', '82*', '64'])).toEqual(82)
    })
  })
})

describe('minTemp', () => {
  describe('given weather table row', () => {
    it('returns min temp value', () => {
      expect(minTemp(['1', '82*', '64'])).toEqual(64)
    })
  })

  describe('given weather table row with max value (*)', () => {
    it('returns min temp value', () => {
      expect(minTemp(['1', '82', '64*'])).toEqual(64)
    })
  })
})

describe('deltaTemp', () => {
  describe('given two temp values', () => {
    it('returns delta', () => {
      expect(deltaTemp(82, 64)).toEqual(18)
      expect(deltaTemp(64, 82)).toEqual(18)
    })
  })
})

describe('deltaTempRow', () => {
  describe('given weather table row', () => {
    it('returns delta for this row', () => {
      expect(deltaTempRow(['1', '82*', '64'])).toEqual(18)
      expect(deltaTempRow(['1', '64', '82*'])).toEqual(18)
    })
  })
})

describe('minTempSpreadDay', () => {
  describe('given test table', () => {
    it('returns a day with min temp spread', () => {
      expect(minTempSpreadDay(TABLE)).toEqual('20')
    })
  })

  describe('given real-world table', () => {
    it('returns a day with min temp spread', () => {
      expect(minTempSpreadDay(loadTable(WEATHER_DATA_PATH))).toEqual('14')
    })
  })
})
