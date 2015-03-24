# Fl**ui**d.js: A Fluent Interface UI Library for Modern Browsers

Welcome to FluidJS. The goal of this project is to build a lowlevel, dependency
free UI library aimed for modern browsers. 

Think of this as a smaller version of jQuery. The reason for building this 
library is simple: 90% of the times when people use jQuery, all they need
is `$("#myelement).show()`. While jQuery is perfectly capable of doing so, 
it's a bit like taking a space shuttle to go grocery shopping. 

Therefore, Fluid.js aims to: 

* Implement bare necessary dom traversing and manipulation methods
* provide a fluid interface for simple dom manipulations
* Target modern browsers (Required EcmaScript 5 - IE 9+) 
* Take CSS 3 into consideration (e.g. CSS animations over JS animations)
* Maintain a small footprint and be dependency free
* Provide high stabiliy due to excessive browser testing
