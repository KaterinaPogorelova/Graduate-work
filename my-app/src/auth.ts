import { url } from "inspector"

const DOMAIN = 'https://studapi.teachmeskills.by'
const ADDUSER = '/auth/users/'
const ACTIVATEUSER = '/auth/users/activation/'

type NewUser = {
	username: string,
	email: string,
	password: string
}

type ActivationKeys = {
	uid: string,
	token: string
}

type Login = {
	email: string,
	password: string
}

export const postUser = async (user: NewUser) => {
	const postUserUrl = new URL(DOMAIN + ADDUSER)
	const response = await fetch(postUserUrl, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(user)
	})
	const result = await response.json()
	console.log(result)
	return result
}

export const activateUser = async (keys: ActivationKeys) => {
	const activateUrl = new URL(DOMAIN + ACTIVATEUSER)
	const response = await fetch(activateUrl, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(keys)
	})
	const result: ActivationKeys = await response.json()
	return result
}

/* export getTokens = async () => {

} */