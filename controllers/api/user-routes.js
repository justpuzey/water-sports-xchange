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
//getting error and cannot post with models created, follow mod13 step by step 
//need to review with team
router.post('/', (req, res) => {
    Users.create({
      email: req.body.email,
      password: req.body.password
    })
    //adding session when user logs in
      .then(userInfo => {
          req.session.save(() => {
              req.session.users_id = userInfo.id;
              req.session.email = userInfo.email;
              res.session.loggedIn = true;

              res.json(userInfo);
          })
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
//user login verfication
router.post('/login', (req,res) => {
    Users.findOne({
        where: {
            email: req.body.email
        }
    }).then(userInfo => {
        if(!userInfo)
        {
            res.status(400).json({ message:'Email address is not registered on our system'});
            return;
        }
        const validPw = userInfo.checkPassword(req.body.password)
        if(!validPw)
        {
            res.status(400).json({ message: 'Password is incorrect.'})
        }
        req.session.save(() => {
            req.session.users_id = userInfo.id;
            req.session.email = userInfo.email;
            res.session.loggedIn = true;

            res.json(userInfo);
        })
        
        res.json({ users: userInfo, message: `Login successful.`});
        
    })
})


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

//are we giving our users the option to delete their account?
/*
router.delete('/:id', (req,res) =>{
    Users.destory({
        where: {
        id: req.params.id
        }
    }).then(userInfo => {
        if(!userInfo)
        {
            res.status(404).json({'User does not exist'})
        }
        res.json(userInfo)
    }).catch(error => {
        res.status(500).json(error)
    })
})
*/


module.exports = router;