//css
import styles from '@styles/ScrollToTop.module.css';

/**
 * Renders the scroll to top component
 *
 * @returns {JSX.Element} - The scroll to top component
 */
const ScrollToTop = (): JSX.Element => {
	return <a href='#' className={styles.stt} title='scroll to top'></a>;
};

export default ScrollToTop;
