//! Do the below programs in anonymous function & IIFE
//a.Print odd numbers in an array
//Anonymous function
var result = [];
var odd = function(arr){
    for (var i=0;i<arr.length;i++){
        if (arr[i]%2!==0){
        result.push(arr[i]);
        }
    }
    return result;
}
console.log(odd([1,2,3,4,5,6,7,8,9,11]));
//IIFE
var result1 = [];
(function(arr1){
    for (var ia=0;ia<arr1.length;ia++){
        if (arr1[ia]%2!==0){
        result1.push(arr1[ia]);
        }
    }
    console.log(result1);
})([1,2,3,4,5,6,7,8,9,11]) 
//Arrow function
var result2 = [];
var odd2 = (arr2)=>{
    for (var ib=0;ib<arr2.length;ib++){
        if (arr2[ib]%2!==0){
        result2.push(arr2[ib]);
        }
    }
    return result2;
}
console.log(odd2([1,2,3,4,5,6,7,8,9,11])) 


//b.Convert all the strings to title caps in a string array
//Anonymous function
var a = function(b) {
  var b = b.toLowerCase().split(" ");
    for (var ic = 0; ic < b.length; ic++) {
      b[ic] = b[ic].charAt(0).toUpperCase()+b[ic].slice(1);
    }
    return b.join(" ");
}
console.log(a("love is god"));
//IIFE
(function(b1) {
    var b1 = b1.toLowerCase().split(" ");
      for (var ie = 0; ie < b1.length; ie++) {
        b1[ie] = b1[ie].charAt(0).toUpperCase()+b1[ie].slice(1);
      }
      console.log(b1.join(" "));
  })("love is god");
//Arrow function
var a2 = (b2)=>{
    var b2 = b2.toLowerCase().split(" ");
      for (var ig = 0; ig < b2.length; ig++) {
        b2[ig] = b2[ig].charAt(0).toUpperCase()+b2[ig].slice(1);
      }
      return b2.join(" ");
  }
  console.log(a2("love is god"));

//c.Sum of all numbers in an array
//Anonymous function
var c = function(d) {
  var sum = 0;
    for (var ih = 0; ih < d.length; ih++) {
      sum += +d[ih];
    }
    return sum;
}
console.log(c([1,2,3,4,5,6,7]));
//IIFE
(function(d1) {
    var sum1 = 0;
      for (var ij = 0; ij < d1.length; ij++) {
        sum1 += +d1[ij];
      }
      console.log(sum1);
  })([1,2,3,4,5,6,7]);
//Arrow function
var c2 = (d2)=>{
    var sum2 = 0;
      for (var ik = 0; ik< d2.length; ik++) {
        sum2 += +d2[ik];
      }
      return sum2;
    }
    console.log(c2([1,2,3,4,5,6,7]));

//d.Return all the prime numbers in an array
//Anonymous function
var g = function(f) {
var arr3 = [];
  for (var il=0; il<f.length; il++) {
    for (var im = 2; im < f[il]; im++) {
      if (f[il] % im === 0) {
        g = true;
        break;
      }
      else {
        g = false;
      }
    }
    if (g == false) {
      arr3.push(f[il]);
    }
  }
    return arr3;
}
console.log(g([3,6,7,14,23,28,31,36]));
//IIFE
(function(f1) {
    var arr4 = [];
      for (var io=0; io<f1.length; io++) {
        for (var ip = 2; ip < f1[io]; ip++) {
          if (f1[io] % ip === 0) {
            g1 = true;
            break;
          }
          else {
            g1 = false;
          }
        }
        if (g1 == false) {
          arr4.push(f1[io]);
        }
      }
      console.log(arr4);
    })
    ([3,6,7,14,23,28,31,36]);
//Arrow function
var g2 = (f2)=> {
    var arr5 = [];
      for (var iq=0; iq<f2.length; iq++) {
        for (var ir = 2; ir < f2[iq]; ir++) {
          if (f2[iq] % ir === 0) {
            g2 = true;
            break;
          }
          else {
            g2 = false;
          }
        }
        if (g2 == false) {
          arr5.push(f2[iq]);
        }
      }
        return arr5;
    }
    console.log(g2([3,6,7,14,23,28,31,36]));

//e.Return all the palindromes in an array
//Anonymous function
var h = function(j){
 var k = [];
 var l ;
 for(var it=0;it<j.length;it++){
   var m = j[it] + '';
   var l = true ;
   for(var iu=0;iu<m.length/2;iu++){
    if(m[iu] !== m[m.length-1-iu]){
      var l = false;
      break;
    }
   }
   if(l == true){
   k.push(j[it])
   }
 }
 return k
}
console.log(h([10,11,23,25,121,242,123,222]));
//IIFE
(function(j1){
  var k1 = [];
  var l1 ;
  for(var it1=0;it1<j1.length;it1++){
    var m1 = j1[it1] + '';
    var l1 = true ;
    for(var iu1=0;iu1<m1.length/2;iu1++){
     if(m1[iu1] !== m1[m1.length-1-iu1]){
       var l1 = false;
       break;
     }
    }
    if(l1 == true){
    k1.push(j1[it1])
    }
  }
  console.log(k1);
})([10,11,23,25,121,242,123,222]);
//Arrow function
var h2 = (j2)=>{
  var k2 = [];
  var l2;
  for(var it2=0;it2<j2.length;it2++){
    var m2 = j2[it2] + '';
    var l2 = true ;
    for(var iu2=0;iu2<m2.length/2;iu2++){
     if(m2[iu2] !== m2[m2.length-1-iu2]){
       var l2 = false;
       break;
     }
    }
    if(l2 == true){
    k2.push(j2[it2])
    }
  }
  return k2
 }
 console.log(h2([10,11,23,25,121,242,123,222]));

 //f.Return median of two sorted arrays of the same size.
 //Anonymous function
var o =  [1,2,3,4,5];
var p =  [6,7,8,9,10];
 var n = function(o,p){
  var q = o.concat(p)
  var r = (q.length/2) -1;
  var s = (q[r]+q[r+1])/2
  return s;
 }
 console.log(n(o,p))
 //IIFE
 var o1 =  [1,2,3,4,5];
var p1 =  [6,7,8,9,10];
 (function(o1,p1){
  var q1 = o1.concat(p1)
  var r1 = (q1.length/2) -1;
  var s1 = (q1[r1]+q1[r1+1])/2
  console.log(s1);
 })(o1,p1)
 //Arrow function
 var o2 =  [1,2,3,4,5];
var p2 =  [6,7,8,9,10];
 var n2 = (o2,p2)=>{
  var q2 = o2.concat(p2)
  var r2 = (q2.length/2) -1;
  var s2 = (q2[r2]+q2[r2+1])/2
  return s2;
 }
 console.log(n2(o2,p2))

//f.Remove duplicates from an array
//Anonymous function
var t = function(u){
  var v = [];
  for(var iv=0;iv<u.length;iv++){
    if(v.indexOf(u[iv]) == -1){
      v.push(u[iv])
    }
  }
  return v;
}
console.log(t(["cat","dog","rat","cat","rat"]));
//IIFE
(function(u){
  var v = [];
  for(var iv=0;iv<u.length;iv++){
    if(v.indexOf(u[iv]) == -1){
      v.push(u[iv])
    }
  }
   console.log(v);
})(["cat","dog","rat","cat","rat"]);
//Arrow function
var t = (u)=>{
  var v = [];
  for(var iv=0;iv<u.length;iv++){
    if(v.indexOf(u[iv]) == -1){
      v.push(u[iv])
    }
  }
  return v;
}
console.log(t(["cat","dog","rat","cat","rat"]));

//Rotate an array by k times
//Anonymous function
var x = [1, 2, 3];
var y = 3;
y = x.length % y; 
var z = function(w){
  out = x.slice(y+1, x.length);
var count = out.length;
for(var iz=0;iz<y+1;iz++){
  out[count] = x[iz];
  count += 1;
}
  return out
}
console.log(z(x));
//IIFE
var x1 = [1, 2, 3];
var y1 = 3;
y1 = x1.length % y1; 
(function(w){
  out = x1.slice(y1+1, x1.length);
var count1 = out.length;
for(var iz=0;iz<y+1;iz++){
  out[count1] = x1[iz];
  count1 += 1;
}
  console.log(out);
})(x1)
//Arrow function
var x2 = [1, 2, 3];
var y2 = 3;
y2 = x2.length % y2; 
var z2 = (w2)=>{
  out = x2.slice(y2+1, x.length);
var count2 = out.length;
for(var iz2=0;iz2<y2+1;iz2++){
  out[count2] = x2[iz2];
  count2 += 1;
}
  return out
}
console.log(z2(x2));