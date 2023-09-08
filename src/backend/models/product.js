
// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required:[true,'Name is required']
//     },
//     description: {
//         type: String,
//         required:[true,"Description field cannot be empty"]
//     },
//     price: {
//         type: Number,
//         required:[true,"price field cannot be empty"]
//     },
//     images: [
//         {
//             public_id: {
//                 type: String,
//             },
//             url: {
//                 type: String,
//             },
//         }
//     ],
//     category: {
//         type: String,
//         required:[true,"category field cannot be empty"],
//         enum: {
//             values: [
//                 'electronics', 'fashion','foods'
//             ],
//             message:'Invalid Category!'
            
//         }
//     },
//     seller: {
//         type: String,
//         required:[true,"seller field cannot be empty"]
//     },
//     stock: {
//         type: Number,
//         required:[true,"stock field cannot be empty"]
//     },
//     ratings: {
//         type: Number,
//         default: 0
//     },
//     reviews: [
//         {
//             rating: {
//                 type: Number,
//                 required: true
//             },
//             comment: {
//                 type: String,
//                 required: true
//             },
//             createdAt: {
//                 type : Date ,
//                 default:Date.now,
//             }
//         }
//     ],
//     createdAt: {
//         type : Date ,
//         default:Date.now,
//     },
// });

// export default mongoose.models.Product || mongoose.model("Product", productSchema)