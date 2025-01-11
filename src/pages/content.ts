let workTabs = [
  'Graphics',
  'Simulations',
  'Games',
  'Products',
  'Fractals',
  'Neural Networks',
  'Tools',
];
let techTabs = ['Languages', 'Database', 'Libraries & Frameworks'];
let technologies = {
  Languages: [
    {
      txt: 'TypeScript',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png',
    },
    {
      txt: 'JavaScript',
      src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    },
    {
      txt: 'C',
      src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
    },
    {
      txt: 'OpenGl Shading Language',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Opengl-logo.svg/1599px-Opengl-logo.svg.png?20230524144527',
    },
    {
      txt: 'C++',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/612px-ISO_C%2B%2B_Logo.svg.png',
    },

    {
      txt: 'Java',
      src: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/242px-Java_programming_language_logo.svg.png',
    },
  ],
  Database: [
    {
      txt: 'MongoDB',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1024px-MongoDB_Logo.svg.png?20190626143224',
    },
    {
      txt: 'MySql',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MySQL_textlogo.svg/1600px-MySQL_textlogo.svg.png?20210508081050',
    },
  ],
  'Libraries & Frameworks': [
    {
      txt: 'WebGL',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/WebGL_Logo.svg/1024px-WebGL_Logo.svg.png',
    },
    {
      txt: 'Nodejs',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1180px-Node.js_logo.svg.png',
    },
    {
      txt: 'Express',
      src: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
    },
    {
      txt: 'ThreeJS',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/440px-Three.js_Icon.svg.png',
    },
    {
      txt: 'Socketio',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1200px-Socket-io.svg.png?20200308235956',
    },
    {
      txt: 'React',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
    },
  ],
};

let blockContent = {
  Graphics: [
    {
      head: 'Sketchy',
      image: ['sketchyDemo2.png'],
      textBelowImage: 'Sketchy vectors drawing SVG',
      description:
        'Sketchy combines GPU-accelerated graphics with Complex Fourier Series to draw almost any SVG with precision. Featuring an infinite canvas and extraordinary zoom, it seamlessly adapts to your SVG using multiple vector sets for optimal results. Merging advanced math with cutting-edge graphics, Sketchy delivers stunning accuracy and fluid navigation for an unparalleled creative experience.',
      tags: ['WebGL', 'TypeScript', 'Maths', 'GLSL'],
      link: 'https://sketchy-himanshu.netlify.app/',
      linkText: 'Live Preview',
    },
    {
      head: 'DDA Line Drawer',
      image: ['dda.png'],
      textBelowImage: 'DDA Line Drawer in action',
      description:
        'The Digital Differential Analyzer (DDA) Line Drawer redefines precision with its infinite canvas and limitless zoom, allowing users to explore an unbounded graph in any direction. Featuring GPU-accelerated rendering for smooth performance, it includes an interactive grid with intersection coordinates and intuitive panning. Efficient rendering ensures only visible portions are processed, optimizing performance without sacrificing detail.',
      tags: ['WebGL', 'TypeScript', 'Maths', 'GLSL'],
      link: 'https://dda-himanshu-gupta.netlify.app/',
      linkText: 'Live Preview',
    },
    {
      head: 'Fourier Grapher',
      image: ['fourierGrapher.png'],
      textBelowImage: `Fourier Grapher graphing the function x cos( 8x<sup>2</sup> )`,
      description:
        'Fourier Grapher is a tool that draws mathematical graphs of functions using Fourier Series. It leverages GPU rendering for smooth performance and allows users to control scale, rotation speed, vector count, and colors. With increasing vectors, the graph approximation improves, providing an interactive, dynamic visualization of mathematical functions with high accuracy and precision.',
      tags: ['WebGL', 'JavaScript', 'Maths', 'GLSL'],
      link: 'https://fourier-grapher-himanshu.netlify.app/',
      linkText: 'Live Preview',
    },
  ],
  Games: [
    {
      head: 'Obstacle Run 3D',
      image: ['obstacleRun.png'],

      textBelowImage: `A screenshot of the game play`,
      description:
        'Obstacle Run 3D, a game I created, uses Three.js for immersive 3D world rendering. Control a green box with arrow keys to dodge red obstacles while aiming for a high score. The game features a device-specific high score tracker, challenging players to continually beat their personal best in this engaging, fast-paced experience.',
      tags: ['ThreeJS', 'JavaScript', 'HTML', 'CSS'],
      link: 'https://obstacle-run3d-himanshu.netlify.app/',
      linkText: 'Live Preview',
    },
    {
      head: 'TicTacToe',
      image: ['ticTacToe3.jpeg', 'ticTacToe1.jpeg', 'ticTacToe2.jpeg'],
      textBelowImage: `Screenshots showing the interface`,

      description:
        'A multiplayer real-time Tic Tac Toe game where you can create a room, share the code, and play with a friend on different devices. Enjoy seamless gameplay with real-time updates, disconnection notifications, and a "play again" request feature for rematches. Experience smooth, interactive fun anytime, anywhere!',
      tags: ['Nodejs', 'Express', 'React', 'Socketio', 'MongoDB'],

      link: 'https://tic-tac-toe-himanshu.netlify.app/',
      linkText: 'Live Preview',
    },

    {
      head: 'Minesweeper',
      image: ['minesweeper.png'],
      textBelowImage: `A screenshot of the game play`,

      description:
        'Relive the Windows XP nostalgia with Minesweeper, featuring three difficulty modes: Easy, Medium, and Hard. Compete with friends on a dynamic leaderboard and track your progress through a detailed score history. Challenge your logic and memory while enjoying a modern take on this timeless classic. Perfect for casual gaming or intense competitions!',
      tags: ['Nodejs', 'Express', 'MongoDB', 'HTML', 'CSS'],

      link: 'https://minesweeper-himanshu.netlify.app/',
      linkText: 'Live Preview',
    },
  ],
  Simulations: [
    {
      head: "Conway's game of life",
      image: ['conwaysDemo3.png'],
      textBelowImage: `A screenshot of the spacefiller pattern`,
      description:
        "Conway's Game of Life, a cellular automation simulation, featuring hardware-accelerated graphics on an infinite canvas. Unlike typical Conway's fame of life simultaions here you can change the rules of the simulation and see the results in real time. Enjoy unlimited zoom and pan, real-time rule customization, and hundreds of preloaded user templates, you can upload your own starter templates for other users to use. Dive into a visually stunning and endlessly customizable cellular automaton experience!",
      tags: [
        'WebGL',
        'GLSL',
        'TypeScript',
        'MongoDB',
        'Express',
        'Nodejs',
        'Maths',
      ],
      link: 'https://conways-game-of-life-himanshu.netlify.app/',
      linkText: 'Live Preview',
    },
    {
      head: 'GraphSim',
      image: ['graphSim.png'],
      textBelowImage: `A screenshot showing a failed Hamiltonian Cycle`,
      description:
        'The Graph Simulator, currently under development, helps visualize graph algorithms with GPU-accelerated graphics. It can currently simulate finding all Hamiltonian cycles and supports infinite zoom and pan. Calculations are processed in the backend for optimized performance. This tool provides an interactive way to explore and visualize graph algorithms in real time, it gives you a feel of how the algorithm is working by using animations.',
      tags: ['WebGL', 'TypeScript', 'Algorithms', 'Data structures'],
      link: 'https://graph-sim-himanshu.netlify.app/',
      linkText: 'Live Preview',
    },
    {
      head: 'Wave Simulator',
      image: ['waveSim.png'],
      textBelowImage: `A screenshot showing sine and cosine waves`,
      description:
        'A wave simulator that creates visually appealing animations of oscillating functions like sine, cosine, tangent, and more. You can adjust the scale and frequency in real-time to see how the wave changes, offering a mesmerizing and dynamic visual experience. Perfect for those who enjoy watching smooth, flowing wave patterns come to life.',
      tags: ['Canvas', 'JavaScript', 'Maths'],
      link: 'https://wave-animations-himanshu.netlify.app/',
      linkText: 'Live Preview',
    },
  ],
  Products: [
    {
      head: 'SENTRY',
      image: ['sentry.png'],
      textBelowImage: `A screenshot showing the interface`,
      description:
        'SENTRY (Student Entry and Tracking Registry) is an automated system that replaces manual register entries for NIT Hamirpur hostellers. It streamlines student entry and exit by scanning ID cards at gates, eliminating the need to manually search for names. It also automatically closes previous entries and sends reports at 8 pm about students still outside, reducing guard workload. SENTRY resolves issues like unclear handwriting, ensuring clear records. With over 1 lakh entries efficiently managed, SENTRY has greatly improved the accuracy and convenience of tracking student movements, reducing unnecessary walks and manual labor.',
      tags: ['TypeScript', 'Nodejs', 'Express', 'MongoDB', 'React'],
      link: 'https://drive.google.com/file/d/1W-moMTENZd_V2lqtX-f5TW5aA9rA9qdg/view',
      linkText: 'See Certificate',
    },
    {
      head: 'Construction Cell Complaint System',
      textBelowImage: `A screenshot showing the log in and sign up pages`,
      image: ['cCell1.png', 'cCell2.png'],
      description:
        'The Construction Cell Complaint System at NIT Hamirpur allows wardens and faculty to register construction-related complaints efficiently. It is a robust, real-time system that manages various types of complaints while maintaining a complete history of each case. Complaints are directly received by the Chief Executive Engineer, who assigns them to the relevant lower engineers for resolution. Once a complaint is resolved, it can be closed by the complainant, ensuring accountability and transparency. This system streamlines the complaint resolution process, improves communication, and enhances the overall maintenance of the campus infrastructure, ensuring timely responses to construction issues.',
      tags: ['Express', 'MongoDB', 'React', 'TypeScript', 'Nodejs', 'Socketio'],
    },
  ],
  Fractals: [
    {
      head: 'Binary Tree',
      image: ['binaryTree.png'],
      textBelowImage: `A screenshot showing a sample fractal`,
      description:
        'The binary tree fractal visualizes recursive branching, where each branch splits into two, maintaining adjustable angles. It features real-time color customization for vibrant displays and dynamic angle adjustments to craft unique, captivating patterns. This interactive experience seamlessly blends geometry and creativity, offering an engaging way to explore fractal art and mathematical elegance.',
      tags: ['Canvas', 'JavaScript', 'Maths'],
      link: 'https://tree-fractal-himanshu.netlify.app/',
      linkText: 'Live Preview',
    },
    {
      head: 'Pythagorean Tree',
      image: ['pythagoreanTree.png'],
      textBelowImage: `A screenshot showing a sample Pyhagorean Tree`,
      description:
        'The Pythagorean Tree fractal creates recursive geometric patterns, where each square branches into two smaller squares at adjustable angles. Built with WebGL and GPU-accelerated graphics, it offers real-time performance. Features include dynamic color customization and angle adjustments, letting users explore captivating fractal designs and the blend of geometry with high-performance visuals.',
      tags: ['WebGL', 'JavaScript', 'Maths'],
      link: 'https://pythaorean-tree-himanshu.netlify.app/',
      linkText: 'Live Preview',
    },
    {
      head: 'Julia Set',
      image: ['julia.png'],
      textBelowImage: `A screenshot showing julia set for z=-1.316+0.0073i`,
      description:
        "The Julia Set offers GPU-accelerated real-time rendering with stunning zooming and panning capabilities. This fractal exhibits intricate, self-similar patterns that evolve with each zoom level. Explore dynamic visualizations and manipulate the fractal's parameters, offering an immersive experience to study its mathematical beauty through limitless interaction and breathtaking detail.",
      tags: ['WebGL', 'GLSL', 'JavaScript', 'Maths'],
      link: 'https://julia-set-himanshu.netlify.app/',
      linkText: 'Live Preview',
    },
    {
      head: 'Mandelbrot Set',
      image: ['mandelbrot.png'],
      textBelowImage: `A screenshot showing Mandelbrot set`,
      description:
        'The Mandelbrot Set brings the fascinating world of fractals to life with GPU-accelerated rendering, enabling seamless real-time exploration. Experience its intricate beauty through dynamic zooming and panning, delving into infinite detail. With vibrant color customization and smooth interactivity, this creation offers a captivating way to uncover the mathematical wonders of fractals in stunning visual detail.',
      tags: ['WebGL', 'GLSL', 'JavaScript', 'Maths'],
      link: 'https://mandelbrot-explorer.netlify.app/',
      linkText: 'Live Preview',
    },
  ],
  Tools: [
    {
      head: 'Quine-McCluskey Logic Minimizer',
      image: ['QuineMcCluskey.png'],
      textBelowImage: `A screenshot showing showing the interface`,
      description:
        'The Quine-McClusky solver efficiently minimizes logic expressions using the Quine-McClusky algorithm. It visually demonstrates each step of the minimization process, making it easy to follow and understand. This tool simplifies complex boolean expressions, offering a clear and interactive way to optimize logic circuits for better performance and design clarity.',
      tags: ['JavaScript'],
      link: 'https://quinemccluskey2446.netlify.app/',
      linkText: 'Live Preview',
    },
    {
      head: 'PrecisionPro',
      image: ['precisionPro.png'],
      textBelowImage: `Precision Pro calculating cube root of 2 up till 10,000 decimal digit precision`,
      description:
        "PrecisionPro is an advanced nth root calculator, capable of calculating square roots, cube roots, and higher-order roots with exceptional precision. Utilizing the Newton-Raphson method, it provides accurate results to any specified decimal place—whether it's 10 or 10,000 decimals. This tool offers reliable, fast, and efficient calculations for any numerical root calculation.",
      tags: ['JavaScript', 'Maths'],

      link: 'https://precision-pro-himanshu.netlify.app/',
      linkText: 'Live Preview',
    },
    {
      head: 'Grapher',
      image: ['grapher.png'],
      description:
        'This is a function grapher for mathematical functions which allows users to visualize multiple graphs on a single canvas. It supports real-time plotting, scale adjustments, and overlays, enabling easy comparison of different functions.',
      textBelowImage: 'Grapher graphing sin(x), tan(x) and tan<sup>-1</sup>(x)',
      link: 'https://grapher2-himanshu.netlify.app/',
      linkText: 'Live Preview',

      tags: ['WebGL', 'TypeScript', 'Maths'],
    },

    {
      head: 'Mandelbrot function Analyzer',
      image: ['mandelbrotFunctionAnalyzer.png'],
      description:
        "Mandelbrot function Analyzer visualizes the Mandelbrot function (f(z)=z<sup>2</sup>+c) by taking mouse pointer coordinates as the complex value 'c'. It iterates through the Mandelbrot function, drawing the iteration points and connecting them with lines. This allows users to analyze the stability of the function, highlighting regions where the function converges or diverges, providing valuable insights into its behavior.",
      textBelowImage:
        'Mandelbrot function Analyzer analyzing for c=0.052+0.613i',
      link: 'https://mandelbrot-function-analyzer-himanshu.netlify.app/',
      linkText: 'Live Preview',

      tags: ['WebGL', 'TypeScript', 'Maths'],
    },
  ],
  'Neural Networks': [
    {
      head: 'MLP',
      image: ['mlp.png'],
      description:
        'I developed a Multilayer Perceptron (MLP) model function approximator entirely from scratch in C++ without using any external libraries, implementing everything from matrix multiplication to error backpropagation. The model is highly flexible, allowing customization of architecture, including the number of layers and neurons per layer. It supports a variety of activation functions, all implemented by me, including unipolarBinary, bipolarBinary, unipolarSigmoidal, bipolarSigmoidal, ReLU, parametricLeakyReLU, exponential, and swish. This project demonstrates a deep understanding of neural network fundamentals and C++ programming, providing a versatile platform for experimenting with different MLP configurations for various function approximation tasks.',
      textBelowImage: 'MLP being trained on function data set',
      link: 'https://github.com/Himanshu12102004/ann',
      linkText: 'See Code',
      tags: ['C++', 'Algorithms', 'Data structures'],
    },
  ],
};
export { workTabs, techTabs, technologies, blockContent };
