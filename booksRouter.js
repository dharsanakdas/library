let express=require("express");
const router=express.Router();
let libraryController=require("./../controllers/booksController");

// router.get("/", function (req, res, next) {
//     res.json("App ready");
//   });

/**
* @swagger
* /insertBooks:
*   post:
*     security:
*       - bearerAuth: []
*     summary: Insert Books
*     tags: [Library]
*     description: This API is used to insert book details
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema: # Request body contents
*             type: object
*             properties:
*               args:
*                 type: object
*                 example: {
	              "Book_Title": "ramanan", 
                "Author":"changampuzha", 
    "Language":"malayalam", 
    "Brief_Description":"aasajdbjsdbjsbvjsbvjf" 
} 
*     responses:
*       200:
*         description: ok
*/

router.route("/insertBooks").post(libraryController.insertBooks);

/**
* @swagger
* /findBooks:
*   post:
*     security:
*       - bearerAuth: []
*     summary: find Books
*     tags: [Library]
*     description: This API is used to find book details
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema: # Request body contents
*             type: object
*             properties:
*               args:
*                 type: object
*                 example: {
                    "title": "leela"
} 
*     responses:
*       200:
*         description: ok
*/

router.route("/findBooks").post(libraryController.findBooks);

/**
* @swagger
* /editBook:
*   post:
*     security:
*       - bearerAuth: []
*     summary: edit Books
*     tags: [Library]
*     description: This API is used to edit book details
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema: # Request body contents
*             type: object
*             properties:
*               args:
*                 type: object
*                 example: {
	              "Book_Title": "ramanan", 
                "Author":"changampuzha", 
    "Language":"malayalam", 
    "Brief_Description":"aasajdbjsdbjsbvjsbvjf" 
} 
*     responses:
*       200:
*         description: ok
*/

router.route("/editBook").post(libraryController.editBook);

/**
* @swagger
* /deleteBook:
*   post:
*     security:
*       - bearerAuth: []
*     summary: delete Books
*     tags: [Library]
*     description: This API is used to delete book details
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema: # Request body contents
*             type: object
*             properties:
*               args:
*                 type: object
*                 example: {
	              "Book_Title": "ramanan",                
} 
*     responses:
*       200:
*         description: ok
*/

router.route("/deleteBook").post(libraryController.deleteBook);

module.exports = router;