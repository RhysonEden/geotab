// api.call("Get",{"typeName":"Diagnostic",
//                "resultsLimit":10,
//                "search":{
//                "fromDate":new Date().toISOString()
//             }});



// api.call(
//   "Get",
//   {
//     typeName: "DVIRLog",
//     search: {
//       fromDate: new Date(2021, 0, 25),
//       toDate: new Date(),
//       trailerSearch: null,
//     },
//     resultsLimit: 500,
//   },
//   function (result) {
//     console.log("Done: ", result);
//   },
//   function (e) {
//     console.error("Failed:", e);
//   }
// );