# OP-1 Synthesizer Script

This script creates a virtual OP-1 synthesizer interface with dynamic audio capabilities using Web Audio API and NexusUI.

## Features

- Realistic OP-1 interface with interactive keyboard, knobs, and buttons
- Real-time sound synthesis using Web Audio API
- Dynamic control over various sound parameters
- Multiple oscillator types (sine, square, sawtooth, triangle)
- Effects including reverb, filter, and delay
- Responsive design that mimics the OP-1 hardware

## Installation

1. Include the script in your HTML file:
   ```html
   <script type="module" src="path/to/main.js"></script>
   ```

2. Make sure to include the NexusUI library before this script:
   ```html
   <script src="path/to/NexusUI.js"></script>
   ```

## Usage

To initialize the OP-1 synthesizer:

```javascript
import useOp1 from './main.js';

const op1 = useOp1({id: "#container"});
```

This will render the OP-1 interface in the element with the ID "container" and return an object with controls that you can interact with programmatically.

## Returned Object

The `useOp1` function returns an object with the following properties:

- `Transports`: Control buttons for transport functions
- `Controls`: Various control buttons
- `Piano`: The piano keyboard interface
- `Knobs`: Control knobs for various parameters

## Examples

### Listening to events

```javascript
// Listen for piano key presses
op1.Piano.on('change', function(v) {
  console.log('Note:', v.note, 'State:', v.state);
});

// Listen for knob changes
op1.Knobs.blue.on('change', function(v) {
  console.log('Blue knob value:', v);
});

// Listen for control button presses
op1.Controls.t1.on('change', function(v) {
  console.log('T1 button state:', v);
});
```

### Controlling the synthesizer programmatically

```javascript
// Change the oscillator type
op1.Controls.t1.trigger('change'); // Changes to sine wave

// Adjust a knob
op1.Knobs.volume.value = 0.5; // Set volume to 50%

// Press a piano key
op1.Piano.toggleKey(60, true); // Press middle C
setTimeout(() => op1.Piano.toggleKey(60, false), 1000); // Release after 1 second
```

## Browser Compatibility

This script requires a browser that supports Web Audio API. Most modern browsers (Chrome, Firefox, Safari, Edge) support this feature.

## Notes

- The script includes extensive error handling and logging. Check the browser console for detailed information about the synthesizer's state and any potential issues.
- If you don't hear any sound, make sure your browser supports Web Audio API and that your system's audio is not muted.

## Contributing

Feel free to fork this project and submit pull requests with any enhancements or bug fixes.

## License

MIT

## Demo

https://op1.deno.dev/

## Repo

https://github.com/Zizwar/op1Vanilla