import { clerkClient } from "@clerk/express";

// checking if user is authenticated or not..
export const protectRoute = async(req, res, next)=> {
    if(!req.auth.userId){
        return res.status(401).json({message: "Unauthorized - you must be logged in"});
    }

    //if user is authenticated....
    next();
};

// check if user admin or not
export const requireAdmin = async(req,res,next)=>{
    try{
       const currentUser = await clerkClient.users.getUser(req.auth.userId);
       const isAdmin= process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;

       if(!isAdmin){
        return res.status(403).json({message: "Unauthorized - you must be an admin"});
       }

    // if user is admin....
       next();
    }catch(error){
        return res.status(500).json({message : "Internal Server error", error});
    }
}