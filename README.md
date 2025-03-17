# Wails + Nuxt + TypeScript + Tailwind Template

A modern desktop application template combining Wails (Go-based desktop framework), Nuxt 3 (Vue.js framework), TypeScript, and Tailwind CSS.

## Features

- 🖥️ **Cross-platform desktop app** using Wails (Windows, macOS, Linux)
- ⚡ **Nuxt 3** with all its performance benefits and developer experience
- 🔒 **TypeScript** for type safety and better developer experience
- 🎨 **Tailwind CSS** for rapid UI development
- 🧩 **Strong frontend-backend integration** with typed Go function calls
- 🔄 **Hot reload** for rapid development

## Prerequisites

- **Go** (1.18+): [https://golang.org/dl/](https://golang.org/dl/)
- **Node.js** (16+): [https://nodejs.org/](https://nodejs.org/)
- **Wails CLI**: `go install github.com/wailsapp/wails/v2/cmd/wails@latest`
- Platform-specific development dependencies:
  - **Windows**: MSVC
  - **macOS**: Xcode Command Line Tools
  - **Linux**: gcc, pkg-config, and required libraries

## Quick Start

1. Clone this template:
   ```bash
   # Clone the repository
   git clone https://github.com/yourusername/wails-nuxt-ts-tailwind-template.git my-app
   cd my-app

   # Install frontend dependencies
   cd frontend
   npm install
   cd ..

   # Run in development mode
   wails dev
   ```

## Project Structure

```
├── build/          # Build artifacts
├── frontend/       # Nuxt frontend
│   ├── assets/     # Static assets
│   ├── components/ # Vue components
│   ├── pages/      # Application pages
│   ├── public/     # Public directory
│   ├── app.vue     # Main app component
│   └── nuxt.config.ts # Nuxt configuration
├── wailsjs/        # Generated bindings (don't edit)
├── app.go          # Backend Go code
├── go.mod          # Go module file
├── go.sum          # Go module checksum
├── main.go         # Application entry point
└── wails.json      # Wails project configuration
```

## Development Workflow

The template is set up for an efficient development workflow:

1. **Starting development server**:
   ```bash
   wails dev
   ```
   This will start both the Go backend and the Nuxt development server with hot reloading.

2. **Adding a new page**:
   Create a new file in the `frontend/pages` directory.

3. **Creating Go backend functions**:
   Add methods to the `App` struct in `app.go` and they'll be automatically available in the frontend.

4. **Calling Go functions from the frontend**:
   ```typescript
   import { YourFunction } from 'wailsjs/go/main/App'
   
   const result = await YourFunction(param1, param2)
   ```

## Building for Production

```bash
wails build
```

This will create a standalone executable in the `build/bin` directory. For more build options, see:

```bash
wails build --help
```

## Customizing the Template

### Changing Application Name and Details

Edit the `wails.json` file to update the application name, author information, and other details.

### Styling with Tailwind

The template includes Tailwind CSS for styling. You can customize the Tailwind configuration in `frontend/tailwind.config.js`.

### Modifying the Go Backend

The main backend code is in `app.go`. Add your Go functions here, and they will be automatically available to the frontend.

## TypeScript Integration

Wails functions are automatically typed thanks to the generated TypeScript definitions. In your Vue components, you can import Go functions like this:

```typescript
import { YourFunction } from 'wailsjs/go/main/App'
```

## Troubleshooting

### Missing Wails Bindings

If you're seeing errors about missing Wails bindings, run:

```bash
wails generate module
```

### TypeScript Errors with Wails Imports

If you're encountering TypeScript errors with Wails imports, make sure your `tsconfig.json` is properly configured as shown in the `frontend/tsconfig.json` file of this template.

### Build Issues on Linux

On Linux, you might need additional dependencies. Run:

```bash
sudo apt install libgtk-3-dev libwebkit2gtk-4.0-dev
```

Or the equivalent for your distribution.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This template is [MIT Licensed](LICENSE).
