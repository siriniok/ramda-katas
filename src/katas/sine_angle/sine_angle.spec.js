import sine from './sine_angle'

describe('sine', () => {
  it('approximates sine of an angle close enough', () => {
    expect(sine(0)).toBe(0)
    expect(sine(-0.1)).toBe(-0.09985185185185186)
    expect(sine(0.1)).toBe(0.09985185185185186)
    expect(sine(-12.15)).toBe(0.3998034574133398)
    expect(sine(12.15)).toBe(-0.3998034574133398)
  })
})
