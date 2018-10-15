import JWT from 'jwt-decode';
import moment from 'moment';

const setUserDataFromToken = (token) => {
    return new Promise((resolve, reject) => {
        localStorage.setItem('token', token);
        let data = JWT(token);
        if (data) {
            resolve(data.user)
        } else {
            reject()
        }
    })
}

const isAuthenticated = () => {
    if (localStorage.getItem('token') == null) {
        return false;
    } else {
        try {
            let decodeToken= JWT(localStorage.getItem('token'));
            let now = moment(new Date());
            let end = moment(moment.unix(decodeToken.exp).utc().toDate());
            let duration = moment.duration(end.diff(now));
            if (duration.asMilliseconds() > 0) {
                return true;
            }
            else {
                return false;
            }
        } catch{
            return false;
        }
    }
}
export { setUserDataFromToken, isAuthenticated };