// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { HawkerAPIRecord } from '@interfaces/hawkerCentre';

export default async function handler(req: NextApiRequest, res: NextApiResponse<HawkerAPIRecord[]>) {
	const axiosRes = await axios.get(process.env.NEXT_PUBLIC_HAWKER_API_URL as string);
	const hawkerCentres = axiosRes.data.result.records;
	res.status(200).json(hawkerCentres);
}
