export const noop = () => {}
export const print = (...args) => args.map(e =>
  e instanceof Array ? console.table(e) : console.log(e)
)
