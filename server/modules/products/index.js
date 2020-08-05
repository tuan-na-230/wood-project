const model = require('./model')
const mongoose = require('mongoose')
const { json } = require('body-parser')

const handlers = {
  /**
   * @description: query: 
   * - pageIndex: Number
   * - pageSize: Number
   * - count: Boolean
   * - sort: '1' | 'asc' | '-1' | 'desc'
   * - sortBy: field name (ex: 'title')
   * - filter & search: String
   */
  async findMany(req, res, next) {
    try {
      let {
        pageIndex = 1,
        pageSize = 10,
        count,
        sort = 1,
        sortBy = 'name',
        search = '',
        categoryId // ex: filter by categoryId
      } = req.query
      if (pageSize == '') {
        pageSize = 10
      }
      pageIndex = parseInt(pageIndex)
      pageSize = parseInt(pageSize)
      sort = parseInt(sort)
      count = !!count

      let skip = (pageIndex - 1) * pageSize
      let limit = pageSize
      let conditions = {}
      if (search) {
        // find item with title contains search string
        conditions.name = new RegExp(search, 'i')
      }
      // if(categoryId) {
      //   conditions.categories = mongoose.Types.ObjectId(categoryId)
      // }

      if (count) {
        let count = await model.countDocuments(conditions)
       
        let result = Math.ceil(count / pageSize);
        
        res.json({ result })
      } else {
        let skip = (pageIndex - 1) * pageSize
        let limit = pageSize
        
        let items = await model
          .find(conditions)
          .skip(skip)
          .limit(limit)
          .sort({
            [sortBy]: sort
          })
          .populate('categories', 'title')

        res.json(items)
      }
    } catch (err) {
      next(err)
    }
  },
  async findOne(req, res, next) {
    try {
      let id = req.params.id
      let item = await model
        .findById(id)
      console.log(item)
      res.json(item)
    } catch (err) {
      next(err)
    }
  },
  async create(req, res, next) {
    try {
      let data = req.body
      let item = await model.create(data)

      res.json(item)
      console.log(data)
    } catch (err) {
      next(err)
    }
  },
  async update(req, res, next) {
    try {
      let data = req.body
      let id = data._id

      if (!id) {
        throw new Error('Missing item id!')
      }

      let item = await model.findByIdAndUpdate(
        id,
        data,
        {
          new: true
        }
      )
      res.json(item)
    } catch (err) {
      next(err)
    }
  },
  async delete(req, res, next) {
    try {
      let id = req.params.id
      let item = await model.findByIdAndDelete(id)

      res.json(item)
    } catch (err) {
      next(err)
    }
  },
  async test(req, res, next) {
    console.log('a')
    console.log(req.body)
    res.json('ok')
    let originalFileName = req.file.originalname
    console.log(originalFileName)
    let srcImage = "http://localhost:3000/images/" + req.file.originalname
    console.log(srcImage)
  }
}

module.exports = handlers