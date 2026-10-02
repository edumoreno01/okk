const paginaInicial = (req, res) => {
    res.render("home", { nome: "Eduardo"});
};

module.exports = {
   paginaInicial
};
 
 