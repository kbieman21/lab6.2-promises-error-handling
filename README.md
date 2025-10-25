## Critical Thinking Questions

# Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?
When we make an API call there is a possibility that we 'll face different issues such as: Data or Network related issues. In order to address the different issues on time it is important to handle errors for each individual API call.
# How does using custom error classes improve debugging and error identification?
Custom error classes allow us to custmize the error messages and the specify error types such as Data or Network related issues thus it improve debugging and error identification
# When might a retry mechanism be more effective than an immediate failure response?
A retry mechanism is more effective than an immediate failure when the issues are temporary and last very short time.