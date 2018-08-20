const art = require('art-template');
const path = require('path');
const logger = require('../utils/logger');

module.exports = async (ctx, next) => {
    let tpl404 = path.resolve(__dirname, '../template/404.art');
    let tpl500 = path.resolve(__dirname, '../template/500.art');
    try {
        await next();
        if (ctx.status === 404) {
            ctx.body = art(tpl404, { status: 404 });
        }
    } catch (err) {
        const errCode = err instanceof Error ? err.stack : err
        logger.error('Promise error: ' + errCode);
        ctx.body = art(tpl500, { status: 500, errCode });
    }
};
