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
  minTempSpreadDay,
  createFootballTable,
  loadFootballTextTable,
  loadFootballTable
} from './data-munging'

const TEXT_TABLE = '  Dy MxT   MnT\n   1  82*   64\n  10  72    59*\n  20  80    68\n'
const TABLE = [
  ['Dy', 'MxT', 'MnT'],
  ['1', '82*', '64'],
  ['10', '72', '59*'],
  ['20', '80', '68']
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
        ['1', '82*', '64'],
        ['10', '72', '59*'],
        ['20', '80', '68']
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

const FOOTBALL_TEXT_TABLE =
  `       Team            P     F      A
    1. Arsenal         38    79  -  36
    3. Manchester_U    38    87  -  45
   -----------------------------------
   20. Leicester       38    20    30\n`

const FOOTBALL_TABLE = {
  'Team': ['1. Arsenal', '3. Manchester_U', '20. Leicester'],
  'P': ['38', '38', '38'],
  'F': ['79', '87', '20'],
  'A': ['36', '45', '30']
}

const FOOTBALL_TEST_DATA_PATH = 'src/katas/data-munging/football-test.dat'
const FOOTBALL_DATA_PATH = 'src/katas/data-munging/football.dat'

describe('createFootballTable', () => {
  describe('given empty text table', () => {
    it('returns empty football table', () => {
      expect(createFootballTable('')).toEqual([])
    })
  })

  describe('given text table', () => {
    it('returns football table', () => {
      expect(createFootballTable(FOOTBALL_TEXT_TABLE)).toEqual(FOOTBALL_TABLE)
    })
  })
})

describe('loadFootballTextTable', () => {
  describe('given football text table file path', () => {
    it('returns football text table', () => {
      expect(loadFootballTextTable(FOOTBALL_TEST_DATA_PATH))
        .toEqual(FOOTBALL_TEXT_TABLE)
    })
  })
})

describe('loadFootballTable', () => {
  describe('given football text table file path', () => {
    it('returns football table', () => {
      expect(loadFootballTable(FOOTBALL_TEST_DATA_PATH))
        .toEqual(FOOTBALL_TABLE)
    })
  })
})
