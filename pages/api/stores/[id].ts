import { StoreHours, Store, StoreMenus } from '@interfaces/supabase';
import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import cors from '@utils/cors';

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL as string,
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQxMTY4MjgxLCJleHAiOjE5NTY3NDQyODF9.qogpm0bycNPZtjQGkq2073h8ACWrnLKU-HkuUpuRmWM'
);

export default async function handler(req: NextApiRequest, res: NextApiResponse<Store[]>) {
	await cors(req, res);

	const {
		query: { id },
		method,
	} = req;

	const { data, error } = await supabase
		.from<Store>('stores')
		.select(
			'store_id, store_info, store_name, store_unit,' +
				'store_menus (item_id, item_name, item_price),' +
				'store_hours (weekdays, weekends_ph, closed)'
		)
		.match({ hawker_serial_no: Number(`${id}`) });

	if (error) {
		return res.status(500);
	}

	return res.status(200).json(data as Store[]);
}
