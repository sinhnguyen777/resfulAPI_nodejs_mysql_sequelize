// const Product = require('../models/product')
// // show tất cả
// exports.getPost = (req, res) => {
//     Post.findAll().then(post => {
//         res.status(200).json({ message: 'Hello post sucessfully', post: post });
//     })
//     .catch(err => {
//         res.status(500).json({ message: err })
//     })
// }






// // //Thêm
// // exports.createPost = (req, res) => {
// //     const id = req.params.id;
// //     const name = req.body.name;
// //     const teamsize = req.body.teamsize;
// //     const post = new Post({ name: name, teamsize: teamsize, create_date: new Date().toISOString })

// //     post
// //         .save()
// //         .then(result => {
// //             res.status(201).json({
// //                 message: 'Them thanh cong new post',
// //                 post: result
// //             });
// //         })
// //         .catch(err => {
// //             res.status(500).json({ message: err })
// //         })

// // }

// // // Xoá
// // exports.delete = (req, res) => {
// //     Post.destroy({
// //         where: {
// //             id: req.params.id
// //         }
// //     })
// //     .then(function (deletedRecord) {
// //         if(deletedRecord === 1){
// //             res.status(200).json({message:"Deleted successfully"});          
// //         }
// //         else
// //         {
// //             res.status(404).json({message:"record not found"})
// //         }
// //     })
// //     .catch(function (error){
// //         res.status(500).json(error);
// //     });
// // }

// // // Sửa
// // exports.update = (req, res) => {
// //     const id = req.params.id;
// //     // console.log(id);
// //     const title = req.body.title;
// //     const image = req.body.image;
// //     const content = req.body.content;
// //     const post = new Post({ title: title, image: image, content: content })
// //     post.update({
// //         // title: title, content: content,
// //         where: {
// //            id
// //         },
        
// //     })
// //     .then(result => {
// //         res.status(201).json({
// //             message: 'Update thanh cong new post',
// //             post: result
// //         });
// //     })
// //     .catch(err => {
// //         res.status(500).json({ message: err })
// //     })
// // }
