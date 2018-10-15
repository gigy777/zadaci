import { createId, createPassword } from '../services/common.service';


class User {
    constructor(
        user_name,
        password,
        first_name,
        last_name,
        phone,
    ) {
        this.id = createId('u');
        this.user_name = user_name;
        this.password = createPassword(password);
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone = phone;
        this.is_active = true;
        this.created = new Date();
        this.updated = new Date();
    }
}

export default User;