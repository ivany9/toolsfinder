const { AuthenticationError } = require('apollo-server-express');
const { User, Tool } = require('../models');
const { Tools }= require('../models');
const { signToken } = require('../utils/auth');
const path = require('path');
const {
  GraphQLUpload,
  graphqlUploadExpress, // A Koa implementation is also exported.
} = require('graphql-upload');

const getFileDetails = file => 
  new Promise (async (resolve, reject) => {
    const {filename, mimetype, createReadStream} = await file
    console.log(file, "form backend")

    let filesize = 0
    let stream = createReadStream()

    stream.on('data', chunk => {
      filesize += chunk.length
    })

    stream.once('end', () => 
    resolve({
      filename,
      mimetype,
      filesize
    }))

    stream.on('error', reject)
  })


const resolvers = {

  FileUpload: GraphQLUpload,
  // Upload: GraphQLUpload,
  
  Query: {
   
     tools:async()=>{
      return await Tool.find({}).populate('rent');        
     
   },
   

      mytools:async(parent,{userId})=>{
        return  User.findOne({_id:userId}).populate('mytools').populate({
          path:'mytools',
          populate:'rent'
        });
      },
        
      myrentt:async(parent,{userId})=>{
        return  User.find({_id:userId}).populate('myrents')
        },    
      
      location:async(parent,{postcode})=>{
    
        return  User.find({postcode}).populate('mytools')
        
      },

      category:async(parent,{category})=>{
    
        return  Tool.find({category}).populate('rent')
        
      },
        

      

    users:async()=>{
       return await User.find({}).populate('mytools').populate({
        path:'mytools',
        populate:'rent'

       });        
      
    } ,

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate('mytools');
    },

    tool: async (parent, { toolId }) => {
      return Tool.findOne({ _id: toolId }).populate('rent');
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password,postcode,phone}) => {
      const user = await User.create({ username, email, password,postcode,phone });
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    }, 
    
    //addUser test
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    addUsert: async (parent, { username, email, password,postcode,phone})=>{
        return await User.create({username, email, password,postcode,phone})  
     
    },
     addToolt: async (parent,{userId,name,category,description,dayprice,hourprice,image})=>{
       const tool=await Tool.create({name,category,description,dayprice,hourprice,image})
       return User.findOneAndUpdate(
         {_id:userId},
         {
           $addToSet:{mytools:tool._id}
         },
         
       );

        },

     rentoolt: async(parent,{toolId,username})=>{
       const user=await User.findOne({username});
       console.log(username);
        return Tool.findOneAndUpdate(
           {_id:toolId},
           {
             $addToSet:{rent:user._id}
             
            },
            {
              new: true,
              runValidators: true,
              
            }
        )
          },

          myrent: async(parent,{toolId,userId})=>{
          const tool=await Tool.findOne({_id:toolId});
          console.log("herramienta"+tool._id);
          console.log("usuario"+userId);
          return User.findOneAndUpdate(
             {_id:userId},
             {
         
               $addToSet:{myrents:tool._id}
              },
              {
                new: true,
                runValidators: true,
              }

         )

         },



      updatedayprice:async(parent,{toolId,dayprice})=>{
 
         return Tool.findOneAndUpdate({_id:toolId},{dayprice})
         },
   
         updatehourprice:async(parent,{toolId,hourprice})=>{
 
          return Tool.findOneAndUpdate({_id:toolId},{hourprice})
          },

          updateStatus:async(parent,{toolId,status})=>{
  
          return Tool.findOneAndUpdate({_id:toolId},{status})
           },

           adddueRent:async(parent,{toolId,duerent})=>{
              console.log(duerent);
            return Tool.findOneAndUpdate({_id:toolId},{duerent})
             },

    
       removeTool: async (parent, { toolId }) => {
        return Tool.findOneAndDelete({ _id: toolId });

       }, 

       removeRent: async(parent,{toolId})=>{
        console.log(toolId); 
        return Tool.findOneAndUpdate({_id:toolId},{rent:null})
       } ,  
        
      
       UploadFile: async (parent, { file }) => {
        const { createReadStream, filename, mimetype, encoding } = await file;
  
        // Invoking the `createReadStream` will return a Readable Stream.
        // See https://nodejs.org/api/stream.html#stream_readable_streams
        const stream = createReadStream();
        const pathName = path.join(__dirname, '..', '..', `client/public/images/${filename}`);
        // This is purely for demonstration purposes and will overwrite the
        // local-file-output.txt in the current working directory on EACH upload.
        const out = require('fs').createWriteStream(pathName);
        stream.pipe(out);
        //await finished(out);
  
        return {url:pathName};
      },

      // singleUpload: async (parent, {file}) => getFileDetails(file)
      singleUpload: async (parent, {file}) =>{
        const {filename, mimetype, createReadStream} = await file
        console.log(file, "form backend")
    
        let filesize = 0
        let stream = createReadStream()
    
        stream.on('data', chunk => {
          filesize += chunk.length
        })
    
        // stream.once('end', () => 
        // resolve({
        //   filename,
        //   mimetype,
        //   filesize
        // }))
    
        stream.on('error', console.log("error"))

        return  {filename, mimetype, createReadStream}
      }
    },
  }
    
             

       



    

    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
  





module.exports = resolvers;
