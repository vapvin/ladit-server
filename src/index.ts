import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';

const main = async () => {
    const orm = await MikroORM.init({
        dbName: 'ladit',
        user: '',
        password: '',
        type: 'postgresql',
        debug: !__prod__,
    });
}
