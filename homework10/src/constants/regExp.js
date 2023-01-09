export const NAMEREGEXP = /^[A-Z][a-z]+$/
export const PHONENUMBERREGEXP = /^[^+]?(\d{2})?(097|098|050|063|073|095|055|066|067|068|093|096|099)(\s|-)?\d{7}$/i
export const EMAILREGEXP = /^[A-Z]+[A-Z \d.]+@[A-Z\d-]+.[A-Z]{2,}$/i
export const PASSWORDREGEXP = /^(?=.*[!@#$&*])(?=[A-Z]*\d).{8,13}$/i