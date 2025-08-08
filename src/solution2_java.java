import java.util.Scanner;

/**
 * Tower of Hanoi - Optimized Implementation
 * 
 * This implementation provides an optimized and correct solution to the
 * Tower of Hanoi problem with the following improvements:
 * 
 * Optimizations:
 * 1. Uses char instead of String (memory efficient)
 * 2. Includes step counting functionality
 * 3. Correct logic implementation
 * 4. Reduced garbage collection overhead
 * 5. Better performance with primitive data types
 * 
 * Time Complexity: O(2^n)
 * Space Complexity: O(n) - recursion stack
 * Total Moves: 2^n - 1 (mathematically proven)
 */
public class Solution2_Optimized {
    
    // Static variable to count total steps
    static int steps = 0;
    
    /**
     * Optimized recursive method to solve Tower of Hanoi
     * 
     * @param n Number of disks
     * @param source Source tower (char for memory efficiency)
     * @param helper Helper tower
     * @param destination Destination tower
     */
    static void solveHanoi(int n, char source, char helper, char destination) {
        // Base case: only one disk
        if (n == 1) {
            steps++;
            System.out.println("Move disk 1 from " + source + " to " + destination);
            return;
        }
        
        // Step 1: Move n-1 disks from source to helper using destination as auxiliary
        solveHanoi(n - 1, source, destination, helper);
        
        // Step 2: Move the nth (largest) disk from source to destination
        steps++;
        System.out.println("Move disk " + n + " from " + source + " to " + destination);
        
        // Step 3: Move n-1 disks from helper to destination using source as auxiliary
        solveHanoi(n - 1, helper, source, destination);
    }
    
    /**
     * Helper method to validate the mathematical formula
     * 
     * @param n Number of disks
     * @return Expected number of moves (2^n - 1)
     */
    static int calculateExpectedMoves(int n) {
        return (int)(Math.pow(2, n) - 1);
    }
    
    /**
     * Main method to execute the optimized program
     */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of disks: ");
        int n = sc.nextInt();
        
        // Validate input
        if (n <= 0) {
            System.out.println("Please enter a positive number of disks.");
            sc.close();
            return;
        }
        
        // Reset step counter for multiple runs
        steps = 0;
        
        System.out.println("\n--- Tower of Hanoi Solution (Optimized Implementation) ---");
        System.out.println("Moving " + n + " disks from Tower A to Tower C using Tower B as helper");
        System.out.println("Algorithm: Optimized recursive approach with step counting\n");
        
        // Record start time for performance analysis
        long startTime = System.currentTimeMillis();
        
        // Execute the algorithm
        solveHanoi(n, 'A', 'B', 'C');
        
        // Record end time
        long endTime = System.currentTimeMillis();
        
        // Display results and analysis
        System.out.println("\n--- Execution Results ---");
        System.out.println("Total steps executed: " + steps);
        System.out.println("Expected steps (2^n - 1): " + calculateExpectedMoves(n));
        System.out.println("Formula verification: " + (steps == calculateExpectedMoves(n) ? "✅ PASSED" : "❌ FAILED"));
        System.out.println("Execution time: " + (endTime - startTime) + " ms");
        
        // Performance analysis
        System.out.println("\n--- Performance Analysis ---");
        System.out.println("Time Complexity: O(2^n)");
        System.out.println("Space Complexity: O(n) - recursion stack depth");
        System.out.println("Memory Efficiency: Using char (2 bytes) vs String objects");
        System.out.println("Garbage Collection: Minimal overhead with primitive types");
        
        sc.close();
    }
}