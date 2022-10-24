export interface AuthContextState {
    acessToken : string,
    user: string,
    pass: string,
    setAcessToken: (a : string) => void
    setUser: (a : string) => void
    setPass: (a : string) => void
}