successes = 0
failures = 0

function assert(actual,expected) {
  if(expected === actual) {
    successes++
  } else {
    console.log("expected ", expected, " got ", actual)
    failures++
  }

}

console.log(successes + " tests passed.")
console.log(failures + " tests failed.")
