import mongoose from "mongoose";
import { BiCategory } from "react-icons/bi";
import { MdDescription } from "react-icons/md";

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: Array, required: true},
    category: {type: String, required: true},
    subCategory: {type: String, required: true},
    sizes: {type: Arrays, required: true},
    bestseller: {type: Boolean},
    data: {type: Number, required: true},

})

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;