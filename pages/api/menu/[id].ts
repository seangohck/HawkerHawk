import { StoreMenus } from '@interfaces/supabase';
import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import cors from '@utils/cors';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as string, process.env.SUPABASE_KEY as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse<StoreMenus[] | StoreMenus>) {
	await cors(req, res);

	const {
		query: { id },
		method,
		body,
	} = req;
	console.log(body);

	if (method === 'POST') {
		const { data: menu_data, error: menu_error } = await supabase.from<StoreMenus>('store_menus').insert([
			{
				store_id: id as string,
				item_name: body.item_name,
				item_price: body.item_price,
			},
		]);

		if (menu_error || !menu_data) {
			console.log(menu_error);
			return res.status(500);
		}

		console.log('backend');
		console.log(menu_data);
		return res.status(201).json(menu_data[0]);
	}

	if (method === 'GET') {
		const { data, error } = await supabase
			.from<StoreMenus>('store_menus')
			.select()
			.match({ store_id: id as string });

		if (error || !data) {
			console.log(error);
			return res.status(500);
		}

		return res.status(200).json(data);
	}
}
