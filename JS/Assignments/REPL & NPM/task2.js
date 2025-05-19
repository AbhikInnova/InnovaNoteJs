const axios=require("axios")
axios.get("dummy api").then((data)=>{
    console.log(data);
}).catch(err=>console.log(err));