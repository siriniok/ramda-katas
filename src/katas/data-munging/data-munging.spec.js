import createTable from './data-munging'

const TEXT_TABLE = '  col1 col2\n     1    2\n    10   20\n'

describe('createTable', () => {
  describe('given empty text table', () => {
    it('returns empty table', () => {
      expect(createTable('')).toEqual([])
    })
  })

  describe('given text table', () => {
    it('returns table', () => {
      expect(createTable(TEXT_TABLE)).toEqual([
        ['col1', 'col2'],
        ['1', '2'],
        ['10', '20']
      ])
    })
  })
})
