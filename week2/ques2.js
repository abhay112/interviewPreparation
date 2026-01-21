1 - Sync
3 - Inside Async
6 - Sync End
4 - After Await
5 - Microtask
2 - Macrotask




Code before await will run synchronously here there is a fn before 6 - sync End  
asyncFn() which calles synchronously and print Inside Async and then it gets await that makes it to move to 
microtask queue that meanse after all synch code run then microtask queue will be executed then macrotask queue.