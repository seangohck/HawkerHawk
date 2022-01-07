import { StoreHours, Store, StoreMenus } from '@interfaces/supabase';
import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import cors from '@utils/cors';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as string, process.env.SUPABASE_KEY as string);

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
