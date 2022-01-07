export interface StoreHours {
	store_id: string;
	weekdays: string;
	weekends_ph: string;
	closed: string;
}

export interface StoreMenus {
	store_id: string;
	item_id: string;
	item_name: string;
	item_price: string;
}

export interface Store {
	hawker_serial_no: number;
	store_id: string;
	store_name: string;
	store_hours: StoreHours[];
	store_menus: StoreMenus[];
	store_info: string;
	store_unit: string;
}
