const express = require("express")
const router = new express.Router()
const path = require('path')
const multer = require('multer')

const productHandlers = require("./modules/products")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../admin/images')
  },
  filename: function (req, file, cb) {
    console.log(new Date().toISOString() + '_' + file.originalname)
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })
// const upload = multer({dest: 'upload/'})
// const upload = multer({dest: '../admin/images'})

router.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'index.html'))
  })

router.get("/", (req, res) => {
  res.send('a')
})

router.get("/products/test/:id", productHandlers.test)

router.post("/products/test", upload.single('image'), productHandlers.test)

router.post("/products", productHandlers.create)
  
router.get("/products", productHandlers.findMany)

router.get("/products/:id", productHandlers.findOne)

router.delete("/products/:id", productHandlers.delete)

router.put("/products",productHandlers.update)

module.exports = router