const router = require('express').Router();
const { Users } = require('../../models')


//users api GET 
router.get('/', (req,res) => {
    Users.findAll({
        attributes: { exclude: ['password']}
    }).then(userInfo => res.json(userInfo))
    .catch(error => {res.status(500).json(error)})
})

//users api:id (single user info) GET 
router.get('/:id', (req,res)=>{
    Users.findOne({
        attributes: { exclude: ['password']},
        where:
        {
            id: req.params.id
        }
    }).then(userInfo => {
        if(!userInfo)
        {
            //user validation
            res.status(404).json({message: 'User does not exist.'})
            return;
        }
        res.json(userInfo)
    }).catch(error => {
        res.status(500).json(error);
    })
})


//new user POST 
//getting error and cannot post with models created with sessions, follow mod13 step by step 
//need to review with team
router.post('/', (req, res) => {
    Users.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    }).then(userInfo => {
        req.session.save(() => {
            req.session.users_id = userInfo.id
            req.session.email = userInfo.email,
            req.session.loggedIn = true;

            res.json(userInfo);
        })
    })
      .catch(error => {
        res.status(500).json(error);
      });
  });
//user login verfication
router.post('/login', (req, res) => {
    Users.findOne({
      where: {
        email: req.body.email
      }
    }).then(userInfo => {
      if (!userInfo) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
  
      const validPw = userInfo.checkPassword(req.body.password);
  
      if (!validPw) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        // declare session variables
        req.session.users_id = userInfo.id;
        req.session.loggedIn = true;
  
        res.json({ user: userInfo, message: 'You are now logged in!' });
      });
    });
  });

//user update PUT 

router.put('/:id', (req,res) => {
    Users.update(req.body, {
        individualHooks: true,
        where:
        {
            id: req.params.id
        }
    })
    .then(userInfo => {
        if(!userInfo[0])
        {
            res.status(404).json({message: 'User does not exist'});
            return;
        }
        res.json(userInfo);
    }).catch(error => {
        res.status(500).json(error)
    })
})

//if user would like to deactivate their account 
router.delete('/:id', (req,res) =>{
    Users.destroy({
        where: {
        id: req.params.id
        }
    }).then(userInfo => {
        if(!userInfo)
        {
            res.status(404).json({ message: 'User does not exist'})
        }
        res.json({message: 'User successfully deleted.'})
    }).catch(error => {
        res.status(500).json(error)
    })
})

//logout
router.post('/logout', (req,res) => {
        if (req.session.loggedIn) {
            req.session.destroy(() => {
              res.status(204).end();
            });
          }
          else {
            res.status(404).end();
          }
    })







module.exports = router;