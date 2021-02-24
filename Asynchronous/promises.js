/*
Explanation

p1 is the promise returned by the fetch() call.
p2 is the promise returned by the first .then() call
p3 is the promise returned by the second .then() call

c1 is the callback function to the first .then() method
c2 is the callback function to the second .then() method
c3 is the callback function to the catch() method.

The first thing that can fail is the fetch() function. (Maybe because the internet connection is broken)
The promise p1 will be rejected with a NetworkError object.
We didn't pass the error handling callback function to the first .then() method.
Hence p2 also rejects with the same NetworkError object.
For the same reason, p3 will also reject.
At this point c3 error handling callback is called.


Another way that our code could fail is if a 404 or other HTTP error code is returned.
At this point the promise p1 is fulfilled and returns the response status and header.
The callback c2 is invoked with the retuned value from p1. 
Our code in c1 checks the ok property of the Response object. Since it does not detect
a normal successfull HTTP response, it returns a null.
Because this return value is not a promise, here p2 is fulfilled right away
and it invoked the c2 callback function with null.
This is the case where we treat an abnormal condition as a non error and handle it without
actually using an error handler.

A more serious error occurs in c1 when we get a normal HTTP response but the
Content type is not set appropriately.
Here we throw a type error. c1 raise a typeerror that causes p2 to be rejected with
that TypeError object. Since we did no specify an error handler for p2, p3 will be rejected 
as well. c2 will not be called. And the error will be passed to c3.


*/
fetch("/api/user/profile")
  .then((response) => {
    if (!response.ok) return null;

    let type = response.headers.get("content-type");
    if (type !== "application/json") {
      throw new TypeError(`Expected JSON, got ${type}`);
    }

    return response.json();
  })
  .then((profile) => {
    if (profile) {
      displayUserProfile(profile);
    } else {
      displayLoggedOutProfilePage();
    }
  })
  .catch((e) => {
    if (e instanceof NetworkError) {
      displayErrorMessage("Check your internet connection");
    } else if (e instanceof TypeError) {
      displayErrorMessage("Something is wrong with our server");
    } else {
      console.error(e);
    }
  });
