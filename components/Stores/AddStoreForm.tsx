import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { Store } from '@interfaces/supabase';

const validationSchema = yup.object({
	store_info: yup.string().min(5, 'Should be at least 5 characters').required('Store info is required'),
	store_name: yup.string().min(5, 'Should be at least 5 characters').required('Store name is required'),
	store_unit: yup.string().min(5, 'Should be at least 5 characters').required('Store unit is required'),
	weekdays: yup.string().min(5, 'Should be at least 5 characters').required('Weekdays opening hours are required'),
	weekends_ph: yup.string().min(5, 'Should be at least 5 characters').required('Weekends/PH opening hours are required'),
	closed: yup.string().min(5, 'Should be at least 5 characters').required('Closed days are required'),
});

const AddStoreForm = ({ onAddStore, id }: { onAddStore: (store: Store) => void; id: number }) => {
	const formik = useFormik({
		initialValues: {
			store_info: '',
			store_name: '',
			store_unit: '',
			weekdays: '',
			weekends_ph: '',
			closed: '',
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			console.log(values);
			formik.resetForm();
			const data = await axios.post(`/api/stores/${id}`, values);
			console.log(data);
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<Typography variant='h6'>Add a new Store</Typography>
			<TextField
				sx={{ marginY: '0.3rem' }}
				fullWidth
				id='store_name'
				name='store_name'
				label='Store Name'
				value={formik.values.store_name}
				onChange={formik.handleChange}
				error={formik.touched.store_name && Boolean(formik.errors.store_name)}
				helperText={formik.touched.store_name && formik.errors.store_name}
			/>
			<TextField
				sx={{ marginY: '0.3rem' }}
				fullWidth
				id='store_info'
				name='store_info'
				label='Store Info'
				value={formik.values.store_info}
				onChange={formik.handleChange}
				error={formik.touched.store_info && Boolean(formik.errors.store_info)}
				helperText={formik.touched.store_info && formik.errors.store_info}
			/>
			<TextField
				sx={{ marginY: '0.3rem' }}
				fullWidth
				id='store_unit'
				name='store_unit'
				label='Store Unit No.'
				value={formik.values.store_unit}
				onChange={formik.handleChange}
				error={formik.touched.store_unit && Boolean(formik.errors.store_unit)}
				helperText={formik.touched.store_unit && formik.errors.store_unit}
			/>
			<TextField
				sx={{ marginY: '0.3rem' }}
				fullWidth
				id='weekdays'
				name='weekdays'
				label='Weekdays Opening Hours'
				value={formik.values.weekdays}
				onChange={formik.handleChange}
				error={formik.touched.weekdays && Boolean(formik.errors.weekdays)}
				helperText={formik.touched.weekdays && formik.errors.weekdays}
			/>

			<TextField
				sx={{ marginY: '0.3rem' }}
				fullWidth
				id='weekends_ph'
				name='weekends_ph'
				label='Weekends/PH Opening Hours'
				value={formik.values.weekends_ph}
				onChange={formik.handleChange}
				error={formik.touched.weekends_ph && Boolean(formik.errors.weekends_ph)}
				helperText={formik.touched.weekends_ph && formik.errors.weekends_ph}
			/>
			<TextField
				sx={{ marginY: '0.3rem' }}
				fullWidth
				id='closed'
				name='closed'
				label='Closed Days'
				value={formik.values.closed}
				onChange={formik.handleChange}
				error={formik.touched.closed && Boolean(formik.errors.closed)}
				helperText={formik.touched.closed && formik.errors.closed}
			/>
			<Button sx={{ marginTop: '1rem' }} color='primary' variant='contained' fullWidth type='submit'>
				Submit
			</Button>
		</form>
	);
};

export default AddStoreForm;
