import test from 'ava';
import {shell} from 'execa';

test('version exists', async t => {
	t.true((await shell('node ./npmrun.js --version')).stdout.length > 0);
});

test('number version', async t => {
	t.same((await shell('node ./npmrun.js --version')).stdout.toString(), require('./package.json').version);
});

