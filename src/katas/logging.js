export const log = (...args) => (data) => {
  console.log.apply(null, args.concat([data]))

  return data
}
