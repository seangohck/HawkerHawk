// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { HawkerAPIRecord } from '@interfaces/hawkerCentre';
import Cors from 'cors';

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function initMiddleware(middleware) {
	return (req: NextApiRequest, res: NextApiResponse) =>
		new Promise((resolve, reject) => {
			middleware(req, res, (result) => {
				if (result instanceof Error) {
					return reject(result);
				}
				return resolve(result);
			});
		});
}

// Initialize the cors middleware
const cors = initMiddleware(
	// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
	Cors({
		// Only allow requests with GET, POST and OPTIONS
		methods: ['GET', 'POST', 'OPTIONS'],
	})
);

export default async function handler(req: NextApiRequest, res: NextApiResponse<HawkerAPIRecord>) {
	// Run cors
	await cors(req, res);

	const {
		query: { id },
		method,
	} = req;
	const axiosRes = await axios.get(process.env.NEXT_PUBLIC_HAWKER_API_URL as string);
	const hawkerCentres: HawkerAPIRecord[] = axiosRes.data.result.records;
	const hawkerCentre = hawkerCentres.find((hawkerCentre) => hawkerCentre._id === Number(id));
	res.status(200).json(hawkerCentre as HawkerAPIRecord);
}
