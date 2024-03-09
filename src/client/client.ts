import axios from 'axios'
import { ClientIssue } from '../interfaces/client-interfaces'

const baseURL = 'http://localhost:3000/issues'

//** CRUD FUNCTIONS */
async function createIssue(issue: ClientIssue) {
	try {
		const response = await axios.post(baseURL, issue)
		console.log('Issue created:', response.data)
	} catch (error) {
		console.error('Error creating issue:', error)
	}
}

async function readIssue(id: number) {
	try {
		const response = await axios.get(`${baseURL}/${id}`)
		console.log('Issue details:', response.data)
	} catch (error) {
		console.error('Error reading issue:', error)
	}
}

async function updateIssue(id: number, issue: Partial<ClientIssue>) {
	try {
		const response = await axios.put(`${baseURL}/${id}`, issue)
		console.log('Issue updated:', response.data)
	} catch (error) {
		console.error('Error updating issue:', error)
	}
}

async function deleteIssue(id: number) {
	try {
		await axios.delete(`${baseURL}/${id}`)
		console.log(`Issue with ID ${id} deleted.`)
	} catch (error) {
		console.error('Error deleting issue:', error)
	}
}


//** cli testing */
;(async () => {
	await createIssue({
		id: 4,
		title: 'created new issue',
		description: 'no description for now',
	})

	await readIssue(1)

	await updateIssue(2, {
		title: 'updated the issue',
		description: 'new description.',
	})

	await deleteIssue(2)
})()
