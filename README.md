# TON Converter Unit

## Live Demo

Check out the live version of the TON Converter Unit:
[TON Converter Unit Demo](https://veebull.github.io/tontastic-units/)

Try it out to see the converter in action!

## Description

TON Converter Unit is a React component that provides a user-friendly interface for converting between different TON (The Open Network) cryptocurrency units. It supports conversion between TON and various denominations including Nano, Micro, Milli, Kiloton, Megaton, and Gigaton.

## Features

- Real-time conversion between TON and its various denominations
- Support for decimal input in TON value
- Responsive design with a grid layout for different screen sizes
- Dark/Light theme toggle
- Copy-to-clipboard functionality for each unit value
- Input validation to ensure only valid numeric inputs are processed

## Technologies Used

- React
- TypeScript
- Shadcn UI components
- Framer Motion for animations
- React Hot Toast for notifications
- Lucide React for icons

## Installation

1. Clone the repository

   ```
   git clone https://github.com/yourusername/ton-converter-unit.git
   ```

2. Navigate to the project directory

   ```
   cd ton-converter-unit
   ```

3. Install dependencies

   ```
   npm install
   ```

4. Ensure you have the required Shadcn UI components set up in your project

## Usage

Import the UnitMeasure component into your React application:

```jsx
import { UnitMeasure } from './path/to/UnitMeasure';

function App() {
  return (
    <div>
      <UnitMeasure />
    </div>
  );
}
```

## Component Structure

The `UnitMeasure` component consists of:

- A main input for TON value with any precision
- A grid of inputs for other TON units (Nano, Micro, Milli, Kiloton, Megaton, Gigaton)
- Each input has a copy button for easy copying of values
- A theme toggle button for switching between light and dark modes

## Functionality

- Users can input values in any unit, and all other units will update accordingly
- The component handles decimal inputs and ensures proper conversion
- Empty inputs are handled gracefully, resetting all fields when an input is cleared
- The copy functionality allows users to easily copy any converted value
- The theme can be toggled between light and dark modes

## Customization

The component uses Shadcn UI components and can be easily customized by modifying the CSS classes or adjusting the Shadcn theme.

To customize the appearance:

1. Modify the CSS classes in the component
2. Adjust the Shadcn theme configuration in your project

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [@TheMrArmbull](https://twitter.com/TheMrArmbull) - email@example.com

Project Link: [https://veebull.github.io/tontastic-units/](https://veebull.github.io/tontastic-units/)

## Acknowledgements

- [Shadcn UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Lucide React](https://lucide.dev/)
