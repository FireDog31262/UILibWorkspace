# UILib Demo Application

This Demo application showcases the components available in the UILib component library.

## Features

### UILib Components Showcased

1. **UILib Component** - The basic library component
2. **Button Component** - Interactive buttons with multiple variants:
   - Primary buttons
   - Secondary buttons  
   - Danger buttons
   - Disabled states for all variants

### Interactive Features

- **Click Counter** - Demonstrates event handling with both UILib and native buttons
- **Responsive Design** - Works on desktop and mobile devices
- **Live Demo** - Real-time interaction with components

## Running the Demo

To run this demo application:

1. Build the UILib first:
   ```bash
   ng build UILib
   ```

2. Serve the Demo app:
   ```bash
   ng serve Demo
   ```

3. Open your browser to `http://localhost:4200/`

## UILib Component Features

### Button Component

The Button component supports:
- **Text**: Customizable button text via the `text` input
- **Variants**: `primary`, `secondary`, `danger` styling options
- **Disabled State**: Boolean `disabled` input
- **Click Events**: `clicked` output event emitter
- **Hover Effects**: CSS transitions and transform effects
- **Accessibility**: Proper button semantics and keyboard support

## Project Structure

```
projects/
├── demo/                    # Demo application
│   └── src/
│       └── app/
│           ├── app.ts       # Main component with click counter logic
│           ├── app.html     # Demo template showcasing UILib components
│           └── app.css      # Styled demo interface
└── uilib/                   # UILib component library
    └── src/
        └── lib/
            ├── uilib.ts     # Basic UILib component
            └── button/      # Button component
                ├── button.ts
                ├── button.html
                └── button.css
```

## Development

This demo serves as both a testing environment and documentation for the UILib components. Developers can:

- Test component behavior in a real application context
- Verify styling and interactions
- Validate accessibility features
- Compare UILib components with native HTML elements

## Next Steps

Future enhancements could include:
- Additional component variants
- Form components (inputs, checkboxes, etc.)
- Layout components (cards, modals, etc.)
- Theme customization examples
- Component documentation integration
