import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './company';

const company = new Company();
const user = new User();

const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
