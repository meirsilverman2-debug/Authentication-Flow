

// Insted of try catch in each controller:
export function asyncWrapper(fnc){
    return (req, res, next) => {
        Promise.resolve(fnc(req, res, next)).catch(next);
    };
};