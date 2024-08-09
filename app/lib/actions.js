import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { signIn } from "../auth";


// Ensure the correct import for redirect

export const addUser = async (formData) => {
  "use server"; // Ensures this code runs on the server

  // Extract form data
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  console.log(username, email, password, phone, address, isAdmin, isActive);

  try {
    await connectToDB();
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await user.save();

    // Perform revalidation and redirection
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add user");
  }

  revalidatePath("/dashboard/users"); // Ensure this is the path you want to revalidate
  // Redirection should be handled as part of the server-side response or client-side handling

  // If using server actions, redirection should typically be handled in the client-side logic
  redirect("/dashboard/users");
};

// update user

export const updateUser = async (formData) => {
  "use server"; // Ensures this code runs on the server

  // Extract form data
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  console.log(id, username, email, password, phone, address, isAdmin, isActive,'from line 53');

  const updatefields = {
    username,
    email,
    password,
    phone,
    address,
    isAdmin,
    isActive,
  };

  for (const key in updatefields) {
    if (updatefields[key] == undefined || updatefields[key] == "") {
      delete updatefields[key];
    }
  }

  try {
    await connectToDB();

    const user = await User.findByIdAndUpdate(id, updatefields);

    await user.save();

    // Perform revalidation and redirection
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update user");
  }

  revalidatePath("/dashboard/users"); // Ensure this is the path you want to revalidate
  // Redirection should be handled as part of the server-side response or client-side handling

  // If using server actions, redirection should typically be handled in the client-side logic
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  "use server"; // Ensures this code runs on the server

  // Extract form data
  const { title, desc, price, stock, cat, image, color, size } =
    Object.fromEntries(formData);
  console.log(title, desc, price, image);

  try {
    await connectToDB();

    const product = await Product.create({
      title,
      desc,
      price,
      cat,
      image,
      color,
      size,
      stock,
    });

    await product.save();

    // Perform revalidation and redirection
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add product");
  }

  revalidatePath("/dashboard/products"); // Ensure this is the path you want to revalidate
  // Redirection should be handled as part of the server-side response or client-side handling

  // If using server actions, redirection should typically be handled in the client-side logic
  redirect("/dashboard/products");
};


// update product

export const updateProduct = async (formData) => {
  "use server"; // Ensures this code runs on the server

  // Extract form data
  const { id, title, desc, price, stock, cat, image, color, size } = Object.fromEntries(formData);
  console.log(id, title, desc, price, image);

  const updatefields = {
    title,
    desc,
    price,
    cat,
    image,
    color,
    size,
    stock,
  };

  for (const key in updatefields) {
    if (updatefields[key] == undefined || updatefields[key] == "") {
      delete updatefields[key];
    }
  } 

  try {
    await connectToDB();

    const product = await Product.findByIdAndUpdate(id, updatefields);

    await product.save();

    // Perform revalidation and redirection
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update product");
  }

  revalidatePath("/dashboard/products"); // Ensure this is the path you want to revalidate
  // Redirection should be handled as part of the server-side response or client-side handling

  // If using server actions, redirection should typically be handled in the client-side logic
  redirect("/dashboard/products");

}

// For Delete Product

export const deleteProduct = async (formData) => {
  "use server"; // Ensures this code runs on the server
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDB();
    await Product.findByIdAndDelete(id);
    revalidatePath("/dashboard/products"); // Ensure this is the path you want to revalidate
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete product");
  }
};

// delete user
export const deleteUser = async (formData) => {
  "use server"; // Ensures this code runs on the server
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user");
  }

  revalidatePath("/dashboard/users"); // Ensure this is the path you want to revalidate
};




// for login
export const authenticate=async(formdata)=>{
  "use server";

  const {username,password}=Object.fromEntries(formdata);
  console.log(username,password);

  try{

     await signIn("credentials",{username,password,redirect:false } )
  
   

  
   
  }catch(error){
    console.log(error);
    return {error:"Wrong Credentials"};
  }

  redirect('/dashboard');

}
