const sharedFunctions = {};
sharedFunctions.messageExit = (res, message, data) => {
    return res.status(200).json({
        data,
        message,
        'error': false
    });
};
sharedFunctions.messageNotAuthUser = (res, message, data) => {
    return res.status(401).json({
        data,
        message,
        'error': true
    });
};
sharedFunctions.messageAuthUser = (res, data) =>{
    return res.status(200).json({
        data,
        'message': 'Bienvenido',
        'error': false
    });
};
sharedFunctions.messageBadRequest = (res, message, data) => {
    return res.status(400).json({
        data,
        message,
        'error': true
    });
};
module.exports = sharedFunctions;