import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { StoreMenus } from '@interfaces/supabase';

const validationSchema = yup.object({
	item_price: yup.number().required('Item price is required'),
	item_name: yup.string().min(5, 'Should be at least 5 characters').required('Item name is required'),
});

const AddMenuItemForm = ({ onAddItem, store_id }: { onAddItem: (store: StoreMenus) => void; store_id: string }) => {
	const formik = useFormik({
		initialValues: {
			item_price: 0,
			item_name: '',
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			console.log(values);
			formik.resetForm();
			const data = await axios.post(`/api/menu/${store_id}`, values);
			console.log(data.data);
			onAddItem(data.data as StoreMenus);
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<Typography variant='h6'>Add menu item</Typography>
			<TextField
				sx={{ marginY: '0.3rem' }}
				fullWidth
				id='item_name'
				name='item_name'
				label='Item Name'
				value={formik.values.item_name}
				onChange={formik.handleChange}
				error={formik.touched.item_name && Boolean(formik.errors.item_name)}
				helperText={formik.touched.item_name && formik.errors.item_name}
			/>
			<TextField
				sx={{ marginY: '0.3rem' }}
				fullWidth
				id='item_price'
				name='item_price'
				label='Item Price'
				value={formik.values.item_price}
				onChange={formik.handleChange}
				error={formik.touched.item_price && Boolean(formik.errors.item_price)}
				helperText={formik.touched.item_price && formik.errors.item_price}
			/>
			<Button sx={{ marginTop: '1rem' }} color='primary' variant='contained' fullWidth type='submit'>
				Add
			</Button>
		</form>
	);
};

export default AddMenuItemForm;
