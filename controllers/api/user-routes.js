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
    })
      .then(userInfo => res.json(userInfo))
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
            res.status(400).json({ message:'Email address is not registered on our systerm'});
            return;
        }
        const validPw = userInfo.checkPassword(req.body.password)
        if(!validPw)
        {
            res.status(400).json({ message: 'Password is incorrect.'})
        }
        res.json({ users: userInfo, message: `You are now logged in.`});
        //res.json({ user: userInfo });
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



module.exports = router;