import { HawkerAPIRecord } from '@interfaces/hawkerCentre';

export default interface DetailedHawkerCardProps {
	hawkerCentre?: HawkerAPIRecord;
	addStore: () => void;
}
