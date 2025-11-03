### Making Spotify Clone in full stack using the components like-
1. React Js
2. TypeScript
3. Tailwind CSS
4. Shadcn UI - for the components of UI devlopment
### command for installing- npx shadcn@latest init

### For Authentication we are using CLERK
- when someone uses clerk for the authentication, the id goes into the MongoDB atlas into our database, so we know the clerk id of the user.Hence we can know that which user is logged in from which account.


### For Backend
- npm init -y
- npm i express mongoose dotenv cloudinary cors @clerk/express socket.io
-  npm i -D nodemon

### In Routes, suppose we have so many methods like get,delete, etc..and many of the functions could be long, and make the file looks ugly in structure..
### instead of putting these methods into routes, we can abstract it in the controller..