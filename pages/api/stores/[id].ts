import { StoreHours, Store, StoreMenus } from '@interfaces/supabase';
import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import cors from '@utils/cors';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as string, process.env.SUPABASE_KEY as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse<Store[] | Store>) {
	await cors(req, res);

	const {
		query: { id },
		method,
		body,
	} = req;
	console.log(body);
	if (method === 'POST') {
		const { data: store_data, error: store_error } = await supabase.from<Store>('stores').insert([
			{
				hawker_serial_no: Number(id),
				store_info: body.store_info,
				store_name: body.store_name,
				store_unit: body.store_unit,
			},
		]);

		if (store_error || !store_data) {
			console.log(store_error);
			return res.status(500);
		}

		const { data: hours_data, error: hours_error } = await supabase.from<StoreHours>('store_hours').insert([
			{
				store_id: (store_data as Store[])[0].store_id,
				weekdays: body.weekdays,
				weekends_ph: body.weekends_ph,
				closed: body.closed,
			},
		]);

		if (hours_error || !hours_data) {
			console.log(hours_error);
			return res.status(500);
		}

		const store: Store = { ...store_data[0], store_hours: hours_data, store_menus: [] };

		return res.status(200).json(store);
	}

	const { data, error } = await supabase
		.from<Store>('stores')
		.select(
			'store_id, store_info, store_name, store_unit,' +
				'store_menus (item_id, item_name, item_price),' +
				'store_hours (weekdays, weekends_ph, closed)'
		)
		.match({ hawker_serial_no: Number(`${id}`) });

	if (error) {
		console.log(error);
		return res.status(500);
	}

	return res.status(200).json(data as Store[]);
}
