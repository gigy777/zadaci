import { createId } from '../services/common.service';

class Contact {

    constructor(
        user_id,
        first_name,
        last_name,
        phone,
    ) {
        this.id = createId('c');
        this.user_id = user_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone = phone;
        this.is_active = true;
        this.created = new Date();
        this.updated = new Date();
    }
}

export default Contact;