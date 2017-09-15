'use strict';

var  express = require('express');
//var router = express.Router();
var  jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var  cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');
var gittags = require('git-tags');
var branch = require('git-branch');



var gitCommits = require('git-commits');

//var simpleGit = require('simple-git')( workingDirPath );
var path = require('path');
var repoPath = path.resolve(process.env.REPO || (__dirname + '/.git'));
var cookieParser = require('cookie-parser');
var app = express();

const uuidV4 = require('uuid/v4');

var mongojs = require('mongojs');

var db = mongojs('mongodb://qpair:qpair@ds133084.mlab.com:33084/consensus', ['community','tenant','user','communityExpenses','tenantExpenses','communityReminders','communityEvents']);

app.options('*', cors());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://ramani.auth0.com/.well-known/jwks.json"
    }),
    audience: 'http://localhost:3001/api/',
    issuer: "https://ramani.auth0.com/",
    algorithms: ['RS256']
});


const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'hetalqpair',
        pass: 'Qp123456',
    },
});

/* Get the Build Info */
var buildInfo;
app.get('/api/consensusBuildInfo', function(req, res) {
// async

gittags.get(function(err, tags) {
    if (err) throw err;

    gitCommits(repoPath, {
        limit: 2
    }).on('data', function(commit) {


        var gitlog = require('gitlog')
            , options =
            { repo: __dirname + '/.git'
                , number: 2
                , author: ''
                , fields:
                [ 'hash'
                    , 'abbrevHash'
                    , 'subject'
                    , 'authorName'
                    , 'authorDateRel'
                     ,'rawBody'
                    ,'body'

                ]
                , execOptions:
                {       }
            }

var gitBranch =branch.sync();
        console.log(gitBranch);
        var cmd=require('node-cmd');

        cmd.get(
            'git show v1.0.5',
            function(err, data, stderr){
                console.log('the current working dir is : ',data)

            }
        );
        gitlog(options, function(error, commits) {
            // Commits is an array of commits in the repo
           // console.log(commits)

            buildInfo={
                "branchnName":branch.sync(),
                "tags":tags,
                "latest commit":commit,
                "commits":commits


            };


        res.json(buildInfo);

    })
    })

});

});

var  userId;var communityId;


app.get('/api/viewCommunities/:user_id', function(req, res) {

console.log(req.params.user_id+"  id is hre")


    db.community.findOne({'postBy.userId' : req.params.user_id},function(err,user) {

        if (err){
            console.log(err);
            return err;}

        else{
          try {
              communityId = user._id;
              console.log(communityId);
              res.setHeader("Connection", "close");
              res.json(user);
          }
          catch(err) {
              console.log("exception occured for community" );
              res.json(user);
          }
        }
        
            //res.end();

    });

});

//
app.get('/api/viewCommunities/:community_id', function(req, res) {

console.log(req.params.community_id+"  id is hre");


    db.community.findOne({'community_id' : req.params.community_id},function(err,user) {

        if (err){
            console.log(err);
            return err;}

        else{
          try {
              communityId = community_id;
              res.setHeader("Connection", "close");
              res.json(user);
          }
          catch(err) {
              console.log("exception occured for community" );
              res.json(user);
          }
        }
        
            //res.end();

    });

});

// get USers
app.get('/api/getUsers/:userEmail', function(req, res) {


db.user.findOne({'email':req.params.userEmail}, function(err,user) {
console.log(req.params.userEmail+"  Inside Email Find One user")
        if (err){
            console.log(err);
            return err;
            res.setHeader("Connection", "close");
            res.end();
        }
            

        else{
                res.setHeader("Connection", "close");
                res.json(user);
        }
        

    });

});


app.get('/api/getTenants/:userEmail', function(req, res) {

    db.tenant.findOne({'email':req.params.userEmail}, function(err,user) {
console.log(req.params.userEmail+"  Inside Email Find One user")
        if (err){
            console.log(err);
            return err;
            res.setHeader("Connection", "close");
            res.end();
        }
            

        else{
                res.setHeader("Connection", "close");
                res.json(user);
        }
        

    });

});

app.post('/api/sendEmailtoTenant', function(req, res) {
    // var data = req.body;

    var emails="hetal@qpair.io";
    const mailOptions = {
        from: "hetal@qpair.io",
        to: emails,
        subject:  'Message from ',
        html:  '<div><h1>Welcome to Consensus</h1></div>'

    };
    transport.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("Here is error"+error);
        }
        
        res.setHeader("Connection", "close");
        res.json(info);
       // res.end();
    });
});



/**** Add Users  *****/

app.post('/api/addUSer', function(req, res) {

   // console.log(req.body);
    var userInfo=req.body;
   db.user.findOne({ 'userId' :req.body.userId }, function(err,user) {

        if (err){
            console.log(err);
            return err;}
        // if there is no user found with that facebook id, create them
        if(user){

            userId=user.userId;
            console.log("this existing user"+userId);
            return user;
        }
        else{
            
            db.user.save(userInfo, function(err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.setHeader("Connection", "close");
                    res.json(result);

                }
            })
            console.log("Here is Added User");
            res.statusCode = 200   ;
           // res.end();

        }

    });

});

//enter UserID
app.post('/api/addCommunity', function(req, res) {
 
   
    var  community = req.body;
 var data;
//check if Community with that Name Exists
     db.community.findOne({'communityName':community.communityName}, function(err, result) {
           
            data =result;
        

        });

      if (data!=null)
      { 
                response.statusCode = 404
                res.setHeader("Connection", "close");
                res.json("Community  with this Name Already Exists");
      }
      else {
        db.community.save(community, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.setHeader("Connection", "close");
                res.json(result);
            }
        }

        );

          console.log("Here is Added Community");
            res.statusCode = 200
        }
    
});

// Tenant  REST-CALLs ...
//pass communityID
app.post('/api/addTenant/:communityId', function(request, response) {

    var addTenant = request.body;
    addTenant.community_id=request.params.communityId;
   var data;
   var tenantFlag=false;
   addTenant._id= uuidV4();

    console.log('tenant additon email'+addTenant.email);
   //check if Tenant exists in this Community 
     db.tenant.findOne({'email':addTenant.email}, function(err, result) {
    
     console.log("I found you!"+result);


    if (result!=null){

                console.log("Tenant with this Email Exists in this Company");
                response.statusCode = 404
                 response.setHeader("Connection", "close");
                 response.json(" Tenant with this Email Exists in this Company");

      }
    else {
      db.tenant.save(addTenant, function(err, returned_value){
        if(err){
          
          response.statusCode = 404
            response.setHeader("Connection", "close")
            response.json({status: 'failed', err: err})
            //response.end()
        }
        else {

           
            console.log("Here is Added Tenant");
            response.statusCode = 200

            response.setHeader("Connection", "close");
            response.end();


        }


      });
}
 

        });


  


});


app.get('/api/tenant/:communityId', function(request, response) {

    db.tenant.find({ 'community_id' :request.params.communityId }, function(err, returned_value){
        if(err){
            response.json({status: 'failed', err: err})
        }
        else{
            response.setHeader("Connection", "close");
            response.json(returned_value);

            response.statusCode = 200
     
           
            //response.end();
        }
    });
});

app.put('/api/editTenant', function(request, response) {

    var editTenant = request.body;


    editTenant.invite =true;

    console.log("AFter edit tenant************" +JSON.stringify(editTenant)) ;



            db.tenant.findAndModify({
                query: { '_id' :editTenant.tenantId  },
                update: { $set: { "invite":true }} ,
                new:true

            }, function (err, doc, lastErrorObject) {
                console.log(JSON.stringify(doc))
            });
           /* db.tenant.save(editTenant, function(err, result) {
                if (err) {
                    console.log(err)
                    response.send(err);
                } else {
                    console.log(JSON.stringify(result))
                    response.json(result);
                }
            })*/
            response.setHeader("Connection", "close");
            response.end();


    //});



});


app.get('/api/viewTenant/:id', function(request, response) {

console.log(request.params.id);

    db.tenant.findOne({ '_id' :request.params.id }, function(err,result) {

        if (err){
            console.log(err);
            return err;
        }

        else{


                    //console.log(JSON.stringify(result))
                    

            response.statusCode = 200
     
            response.setHeader("Connection", "close")
            //response.end()
            response.json(result);


        }


    });

});

/*  ** Community Expensenses ** */

app.post('/api/addCommunityExpense/:communityId', function(request, response) {

    var addExpenses = request.body;

    addExpenses.created=new Date();
    addExpenses.community_id=request.params.communityId;

    db.communityExpenses.save(addExpenses, function(err, returned_value){
        if(err){
            response.json({status: 'failed', err: err})
        }
        else{

   

            response.statusCode = 200
     
        
        }
        response.setHeader("Connection", "close");
            response.end();

    });

});

///////////////////////////////////////

app.get('/api/getCommunityExpense/:communityId', function(request, response) {

    db.communityExpenses.find({ 'community_id' :request.params.communityId }, function(err, returned_value){
        if(err){
            response.setHeader("Connection", "close");
            response.json({status: 'failed', err: err})
        }
        else{
            //console.log(JSON.stringify(returned_value));
            response.setHeader("Connection", "close");
            response.json(returned_value);
        }

           
           // response.end();
    });
});

//////////////////////////////////////

/*  ******* Tenants Expensenses ****** */

app.post('/api/addTenantExpense/:communityId', function(request, response) {

    var addExpenses = request.body;
    //addExpenses.community_id=request.params.communityId;
    addExpenses.community_id=request.params.communityId;
    addExpenses.tenantId=request.params.tenantId;
    console.log(JSON.stringify(request.body));

    db.tenantExpenses.save(addExpenses, function(err, returned_value){
        if(err){
            response.json({status: 'failed', err: err})
             response.setHeader("Connection", "close");
           // response.end();
        }
        else{
            response.setHeader("Connection", "close");
            response.json(returned_value);
           // response.end();
            
        }
       

    });
    console.log(JSON.stringify(request.body));
   /* db.tenantExpenses.findAndModify({
        query: { 'tenant_id' :request.body.tenant_id  },
        update: { $set: { "amountPaid":request.body.amountPaid,"lastUpdated": new Date() }} ,
        new:true
    }, function (err, doc, lastErrorObject) {
        console.log(err);
    })
*/


});

///////////////////////////////////////

app.get('/api/getTenantExpense/:communityId', function(request, response) {

    db.tenantExpenses.find({ 'community_id' :request.params.communityId }, function(err, returned_value){
        if(err){
            response.json({status: 'failed', err: err})
        }
        else{
            console.log(JSON.stringify(returned_value));
            response.setHeader("Connection", "close");
            response.json(returned_value);
        }
        
           // response.end();
    });
});

//////////////////////////////////////

app.get('/api/getExpenseByTenant/:communityId/:tenantId', function(request, response) {

    db.tenantExpenses.find({ 'community_id' :request.params.communityId ,  'tenant_id':request.params.tenantId}, function(err, returned_value){
        if(err){
            response.json({status: 'failed', err: err})
        }
        else{
            console.log('this is tenant expense'+JSON.stringify(returned_value));
            response.setHeader("Connection", "close");
            response.json(returned_value);
        }
        
           // response.end();
    });
});

///////////////////////////////////

/*  ** Community Reminder ** */

app.post('/api/addCommunityReminder/:communityId', function(request, response) {


    var addReminder = request.body;
   // addReminder.community_id=request.params.communityId;


    //console.log("Add reminder"+addReminder.community_id);
    db.communityReminders.save(addReminder, function(err, returned_value){
        if(err){
            response.json({status: 'failed', err: err})
        }
        else{
             response.setHeader("Connection", "close");
            response.json(returned_value);
            console.log(JSON.stringify(returned_value));
        }
       
          //  response.end();

    });

});

///////////////////////////////////////

app.get('/api/getCommunityReminder/:communityId', function(request, response) {

    db.communityReminders.find({ 'community_id' :request.params.communityId }, function(err, returned_value){
        if(err){
            response.json({status: 'failed', err: err})
        }
        else{
            response.setHeader("Connection", "close");
            response.json(returned_value);
        }
        
            //response.end();
    });
});

//////////////////////////////////////

/*  ** Community Events List ** */

app.post('/api/addCommunityEvents/:communityId', function(request, response) {

    var addEvents = request.body;

    addEvents.community_id=request.params.communityId;
   // console.log("Add reminder"+addReminder.community_id);

    db.communityEvents.save(addEvents, function(err, returned_value){
        if(err){
            response.json({status: 'failed', err: err})
        }
        else{
            response.setHeader("Connection", "close");
            response.json(returned_value);
        }
        
           // response.end();

    });

});

///////////////////////////////////////

app.get('/api/getCommunityEvents/:communityId', function(request, response) {

    db.communityEvents.find({ 'community_id' :request.params.communityId }, function(err, returned_value){
        if(err){
            response.json({status: 'failed', err: err})
        }
        else{
            response.setHeader("Connection", "close");
            response.json(returned_value);
        }
        
           // response.end();
    });
});

/*

/*

app.get('/api/deals/private', authCheck, (req,res)=>{
  let deals = [
  {
    id: 14423,
    name: 'Tesla S',
    description: 'Ride in style and say goodbye to paying for gas. The Tesla S is the car of the future.',
    originalPrice: 90000.00,
    salePrice: 75000.00
  },
  {
    id: 14553,
    name: 'DJI Phantom 4',
    description: 'The Drone revolution is here. Take to the skies with the DJI Phantom 4.',
    originalPrice: 1299.99,
    salePrice: 749.99
  },
  {
    id: 15900,
    name: 'iPhone 7 - Jet Black',
    description: 'Get the latest and greatest iPhone in the limited edition jet black.',
    originalPrice: 899.99,
    salePrice: 799.99
  },
  {
    id: 16000,
    name: '70" Samsung 4K HDR TV',
    description: 'Watch as if you were there with the latest innovations including 4K and HDR.',
    originalPrice: 2999.99,
    salePrice: 2499.99
  },
  {
    id: 17423,
    name: 'Canon t8i DSLR',
    description: 'Capture life\'s moments with the amazing Canon t8i DSLR',
    originalPrice: 999.99,
    salePrice: 549.99
  },
  {
    id: 17423,
    name: 'Xbox One S',
    description: 'Get the latest Xbox and play the best first party games including Gears of War and Forza.',
    originalPrice: 299.99,
    salePrice: 279.99
  },
  ];
  res.json(deals);
})*/

app.listen(3001);
console.log('Listening on localhost:3001');
