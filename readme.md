# 🗼 Tower of Hanoi - Interactive Code Comparison & Visualization

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://your-username.github.io/tower-of-hanoi-comparison/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Java](https://img.shields.io/badge/Java-ED8B00?style=flat&logo=java&logoColor=white)](https://www.java.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)

An interactive web application that compares two different implementations of the Tower of Hanoi algorithm, featuring step-by-step execution visualization and performance analysis.

## 🎯 **Features**

- **📊 Side-by-Side Code Comparison**: Compare two different Tower of Hanoi implementations
- **🎮 Interactive Execution**: Step-by-step visualization with user-defined disk count (n = 1-8)
- **🎨 Visual Animation**: Watch the algorithm solve the puzzle in real-time
- **⚡ Performance Analysis**: Memory usage and optimization comparison
- **🔍 Bug Detection**: Identifies logic errors in implementations
- **📈 Step Counting**: Tracks total moves and validates against 2^n - 1 formula

## 🖥️ **Live Demo**

👉 **[Try it live here!](https://your-username.github.io/tower-of-hanoi-comparison/)**

## 📸 Project Screenshots

### 🧠 Visualization Examples:

#### 🖼️ Screenshot 1
![Tower of Hanoi - Step View](screenshots/Screenshot%202025-08-08%20124044.png)

#### 🖼️ Screenshot 2
![Tower of Hanoi - Code Comparison](screenshots/Screenshot%202025-08-08%20124213.png)


## 📁 **Project Structure**

```
tower-of-hanoi-comparison/
├── index.html              # Main HTML file
├── styles.css              # CSS styling
├── script.js               # JavaScript functionality
├── src/
│   ├── Solution1.java      # Original implementation (with bugs)
│   └── Solution2_Optimized.java  # Optimized implementation
├── README.md               # Project documentation
└── screenshots/            # Demo images
    ├── comparison.png
    └── visual-demo.png
```

## 🚀 **Quick Start**

### Option 1: GitHub Pages (Recommended)
1. Fork this repository
2. Enable GitHub Pages in Settings
3. Visit `https://your-username.github.io/tower-of-hanoi-comparison/`

### Option 2: Local Development
```bash
# Clone the repository
git clone https://github.com/your-username/tower-of-hanoi-comparison.git
cd tower-of-hanoi-comparison

# Open in browser
open index.html

# OR serve with Python
python -m http.server 8000
# Then visit http://localhost:8000
```

### Option 3: Run Java Files
```bash
# Compile and run the original implementation
javac src/Solution1.java
java -cp src Solution1

# Compile and run the optimized implementation
javac src/Solution2_Optimized.java
java -cp src Solution2_Optimized
```

## 📋 **Code Implementations**

### Code 1 (Original Implementation) - `src/Solution1.java`
```java
public static void towerOfHanoi(int n, String src, String helper, String dest) {
    if(n == 1) {
        System.out.println("transfer disk " + n + " from " + src + " to " + dest);
        return;
    }
    towerOfHanoi(n-1, src, dest, helper);
    System.out.println("transfer disk " + n + " from " + src + " to " + helper); // BUG HERE!
    towerOfHanoi(n-1, helper, src, dest);
}
```

**Issues:**
- ❌ Logic error in middle step
- ❌ Uses String objects (memory inefficient)
- ❌ No step counting
- ❌ Higher garbage collection overhead

### Code 2 (Optimized Implementation) - `src/Solution2_Optimized.java` ✅
```java
static void solveHanoi(int n, char source, char helper, char destination) {
    if (n == 1) {
        steps++;
        System.out.println("Move disk 1 from " + source + " to " + destination);
        return;
    }
    solveHanoi(n - 1, source, destination, helper);
    steps++;
    System.out.println("Move disk " + n + " from " + source + " to " + destination);
    solveHanoi(n - 1, helper, source, destination);
}
```

**Advantages:**
- ✅ Correct logic implementation
- ✅ Uses char (primitive, 2 bytes)
- ✅ Step counting functionality
- ✅ Better performance
- ✅ Less memory overhead

## 🔍 **Detailed Comparison**

| Aspect | Code 1 (Original) | Code 2 (Optimized) |
|--------|-------------------|-------------------|
| **Parameter Type** | `String` (heap allocation) | `char` (primitive, 2 bytes) |
| **Memory Usage** | Higher (object creation) | Lower (primitive types) |
| **Performance** | Slower (string operations) | Faster (char operations) |
| **Step Counting** | ❌ Not available | ✅ Tracks total moves |
| **Logic Correctness** | ❌ Bug in middle step | ✅ Correct implementation |
| **GC Overhead** | Higher (string concatenation) | Lower (primitive operations) |
| **Code Clarity** | Verbose parameter names | Concise and clear |

## 🧮 **Algorithm Complexity**

- **Time Complexity**: O(2^n) for both implementations
- **Space Complexity**: O(n) - recursion stack depth  
- **Total Moves**: 2^n - 1 (mathematically proven)

### Performance for different values of n:
| n | Total Moves | Execution Time* |
|---|-------------|----------------|
| 3 | 7 | < 1ms |
| 4 | 15 | < 1ms |
| 5 | 31 | < 1ms |
| 6 | 63 | 1ms |
| 7 | 127 | 2ms |
| 8 | 255 | 5ms |

*Approximate times may vary based on system

## 🛠️ **Technologies Used**

- **Backend Logic**: Java (JDK 8+)
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Animations
- **Visualization**: Custom JavaScript animation engine
- **Responsive Design**: Mobile-friendly interface

## 📚 **Educational Value**

This project demonstrates:

### Algorithm Concepts
- **Recursion**: Understanding recursive problem-solving
- **Divide and Conquer**: Breaking problems into smaller subproblems
- **Mathematical Induction**: Proving algorithm correctness

### Programming Concepts
- **Code Optimization**: Performance improvement techniques
- **Memory Management**: Primitive vs object types
- **Bug Detection**: Identifying logical errors
- **Best Practices**: Clean, efficient code writing

### Data Structure Concepts
- **Stack**: Implicit stack via recursion
- **Tree Traversal**: Recursive tree-like exploration
- **State Management**: Tracking algorithm progress

## 🎮 **How to Use**

1. **Open the application** in your web browser
2. **Set number of disks** (1-8) using the input field
3. **Choose execution mode**:
   - **Execute Code 1**: See the buggy implementation
   - **Execute Code 2**: See the optimized version
   - **Visual Demo**: Watch animated solution
4. **Compare results** in the output panel
5. **Analyze performance** metrics and step counts

## 🤝 **Contributing**

Contributions are welcome! Here's how you can help:

### Ways to Contribute
- 🐛 **Bug Reports**: Found an issue? Report it!
- ✨ **Feature Requests**: Suggest new features
- 📖 **Documentation**: Improve README or code comments
- 🎨 **UI/UX**: Enhance the visual design
- ⚡ **Performance**: Optimize algorithms or animations

### Development Setup
```bash
# Fork and clone the repository
git clone https://github.com/YOUR-USERNAME/tower-of-hanoi-comparison.git
cd tower-of-hanoi-comparison

# Create a feature branch
git checkout -b feature/amazing-feature

# Make your changes
# Test your changes locally

# Commit and push
git commit -m 'Add amazing feature'
git push origin feature/amazing-feature

# Create a Pull Request
```

### Code Style Guidelines
- Use meaningful variable names
- Add comments for complex logic
- Follow existing code formatting
- Test changes thoroughly

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 👤 **Author**

**Your Name**
- 🌐 Portfolio: [your-portfolio.com](https://your-portfolio.com)
- 💼 LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)
- 🐙 GitHub: [@your-username](https://github.com/your-username)
- 📧 Email: your.email@example.com

## 🙏 **Acknowledgments**

- Inspired by the classic Tower of Hanoi puzzle
- Built for educational purposes and algorithm analysis
- Thanks to the computer science community for algorithm research
- Special thanks to contributors and users providing feedback

## 📊 **Project Statistics**

![GitHub stars](https://img.shields.io/github/stars/your-username/tower-of-hanoi-comparison?style=social)
![GitHub forks](https://img.shields.io/github/forks/your-username/tower-of-hanoi-comparison?style=social)
![GitHub issues](https://img.shields.io/github/issues/your-username/tower-of-hanoi-comparison)
![GitHub pull requests](https://img.shields.io/github/issues-pr/your-username/tower-of-hanoi-comparison)

## 🗺️ **Roadmap**

- [ ] Add more algorithm implementations
- [ ] Include time complexity visualization
- [ ] Add sound effects for moves
- [ ] Mobile app version
- [ ] Algorithm performance benchmarking
- [ ] Multi-language support
- [ ] Advanced visualization modes
- [ ] Export solution steps to PDF

---

⭐ **Star this repository if you found it helpful!**

📢 **Share it on social media to help others learn!**
