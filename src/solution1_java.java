import java.util.Scanner;

/**
 * Tower of Hanoi - Original Implementation
 * 
 * This implementation demonstrates a basic recursive approach to solving
 * the Tower of Hanoi problem. However, it contains a logic error and
 * uses inefficient String parameters.
 * 
 * Issues with this implementation:
 * 1. Logic error in the middle step (prints wrong destination)
 * 2. Uses String objects instead of primitive char (memory inefficient)
 * 3. No step counting functionality
 * 4. String concatenation creates garbage collection overhead
 */
public class Solution1 {
    
    /**
     * Recursive method to solve Tower of Hanoi
     * 
     * @param n Number of disks
     * @param src Source tower
     * @param helper Helper tower
     * @param dest Destination tower
     */
    public static void towerOfHanoi(int n, String src, String helper, String dest) {
        // Base case: only one disk
        if(n == 1) {
            System.out.println("transfer disk " + n + " from " + src + " to " + dest);
            return;
        }
        
        // Step 1: Transfer top n-1 disks from src to helper using dest as auxiliary
        towerOfHanoi(n-1, src, dest, helper);
        
        // Step 2: Transfer the nth (largest) disk from src to dest
        // BUG: This should print src to dest, but it prints src to helper!
        System.out.println("transfer disk " + n + " from " + src + " to " + helper);
        
        // Step 3: Transfer n-1 disks from helper to dest using src as auxiliary
        towerOfHanoi(n-1, helper, src, dest);
    }
    
    /**
     * Main method to execute the program
     */
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of disks: ");
        int n = sc.nextInt();
        
        System.out.println("\n--- Tower of Hanoi Solution (Original Implementation) ---");
        System.out.println("Moving " + n + " disks from Tower A to Tower C using Tower B as helper");
        System.out.println("Note: This implementation contains a logic error!\n");
        
        towerOfHanoi(n, "A", "B", "C");
        
        System.out.println("\nExpected total moves: " + (Math.pow(2, n) - 1));
        System.out.println("Warning: Due to logic error, moves shown above are incorrect!");
        
        sc.close();
    }
}