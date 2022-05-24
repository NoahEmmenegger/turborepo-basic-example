import { config } from '@packages/config';

export function test() {
    console.log(config.ports.api);
}

test();
