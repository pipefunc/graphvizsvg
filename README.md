# graphvizsvg

A modern ESM module for interactive SVG visualization of Graphviz graphs.
This is a modernized rewrite of [jquery.graphviz.svg](https://github.com/mountainstorm/jquery.graphviz.svg).

## Features

* 🎯 Interactive SVG visualization of Graphviz graphs
* 🔍 Node and edge highlighting with automatic color transitions
* 🏷️ Tooltips for nodes and edges
* 🎨 Automatic color handling and transitions
* 📏 Node scaling options
* 🔄 Bi-directional graph traversal
* 💪 Strong TypeScript support
* 📦 Modern ESM packaging
* ✅ Comprehensive test coverage

## Installation

```bash
npm install graphvizsvg
```

## Usage

```javascript
import GraphvizSvg from 'graphvizsvg';

// Initialize with SVG content
const container = document.getElementById('graph');
const graphviz = new GraphvizSvg(container, {
    svg: svgContent,
    shrink: '0.125pt',
    tooltips: {
        init($graph) {
            // Your tooltip initialization
        },
        show() {
            // Show tooltip
        },
        hide() {
            // Hide tooltip
        },
    },
    ready() {
        // Called when the graph is ready
    }
});

// Interact with nodes
graphviz.nodes().click(function() {
    const $set = $();
    $set.push(this);
    $set = $set.add(graphviz.linkedFrom(this, true));
    $set = $set.add(graphviz.linkedTo(this, true));
    graphviz.highlight($set, true);
});
```

## API

### Constructor Options

- `svg`: SVG content string
- `url`: URL to load SVG from
- `shrink`: Node shrinking amount (string or object with x/y values)
- `tooltips`: Tooltip configuration object
- `ready`: Callback function when graph is ready

### Methods

- `nodes()`: Get all nodes
- `edges()`: Get all edges
- `highlight($elements, tooltips)`: Highlight elements
- `linkedTo(node, includeEdges)`: Get nodes linked to
- `linkedFrom(node, includeEdges)`: Get nodes linked from
- `linked(node, includeEdges)`: Get all linked nodes
- `tooltip($elements, show)`: Show/hide tooltips
- `bringToFront($elements)`: Bring elements to front
- `sendToBack($elements)`: Send elements to back

## Dependencies

- jQuery 3.7+
- Bootstrap 4.6+ (for tooltips)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Credits

Based on the original work by [mountainstorm](https://github.com/mountainstorm/jquery.graphviz.svg).
This project should have feature parity with the original except for the zooming feature, which has been removed.
Modernized and maintained by the pipefunc team.
