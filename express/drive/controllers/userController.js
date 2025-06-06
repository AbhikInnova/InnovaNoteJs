const User=require('../model/userModel')
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllusers();
    res.json(users);
  } catch (err) {
    console.log("hiii");
    
    res.status(500).json({ error: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.getUserById(req.params.id);
    // if (!user) return res.status(404).json({ message: 'User not found' });
     const activeUsers = user.filter(user => user.is_deleted === false);
    if (activeUsers.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(activeUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const [user] = await User.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    console.log(req.body.password);
    
    const [user] = await User.updateUser(req.params.id, req.body.password);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    console.log(err);
    
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleted = await User.updateUser(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'User not found' });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.softDelete=async(req,res)=>{
    try{
        const [user]=await User.softDelete(req.params.id);
         if (!deleted) return res.status(404).json({ message: 'User not found' });
         res.json(user);
    }catch (err) {
    res.status(500).json({ error: err.message });
  }
}