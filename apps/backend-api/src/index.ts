import { config } from 'config';

export function test() {
    console.log(config.ports.api);
}

test();
