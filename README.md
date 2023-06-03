# Design System

This monorepo contains a design system, which is a collection of reusable components, styles, and design guidelines to aid in the consistent and efficient development of products. The goal of this repository is to provide a solid foundation for creating coherent user interfaces across different projects.

## Repository Structure

The repository is organized as follows:

- `packages/:` This directory contains all the design system packages.
    - `react/:` Contains the React components of the design system.
    - `tokens/:` Contains the design tokens, such as colors, typography, and spacing.
    - `ts-config/:` Contains the TypeScript configuration for the design system.
    - `eslint-config/:` Contains the ESLint configuration for the design system.
    - `docs/:` Contains the documentation of the design system.

# Packages
The packages within the monorepo are structured as individual projects, each with its own package.json and source code. This allows each package to be versioned, published, and installed independently.

### React
The react package contains the React components of the design system. These components are the fundamental building blocks and should be used throughout the application to ensure a consistent experience.

### Tokens
The tokens package contains the design tokens, such as colors, typography, and spacing. These tokens provide a consistent foundation for the visual appearance and behavior of the design system components.

### ts-config
The ts-config package contains the TypeScript configuration for the design system. This configuration sets the TypeScript rules and compilation options to ensure code consistency and quality.

### eslint-config
The eslint-config package contains the ESLint configuration for the design system. This configuration defines the linting rules and options to ensure code consistency and quality.

### Documentation
The `docs/` folder contains the documentation of the design system. It provides detailed information on how to use the components, tokens, and recommended configurations. The documentation should be regularly updated to reflect any changes and additions made to the design system.
