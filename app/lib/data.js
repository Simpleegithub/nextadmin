import { Product, User } from "./models"
import { connectToDB } from "./utils";

export const fetchUsers=async(query,page)=>{
    const regex=new RegExp(query,"i");
    const ITEM_PER_PAGE=2;
    // console.log(regex)
    try{
        await connectToDB();
        const count=await User.countDocuments( {username:{$regex:regex}} );
        const users=await User.find( {username:{$regex:regex}} ) .limit(ITEM_PER_PAGE).skip((page-1)*ITEM_PER_PAGE);
        return {users,count};

    }catch(error){
        console.log(error);
        throw new Error("Failed to fetch users");
    }
}

export const fetchUser=async(id)=>{
    try{
        await connectToDB();
        const user=await User.findById(id);
        return user;    

    }catch(error){
        console.log(error);
        throw new Error("Failed to fetch user");
    }
}



export const fetchProduct=async(id)=>{
    try{
        await connectToDB();
        const product=await Product.findById(id);
        return product;    

    }catch(error){
        console.log(error);
        throw new Error("Failed to fetch user");
    }
}






export const deleteUser=async(id)=>{
    try{
        await connectToDB();
        const user=await User.findByIdAndDelete(id);
        return user;    

    }catch(error){
        console.log(error);
        throw new Error("Failed to delete user");
    }
}


export const fetchProducts=async(query,page)=>{
    const regex=new RegExp(query,"i");
    const ITEM_PER_PAGE=2;
    // console.log(regex)
    try{
        await connectToDB();    
        const count=await Product.countDocuments( {title:{$regex:regex}} );
        const products=await Product.find( {title:{$regex:regex}} ) .limit(ITEM_PER_PAGE).skip((page-1)*ITEM_PER_PAGE);
        return {products,count};

    }catch(error){
        console.log(error);
        throw new Error("Failed to fetch products");
    }

}