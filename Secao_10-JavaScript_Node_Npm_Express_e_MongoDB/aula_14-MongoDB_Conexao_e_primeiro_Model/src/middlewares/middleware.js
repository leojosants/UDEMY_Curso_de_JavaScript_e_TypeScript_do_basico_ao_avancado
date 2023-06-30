// Não esquecer do NEXT dentro do middleware, senão a função nao termina
exports.middlewareGlobal = (req, res, next) => {
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};