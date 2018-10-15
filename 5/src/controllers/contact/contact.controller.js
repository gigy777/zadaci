import QueryService from '../../services/querys.service';
import Contact from '../../models/contact';

const querys = new QueryService();

const create = (req, res) => {

    let _contact = new Contact(
        req.user.id,
        req.body.first_name,
        req.body.last_name,
        req.body.phone
    )

    querys.insertData('contacts', _contact).then((result) => {
        res.status(201).json({ 'message': 'Succes add contact' });
    }).catch((err) => {
        res.status(400).json({ 'message': err })
    })
}

const getOne = (req, res, next) => {

    const id = req.params.id;

    querys.getById('contacts', id).then((result) => {
        if (!result) {
            res.status(200).json(result);
            next();
        }
        res.status(200).json(result);
        next();

    }).catch((err) => {
        res.status(400).json({
            message: err
        });
    })
}

const list = (req, res) => {

    querys.customQuery('select * from contacts where user_id="'+req.user.id+'" and is_active=1').then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json({ 'message': err });
    })
}

const updateById = (req, res, next) => {
    const id = req.params.id;
    const body = req.body;

    querys.getById('contacts', id).then((result) => {

        let contact = result;

        for (let key in body) {
            if (key !== 'id') {
                if (contact[key] == body[key]) {
                    delete body[key];
                }
            }
        }
        body['updated'] = new Date();


        querys.updateData('contacts', body, id).then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(400).json({ 'message': err })
        })

    }).catch((err) => {
        res.status(400).json({
            message: err
        });
    })
}

const deleteById = (req, res, next) => {

    const id = req.params.id;

    let _contact = {};
    _contact.is_active = 0;
    _contact.updated = new Date();

    querys.updateData('contacts', _contact, id).then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json({ 'message': err })
    });
}

export { create, getOne, list, updateById, deleteById }
