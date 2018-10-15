import QueryService from '../../services/querys.service';
import User from '../../models/user'

const querys = new QueryService();


const register = (req, res) => {
    let _user = new  User(
        req.body.user_name,
        req.body.password,            
        req.body.first_name,
        req.body.last_name,
        req.body.phone
    );

querys.insertData('users', _user).then((result) => {
    res.status(201).json({ 'message': 'Succes add user' });
}).catch((err) => {
    res.status(400).json({ 'message': err })
})
}

export { register }