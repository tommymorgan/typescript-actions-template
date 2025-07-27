# GitHub Actions TypeScript Template

A modern TypeScript template for building GitHub Actions with minimal bundling and fast builds.

## Features

- 🚀 **TypeScript** - Type-safe action development
- 📦 **esbuild** - Lightning-fast bundling
- 🧹 **Biome** - All-in-one linting and formatting
- 📌 **pnpm** - Fast, disk space efficient package manager
- 🎯 **ES Modules** - Modern JavaScript module system

## Quick Start

```bash
# Install dependencies
pnpm install

# Build the action
pnpm build

# Run linting
pnpm lint

# Format code
pnpm format

# Type check
pnpm typecheck
```

## Project Structure

```
.
├── src/                  # TypeScript source files
│   └── hello-world.ts    # Example action implementation
├── hello-world/          # Action directory
│   ├── action.yaml       # Action metadata
│   └── index.js          # Entry point
├── scripts/              # Build scripts
│   └── build.js          # esbuild configuration
└── dist/                 # Compiled output (git ignored)
```

## Creating a New Action

1. Create your TypeScript file in `src/`:
   ```typescript
   import * as core from '@actions/core';
   
   export async function run(): Promise<void> {
     // Your action logic here
   }
   ```

2. Create an action directory with:
   - `action.yaml` - Action metadata
   - `index.js` - Entry point that imports from dist

3. Update `scripts/build.js` to include your new action

4. Build and test your action

## Testing the Action

The included workflow (`.github/workflows/test-hello-world.yml`) demonstrates how to test the action:

```yaml
- name: Test Hello World Action
  uses: ./hello-world
  with:
    name: 'GitHub Actions'
```

## Using in Other Repositories

Once published, use your action in workflows:

```yaml
- uses: your-username/your-repo@main
  with:
    name: 'World'
```

## Development

This template uses:
- **Node.js 20** - Latest LTS version
- **pnpm 10** - Enabled via Corepack
- **Biome v2** - Fast, modern linting and formatting
- **esbuild** - Bundles TypeScript with dependencies

## Forgejo Compatibility

This template is compatible with both GitHub Actions and Forgejo Actions:

### Setup for Forgejo

1. The repository includes a symlink from `.forgejo/workflows` to `.github/workflows`, so workflows work on both platforms automatically.

2. **Runner Compatibility**: The default `ubuntu-latest` runner works on both platforms. For Forgejo instances that require specific runner configurations, you may need to adjust the `runs-on` values in workflows.

3. **Action References**: Most action references (like `actions/checkout@v4`) work on both platforms as Forgejo maintains compatibility with common GitHub Actions.

### Platform-Specific Considerations

- **Token**: Both platforms provide `GITHUB_TOKEN` for compatibility
- **Context Variables**: GitHub context variables (like `github.event`, `github.repository`) work on both platforms
- **Secrets**: Both platforms support secrets in the same way

### Testing on Forgejo

To test these actions on a Forgejo instance:

```yaml
# Works on both GitHub and Forgejo
- uses: actions/checkout@v4
- uses: ./hello-world
  with:
    name: 'Forgejo'
```

## License

MIT