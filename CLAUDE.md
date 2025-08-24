# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
# Run all apps in development mode
pnpm dev

# Run specific app in development
pnpm --filter web dev    # Next.js frontend
pnpm --filter api dev    # NestJS backend

# Build all apps
pnpm build

# Build specific app
pnpm --filter web build
pnpm --filter api build
```

### Code Quality
```bash
# Run linting for all apps
pnpm lint

# Format code
pnpm format

# Type checking
pnpm check-types
```

### Testing
```bash
# Run tests in API app
pnpm --filter api test
pnpm --filter api test:watch
pnpm --filter api test:cov
pnpm --filter api test:e2e
```

## Architecture

This is a Turborepo monorepo with the following structure:

- **apps/web**: Next.js 15 frontend with App Router, using Tailwind CSS v4
- **apps/api**: NestJS backend API
- **packages/**: Shared packages (to be created as needed)
- **database/**: Database configurations

### Frontend (apps/web)
- Uses Next.js 15 with App Router pattern
- TypeScript with React 19
- Tailwind CSS v4 for styling
- File structure:
  - `src/app/`: Pages and routing
  - `src/components/`: Reusable components (to be created)
  - `src/lib/`: Utilities and API client
  - `src/types/`: TypeScript type definitions (to be created)
  - `src/hooks/`: Custom React hooks (to be created)

### Backend (apps/api)
- NestJS framework with modular architecture
- TypeScript with decorators
- File structure:
  - `src/modules/`: Feature modules (to be created)
  - `src/common/`: Shared guards, pipes, filters, decorators (to be created)
  - `src/config/`: Configuration files (to be created)
  - `src/utils/`: Utility functions (to be created)

### Project Purpose
This is a music collaboration platform (합주 - ensemble) application with planned features for:
- Creating and joining music ensembles
- Schedule coordination (when2meet style)
- YouTube video upload for completion tracking
- Listing of recruiting and completed ensembles

## Development Workflow

1. Use pnpm as the package manager
2. Node.js version >= 18 required
3. TypeScript is used throughout the project
4. Follow ESLint and Prettier configurations
5. Turbo handles build orchestration and caching

## Key Configuration Files
- `turbo.json`: Defines build pipeline and task dependencies
- `pnpm-workspace.yaml`: Defines workspace packages
- Individual `package.json` files in each app for specific dependencies