/**var msg="Hola Mundo NodeJS";
console.log(msg);*/

const express =require("express");
const app=express();
app.use(express.json());//Expres ya interpreta un objeto json[Middleware de Express]
app.use(logger);//invocar el middleware logger


  /** SETTINGS **/
app.set("appName", "Aprendiendo configuracion de express con SETTING")



//Middleware All() de Express ejecutara algo antes de atender cualquier petición con ruta /user
/* app.all('/user/',(req,res,next) => {//con parametro next se puede acceder a cualquier petición
    console.log('route trace');
   // console.send('Route Completed');
   next();
}); */
/*  function logger(req,res,next){
    console.log('route trace')
    next();
}  */
 //El Middleware logger muestra al servidor el url solicitado
 function logger(req, res, next){//tener encuenta el tipo de comillas simples inicial y final utilizado estan dirigidas a la derecha [`]
    	    console.log(`Route Recived:${req.protocol}://${req.get('host')}${req.originalUrl}`) //req.protocol=http y req.geit(‘host’)=localhost 5000 y req.orginalURL=/user da la rua del usuario
    	    next();
    	}  
    
/*app.get("/",(petecion,res)=>{
    res.send("La ruta indica de entrada de mi App es la Raiz para solicitar data del server");
});*/
 app.get('/user',(req,res)=>{
   // res.send("La ruta indica de entrada de mi App es la Raiz para solicitar data del server");
   res.json({
    username: 'alan',
    lastname: 'lopera'

   })
});
app.post("/user/:userId",(req,res)=>{
    console.log(req.body);//Cuerpo de la petición
    console.log(req.params);
    res.send("La ruta indica el envío de información desde el fronend al backend");
});

app.put('/usuer/:userId',(req,res)=> {
    console.log(req.body);//Objeto json
    console.log(req.params);
    res.send('User ${req.params.userId} updated');
    //res.send("La ruta indica de la actualización enviada al servidor");
});

app.delete("/user/:userId",(req,res)=>{
    console.log(req.body);//Objeto json
    console.log(req.params);
    res.send('User ${req.params.userId} updated');
    //res.send('User ${req.params.userId} deleted');
});
 
//Invoca el Middleware  static() de Express para identificar automáticamente la carpeta public e inciializar el index.html
app.use(express.static('public'));//En este contexto ese Middleware se invoca despues de las peticiones
/*
app.listen(5000,()=>{
    console.log(app.get("appName"));
    console.log("El servidor esta escuchando por el puerto 5000");
});*/

app.listen(app.get('port'),()=>{
  console.log(app.get("appName"));
  console.log("El servidor esta escuchando por el puerto", app.get('port'))});


/**app.get("/",(petecion,res)=>{
    res.send("La ruta indica de entrada de mi App es la Raiz para solicitar data del server");
});*/
/* app.get("/contenido",(petecion,res)=>{
   // res.send("La ruta indica de entrada de mi App es la Raiz para solicitar data del server");
   res.json({
    username: 'Miguel',
    lastname: 'Ojeda'

   })
});
/**app.post("/acercaden",(petecion,res)=>{
    res.send("La ruta indica el envío de información desde el fronend al backend");
});*/

/* app.post("/acercaden/:Id",(req,res)=>{
    console.log(req.body);//Cuerpo de la petición
    console.log(req.params);
    res.send("La ruta indica el envío de información desde el fronend al backend");
});

app.put('/contact/:Id',(req,res)=> {
    console.log(req.body);//Objeto json
    console.log(req.params);
    res.send('User ${req.params.Id} updated');
    //res.send("La ruta indica de la actualización enviada al servidor");
});

app.delete("/pruebadel/:userId",(req,res)=>{
    console.log(req.body);//Objeto json
    console.log(req.params);
    res.send('User ${req.params.userId} updated');
    //res.send('User ${req.params.userId} deleted');
});
 */