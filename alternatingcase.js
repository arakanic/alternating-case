// This function returns a string with its case reversed
String.prototype.toAlternatingCase = function () {
    return [...this].map(c => {
              if (c == c.toUpperCase()) {
                return c.toLowerCase()
              }
              else if(c == c.toLowerCase()) {
                return c.toUpperCase()
              }
              else { return c }}).join("")
    }