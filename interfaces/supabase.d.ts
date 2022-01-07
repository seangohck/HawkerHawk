export interface StoreHours {
	weekdays: string;
	weekends_ph: string;
	closed: string;
}

export interface StoreMenus {
	item_id: string;
	item_name: string;
	item_price: string;
}

export interface Store {
	store_id: string;
	store_name: string;
	store_hours: StoreHours[];
	store_menus: StoreMenus[];
	store_info: string;
	store_unit: string;
}
