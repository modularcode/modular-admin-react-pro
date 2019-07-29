// Helper type to ovverride types
// https://stackoverflow.com/questions/43080547/how-to-override-type-properties-in-typescript?rq=1
export type Override<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U

const helpersService = {}

export default helpersService
