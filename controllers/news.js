const news = require('../models/news');

//Simple way to test our app
exports.test = function (req, res) {
    res.send('hello world');
};
//to create data
exports.news_create = function (req, res) {
    let news1 = new news(
        {
            title: "hello",
            comments: 20,
            by:"manju",
            points:20
        }
    );
    news1.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('news Created successfully')
    })
};
// to view data byid
exports.news_details = function (req, res) {
  news.findById(req.params.id, function (err, news) {
      if (err) return next(err);
        res.send(news);
   })
};
//to update data
exports.news_update = function (req, res) {
    news.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, news) {
        if (err) return next(err);
        res.send('news udpated.');
    });
};
//to delete data
exports.news_delete = function (req, res) {
    news.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};