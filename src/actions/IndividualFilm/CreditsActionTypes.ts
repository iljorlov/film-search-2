export const CREDITS_LOADING = 'CREDITS_LOADING'
export const CREDITS_FAIL = 'CREDITS_FAIL'
export const CREDITS_SUCCESS = 'CREDITS_SUCCESS'


export type CastType = {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}

export type CrewType = {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  credit_id: string
  department: string
  job: string
}

export type CreditsType = {
  id: number
  cast: [CastType]
  crew: [CrewType]
}


export interface CreditsFail{
  type: typeof CREDITS_FAIL,
  errorMsg: ''
}
export interface CreditsLoading{
  type: typeof CREDITS_LOADING,
  errorMsg: ''
}
export interface CreditsSuccess{
  type: typeof CREDITS_SUCCESS,
  payload: CreditsType,
  filmId: number,
  errorMsg: ''
}

export type CreditsDispatchTypes = CreditsFail | CreditsLoading | CreditsSuccess
