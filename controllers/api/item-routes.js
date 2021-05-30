const router = require('express').Router();
const { Item, Users } = require('../../models');


//DISPLAYS all items for rent
router.get('/', (req, res) => {
    Item.findAll({
        attributes: ['id', 'name', 'pointval'],
        include: [
            {
                model: Users,
                attributes: ['email']
            }
        ]
    }).then(userInfo => res.json(userInfo))
        .catch(error => res.status(500).json(error))
})

//DISPLAY single item (on user profile?)
router.get('/:id', (req, res) => {
    Item.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'name', 'pointval'],
        include: [
            {
                model: Users,
                attributes: ['email']
            }
        ]
    }).then(userInfo => {
        if (!userInfo) {
            res.status(404).json({ message: 'User does not have this item listed.' });
            return;
        }
        res.json(userInfo)
    })
        .catch(error => {
            res.status(500).json(error);
        })
})

//ADD item for rent
router.post('/', (req, res) => {
    console.log('create new product')
    try {
        Item.create({
            name: req.body.FullName,
            pointval: req.body.RentalPrice,
            users_id: req.body.UserId,
            make: req.body.Make,
            model: req.body.Model,
            year: req.body.Year,
            capacity: req.body.Capacity,
            img_url: req.body.Image,
            description: req.body.Description,
            category_id: req.body.Category,

        }).then(userInfo => res.json(userInfo))
            .catch(error => {
                res.status(500).json(error)
            })

    } catch (error) {
        console.error(error)
        res.status(500).json(error)

    }

})

//UPDATE item pointval(may need to edit this to show item name)
router.put('/:id', (req, res) => {
    Item.update(
        {
            pointval: req.body.pointval
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(userInfo => {
            if (!userInfo) {
                res.status(404).json({ message: 'Item does not exist' });
                return;
            }
            res.json({ item: userInfo, message: 'Item point value successfully updated' });
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

//DELETE an item
router.delete('/:id', (req, res) => {
    Item.destroy({
        where:
        {
            id: req.params.id
        }
    }).then(userInfo => {
        if (!userInfo) {
            res.status(404).json({ message: 'Item does not exist.' })
            return
        }
        res.json({ item: userInfo, message: 'Item succsessfully deleted.' })
    }).catch(error => {
        res.status(500).json(error);
    })
})

module.exports = router;