// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { HawkerAPIRecord } from '@interfaces/hawkerCentre';
import cors from '@utils/cors';

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
