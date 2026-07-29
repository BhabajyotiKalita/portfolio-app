const portfolio = require("../data/portfolio");

exports.home = (req, res) => {
    res.render("index", {
        portfolio
    });
};
