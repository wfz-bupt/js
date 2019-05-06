publishReplay(1) tells rxjs to cache the most recent value which is perfect for single value http calls. 
refCount() is used to keep the observable alive for as long as there are subscribers.
subscrie = 模版中的async
BehaviorSubject: A Subject that requires an initial value and emits its current value to new subscribers

/* example -- BehaviorSubject */
// RxJS v6+
import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject(123);

//two new subscribers will get initial value => output: 123, 123
subject.subscribe(console.log);
subject.subscribe(console.log);

//two subscribers will get new value => output: 456, 456
subject.next(456);

//new subscriber will get latest value (456) => output: 456
subject.subscribe(console.log);

//all three subscribers will get new value => output: 789, 789, 789
subject.next(789);

// output: 123, 123, 456, 456, 456, 789, 789, 789
/* example */

/****observable.takeUtil***/
Emit values until provided observable emits

/* pipe 方法 管道（可以在管道里通过许多方法）*/
The pipe function is the assembly line from your observable data source through your operators. 
Just like raw material in a factory goes through a series of stops before it becomes a finished product, 
source data can pass through a pipe-line of operators where you can manipulate, filter, and transform the data 
o fit your use case. It's not uncommon to use 5 (or more) operators within an observable chain, contained 
within the pipe function.
pipe方法
