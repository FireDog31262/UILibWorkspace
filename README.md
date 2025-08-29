# UILib Workspace

This project contains the UILib component library and a Demo application to showcase its components.

## Projects

### UILib - Component Library
A reusable Angular component library with styled, interactive components.

**Components included:**
- `UILib` - Basic library component
- `Button` - Interactive button component with multiple variants (primary, secondary, danger)

### Demo - Showcase Application  
A demonstration app that showcases all UILib components with interactive examples.

## Quick Start

### 1. Build the UILib Library
```bash
ng build UILib
```

### 2. Run the Demo Application
```bash
ng serve Demo
```

Then navigate to `http://localhost:4200/` to see the component showcase.

### 3. Run the Default Application (if needed)
```bash
ng serve
```

## Development Workflow

1. **Develop Components**: Edit components in `projects/uilib/src/lib/`
2. **Build Library**: Run `ng build UILib` to compile the library
3. **Test in Demo**: The Demo app automatically uses the latest built library
4. **View Results**: Check `http://localhost:4200/` to see your components in action

## Project Structure

```
projects/
├── uilib/                   # Component Library
│   ├── src/
│   │   ├── public-api.ts    # Library exports
│   │   └── lib/
│   │       ├── uilib.ts     # Basic UILib component
│   │       └── button/      # Button component
│   └── ng-package.json      # Library build config
└── demo/                    # Demo Application
    ├── src/
    │   └── app/
    │       ├── app.ts       # Demo app logic
    │       ├── app.html     # Component showcase
    │       └── app.css      # Demo styling
    └── README.md            # Demo-specific documentation
```

## Available Scripts

### Build Commands
```bash
ng build UILib          # Build the component library
ng build Demo           # Build the demo application
```

### Serve Commands
```bash
ng serve Demo           # Serve demo app on http://localhost:4200
ng serve               # Serve default app (if configured)
```

### Test Commands
```bash
ng test UILib          # Run UILib component tests
ng test Demo           # Run Demo application tests
```

## Adding New Components

1. Generate a new component in the UILib:
   ```bash
   ng generate component projects/uilib/src/lib/my-component
   ```

2. Export it in `projects/uilib/src/public-api.ts`:
   ```typescript
   export * from './lib/my-component/my-component';
   ```

3. Build the library:
   ```bash
   ng build UILib
   ```

4. Import and showcase it in the Demo app:
   ```typescript
   import { MyComponent } from '../../../uilib/src/lib/my-component/my-component';
   ```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
