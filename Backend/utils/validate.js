export function validate(schema){
    return (req, res, next) => {
        const result = schema.safeParse({
            body: req.body,
            params: req.params,
            query: req.query
        });

        if (!result.success){
            const message = result.error.issues[0]?.message || "Invalid request";
            const error = new Error(message);
            error.statusCode = 400 // (Which means bad request)
            return next(error);
        }

        if (result.data.body) {
            req.body = result.data.body;
        }

        next();
    };
};


















// const is better than a function  becuse you cannot call it before its creation so thats why in teams thy use more of const arrow function insted of the basic function way thats what yosef said to me:
