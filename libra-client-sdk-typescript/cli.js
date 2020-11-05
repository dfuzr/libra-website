#!/usr/bin/env node
const submitPrompt = require('./dist/cli/submitPrompt').default;
const args = require('./dist/cli/args').default;

const { execute } = require('./dist/cli');

async function run() {
  const method = args._[0];

  if (method === 'submit') {
    try {
      await submitPrompt(args);
    } catch (e) {
      console.error(e);
    }
  }

  execute(args, {
    info: console.log,
    error: console.error,
    group: console.group,
    groupEnd: console.groupEnd,
  });
}

run();
