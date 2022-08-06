Part 1: Runtime Analysis
  
| Array Size  | Append      | Insert        |
|-------------|-------------|---------------|
| Tiny        | 87.757 μs   | 37.771 μs     |
| Small       | 102.404 μs  | 49.409 μs     |
| Medium      | 145.915 μs  | 162.071 μs    |
| Large       | 605.95 μs   | 6.577303 ms   |
| Extra Large | 7.536819 ms | 1.049736787 s |
  
The first pattern I see in the table above is that both functions takes longer to run when the array size is bigger. When the array size is Tiny and Small, the Insert function runs faster than the Append function. The Append function scales better than the Insert function because when the array size is Medium and bigger, the Append function runs faster. Not only that, when looking at the times of both functions it seems like the Insert function is scaling a lot faster (exponentially), while the Append function is scaling more linear/consistent. In other words, the bigger the array the longer it takes for the Insert function to run compare to the Append function(the time difference between the two functions becomes more noticeable).
  
EXTRA CREDIT:  
The slower function is the Insert function. This function uses the Unshift method which adds one or more elements to the beginning of an array. Each time the function runs, when an element is pushed to the front, all the other elements has to be shuffle to the end of the array. Thus, it creates more operations and makes it run slower.