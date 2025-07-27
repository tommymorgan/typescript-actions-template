import * as core from '@actions/core';

export async function run(): Promise<void> {
  try {
    const name = core.getInput('name') || 'World';
    const greeting = `Hello, ${name}!`;

    console.log(greeting);
    core.setOutput('greeting', greeting);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed('Unknown error');
    }
  }
}

// Run the action if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  run();
}
