import express, { Request, Response } from 'express'
import { ServerIssue } from '../interfaces/server-interfaces'

const app = express()
const port = 3000

app.use(express.json())

let issues: ServerIssue[] = [
	{ id: 1, title: 'Issue: incorrect data', description: 'missing unique id' },
	{
		id: 2,
		title: 'Issue: Wrong email address',
		description: 'use lowercase letters only',
	},
	{
		id: 3,
		title: 'Issue: User does not exist',
		description: 'create a new user',
	},
]

//** ENDPOINTS */
app.post('/issues', (req: Request, res: Response) => {
	const issue: ServerIssue = req.body
	console.log(issue)
	res.status(201).send(issue)
})

app.get('/issues/:id', (req: Request, res: Response) => {
	const issue = issues.find((issue) => issue.id == Number(req.params.id))
	res.send(issue)
})

app.put('/issues/:id', (req: Request, res: Response) => {
	console.log(req.body)
	res.send(req.body)
})

app.delete('/issues/:id', (req: Request, res: Response) => {
	console.log(req.params.id)
	res.status(204).send()
})

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
