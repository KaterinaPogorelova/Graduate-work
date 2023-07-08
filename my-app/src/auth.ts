import { url } from "inspector"

const DOMAIN = 'https://studapi.teachmeskills.by'
const ADDUSER = '/auth/users/'
const ACTIVATEUSER = '/auth/users/activation/'
const CREATETOKENSURL = '/auth/jwt/create/'
const CHECKMEURL = '/auth/users/me/'
const REFRESHURL = '/auth/jwt/refresh/'
const REFRESHPASSWORD = '/auth/users/set_password/'
const REFRESHNAMEURL = '/auth/users/me/'

export type NewUser = {
	username: string,
	email: string,
	password: string
}

export type ActivationKeys = {
	uid: string,
	token: string
}

export type Login = {
	email: string,
	password: string
}

export type Tokens = {
	access: string,
	refresh: string
}

export type CheckedUser = {
	username: string,
	id: number,
	email: string,
}

export type Passwords = {
	new_password: string,
	current_password: string
}

export type ErrorPasswords = {
	new_password?: string[],
	current_password?: string[]
}

export const postUser = async (user: NewUser) => {
	const postUserUrl = new URL(DOMAIN + ADDUSER)
	const response = await fetch(postUserUrl, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(user)
	})
	const result = await response.json()
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

export const getTokens = async (user: Login) => {
	const tokensUrl = new URL(DOMAIN + CREATETOKENSURL)
	const response = await fetch(tokensUrl, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(user)
	})
	const tokens: Tokens = await response.json()
	return tokens
}

export const checkMe = async () => {
	const token = localStorage.getItem('accessToken')
	const checkUrl = new URL(DOMAIN + CHECKMEURL)
	const response = await fetch(checkUrl, {
		method: 'GET',
		headers: { "Authorization": `Bearer ${token}` }
	})
	if (response.status === 401) {
		const refresh = localStorage.getItem('refreshToken')
		if (!refresh) return
		const token = await refreshJWT()
		localStorage.setItem('accessToken', token.access)
		await checkMe()
	}
	const user: CheckedUser = await response.json()
	return user
}

export const refreshJWT = async () => {
	const refresh = localStorage.getItem('refreshToken')
	const refreshUrl = new URL(DOMAIN + REFRESHURL)
	const response = await fetch(refreshUrl, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ refresh })
	})
	const newToken = await response.json()
	return newToken
}

export const changePassword = async (passwords: Passwords) => {
	const changeUrl = new URL(DOMAIN + REFRESHPASSWORD)
	const token = localStorage.getItem('accessToken')
	const response = await fetch(changeUrl, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
		body: JSON.stringify(passwords)
	})
	if (response.status === 401) {
		const refresh = localStorage.getItem('refreshToken')
		if (!refresh) return
		const token = await refreshJWT()
		localStorage.setItem('accessToken', token.access)
		await changePassword(passwords)
	}
	const result: Passwords | ErrorPasswords = response.status !== 204 ? await response.json() : 'Success'
	return result
}

export const changeName = async (username: string) => {
	const changeNameUrl = new URL(DOMAIN + REFRESHNAMEURL)
	const token = localStorage.getItem('accessToken')
	const response = await fetch(changeNameUrl, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
		body: JSON.stringify({ username })
	})
	if (response.status === 401) {
		const refresh = localStorage.getItem('refreshToken')
		if (!refresh) return
		const token = await refreshJWT()
		localStorage.setItem('accessToken', token.access)
		await changeName(username)
	}
	const result = await response.json()
	return result
}