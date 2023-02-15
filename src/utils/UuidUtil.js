import { v4 as uuidv4 } from 'uuid';

const UuidUtil = {
    generateUuid() {
        return uuidv4();
    }
}

export default UuidUtil;