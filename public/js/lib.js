var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */(function(global,factory){"use strict";if((typeof module==="undefined"?"undefined":_typeof2(module))==="object"&&_typeof2(module.exports)==="object"){// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else{factory(global);}// Pass this if window is not defined yet
})(typeof window!=="undefined"?window:this,function(window,noGlobal){// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";var arr=[];var document=window.document;var getProto=Object.getPrototypeOf;var _slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var fnToString=hasOwn.toString;var ObjectFunctionString=fnToString.call(Object);var support={};function DOMEval(code,doc){doc=doc||document;var script=doc.createElement("script");script.text=code;doc.head.appendChild(script).parentNode.removeChild(script);}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var version="3.2.1",// Define a local copy of jQuery
jQuery=function jQuery(selector,context){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new jQuery.fn.init(selector,context);},// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,// Matches dashed string for camelizing
rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g,// Used by jQuery.camelCase as callback to replace()
fcamelCase=function fcamelCase(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={// The current version of jQuery being used
jquery:version,constructor:jQuery,// The default length of a jQuery object is 0
length:0,toArray:function toArray(){return _slice.call(this);},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function get(num){// Return all the elements in a clean array
if(num==null){return _slice.call(this);}// Return just the one element from the set
return num<0?this[num+this.length]:this[num];},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function pushStack(elems){// Build a new jQuery matched element set
var ret=jQuery.merge(this.constructor(),elems);// Add the old object onto the stack (as a reference)
ret.prevObject=this;// Return the newly-formed element set
return ret;},// Execute a callback for every element in the matched set.
each:function each(callback){return jQuery.each(this,callback);},map:function map(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function slice(){return this.pushStack(_slice.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function end(){return this.prevObject||this.constructor();},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;// Handle a deep copy situation
if(typeof target==="boolean"){deep=target;// Skip the boolean and the target
target=arguments[i]||{};i++;}// Handle case when target is a string or something (possible in deep copy)
if((typeof target==="undefined"?"undefined":_typeof2(target))!=="object"&&!jQuery.isFunction(target)){target={};}// Extend jQuery itself if only one argument is passed
if(i===length){target=this;i--;}for(;i<length;i++){// Only deal with non-null/undefined values
if((options=arguments[i])!=null){// Extend the base object
for(name in options){src=target[name];copy=options[name];// Prevent never-ending loop
if(target===copy){continue;}// Recurse if we're merging plain objects or arrays
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=Array.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&Array.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}// Never move original objects, clone them
target[name]=jQuery.extend(deep,clone,copy);// Don't bring in undefined values
}else if(copy!==undefined){target[name]=copy;}}}}// Return the modified object
return target;};jQuery.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:true,error:function error(msg){throw new Error(msg);},noop:function noop(){},isFunction:function isFunction(obj){return jQuery.type(obj)==="function";},isWindow:function isWindow(obj){return obj!=null&&obj===obj.window;},isNumeric:function isNumeric(obj){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var type=jQuery.type(obj);return(type==="number"||type==="string")&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(obj-parseFloat(obj));},isPlainObject:function isPlainObject(obj){var proto,Ctor;// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
if(!obj||toString.call(obj)!=="[object Object]"){return false;}proto=getProto(obj);// Objects with no prototype (e.g., `Object.create( null )`) are plain
if(!proto){return true;}// Objects with prototype are plain iff they were constructed by a global Object function
Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;},isEmptyObject:function isEmptyObject(obj){/* eslint-disable no-unused-vars */// See https://github.com/eslint/eslint/issues/6125
var name;for(name in obj){return false;}return true;},type:function type(obj){if(obj==null){return obj+"";}// Support: Android <=2.3 only (functionish RegExp)
return(typeof obj==="undefined"?"undefined":_typeof2(obj))==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj==="undefined"?"undefined":_typeof2(obj);},// Evaluates a script in a global context
globalEval:function globalEval(code){DOMEval(code);},// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 13
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},each:function each(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}return obj;},// Support: Android <=4.0 only
trim:function trim(text){return text==null?"":(text+"").replace(rtrim,"");},// results is for internal usage only
makeArray:function makeArray(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}return ret;},inArray:function inArray(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function merge(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}first.length=i;return first;},grep:function grep(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;// Go through the array, only saving the items
// that pass the validator function
for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}return matches;},// arg is for internal usage only
map:function map(elems,callback,arg){var length,value,i=0,ret=[];// Go through the array, translating each of the items to their new values
if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}// Go through every key on the object,
}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}// Flatten any nested arrays
return concat.apply([],ret);},// A global GUID counter for objects
guid:1,// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function proxy(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if(!jQuery.isFunction(fn)){return undefined;}// Simulated bind
args=_slice.call(arguments,2);proxy=function proxy(){return fn.apply(context||this,args.concat(_slice.call(arguments)));};// Set the guid of unique handler to the same of original handler, so it can be removed
proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:Date.now,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var length=!!obj&&"length"in obj&&obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}return type==="array"||length===0||typeof length==="number"&&length>0&&length-1 in obj;}var Sizzle=/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,// Local document vars
setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,// Instance-specific data
expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function sortOrder(a,b){if(a===b){hasDuplicate=true;}return 0;},// Instance methods
hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
indexOf=function indexOf(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
whitespace="[\\x20\\t\\r\\n\\f]",// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
identifier="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+// Operator (capture 2)
"*([*^$|!~]?=)"+whitespace+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
// 1. quoted (capture 3; capture 4 or capture 5)
"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+// 2. simple (capture 6)
"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+// 3. anything else (capture 2)
".*"+")\\)|)",// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,// Easily-parseable/retrievable ID or TAG or CLASS selectors
rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function funescape(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
return high!==high||escapedWhitespace?escaped:high<0?// BMP codepoint
String.fromCharCode(high+0x10000):// Supplemental Plane codepoint (surrogate pair)
String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,fcssescape=function fcssescape(ch,asCodePoint){if(asCodePoint){// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
if(ch==="\0"){return"\uFFFD";}// Control characters and (dependent upon position) numbers get escaped as code points
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";}// Other potentially-special ASCII characters get backslash-escaped
return"\\"+ch;},// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
unloadHandler=function unloadHandler(){setDocument();},disabledAncestor=addCombinator(function(elem){return elem.disabled===true&&("form"in elem||"label"in elem);},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes);// Support: Android<4.0
// Detect silently failing push.apply
arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?// Leverage slice if possible
function(target,els){push_native.apply(target,slice.call(els));}:// Support: IE<9
// Otherwise append directly
function(target,els){var j=target.length,i=0;// Can't trust NodeList.length
while(target[j++]=els[i++]){}target.length=j-1;}};}function Sizzle(selector,context,results,seed){var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,// nodeType defaults to 9, since context defaults to document
nodeType=context?context.nodeType:9;results=results||[];// Return early from calls with invalid selector or context
if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}context=context||document;if(documentIsHTML){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(nodeType!==11&&(match=rquickExpr.exec(selector))){// ID selector
if(m=match[1]){// Document context
if(nodeType===9){if(elem=context.getElementById(m)){// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(elem.id===m){results.push(elem);return results;}}else{return results;}// Element context
}else{// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}// Type selector
}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;// Class selector
}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}// Take advantage of querySelectorAll
if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector;// qSA looks outside Element context, which is not what we want
// Thanks to Andrew Dupont for this workaround technique
// Support: IE <=8
// Exclude object elements
}else if(context.nodeName.toLowerCase()!=="object"){// Capture the context ID, setting it first if necessary
if(nid=context.getAttribute("id")){nid=nid.replace(rcssescape,fcssescape);}else{context.setAttribute("id",nid=expando);}// Prefix every selector in the list
groups=tokenize(selector);i=groups.length;while(i--){groups[i]="#"+nid+" "+toSelector(groups[i]);}newSelector=groups.join(",");// Expand context for sibling selectors
newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(nid===expando){context.removeAttribute("id");}}}}}}// All others
return select(selector.replace(rtrim,"$1"),context,results,seed);}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function createCache(){var keys=[];function cache(key,value){// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
if(keys.push(key+" ")>Expr.cacheLength){// Only keep the most recent entries
delete cache[keys.shift()];}return cache[key+" "]=value;}return cache;}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */function markFunction(fn){fn[expando]=true;return fn;}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function assert(fn){var el=document.createElement("fieldset");try{return!!fn(el);}catch(e){return false;}finally{// Remove from its parent by default
if(el.parentNode){el.parentNode.removeChild(el);}// release memory in IE
el=null;}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&a.sourceIndex-b.sourceIndex;// Use IE sourceIndex if available on both nodes
if(diff){return diff;}// Check if b follows a
if(cur){while(cur=cur.nextSibling){if(cur===b){return-1;}}}return a?1:-1;}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function createDisabledPseudo(disabled){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(elem){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
if("form"in elem){// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
if(elem.parentNode&&elem.disabled===false){// Option elements defer to a parent optgroup if present
if("label"in elem){if("label"in elem.parentNode){return elem.parentNode.disabled===disabled;}else{return elem.disabled===disabled;}}// Support: IE 6 - 11
// Use the isDisabled shortcut property to check for disabled fieldset ancestors
return elem.isDisabled===disabled||// Where there is no isDisabled, check manually
/* jshint -W018 */elem.isDisabled!==!disabled&&disabledAncestor(elem)===disabled;}return elem.disabled===disabled;// Try to winnow out elements that can't be disabled before trusting the disabled property.
// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
// even exist on them, let alone have a boolean value.
}else if("label"in elem){return elem.disabled===disabled;}// Remaining elements are neither :enabled nor :disabled
return false;};}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;// Match elements found at the specified indexes
while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j]);}}});});}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}// Expose support vars for convenience
support=Sizzle.support={};/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */isXML=Sizzle.isXML=function(elem){// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */setDocument=Sizzle.setDocument=function(node){var hasCompare,subWindow,doc=node?node.ownerDocument||node:preferredDoc;// Return early if doc is invalid or already selected
if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}// Update global variables
document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
if(preferredDoc!==document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow){// Support: IE 11, Edge
if(subWindow.addEventListener){subWindow.addEventListener("unload",unloadHandler,false);// Support: IE 9 - 10 only
}else if(subWindow.attachEvent){subWindow.attachEvent("onunload",unloadHandler);}}/* Attributes
	---------------------------------------------------------------------- */// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
support.attributes=assert(function(el){el.className="i";return!el.getAttribute("className");});/* getElement(s)By*
	---------------------------------------------------------------------- */// Check if getElementsByTagName("*") returns only elements
support.getElementsByTagName=assert(function(el){el.appendChild(document.createComment(""));return!el.getElementsByTagName("*").length;});// Support: IE<9
support.getElementsByClassName=rnative.test(document.getElementsByClassName);// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
support.getById=assert(function(el){docElem.appendChild(el).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});// ID filter and find
if(support.getById){Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var elem=context.getElementById(id);return elem?[elem]:[];}};}else{Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var node,i,elems,elem=context.getElementById(id);if(elem){// Verify the id attribute
node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}// Fall back on getElementsByName
elems=context.getElementsByName(id);i=0;while(elem=elems[i++]){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}}}return[];}};}// Tag
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);// DocumentFragment nodes don't have gEBTN
}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
results=context.getElementsByTagName(tag);// Filter out possible comments
if(tag==="*"){while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem);}}return tmp;}return results;};// Class
Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
rbuggyMatches=[];// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
rbuggyQSA=[];if(support.qsa=rnative.test(document.querySelectorAll)){// Build QSA regex
// Regex strategy adopted from Diego Perini
assert(function(el){// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
docElem.appendChild(el).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
if(el.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}// Support: IE8
// Boolean attributes and "value" are not treated correctly
if(!el.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
if(!el.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
if(!el.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
if(!el.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(el){el.innerHTML="<a href='' disabled='disabled'></a>"+"<select disabled='disabled'><option/></select>";// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var input=document.createElement("input");input.setAttribute("type","hidden");el.appendChild(input).setAttribute("name","D");// Support: IE8
// Enforce case-sensitivity of name attribute
if(el.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
if(el.querySelectorAll(":enabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
docElem.appendChild(el).disabled=true;if(el.querySelectorAll(":disabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Opera 10-11 does not throw on post-comma invalid pseudos
el.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector=rnative.test(matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){assert(function(el){// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
support.disconnectedMatch=matches.call(el,"*");// This should fail with an exception
// Gecko does not error, returns false instead
matches.call(el,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));/* Contains
	---------------------------------------------------------------------- */hasCompare=rnative.test(docElem.compareDocumentPosition);// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true;}}}return false;};/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
sortOrder=hasCompare?function(a,b){// Flag for duplicate removal
if(a===b){hasDuplicate=true;return 0;}// Sort on method existence if only one input has compareDocumentPosition
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}// Calculate position if both inputs belong to the same document
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):// Otherwise we know they are disconnected
1;// Disconnected nodes
if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){// Choose the first element that is related to our preferred document
if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}// Maintain original order
return sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;}return compare&4?-1:1;}:function(a,b){// Exit early if the nodes are identical
if(a===b){hasDuplicate=true;return 0;}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];// Parentless nodes are either documents or disconnected
if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;// If the nodes are siblings, we can do a quick check
}else if(aup===bup){return siblingCheck(a,b);}// Otherwise we need full lists of their ancestors for comparison
cur=a;while(cur=cur.parentNode){ap.unshift(cur);}cur=b;while(cur=cur.parentNode){bp.unshift(cur);}// Walk down the tree looking for a discrepancy
while(ap[i]===bp[i]){i++;}return i?// Do a sibling check if the nodes have a common ancestor
siblingCheck(ap[i],bp[i]):// Otherwise nodes in our document sort first
ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){// Set document vars if needed
if((elem.ownerDocument||elem)!==document){setDocument(elem);}// Make sure that attribute selectors are quoted
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);// IE 9's matchesSelector returns false on disconnected nodes
if(ret||support.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){// Set document vars if needed
if((context.ownerDocument||context)!==document){setDocument(context);}return contains(context,elem);};Sizzle.attr=function(elem,name){// Set document vars if needed
if((elem.ownerDocument||elem)!==document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()],// Don't get fooled by Object.prototype properties (jQuery #13807)
val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.escape=function(sel){return(sel+"").replace(rcssescape,fcssescape);};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;// Unless we *know* we can detect duplicates, assume their presence
hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=duplicates.push(i);}}while(j--){results.splice(duplicates[j],1);}}// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
sortInput=null;return results;};/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){// If no nodeType, this is expected to be an array
while(node=elem[i++]){// Do not traverse comment nodes
ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if(typeof elem.textContent==="string"){return elem.textContent;}else{// Traverse its children
for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}// Do not include comment or processing instruction nodes
return ret;};Expr=Sizzle.selectors={// Can be adjusted by the user
cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function ATTR(match){match[1]=match[1].replace(runescape,funescape);// Move the given value to match[3] whether quoted or unquoted
match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}return match.slice(0,4);},"CHILD":function CHILD(match){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){// nth-* requires argument
if(!match[3]){Sizzle.error(match[0]);}// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd");// other types prohibit arguments
}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function PSEUDO(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}// Accept quoted arguments as-is
if(match[3]){match[2]=match[4]||match[5]||"";// Strip excess characters from unquoted arguments
}else if(unquoted&&rpseudo.test(unquoted)&&(// Get excess from tokenize (recursively)
excess=tokenize(unquoted,true))&&(// advance to the next closing parenthesis
excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){// excess is a negative index
match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}// Return only captures needed by the pseudo filter method (type and argument)
return match.slice(0,3);}},filter:{"TAG":function TAG(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function CLASS(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function ATTR(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}if(!operator){return true;}result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function CHILD(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?// Shortcut for :nth-*(n)
function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){// :(first|last|only)-(child|of-type)
if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}// Reverse direction for :only-* (if we haven't yet done so)
start=dir=type==="only"&&!start&&"nextSibling";}return true;}start=[forward?parent.firstChild:parent.lastChild];// non-xml :nth-child(...) stores cache data on `parent`
if(forward&&useCache){// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
node=parent;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||(// Fallback to seeking `elem` from the start
diff=nodeIndex=0)||start.pop()){// When found, cache indexes on `parent` and break
if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{// Use previously-cached element index if available
if(useCache){// ...in a gzip-friendly way
node=elem;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(diff===false){// Use the same loop as above to seek `elem` from the start
while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){// Cache the index of each encountered element
if(useCache){outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}if(node===elem){break;}}}}}// Incorporate the offset, then check against cycle size
diff-=last;return diff===first||diff%first===0&&diff/first>=0;}};},"PSEUDO":function PSEUDO(pseudo,argument){// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
if(fn[expando]){return fn(argument);}// But maintain support for old signatures
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{// Potentially complex pseudos
"not":markFunction(function(selector){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;// Match elements unmatched by `matcher`
while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);// Don't keep the element (issue #299)
input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
"lang":markFunction(function(lang){// lang value must be a valid identifier
if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),// Miscellaneous
"target":function target(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function root(elem){return elem===docElem;},"focus":function focus(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},// Boolean properties
"enabled":createDisabledPseudo(false),"disabled":createDisabledPseudo(true),"checked":function checked(elem){// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected;},"selected":function selected(elem){// Accessing this property makes selected-by-default
// options in Safari work properly
if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected===true;},// Contents
"empty":function empty(elem){// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}return true;},"parent":function parent(elem){return!Expr.pseudos["empty"](elem);},// Element/input types
"header":function header(elem){return rheader.test(elem.nodeName);},"input":function input(elem){return rinputs.test(elem.nodeName);},"button":function button(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function text(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&(// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
(attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},// Position-in-collection
"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];// Add button/input type pseudos
for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}// Easy API for creating new setFilters
function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){// Comma and first run
if(!matched||(match=rcomma.exec(soFar))){if(match){// Don't consume trailing commas as valid
soFar=soFar.slice(match[0].length)||soFar;}groups.push(tokens=[]);}matched=false;// Combinators
if(match=rcombinators.exec(soFar)){matched=match.shift();tokens.push({value:matched,// Cast descendant combinators to space
type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}// Filters
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}if(!matched){break;}}// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return parseOnly?soFar.length:soFar?Sizzle.error(selector):// Cache the tokens
tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&key==="parentNode",doneName=done++;return combinator.first?// Check against closest ancestor/preceding element
function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}return false;}:// Check against all ancestor/preceding elements
function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if(skip&&skip===elem.nodeName.toLowerCase()){elem=elem[dir]||elem;}else if((oldCache=uniqueCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName){// Assign to newCache so results back-propagate to previous elements
return newCache[2]=oldCache[2];}else{// Reuse newcache so results back-propagate to previous elements
uniqueCache[key]=newCache;// A match means we're done; a fail means we have to keep checking
if(newCache[2]=matcher(elem,context,xml)){return true;}}}}}return false;};}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,// Get initial elements from seed or context
elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),// Prefilter to get matcher input, preserving a map for seed-results synchronization
matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
postFinder||(seed?preFilter:preexisting||postFilter)?// ...intermediate processing is necessary
[]:// ...otherwise use results directly
results:matcherIn;// Find primary matches
if(matcher){matcher(matcherIn,matcherOut,context,xml);}// Apply postFilter
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);// Un-match failing elements by moving them back to matcherIn
i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}if(seed){if(postFinder||preFilter){if(postFinder){// Get the final matcherOut by condensing this intermediate into postFinder contexts
temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){// Restore matcherIn since elem is not yet a final match
temp.push(matcherIn[i]=elem);}}postFinder(null,matcherOut=[],temp,xml);}// Move matched elements from seed to results to keep them synchronized
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}// Add elements to results, through postFinder if defined
}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,// The foundational matcher ensures that elements are reachable from top-level context(s)
matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));// Avoid hanging onto element (issue #299)
checkContext=null;return ret;}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);// Return special upon seeing a positional matcher
if(matcher[expando]){// Find the next relative operator (if any) for proper handling
j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function superMatcher(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,// We must always have either seed elements or outermost context
elems=seed||byElement&&Expr.find["TAG"]("*",outermost),// Use integer dirruns iff this is the outermost matcher
dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||0.1,len=elems.length;if(outermost){outermostContext=context===document||context||outermost;}// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}while(matcher=elementMatchers[j++]){if(matcher(elem,context||document,xml)){results.push(elem);break;}}if(outermost){dirruns=dirrunsUnique;}}// Track unmatched elements for set filters
if(bySet){// They will have gone through all possible matchers
if(elem=!matcher&&elem){matchedCount--;}// Lengthen the array for every element, matched or not
if(seed){unmatched.push(elem);}}}// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
matchedCount+=i;// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml);}if(seed){// Reintegrate element matches to eliminate the need for sorting
if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}// Discard index placeholder values to get only actual matches
setMatched=condense(setMatched);}// Add matches to results
push.apply(results,setMatched);// Seedless set matches succeeding multiple successful matchers stipulate sorting
if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results);}}// Override manipulation of globals by nested matchers
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile=Sizzle.compile=function(selector,match/* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){// Generate a function of recursive functions that can be used to check each element
if(!match){match=tokenize(selector);}i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}// Cache the compiled function
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));// Save selector and tokenization
cached.selector=selector;}return cached;};/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);results=results||[];// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(match.length===1){// Reduce context if the leading compound selector is an ID
tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;// Precompiled matchers will still verify ancestry, so step up a level
}else if(compiled){context=context.parentNode;}selector=selector.slice(tokens.shift().value.length);}// Fetch a seed set for right-to-left matching
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];// Abort if we hit a combinator
if(Expr.relative[type=token.type]){break;}if(find=Expr.find[type]){// Search, expanding context for leading sibling combinators
if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context)){// If seed is empty or no tokens remain, we can return early
tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}}// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};// One-time assignments
// Sort stability
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates=!!hasDuplicate;// Initialize against the default document
setDocument();// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached=assert(function(el){// Should return 1, but returns 4 (following)
return el.compareDocumentPosition(document.createElement("fieldset"))&1;});// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if(!assert(function(el){el.innerHTML="<a href='#'></a>";return el.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if(!support.attributes||!assert(function(el){el.innerHTML="<input/>";el.firstChild.setAttribute("value","");return el.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if(!assert(function(el){return el.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}return Sizzle;}(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;// Deprecated
jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;jQuery.escapeSelector=Sizzle.escape;var dir=function dir(elem,_dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[_dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}matched.push(elem);}}return matched;};var _siblings=function _siblings(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}return matched;};var rneedsContext=jQuery.expr.match.needsContext;function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();};var rsingleTag=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;var risSimple=/^.[^:#\[\.,]*$/;// Implement the identical functionality for filter and not
function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}// Single element
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier!==not;});}// Arraylike of elements (jQuery, arguments, Array)
if(typeof qualifier!=="string"){return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not;});}// Simple selector that can be filtered directly, removing non-Elements
if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}// Complex selector, compare the two sets, removing non-Elements
qualifier=jQuery.filter(qualifier,elements);return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not&&elem.nodeType===1;});}jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}if(elems.length===1&&elem.nodeType===1){return jQuery.find.matchesSelector(elem,expr)?[elem]:[];}return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function find(selector){var i,ret,len=this.length,self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}ret=this.pushStack([]);for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}return len>1?jQuery.uniqueSort(ret):ret;},filter:function filter(selector){return this.pushStack(winnow(this,selector||[],false));},not:function not(selector){return this.pushStack(winnow(this,selector||[],true));},is:function is(selector){return!!winnow(this,// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var rootjQuery,// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!selector){return this;}// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
root=root||rootjQuery;// Handle HTML strings
if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){// Assume that strings that start and end with <> are HTML and skip the regex check
match=[null,selector,null];}else{match=rquickExpr.exec(selector);}// Match html or make sure no context is specified for #id
if(match&&(match[1]||!context)){// HANDLE: $(html) -> $(array)
if(match[1]){context=context instanceof jQuery?context[0]:context;// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));// HANDLE: $(html, props)
if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){// Properties of context are called as methods if possible
if(jQuery.isFunction(this[match])){this[match](context[match]);// ...and otherwise set as attributes
}else{this.attr(match,context[match]);}}}return this;// HANDLE: $(#id)
}else{elem=document.getElementById(match[2]);if(elem){// Inject the element directly into the jQuery object
this[0]=elem;this.length=1;}return this;}// HANDLE: $(expr, $(...))
}else if(!context||context.jquery){return(context||root).find(selector);// HANDLE: $(expr, context)
// (which is just equivalent to: $(context).find(expr)
}else{return this.constructor(context).find(selector);}// HANDLE: $(DOMElement)
}else if(selector.nodeType){this[0]=selector;this.length=1;return this;// HANDLE: $(function)
// Shortcut for document ready
}else if(jQuery.isFunction(selector)){return root.ready!==undefined?root.ready(selector):// Execute immediately if ready is not present
selector(jQuery);}return jQuery.makeArray(selector,this);};// Give the init function the jQuery prototype for later instantiation
init.prototype=jQuery.fn;// Initialize central reference
rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,// Methods guaranteed to produce a unique set when starting from a unique set
guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function has(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function closest(selectors,context){var cur,i=0,l=this.length,matched=[],targets=typeof selectors!=="string"&&jQuery(selectors);// Positional selectors never match, since there's no _selection_ context
if(!rneedsContext.test(selectors)){for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){// Always skip document fragments
if(cur.nodeType<11&&(targets?targets.index(cur)>-1:// Don't pass non-elements to Sizzle
cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},// Determine the position of an element within the set
index:function index(elem){// No argument, return index in parent
if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1;}// Index in selector
if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}// Locate the position of the desired element
return indexOf.call(this,// If it receives a jQuery object, the first element is used
elem.jquery?elem[0]:elem);},add:function add(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function addBack(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function parents(elem){return dir(elem,"parentNode");},parentsUntil:function parentsUntil(elem,i,until){return dir(elem,"parentNode",until);},next:function next(elem){return sibling(elem,"nextSibling");},prev:function prev(elem){return sibling(elem,"previousSibling");},nextAll:function nextAll(elem){return dir(elem,"nextSibling");},prevAll:function prevAll(elem){return dir(elem,"previousSibling");},nextUntil:function nextUntil(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function prevUntil(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function siblings(elem){return _siblings((elem.parentNode||{}).firstChild,elem);},children:function children(elem){return _siblings(elem.firstChild);},contents:function contents(elem){if(nodeName(elem,"iframe")){return elem.contentDocument;}// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
if(nodeName(elem,"template")){elem=elem.content||elem;}return jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}if(this.length>1){// Remove duplicates
if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}// Reverse order for parents* and prev-derivatives
if(rparentsprev.test(name)){matched.reverse();}}return this.pushStack(matched);};});var rnothtmlwhite=/[^\x20\t\r\n\f]+/g;// Convert String-formatted options into Object-formatted ones
function createOptions(options){var object={};jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){object[flag]=true;});return object;}/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */jQuery.Callbacks=function(options){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var// Flag to know if list is currently firing
firing,// Last fire value for non-forgettable lists
memory,// Flag to know if list was already fired
_fired,// Flag to prevent firing
_locked,// Actual callback list
list=[],// Queue of execution data for repeatable lists
queue=[],// Index of currently firing callback (modified by add/remove as needed)
firingIndex=-1,// Fire callbacks
fire=function fire(){// Enforce single-firing
_locked=_locked||options.once;// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
_fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){// Run callback and check for early termination
if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){// Jump to end and forget the data so .add doesn't re-fire
firingIndex=list.length;memory=false;}}}// Forget the data if we're done with it
if(!options.memory){memory=false;}firing=false;// Clean up if we're done firing for good
if(_locked){// Keep an empty list if we have data for future add calls
if(memory){list=[];// Otherwise, this object is spent
}else{list="";}}},// Actual Callbacks object
self={// Add a callback or a collection of callbacks to the list
add:function add(){if(list){// If we have memory from a past run, we should fire after adding
if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}(function add(args){jQuery.each(args,function(_,arg){if(jQuery.isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){// Inspect recursively
add(arg);}});})(arguments);if(memory&&!firing){fire();}}return this;},// Remove a callback from the list
remove:function remove(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);// Handle firing indexes
if(index<=firingIndex){firingIndex--;}}});return this;},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function has(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},// Remove all callbacks from the list
empty:function empty(){if(list){list=[];}return this;},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function disable(){_locked=queue=[];list=memory="";return this;},disabled:function disabled(){return!list;},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function lock(){_locked=queue=[];if(!memory&&!firing){list=memory="";}return this;},locked:function locked(){return!!_locked;},// Call all callbacks with the given context and arguments
fireWith:function fireWith(context,args){if(!_locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}return this;},// Call all the callbacks with the given arguments
fire:function fire(){self.fireWith(this,arguments);return this;},// To know if the callbacks have already been called at least once
fired:function fired(){return!!_fired;}};return self;};function Identity(v){return v;}function Thrower(ex){throw ex;}function adoptValue(value,resolve,reject,noValue){var method;try{// Check for promise aspect first to privilege synchronous behavior
if(value&&jQuery.isFunction(method=value.promise)){method.call(value).done(resolve).fail(reject);// Other thenables
}else if(value&&jQuery.isFunction(method=value.then)){method.call(value,resolve,reject);// Other non-thenables
}else{// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
resolve.apply(undefined,[value].slice(noValue));}// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(value){// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
reject.apply(undefined,[value]);}}jQuery.extend({Deferred:function Deferred(func){var tuples=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory"),2],["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),0,"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),1,"rejected"]],_state="pending",_promise={state:function state(){return _state;},always:function always(){deferred.done(arguments).fail(arguments);return this;},"catch":function _catch(fn){return _promise.then(null,fn);},// Keep pipe for back-compat
pipe:function pipe()/* fnDone, fnFail, fnProgress */{var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var fn=jQuery.isFunction(fns[tuple[4]])&&fns[tuple[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this,fn?[returned]:arguments);}});});fns=null;}).promise();},then:function then(onFulfilled,onRejected,onProgress){var maxDepth=0;function resolve(depth,deferred,handler,special){return function(){var that=this,args=arguments,mightThrow=function mightThrow(){var returned,then;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(depth<maxDepth){return;}returned=handler.apply(that,args);// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if(returned===deferred.promise()){throw new TypeError("Thenable self-resolution");}// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
then=returned&&(// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
(typeof returned==="undefined"?"undefined":_typeof2(returned))==="object"||typeof returned==="function")&&returned.then;// Handle a returned thenable
if(jQuery.isFunction(then)){// Special processors (notify) just wait for resolution
if(special){then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special));// Normal processors (resolve) also hook into progress
}else{// ...and disregard older resolution values
maxDepth++;then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith));}// Handle all other returned values
}else{// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
if(handler!==Identity){that=undefined;args=[returned];}// Process the value(s)
// Default process is resolve
(special||deferred.resolveWith)(that,args);}},// Only normal processors (resolve) catch and reject exceptions
process=special?mightThrow:function(){try{mightThrow();}catch(e){if(jQuery.Deferred.exceptionHook){jQuery.Deferred.exceptionHook(e,process.stackTrace);}// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
if(depth+1>=maxDepth){// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
if(handler!==Thrower){that=undefined;args=[e];}deferred.rejectWith(that,args);}}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
if(depth){process();}else{// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
if(jQuery.Deferred.getStackHook){process.stackTrace=jQuery.Deferred.getStackHook();}window.setTimeout(process);}};}return jQuery.Deferred(function(newDefer){// progress_handlers.add( ... )
tuples[0][3].add(resolve(0,newDefer,jQuery.isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith));// fulfilled_handlers.add( ... )
tuples[1][3].add(resolve(0,newDefer,jQuery.isFunction(onFulfilled)?onFulfilled:Identity));// rejected_handlers.add( ... )
tuples[2][3].add(resolve(0,newDefer,jQuery.isFunction(onRejected)?onRejected:Thrower));}).promise();},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function promise(obj){return obj!=null?jQuery.extend(obj,_promise):_promise;}},deferred={};// Add list-specific methods
jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
_promise[tuple[1]]=list.add;// Handle state
if(stateString){list.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
_state=stateString;},// rejected_callbacks.disable
// fulfilled_callbacks.disable
tuples[3-i][2].disable,// progress_callbacks.lock
tuples[0][2].lock);}// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
list.add(tuple[3].fire);// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);return this;};// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
deferred[tuple[0]+"With"]=list.fireWith;});// Make the deferred a promise
_promise.promise(deferred);// Call given func if any
if(func){func.call(deferred,deferred);}// All done!
return deferred;},// Deferred helper
when:function when(singleValue){var// count of uncompleted subordinates
remaining=arguments.length,// count of unprocessed arguments
i=remaining,// subordinate fulfillment data
resolveContexts=Array(i),resolveValues=_slice.call(arguments),// the master Deferred
master=jQuery.Deferred(),// subordinate callback factory
updateFunc=function updateFunc(i){return function(value){resolveContexts[i]=this;resolveValues[i]=arguments.length>1?_slice.call(arguments):value;if(! --remaining){master.resolveWith(resolveContexts,resolveValues);}};};// Single- and empty arguments are adopted like Promise.resolve
if(remaining<=1){adoptValue(singleValue,master.done(updateFunc(i)).resolve,master.reject,!remaining);// Use .then() to unwrap secondary thenables (cf. gh-3000)
if(master.state()==="pending"||jQuery.isFunction(resolveValues[i]&&resolveValues[i].then)){return master.then();}}// Multiple arguments are aggregated like Promise.all array elements
while(i--){adoptValue(resolveValues[i],updateFunc(i),master.reject);}return master.promise();}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;jQuery.Deferred.exceptionHook=function(error,stack){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,stack);}};jQuery.readyException=function(error){window.setTimeout(function(){throw error;});};// The deferred used on DOM ready
var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(error){jQuery.readyException(error);});return this;};jQuery.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:false,// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,// Handle when the DOM is ready
ready:function ready(wait){// Abort if there are pending holds or we're already ready
if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}// Remember that the DOM is ready
jQuery.isReady=true;// If a normal DOM Ready event fired, decrement, and wait if need be
if(wait!==true&&--jQuery.readyWait>0){return;}// If there are functions bound, to execute
readyList.resolveWith(document,[jQuery]);}});jQuery.ready.then=readyList.then;// The ready event handler and self cleanup method
function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){// Handle it asynchronously to allow scripts the opportunity to delay ready
window.setTimeout(jQuery.ready);}else{// Use the handy event callback
document.addEventListener("DOMContentLoaded",completed);// A fallback to window.onload, that will always work
window.addEventListener("load",completed);}// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access=function access(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;// Sets many values
if(jQuery.type(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}// Sets one value
}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}if(bulk){// Bulk operations run against the entire set
if(raw){fn.call(elems,value);fn=null;// ...except when executing function values
}else{bulk=fn;fn=function fn(elem,key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}if(chainable){return elems;}// Gets
if(bulk){return fn.call(elems);}return len?fn(elems[0],key):emptyGet;};var acceptData=function acceptData(owner){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return owner.nodeType===1||owner.nodeType===9||!+owner.nodeType;};function Data(){this.expando=jQuery.expando+Data.uid++;}Data.uid=1;Data.prototype={cache:function cache(owner){// Check if the owner object already has a cache
var value=owner[this.expando];// If not, create one
if(!value){value={};// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
if(acceptData(owner)){// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
if(owner.nodeType){owner[this.expando]=value;// Otherwise secure it in a non-enumerable property
// configurable must be true to allow the property to be
// deleted when data is removed
}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}return value;},set:function set(owner,data,value){var prop,cache=this.cache(owner);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if(typeof data==="string"){cache[jQuery.camelCase(data)]=value;// Handle: [ owner, { properties } ] args
}else{// Copy the properties one-by-one to the cache object
for(prop in data){cache[jQuery.camelCase(prop)]=data[prop];}}return cache;},get:function get(owner,key){return key===undefined?this.cache(owner):// Always use camelCase key (gh-2257)
owner[this.expando]&&owner[this.expando][jQuery.camelCase(key)];},access:function access(owner,key,value){// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
if(key===undefined||key&&typeof key==="string"&&value===undefined){return this.get(owner,key);}// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(owner,key,value);// Since the "set" path can have two possible entry points
// return the expected data based on which path was taken[*]
return value!==undefined?value:key;},remove:function remove(owner,key){var i,cache=owner[this.expando];if(cache===undefined){return;}if(key!==undefined){// Support array or space separated string of keys
if(Array.isArray(key)){// If key is an array of keys...
// We always set camelCase keys, so remove that.
key=key.map(jQuery.camelCase);}else{key=jQuery.camelCase(key);// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
key=key in cache?[key]:key.match(rnothtmlwhite)||[];}i=key.length;while(i--){delete cache[key[i]];}}// Remove the expando if there's no more data
if(key===undefined||jQuery.isEmptyObject(cache)){// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function hasData(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function getData(data){if(data==="true"){return true;}if(data==="false"){return false;}if(data==="null"){return null;}// Only convert to a number if it doesn't change the string
if(data===+data+""){return+data;}if(rbrace.test(data)){return JSON.parse(data);}return data;}function dataAttr(elem,key,data){var name;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=getData(data);}catch(e){}// Make sure we set the data so it isn't changed later
dataUser.set(elem,key,data);}else{data=undefined;}}return data;}jQuery.extend({hasData:function hasData(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function data(elem,name,_data){return dataUser.access(elem,name,_data);},removeData:function removeData(elem,name){dataUser.remove(elem,name);},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function _data(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function _removeData(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function data(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;// Gets all values
if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){// Support: IE 11 only
// The attrs elements can be null (#14894)
if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}dataPriv.set(elem,"hasDataAttrs",true);}}return data;}// Sets multiple values
if((typeof key==="undefined"?"undefined":_typeof2(key))==="object"){return this.each(function(){dataUser.set(this,key);});}return access(this,function(value){var data;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(elem&&value===undefined){// Attempt to get data from the cache
// The key will always be camelCased in Data
data=dataUser.get(elem,key);if(data!==undefined){return data;}// Attempt to "discover" the data in
// HTML5 custom data-* attrs
data=dataAttr(elem,key);if(data!==undefined){return data;}// We tried really hard, but the data doesn't exist.
return;}// Set the data...
this.each(function(){// We always store the camelCased key
dataUser.set(this,key,value);});},null,value,arguments.length>1,null,true);},removeData:function removeData(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function queue(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);// Speed up dequeue by getting out quickly if this is just a lookup
if(data){if(!queue||Array.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}return queue||[];}},dequeue:function dequeue(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function next(){jQuery.dequeue(elem,type);};// If the fx queue is dequeued, always remove the progress sentinel
if(fn==="inprogress"){fn=queue.shift();startLength--;}if(fn){// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
if(type==="fx"){queue.unshift("inprogress");}// Clear up the last queue stop function
delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength&&hooks){hooks.empty.fire();}},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function _queueHooks(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function queue(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}if(arguments.length<setter){return jQuery.queue(this[0],type);}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);// Ensure a hooks for this queue
jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function clearQueue(type){return this.queue(type||"fx",[]);},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function promise(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function resolve(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHiddenWithinTree=function isHiddenWithinTree(elem,el){// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
elem=el||elem;// Inline style trumps all
return elem.style.display==="none"||elem.style.display===""&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
jQuery.contains(elem.ownerDocument,elem)&&jQuery.css(elem,"display")==="none";};var swap=function swap(elem,options,callback,args){var ret,name,old={};// Remember the old values, and insert the new ones
for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}ret=callback.apply(elem,args||[]);// Revert the old values
for(name in options){elem.style[name]=old[name];}return ret;};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),// Starting value computation is required for potential unit mismatches
initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){// Trust units reported by jQuery.css
unit=unit||initialInUnit[3];// Make sure we update the tween properties later on
valueParts=valueParts||[];// Iteratively approximate from a nonzero starting point
initialInUnit=+initial||1;do{// If previous iteration zeroed out, double until we get *something*.
// Use string for doubling so we don't accidentally see scale as unchanged below
scale=scale||".5";// Adjust and apply
initialInUnit=initialInUnit/scale;jQuery.style(elem,prop,initialInUnit+unit);// Update scale, tolerating zero or NaN from tween.cur()
// Break the loop if scale is unchanged or perfect, or if we've just had enough.
}while(scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations);}if(valueParts){initialInUnit=+initialInUnit||+initial||0;// Apply relative offset (+=/-=) if specified
adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}return adjusted;}var defaultDisplayMap={};function getDefaultDisplay(elem){var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];if(display){return display;}temp=doc.body.appendChild(doc.createElement(nodeName));display=jQuery.css(temp,"display");temp.parentNode.removeChild(temp);if(display==="none"){display="block";}defaultDisplayMap[nodeName]=display;return display;}function showHide(elements,show){var display,elem,values=[],index=0,length=elements.length;// Determine new display value for elements that need to change
for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}display=elem.style.display;if(show){// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
if(display==="none"){values[index]=dataPriv.get(elem,"display")||null;if(!values[index]){elem.style.display="";}}if(elem.style.display===""&&isHiddenWithinTree(elem)){values[index]=getDefaultDisplay(elem);}}else{if(display!=="none"){values[index]="none";// Remember what we're overwriting
dataPriv.set(elem,"display",display);}}}// Set the display of the elements in a second loop to avoid constant reflow
for(index=0;index<length;index++){if(values[index]!=null){elements[index].style.display=values[index];}}return elements;}jQuery.fn.extend({show:function show(){return showHide(this,true);},hide:function hide(){return showHide(this);},toggle:function toggle(state){if(typeof state==="boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHiddenWithinTree(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});var rcheckableType=/^(?:checkbox|radio)$/i;var rtagName=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i;var rscriptType=/^$|\/(?:java|ecma)script/i;// We have to close these tags to support XHTML (#13200)
var wrapMap={// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};// Support: IE <=9 only
wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var ret;if(typeof context.getElementsByTagName!=="undefined"){ret=context.getElementsByTagName(tag||"*");}else if(typeof context.querySelectorAll!=="undefined"){ret=context.querySelectorAll(tag||"*");}else{ret=[];}if(tag===undefined||tag&&nodeName(context,tag)){return jQuery.merge([context],ret);}return ret;}// Mark scripts as having already been evaluated
function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){// Add nodes directly
if(jQuery.type(elem)==="object"){// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(nodes,elem.nodeType?[elem]:elem);// Convert non-html into a text node
}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));// Convert html into DOM nodes
}else{tmp=tmp||fragment.appendChild(context.createElement("div"));// Deserialize a standard representation
tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];// Descend through wrappers to the right content
j=wrap[0];while(j--){tmp=tmp.lastChild;}// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(nodes,tmp.childNodes);// Remember the top-level container
tmp=fragment.firstChild;// Ensure the created nodes are orphaned (#12392)
tmp.textContent="";}}}// Remove wrapper from fragment
fragment.textContent="";i=0;while(elem=nodes[i++]){// Skip elements already in the context collection (trac-4087)
if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}continue;}contains=jQuery.contains(elem.ownerDocument,elem);// Append to fragment
tmp=getAll(fragment.appendChild(elem),"script");// Preserve script evaluation history
if(contains){setGlobalEval(tmp);}// Capture executables
if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}return fragment;}(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var documentElement=document.documentElement;var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}function returnFalse(){return false;}// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement(){try{return document.activeElement;}catch(err){}}function _on(elem,types,selector,data,fn,one){var origFn,type;// Types can be a map of types/handlers
if((typeof types==="undefined"?"undefined":_typeof2(types))==="object"){// ( types-Object, selector, data )
if(typeof selector!=="string"){// ( types-Object, data )
data=data||selector;selector=undefined;}for(type in types){_on(elem,type,selector,data,types[type],one);}return elem;}if(data==null&&fn==null){// ( types, fn )
fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){// ( types, selector, fn )
fn=data;data=undefined;}else{// ( types, data, fn )
fn=data;data=selector;selector=undefined;}}if(fn===false){fn=returnFalse;}else if(!fn){return elem;}if(one===1){origFn=fn;fn=function fn(event){// Can use an empty set, since event contains the info
jQuery().off(event);return origFn.apply(this,arguments);};// Use same guid so caller can remove using origFn
fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */jQuery.event={global:{},add:function add(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(!elemData){return;}// Caller can pass in an object of custom data in lieu of the handler
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
if(selector){jQuery.find.matchesSelector(documentElement,selector);}// Make sure that the handler has a unique ID, used to find/remove it later
if(!handler.guid){handler.guid=jQuery.guid++;}// Init the element's event structure and main handler, if this is the first
if(!(events=elemData.events)){events=elemData.events={};}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}// Handle multiple events separated by a space
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// There *must* be a type, no attaching namespace-only handlers
if(!type){continue;}// If event changes its type, use the special event handlers for the changed type
special=jQuery.event.special[type]||{};// If selector defined, determine special event api type, otherwise given type
type=(selector?special.delegateType:special.bindType)||type;// Update special based on newly reset type
special=jQuery.event.special[type]||{};// handleObj is passed to all event handlers
handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);// Init the event handler queue if we're the first
if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;// Only use addEventListener if the special events handler returns false
if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}// Add to the element's handler list, delegates in front
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}// Keep track of which events have ever been used, for event optimization
jQuery.event.global[type]=true;}},// Detach an event or set of events from an element
remove:function remove(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}// Once for each type.namespace in types; type may be omitted
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// Unbind all events (on this namespace, if provided) for the element
if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}continue;}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");// Remove matching events
origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}}// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}}// Remove data and the expando if it's no longer used
if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function dispatch(nativeEvent){// Make a writable jQuery.Event from the native event object
var event=jQuery.event.fix(nativeEvent);var i,j,ret,matched,handleObj,handlerQueue,args=new Array(arguments.length),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};// Use the fix-ed jQuery.Event rather than the (read-only) native event
args[0]=event;for(i=1;i<arguments.length;i++){args[i]=arguments[i];}event.delegateTarget=this;// Call the preDispatch hook for the mapped type, and let it bail if desired
if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}// Determine handlers
handlerQueue=jQuery.event.handlers.call(this,event,handlers);// Run delegates first; they may want to stop propagation beneath us
i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}// Call the postDispatch hook for the mapped type
if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function handlers(event,_handlers){var i,handleObj,sel,matchedHandlers,matchedSelectors,handlerQueue=[],delegateCount=_handlers.delegateCount,cur=event.target;// Find delegate handlers
if(delegateCount&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
cur.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!(event.type==="click"&&event.button>=1)){for(;cur!==this;cur=cur.parentNode||this){// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(cur.nodeType===1&&!(event.type==="click"&&cur.disabled===true)){matchedHandlers=[];matchedSelectors={};for(i=0;i<delegateCount;i++){handleObj=_handlers[i];// Don't conflict with Object.prototype properties (#13203)
sel=handleObj.selector+" ";if(matchedSelectors[sel]===undefined){matchedSelectors[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}if(matchedSelectors[sel]){matchedHandlers.push(handleObj);}}if(matchedHandlers.length){handlerQueue.push({elem:cur,handlers:matchedHandlers});}}}}// Add the remaining (directly-bound) handlers
cur=this;if(delegateCount<_handlers.length){handlerQueue.push({elem:cur,handlers:_handlers.slice(delegateCount)});}return handlerQueue;},addProp:function addProp(name,hook){Object.defineProperty(jQuery.Event.prototype,name,{enumerable:true,configurable:true,get:jQuery.isFunction(hook)?function(){if(this.originalEvent){return hook(this.originalEvent);}}:function(){if(this.originalEvent){return this.originalEvent[name];}},set:function set(value){Object.defineProperty(this,name,{enumerable:true,configurable:true,writable:true,value:value});}});},fix:function fix(originalEvent){return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent);},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:true},focus:{// Fire native event if possible so blur/focus sequence is correct
trigger:function trigger(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function trigger(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{// For checkbox, fire native event so checked state will be right
trigger:function trigger(){if(this.type==="checkbox"&&this.click&&nodeName(this,"input")){this.click();return false;}},// For cross-browser consistency, don't fire native .click() on links
_default:function _default(event){return nodeName(event.target,"a");}},beforeunload:{postDispatch:function postDispatch(event){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};jQuery.removeEvent=function(elem,type,handle){// This "if" is needed for plain objects
if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){// Allow instantiation without the 'new' keyword
if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}// Event object
if(src&&src.type){this.originalEvent=src;this.type=src.type;// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&// Support: Android <=2.3 only
src.returnValue===false?returnTrue:returnFalse;// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=src.target&&src.target.nodeType===3?src.target.parentNode:src.target;this.currentTarget=src.currentTarget;this.relatedTarget=src.relatedTarget;// Event type
}else{this.type=src;}// Put explicitly provided properties onto the event object
if(props){jQuery.extend(this,props);}// Create a timestamp if incoming event doesn't have one
this.timeStamp=src&&src.timeStamp||jQuery.now();// Mark it as fixed
this[jQuery.expando]=true;};// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}this.stopPropagation();}};// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each({altKey:true,bubbles:true,cancelable:true,changedTouches:true,ctrlKey:true,detail:true,eventPhase:true,metaKey:true,pageX:true,pageY:true,shiftKey:true,view:true,"char":true,charCode:true,key:true,keyCode:true,button:true,buttons:true,clientX:true,clientY:true,offsetX:true,offsetY:true,pointerId:true,pointerType:true,screenX:true,screenY:true,targetTouches:true,toElement:true,touches:true,which:function which(event){var button=event.button;// Add which for key events
if(event.which==null&&rkeyEvent.test(event.type)){return event.charCode!=null?event.charCode:event.keyCode;}// Add which for click: 1 === left; 2 === middle; 3 === right
if(!event.which&&button!==undefined&&rmouseEvent.test(event.type)){if(button&1){return 1;}if(button&2){return 3;}if(button&4){return 2;}return 0;}return event.which;}},jQuery.event.addProp);// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function handle(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}return ret;}};});jQuery.fn.extend({on:function on(types,selector,data,fn){return _on(this,types,selector,data,fn);},one:function one(types,selector,data,fn){return _on(this,types,selector,data,fn,1);},off:function off(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){// ( event )  dispatched jQuery.Event
handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if((typeof types==="undefined"?"undefined":_typeof2(types))==="object"){// ( types-object [, selector] )
for(type in types){this.off(type,selector,types[type]);}return this;}if(selector===false||typeof selector==="function"){// ( types [, fn] )
fn=selector;selector=undefined;}if(fn===false){fn=returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var/* eslint-disable max-len */// See https://github.com/eslint/eslint/issues/3229
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */// Support: IE <=10 - 11, Edge 12 - 13
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
rnoInnerhtml=/<script|<style|<link/i,// checked="checked" or checked
rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function manipulationTarget(elem,content){if(nodeName(elem,"table")&&nodeName(content.nodeType!==11?content:content.firstChild,"tr")){return jQuery(">tbody",elem)[0]||elem;}return elem;}// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}return elem;}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}// 1. Copy private data: events, handlers, etc.
if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}// 2. Copy user data
if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}// Fix IE bugs, see support tests
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;// Fails to return the selected option to the default selected state when cloning options
}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}function domManip(collection,args,callback,ignored){// Flatten any nested arrays
args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);// We can't cloneNode fragments that contain checked, in WebKit
if(isFunction||l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value)){return collection.each(function(index){var self=collection.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}domManip(self,args,callback,ignored);});}if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}// Require either new content or an interest in ignored elements to invoke the callback
if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);// Keep references to cloned scripts for later restoration
if(hasScripts){// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(scripts,getAll(node,"script"));}}callback.call(collection[i],node,i);}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;// Reenable scripts
jQuery.map(scripts,restoreScript);// Evaluate executable scripts on first document insertion
for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){// Optional AJAX dependency, but won't run scripts if not present
if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{DOMEval(node.textContent.replace(rcleanScript,""),doc);}}}}}}return collection;}function _remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}node.parentNode.removeChild(node);}}return elem;}jQuery.extend({htmlPrefilter:function htmlPrefilter(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function clone(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);// Fix IE cloning issues
if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}// Copy the events from the original to the clone
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}// Preserve script evaluation history
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}// Return the cloned set
return clone;},cleanData:function cleanData(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if(data=elem[dataPriv.expando]){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);// This is a shortcut to avoid jQuery.event.remove's overhead
}else{jQuery.removeEvent(elem,type,data.handle);}}}// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
elem[dataPriv.expando]=undefined;}if(elem[dataUser.expando]){// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({detach:function detach(selector){return _remove(this,selector,true);},remove:function remove(selector){return _remove(this,selector);},text:function text(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function append(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function prepend(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function before(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function after(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function empty(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){// Prevent memory leaks
jQuery.cleanData(getAll(elem,false));// Remove any remaining nodes
elem.textContent="";}}return this;},clone:function clone(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function html(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}// See if we can take a shortcut and just use innerHTML
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};// Remove element nodes and prevent memory leaks
if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}elem=0;// If using innerHTML throws an exception, use the fallback method
}catch(e){}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function replaceWith(){var ignored=[];// Make the changes, replacing each non-ignored context element with the new content
return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}// Force callback invocation
},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
push.apply(ret,elems.get());}return this.pushStack(ret);};});var rmargin=/^margin/;var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function getStyles(elem){// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}return view.getComputedStyle(elem);};(function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function computeStyleTests(){// This is a singleton, we need to execute it only once
if(!div){return;}div.style.cssText="box-sizing:border-box;"+"position:relative;display:block;"+"margin:auto;border:1px;padding:1px;"+"top:1%;width:50%";div.innerHTML="";documentElement.appendChild(container);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
reliableMarginLeftVal=divStyle.marginLeft==="2px";boxSizingReliableVal=divStyle.width==="4px";// Support: Android 4.0 - 4.3 only
// Some styles come back with percentage values, even though they shouldn't
div.style.marginRight="50%";pixelMarginRightVal=divStyle.marginRight==="4px";documentElement.removeChild(container);// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
div=null;}var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");// Finish early in limited (non-browser) environments
if(!div.style){return;}// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+"padding:0;margin-top:1px;position:absolute";container.appendChild(div);jQuery.extend(support,{pixelPosition:function pixelPosition(){computeStyleTests();return pixelPositionVal;},boxSizingReliable:function boxSizingReliable(){computeStyleTests();return boxSizingReliableVal;},pixelMarginRight:function pixelMarginRight(){computeStyleTests();return pixelMarginRightVal;},reliableMarginLeft:function reliableMarginLeft(){computeStyleTests();return reliableMarginLeftVal;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
style=elem.style;computed=computed||getStyles(elem);// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
if(computed){ret=computed.getPropertyValue(name)||computed[name];if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){// Remember the original values
width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;// Put in the new values to get a computed value out
style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;// Revert the changed values
style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}return ret!==undefined?// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
ret+"":ret;}function addGetHookIf(conditionFn,hookFn){// Define the hook, we'll check on the first run if it's really needed.
return{get:function get(){if(conditionFn()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return;}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=hookFn).apply(this,arguments);}};}var// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
rdisplayswap=/^(none|table(?!-c[ea]).+)/,rcustomProp=/^--/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","Moz","ms"],emptyStyle=document.createElement("div").style;// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName(name){// Shortcut for names that are not vendor prefixed
if(name in emptyStyle){return name;}// Check for vendor prefixed names
var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName(name){var ret=jQuery.cssProps[name];if(!ret){ret=jQuery.cssProps[name]=vendorPropName(name)||name;}return ret;}function setPositiveNumber(elem,value,subtract){// Any relative (+/-) values have already been
// normalized at this point
var matches=rcssNum.exec(value);return matches?// Guard against undefined "subtract", e.g., when used as in cssHooks
Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i,val=0;// If we already have the right measurement, avoid augmentation
if(extra===(isBorderBox?"border":"content")){i=4;// Otherwise initialize for horizontal or vertical properties
}else{i=name==="width"?1:0;}for(;i<4;i+=2){// Both box models exclude margin, so add it if we want it
if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}if(isBorderBox){// border-box includes padding, so remove it if we want content
if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}// At this point, extra isn't border nor margin, so remove border
if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{// At this point, extra isn't content, so add padding
val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);// At this point, extra isn't content nor padding, so add border
if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}return val;}function getWidthOrHeight(elem,name,extra){// Start with computed style
var valueIsBorderBox,styles=getStyles(elem),val=curCSS(elem,name,styles),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";// Computed unit is not pixels. Stop here and return.
if(rnumnonpx.test(val)){return val;}// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);// Fall back to offsetWidth/Height when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
if(val==="auto"){val=elem["offset"+name[0].toUpperCase()+name.slice(1)];}// Normalize "", auto, and prepare for extra
val=parseFloat(val)||0;// Use the active box-sizing model to add/subtract irrelevant styles
return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles)+"px";}jQuery.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function get(elem,computed){if(computed){// We should always get a number back from opacity
var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{"float":"cssFloat"},// Get and set the style property on a DOM Node
style:function style(elem,name,value,extra){// Don't set styles on text and comment nodes
if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}// Make sure that we're working with the right name
var ret,type,hooks,origName=jQuery.camelCase(name),isCustomProp=rcustomProp.test(name),style=elem.style;// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
if(!isCustomProp){name=finalPropName(origName);}// Gets hook for the prefixed version, then unprefixed version
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// Check if we're setting a value
if(value!==undefined){type=typeof value==="undefined"?"undefined":_typeof2(value);// Convert "+=" or "-=" to relative numbers (#7345)
if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);// Fixes bug #9237
type="number";}// Make sure that null and NaN values aren't set (#7116)
if(value==null||value!==value){return;}// If a number was passed in, add the unit (except for certain CSS properties)
if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}// background-* props affect original clone's values
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}// If a hook was provided, use that value, otherwise just set the specified value
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){if(isCustomProp){style.setProperty(name,value);}else{style[name]=value;}}}else{// If a hook was provided get the non-computed value from there
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}// Otherwise just get the value from the style object
return style[name];}},css:function css(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name),isCustomProp=rcustomProp.test(name);// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
if(!isCustomProp){name=finalPropName(origName);}// Try prefixed name followed by the unprefixed name
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// If a hook was provided get the computed value from there
if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}// Otherwise, if a way to get the computed value exists, use that
if(val===undefined){val=curCSS(elem,name,styles);}// Convert "normal" to computed value
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}// Make numeric if forced or a qualifier was provided and val looks numeric
if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function get(elem,computed,extra){if(computed){// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return rdisplayswap.test(jQuery.css(elem,"display"))&&(// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
!elem.getClientRects().length||!elem.getBoundingClientRect().width)?swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function set(elem,value,extra){var matches,styles=extra&&getStyles(elem),subtract=extra&&augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles);// Convert to pixels if value adjustment is needed
if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[name]=value;value=jQuery.css(elem,name);}return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});// These hooks are used by animate to expand properties
jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function expand(value){var i=0,expanded={},// Assumes a single number if not a string
parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function css(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(Array.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}return map;}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function init(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function cur(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function run(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function get(tween){var result;// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
result=jQuery.css(tween.elem,tween.prop,"");// Empty strings, null, undefined and "auto" are converted to 0.
return!result||result==="auto"?0:result;},set:function set(tween){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function set(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function linear(p){return p;},swing:function swing(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;// Back compat <1.8 extension point
jQuery.fx.step={};var fxNow,inProgress,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function schedule(){if(inProgress){if(document.hidden===false&&window.requestAnimationFrame){window.requestAnimationFrame(schedule);}else{window.setTimeout(schedule,jQuery.fx.interval);}jQuery.fx.tick();}}// Animations created synchronously will run synchronously
function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return fxNow=jQuery.now();}// Generate parameters to create a standard animation
function genFx(type,includeWidth){var which,i=0,attrs={height:type};// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}if(includeWidth){attrs.opacity=attrs.width=type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(tween=collection[index].call(animation,prop,value)){// We're done with this property
return tween;}}}function defaultPrefilter(elem,props,opts){var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox="width"in props||"height"in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,"fxshow");// Queue-skipping animations hijack the fx hooks
if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){// Ensure the complete handler is called before this completes
anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}// Detect show/hide animations
for(prop in props){value=props[prop];if(rfxtypes.test(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;// Ignore all other no-op show/hide data
}else{continue;}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}// Bail out if this is a no-op like .hide().hide()
propTween=!jQuery.isEmptyObject(props);if(!propTween&&jQuery.isEmptyObject(orig)){return;}// Restrict "overflow" and "display" styles during box animations
if(isBox&&elem.nodeType===1){// Support: IE <=9 - 11, Edge 12 - 13
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY
opts.overflow=[style.overflow,style.overflowX,style.overflowY];// Identify a display type, preferring old show/hide data over the CSS cascade
restoreDisplay=dataShow&&dataShow.display;if(restoreDisplay==null){restoreDisplay=dataPriv.get(elem,"display");}display=jQuery.css(elem,"display");if(display==="none"){if(restoreDisplay){display=restoreDisplay;}else{// Get nonempty value(s) by temporarily forcing visibility
showHide([elem],true);restoreDisplay=elem.style.display||restoreDisplay;display=jQuery.css(elem,"display");showHide([elem]);}}// Animate inline elements as inline-block
if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){if(jQuery.css(elem,"float")==="none"){// Restore the original display value at the end of pure show/hide animations
if(!propTween){anim.done(function(){style.display=restoreDisplay;});if(restoreDisplay==null){display=style.display;restoreDisplay=display==="none"?"":display;}}style.display="inline-block";}}}if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}// Implement show/hide animations
propTween=false;for(prop in orig){// General show/hide setup for this element animation
if(!propTween){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});}// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
if(toggle){dataShow.hidden=!hidden;}// Show elements before animating them
if(hidden){showHide([elem],true);}/* eslint-disable no-loop-func */anim.done(function(){/* eslint-enable no-loop-func */// The final step of a "hide" animation is actually hiding the element
if(!hidden){showHide([elem]);}dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});}// Per-property setup
propTween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=propTween.start;if(hidden){propTween.end=propTween.start;propTween.start=0;}}}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;// camelCase, specialEasing and expand cssHook pass
for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(Array.isArray(value)){easing=value[1];value=props[index]=value[0];}if(index!==name){props[name]=value;delete props[index];}hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){// Don't match elem in the :animated selector
delete tick.elem;}),tick=function tick(){if(stopped){return false;}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);// If there's more to do, yield
if(percent<1&&length){return remaining;}// If this was an empty animation, synthesize a final progress notification
if(!length){deferred.notifyWith(elem,[animation,1,0]);}// Resolve the animation and report its conclusion
deferred.resolveWith(elem,[animation]);return false;},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function createTween(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function stop(gotoEnd){var index=0,// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}// Resolve when we played the last frame; otherwise, reject
if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(jQuery.isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=jQuery.proxy(result.stop,result);}return result;}}jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}// Attach callbacks from options
animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation;}jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function tweener(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnothtmlwhite);}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function prefilter(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&(typeof speed==="undefined"?"undefined":_typeof2(speed))==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};// Go to the end state if fx are off
if(jQuery.fx.off){opt.duration=0;}else{if(typeof opt.duration!=="number"){if(opt.duration in jQuery.fx.speeds){opt.duration=jQuery.fx.speeds[opt.duration];}else{opt.duration=jQuery.fx.speeds._default;}}}// Normalize opt.queue - true/undefined/null -> "fx"
if(opt.queue==null||opt.queue===true){opt.queue="fx";}// Queueing
opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function fadeTo(speed,to,easing,callback){// Show any hidden elements after setting opacity to 0
return this.filter(isHiddenWithinTree).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:to},speed,easing,callback);},animate:function animate(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function doAnimation(){// Operate on a copy of prop so per-property easing won't be lost
var anim=Animation(this,jQuery.extend({},prop),optall);// Empty animations, or finishing resolves immediately
if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function stop(type,clearQueue,gotoEnd){var stopQueue=function stopQueue(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}if(clearQueue&&type!==false){this.queue(type||"fx",[]);}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function finish(type){if(type!==false){type=type||"fx";}return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;// Enable finishing flag on private data
data.finish=true;// Empty the queue first
jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}// Look for any active animations, and finish them
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}// Look for any animations in the old queue and finish them
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}// Turn off finishing flag
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});// Generate shortcuts for custom animations
jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];// Run the timer and safely remove it when done (allowing for external removal)
if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);jQuery.fx.start();};jQuery.fx.interval=13;jQuery.fx.start=function(){if(inProgress){return;}inProgress=true;schedule();};jQuery.fx.stop=function(){inProgress=null;};jQuery.fx.speeds={slow:600,fast:200,// Default speed
_default:400};// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
support.checkOn=input.value!=="";// Support: IE <=11 only
// Must access selectedIndex to make default options select
support.optSelected=opt.selected;// Support: IE <=11 only
// An input loses its value after becoming a radio
input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function attr(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function attr(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(nType===3||nType===8||nType===2){return;}// Fallback to prop when attributes are not supported
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
if(nType!==1||!jQuery.isXMLDoc(elem)){hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}elem.setAttribute(name,value+"");return value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}ret=jQuery.find.attr(elem,name);// Non-existent attributes return null, we normalize to undefined
return ret==null?undefined:ret;},attrHooks:{type:{set:function set(elem,value){if(!support.radioValue&&value==="radio"&&nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}return value;}}}},removeAttr:function removeAttr(elem,value){var name,i=0,// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
attrNames=value&&value.match(rnothtmlwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){elem.removeAttribute(name);}}}});// Hooks for boolean attributes
boolHook={set:function set(elem,value,name){if(value===false){// Remove boolean attributes when set to false
jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle,lowercaseName=name.toLowerCase();if(!isXML){// Avoid an infinite loop by temporarily removing this function from the getter
handle=attrHandle[lowercaseName];attrHandle[lowercaseName]=ret;ret=getter(elem,name,isXML)!=null?lowercaseName:null;attrHandle[lowercaseName]=handle;}return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function prop(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function removeProp(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function prop(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(nType===3||nType===8||nType===2){return;}if(nType!==1||!jQuery.isXMLDoc(elem)){// Fix name and attach hooks
name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}return elem[name]=value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}return elem[name];},propHooks:{tabIndex:{get:function get(elem){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var tabindex=jQuery.find.attr(elem,"tabindex");if(tabindex){return parseInt(tabindex,10);}if(rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href){return 0;}return-1;}}},propFix:{"for":"htmlFor","class":"className"}});// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if(!support.optSelected){jQuery.propHooks.selected={get:function get(elem){/* eslint no-unused-expressions: "off" */var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}return null;},set:function set(elem){/* eslint no-unused-expressions: "off" */var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});// Strip and collapse whitespace according to HTML spec
// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
function stripAndCollapse(value){var tokens=value.match(rnothtmlwhite)||[];return tokens.join(" ");}function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}jQuery.fn.extend({addClass:function addClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}if(typeof value==="string"&&value){classes=value.match(rnothtmlwhite)||[];while(elem=this[i++]){curValue=getClass(elem);cur=elem.nodeType===1&&" "+stripAndCollapse(curValue)+" ";if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}// Only assign if different to avoid unneeded rendering.
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},removeClass:function removeClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}if(!arguments.length){return this.attr("class","");}if(typeof value==="string"&&value){classes=value.match(rnothtmlwhite)||[];while(elem=this[i++]){curValue=getClass(elem);// This expression is here for better compressibility (see addClass)
cur=elem.nodeType===1&&" "+stripAndCollapse(curValue)+" ";if(cur){j=0;while(clazz=classes[j++]){// Remove *all* instances
while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}// Only assign if different to avoid unneeded rendering.
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},toggleClass:function toggleClass(value,stateVal){var type=typeof value==="undefined"?"undefined":_typeof2(value);if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}return this.each(function(){var className,i,self,classNames;if(type==="string"){// Toggle individual class names
i=0;self=jQuery(this);classNames=value.match(rnothtmlwhite)||[];while(className=classNames[i++]){// Check each className given, space separated list
if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}// Toggle whole class name
}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){// Store className if set
dataPriv.set(this,"__className__",className);}// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function hasClass(selector){var className,elem,i=0;className=" "+selector+" ";while(elem=this[i++]){if(elem.nodeType===1&&(" "+stripAndCollapse(getClass(elem))+" ").indexOf(className)>-1){return true;}}return false;}});var rreturn=/\r/g;jQuery.fn.extend({val:function val(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}ret=elem.value;// Handle most common string cases
if(typeof ret==="string"){return ret.replace(rreturn,"");}// Handle cases where value is null/undef or number
return ret==null?"":ret;}return;}isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}// Treat null/undefined as ""; convert numbers to string
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(Array.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];// If set returns undefined, fall back to normal setting
if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
stripAndCollapse(jQuery.text(elem));}},select:{get:function get(elem){var value,option,i,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one",values=one?null:[],max=one?index+1:options.length;if(index<0){i=max;}else{i=one?index:0;}// Loop through all the selected options
for(;i<max;i++){option=options[i];// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if((option.selected||i===index)&&// Don't return options that are disabled or in a disabled optgroup
!option.disabled&&(!option.parentNode.disabled||!nodeName(option.parentNode,"optgroup"))){// Get the specific value for the option
value=jQuery(option).val();// We don't need an array for one selects
if(one){return value;}// Multi-Selects return an array
values.push(value);}}return values;},set:function set(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];/* eslint-disable no-cond-assign */if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}/* eslint-enable no-cond-assign */}// Force browsers to behave consistently when non-matching value is set
if(!optionSet){elem.selectedIndex=-1;}return values;}}}});// Radios and checkboxes getter/setter
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function set(elem,value){if(Array.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1;}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});// Return jQuery for attributes-only inclusion
var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;jQuery.extend(jQuery.event,{trigger:function trigger(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;// Don't do events on text and comment nodes
if(elem.nodeType===3||elem.nodeType===8){return;}// focus/blur morphs to focusin/out; ensure we're not firing them right now
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}if(type.indexOf(".")>-1){// Namespaced trigger; create a regexp to match event type in handle()
namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}ontype=type.indexOf(":")<0&&"on"+type;// Caller can pass in a jQuery.Event object, Object, or just an event type string
event=event[jQuery.expando]?event:new jQuery.Event(type,(typeof event==="undefined"?"undefined":_typeof2(event))==="object"&&event);// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;// Clean up the event in case it is being reused
event.result=undefined;if(!event.target){event.target=elem;}// Clone any incoming data and prepend the event, creating the handler arg list
data=data==null?[event]:jQuery.makeArray(data,[event]);// Allow special events to draw outside the lines
special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}// Only add window if we got to document (e.g., not plain obj or detached DOM)
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}// Fire handlers on the event path
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;// jQuery handler
handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}// Native handler
handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}event.type=type;// If nobody prevented the default action, do it now
if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){// Don't re-trigger an onFOO event when we call its FOO() method
tmp=elem[ontype];if(tmp){elem[ontype]=null;}// Prevent re-triggering of the same event, since we already bubbled it above
jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}return event.result;},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function simulate(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function trigger(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function triggerHandler(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(i,name){// Handle event binding
jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function hover(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});support.focusin="onfocusin"in window;// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){// Attach a single capturing handler on the document while someone wants focusin/focusout
var handler=function handler(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function setup(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function teardown(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}var location=window.location;var nonce=jQuery.now();var rquery=/\?/;// Cross-browser xml parsing
jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;}// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{xml=new window.DOMParser().parseFromString(data,"text/xml");}catch(e){xml=undefined;}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}return xml;};var rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(Array.isArray(obj)){// Serialize array item.
jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){// Treat each array item as a scalar.
add(prefix,v);}else{// Item is non-scalar (array or object), encode its numeric index.
buildParams(prefix+"["+((typeof v==="undefined"?"undefined":_typeof2(v))==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){// Serialize object item.
for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{// Serialize scalar item.
add(prefix,obj);}}// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param=function(a,traditional){var prefix,s=[],add=function add(key,valueOrFunction){// If value is a function, invoke it and use its return value
var value=jQuery.isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value==null?"":value);};// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){// Serialize the form elements
jQuery.each(a,function(){add(this.name,this.value);});}else{// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}// Return the resulting serialization
return s.join("&");};jQuery.fn.extend({serialize:function serialize(){return jQuery.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();if(val==null){return null;}if(Array.isArray(val)){return jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};});}return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});var r20=/%20/g,rhash=/#.*$/,rantiCache=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,// #7653, #8125, #8152: local protocol detection
rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */prefilters={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */transports={},// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
allTypes="*/".concat("*"),// Anchor tag for parsing the document origin
originAnchor=document.createElement("a");originAnchor.href=location.href;// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports(structure){// dataTypeExpression is optional and defaults to "*"
return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];if(jQuery.isFunction(func)){// For each dataType in the dataTypeExpression
while(dataType=dataTypes[i++]){// Prepend if requested
if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);// Otherwise append
}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;// Remove auto dataType and get content-type in the process
while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}// Check if we're dealing with a known content-type
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}// Check to see if we have a response for the expected dataType
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{// Try convertible dataTypes
for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}if(!firstDataType){firstDataType=type;}}// Or just use first one
finalDataType=finalDataType||firstDataType;}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},// Work with a copy of dataTypes in case we need to modify it for conversion
dataTypes=s.dataTypes.slice();// Create converters map with lowercased keys
if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}current=dataTypes.shift();// Convert to each sequential dataType
while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}// Apply the dataFilter if provided
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}prev=current;current=dataTypes.shift();if(current){// There's only work to do if current dataType is non-auto
if(current==="*"){current=prev;// Convert response if prev dataType is non-auto and differs from current
}else if(prev!=="*"&&prev!==current){// Seek a direct converter
conv=converters[prev+" "+current]||converters["* "+current];// If none found, seek a pair
if(!conv){for(conv2 in converters){// If conv2 outputs current
tmp=conv2.split(" ");if(tmp[1]===current){// If prev can be converted to accepted input
conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){// Condense equivalence converters
if(conv===true){conv=converters[conv2];// Otherwise, insert the intermediate dataType
}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}break;}}}}// Apply converter (if not an equivalence)
if(conv!==true){// Unless errors are allowed to bubble, catch and return them
if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}return{state:"success",data:response};}jQuery.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":true,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":jQuery.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:true,context:true}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function ajaxSetup(target,settings){return settings?// Building a settings object
ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):// Extending ajaxSettings
ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),// Main method
ajax:function ajax(url,options){// If url is an object, simulate pre-1.5 signature
if((typeof url==="undefined"?"undefined":_typeof2(url))==="object"){options=url;url=undefined;}// Force options to be an object
options=options||{};var transport,// URL without anti-cache param
cacheURL,// Response headers
responseHeadersString,responseHeaders,// timeout handle
timeoutTimer,// Url cleanup var
urlAnchor,// Request state (becomes false upon send and true upon completion)
completed,// To know if global events are to be dispatched
fireGlobals,// Loop variable
i,// uncached part of the url
uncached,// Create the final options object
s=jQuery.ajaxSetup({},options),// Callbacks context
callbackContext=s.context||s,// Context for global events is callbackContext if it is a DOM node or jQuery collection
globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,// Deferreds
deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),// Status-dependent callbacks
_statusCode=s.statusCode||{},// Headers (they are sent all at once)
requestHeaders={},requestHeadersNames={},// Default abort message
strAbort="canceled",// Fake xhr
jqXHR={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function getResponseHeader(key){var match;if(completed){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2];}}match=responseHeaders[key.toLowerCase()];}return match==null?null:match;},// Raw string
getAllResponseHeaders:function getAllResponseHeaders(){return completed?responseHeadersString:null;},// Caches the header
setRequestHeader:function setRequestHeader(name,value){if(completed==null){name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name;requestHeaders[name]=value;}return this;},// Overrides response content-type header
overrideMimeType:function overrideMimeType(type){if(completed==null){s.mimeType=type;}return this;},// Status-dependent callbacks
statusCode:function statusCode(map){var code;if(map){if(completed){// Execute the appropriate callbacks
jqXHR.always(map[jqXHR.status]);}else{// Lazy-add the new callbacks in a way that preserves old ones
for(code in map){_statusCode[code]=[_statusCode[code],map[code]];}}}return this;},// Cancel the request
abort:function abort(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}};// Attach deferreds
deferred.promise(jqXHR);// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
s.url=((url||s.url||location.href)+"").replace(rprotocol,location.protocol+"//");// Alias method option to type as per ticket #12004
s.type=options.method||options.type||s.method||s.type;// Extract dataTypes list
s.dataTypes=(s.dataType||"*").toLowerCase().match(rnothtmlwhite)||[""];// A cross-domain request is in order when the origin doesn't match the current origin.
if(s.crossDomain==null){urlAnchor=document.createElement("a");// Support: IE <=8 - 11, Edge 12 - 13
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{urlAnchor.href=s.url;// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
s.crossDomain=true;}}// Convert data if not already a string
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}// Apply prefilters
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);// If request was aborted inside a prefilter, stop there
if(completed){return jqXHR;}// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
fireGlobals=jQuery.event&&s.global;// Watch for a new set of requests
if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}// Uppercase the type
s.type=s.type.toUpperCase();// Determine if request has content
s.hasContent=!rnoContent.test(s.type);// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
cacheURL=s.url.replace(rhash,"");// More options handling for requests with no content
if(!s.hasContent){// Remember the hash so we can put it back
uncached=s.url.slice(cacheURL.length);// If data is available, append data to url
if(s.data){cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;// #9682: remove data so that it's not used in an eventual retry
delete s.data;}// Add or update anti-cache param if needed
if(s.cache===false){cacheURL=cacheURL.replace(rantiCache,"$1");uncached=(rquery.test(cacheURL)?"&":"?")+"_="+nonce++ +uncached;}// Put hash and anti-cache on the URL that will be requested (gh-1732)
s.url=cacheURL+uncached;// Change '%20' to '+' if this is encoded form body content (gh-2658)
}else if(s.data&&s.processData&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){s.data=s.data.replace(r20,"+");}// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}// Set the correct header, if data is being sent
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}// Set the Accepts header for the server, depending on the dataType
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);// Check for headers option
for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}// Allow custom headers/mimetypes and early abort
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){// Abort if not done already and return
return jqXHR.abort();}// Aborting is no longer a cancellation
strAbort="abort";// Install callbacks on deferreds
completeDeferred.add(s.complete);jqXHR.done(s.success);jqXHR.fail(s.error);// Get transport
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);// If no transport, we auto-abort
if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;// Send global event
if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}// If request was aborted inside ajaxSend, stop there
if(completed){return jqXHR;}// Timeout
if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{completed=false;transport.send(requestHeaders,done);}catch(e){// Rethrow post-completion exceptions
if(completed){throw e;}// Propagate others as results
done(-1,e);}}// Callback for when everything is done
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;// Ignore repeat invocations
if(completed){return;}completed=true;// Clear timeout if it exists
if(timeoutTimer){window.clearTimeout(timeoutTimer);}// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
transport=undefined;// Cache response headers
responseHeadersString=headers||"";// Set readyState
jqXHR.readyState=status>0?4:0;// Determine if successful
isSuccess=status>=200&&status<300||status===304;// Get response data
if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}// Convert no matter what (that way responseXXX fields are always set)
response=ajaxConvert(s,response,jqXHR,isSuccess);// If successful, handle type chaining
if(isSuccess){// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}// if no content
if(status===204||s.type==="HEAD"){statusText="nocontent";// if not modified
}else if(status===304){statusText="notmodified";// If we have data, let's convert it
}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{// Extract error from statusText and normalize for non-aborts
error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}// Set data for the fake xhr object
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";// Success/Error
if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}// Status-dependent callbacks
jqXHR.statusCode(_statusCode);_statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}// Complete
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);// Handle the global AJAX counter
if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function getJSON(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function getScript(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){// Shift arguments if data argument was omitted
if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}// The url can be an options object (which then must have .url)
return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:true,async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function wrapAll(html){var wrap;if(this[0]){if(jQuery.isFunction(html)){html=html.call(this[0]);}// The elements to wrap the target around
wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}return elem;}).append(this);}return this;},wrapInner:function wrapInner(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function wrap(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function unwrap(selector){this.parent(selector).not("body").each(function(){jQuery(this).replaceWith(this.childNodes);});return this;}});jQuery.expr.pseudos.hidden=function(elem){return!jQuery.expr.pseudos.visible(elem);};jQuery.expr.pseudos.visible=function(elem){return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&"withCredentials"in xhrSupported;support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var _callback,errorCallback;// Cross domain only allowed if supported through XMLHttpRequest
if(support.cors||xhrSupported&&!options.crossDomain){return{send:function send(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);// Apply custom fields if provided
if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}// Override mime type if needed
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}// Set headers
for(i in headers){xhr.setRequestHeader(i,headers[i]);}// Callback
_callback=function callback(type){return function(){if(_callback){_callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(// File: protocol always yields status 0; see #8605, #14207
xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};// Listen to events
xhr.onload=_callback();errorCallback=xhr.onerror=_callback("error");// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){// Check readyState before timeout as it changes
if(xhr.readyState===4){// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
window.setTimeout(function(){if(_callback){errorCallback();}});}};}// Create the abort callback
_callback=_callback("abort");try{// Do send the request (this may raise an exception)
xhr.send(options.hasContent&&options.data||null);}catch(e){// #14683: Only rethrow if this hasn't been notified as an error yet
if(_callback){throw e;}}},abort:function abort(){if(_callback){_callback();}}};}});// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter(function(s){if(s.crossDomain){s.contents.script=false;}});// Install script dataType
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}});// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}if(s.crossDomain){s.type="GET";}});// Bind script tag hack transport
jQuery.ajaxTransport("script",function(s){// This transport only deals with cross domain requests
if(s.crossDomain){var script,_callback2;return{send:function send(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",_callback2=function callback(evt){script.remove();_callback2=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});// Use native DOM manipulation to avoid our domManip AJAX trickery
document.head.appendChild(script[0]);},abort:function abort(){if(_callback2){_callback2();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce++;this[callback]=true;return callback;}});// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(jsonProp||s.dataTypes[0]==="jsonp"){// Get callback name, remembering preexisting value associated with it
callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;// Insert callback into url or form data
if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}// Use data converter to retrieve json after script execution
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}return responseContainer[0];};// Force json dataType
s.dataTypes[0]="json";// Install callback
overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};// Clean-up function (fires after converters)
jqXHR.always(function(){// If previous value didn't exist - remove it
if(overwritten===undefined){jQuery(window).removeProp(callbackName);// Otherwise restore preexisting value
}else{window[callbackName]=overwritten;}// Save back as free
if(s[callbackName]){// Make sure that re-using the options doesn't screw things around
s.jsonpCallback=originalSettings.jsonpCallback;// Save the callback name for future use
oldCallbacks.push(callbackName);}// Call if it was a function and we have a response
if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer=overwritten=undefined;});// Delegate to script
return"script";}});// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument=function(){var body=document.implementation.createHTMLDocument("").body;body.innerHTML="<form></form><form></form>";return body.childNodes.length===2;}();// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML=function(data,context,keepScripts){if(typeof data!=="string"){return[];}if(typeof context==="boolean"){keepScripts=context;context=false;}var base,parsed,scripts;if(!context){// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
if(support.createHTMLDocument){context=document.implementation.createHTMLDocument("");// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
base=context.createElement("base");base.href=document.location.href;context.head.appendChild(base);}else{context=document;}}parsed=rsingleTag.exec(data);scripts=!keepScripts&&[];// Single tag
if(parsed){return[context.createElement(parsed[1])];}parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);};/**
 * Load a url into a page
 */jQuery.fn.load=function(url,params,callback){var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=stripAndCollapse(url.slice(off));url=url.slice(0,off);}// If it's a function
if(jQuery.isFunction(params)){// We assume that it's the callback
callback=params;params=undefined;// Otherwise, build a param string
}else if(params&&(typeof params==="undefined"?"undefined":_typeof2(params))==="object"){type="POST";}// If we have elements to modify, make the request
if(self.length>0){jQuery.ajax({url:url,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:type||"GET",dataType:"html",data:params}).done(function(responseText){// Save response for use in complete callback
response=arguments;self.html(selector?// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):// Otherwise use the full result
responseText);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}return this;};// Attach a bunch of functions for handling common AJAX events
jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.pseudos.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};jQuery.offset={setOffset:function setOffset(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};// Set position first, in-case top/left are set even on static elem
if(position==="static"){elem.style.position="relative";}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}if(jQuery.isFunction(options)){// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
options=options.call(elem,i,jQuery.extend({},curOffset));}if(options.top!=null){props.top=options.top-curOffset.top+curTop;}if(options.left!=null){props.left=options.left-curOffset.left+curLeft;}if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function offset(options){// Preserve chaining for setter
if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var doc,docElem,rect,win,elem=this[0];if(!elem){return;}// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
if(!elem.getClientRects().length){return{top:0,left:0};}rect=elem.getBoundingClientRect();doc=elem.ownerDocument;docElem=doc.documentElement;win=doc.defaultView;return{top:rect.top+win.pageYOffset-docElem.clientTop,left:rect.left+win.pageXOffset-docElem.clientLeft};},position:function position(){if(!this[0]){return;}var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
// because it is its only offset parent
if(jQuery.css(elem,"position")==="fixed"){// Assume getBoundingClientRect is there when computed position is fixed
offset=elem.getBoundingClientRect();}else{// Get *real* offsetParent
offsetParent=this.offsetParent();// Get correct offsets
offset=this.offset();if(!nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}// Add offsetParent borders
parentOffset={top:parentOffset.top+jQuery.css(offsetParent[0],"borderTopWidth",true),left:parentOffset.left+jQuery.css(offsetParent[0],"borderLeftWidth",true)};}// Subtract parent offsets and element margins
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}return offsetParent||documentElement;});}});// Create scrollLeft and scrollTop methods
jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){// Coalesce documents and windows
var win;if(jQuery.isWindow(elem)){win=elem;}else if(elem.nodeType===9){win=elem.defaultView;}if(val===undefined){return win?win[prop]:elem[method];}if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);// If curCSS returns percentage, fallback to offset
return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){// Margin is only for outerHeight, outerWidth
jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
return funcName.indexOf("outer")===0?elem["inner"+name]:elem.document.documentElement["client"+name];}// Get document width or height
if(elem.nodeType===9){doc=elem.documentElement;// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
// whichever is greatest
return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}return value===undefined?// Get width or height on the element, requesting but not forcing parseFloat
jQuery.css(elem,type,extra):// Set width or height on the element
jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable);};});});jQuery.fn.extend({bind:function bind(types,data,fn){return this.on(types,null,data,fn);},unbind:function unbind(types,fn){return this.off(types,null,fn);},delegate:function delegate(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function undelegate(selector,types,fn){// ( namespace ) or ( selector, types [, fn] )
return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});jQuery.holdReady=function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}};jQuery.isArray=Array.isArray;jQuery.parseJSON=JSON.parse;jQuery.nodeName=nodeName;// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}var// Map over jQuery in case of overwrite
_jQuery=window.jQuery,// Map over the $ in case of overwrite
_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}return jQuery;};// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if(!noGlobal){window.jQuery=window.$=jQuery;}return jQuery;});/*! tether 1.3.3 */(function(root,factory){if(typeof define==='function'&&define.amd){define(factory);}else if((typeof exports==="undefined"?"undefined":_typeof2(exports))==='object'){module.exports=factory(require,exports,module);}else{root.Tether=factory();}})(this,function(require,exports,module){'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}var TetherBase=undefined;if(typeof TetherBase==='undefined'){TetherBase={modules:[]};}var zeroElement=null;// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
// if the element lies within a nested document (<frame> or <iframe>-like).
function getActualBoundingClientRect(node){var boundingRect=node.getBoundingClientRect();// The original object returned by getBoundingClientRect is immutable, so we clone it
// We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
var rect={};for(var k in boundingRect){rect[k]=boundingRect[k];}if(node.ownerDocument!==document){var _frameElement=node.ownerDocument.defaultView.frameElement;if(_frameElement){var frameRect=getActualBoundingClientRect(_frameElement);rect.top+=frameRect.top;rect.bottom+=frameRect.top;rect.left+=frameRect.left;rect.right+=frameRect.left;}}return rect;}function getScrollParents(el){// In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
// https://bugzilla.mozilla.org/show_bug.cgi?id=548397
var computedStyle=getComputedStyle(el)||{};var position=computedStyle.position;var parents=[];if(position==='fixed'){return[el];}var parent=el;while((parent=parent.parentNode)&&parent&&parent.nodeType===1){var style=undefined;try{style=getComputedStyle(parent);}catch(err){}if(typeof style==='undefined'||style===null){parents.push(parent);return parents;}var _style=style;var overflow=_style.overflow;var overflowX=_style.overflowX;var overflowY=_style.overflowY;if(/(auto|scroll)/.test(overflow+overflowY+overflowX)){if(position!=='absolute'||['relative','absolute','fixed'].indexOf(style.position)>=0){parents.push(parent);}}}parents.push(el.ownerDocument.body);// If the node is within a frame, account for the parent window scroll
if(el.ownerDocument!==document){parents.push(el.ownerDocument.defaultView);}return parents;}var uniqueId=function(){var id=0;return function(){return++id;};}();var zeroPosCache={};var getOrigin=function getOrigin(){// getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
// jitter as the user scrolls that messes with our ability to detect if two positions
// are equivilant or not.  We place an element at the top left of the page that will
// get the same jitter, so we can cancel the two out.
var node=zeroElement;if(!node){node=document.createElement('div');node.setAttribute('data-tether-id',uniqueId());extend(node.style,{top:0,left:0,position:'absolute'});document.body.appendChild(node);zeroElement=node;}var id=node.getAttribute('data-tether-id');if(typeof zeroPosCache[id]==='undefined'){zeroPosCache[id]=getActualBoundingClientRect(node);// Clear the cache when this position call is done
defer(function(){delete zeroPosCache[id];});}return zeroPosCache[id];};function removeUtilElements(){if(zeroElement){document.body.removeChild(zeroElement);}zeroElement=null;};function getBounds(el){var doc=undefined;if(el===document){doc=document;el=document.documentElement;}else{doc=el.ownerDocument;}var docEl=doc.documentElement;var box=getActualBoundingClientRect(el);var origin=getOrigin();box.top-=origin.top;box.left-=origin.left;if(typeof box.width==='undefined'){box.width=document.body.scrollWidth-box.left-box.right;}if(typeof box.height==='undefined'){box.height=document.body.scrollHeight-box.top-box.bottom;}box.top=box.top-docEl.clientTop;box.left=box.left-docEl.clientLeft;box.right=doc.body.clientWidth-box.width-box.left;box.bottom=doc.body.clientHeight-box.height-box.top;return box;}function getOffsetParent(el){return el.offsetParent||document.documentElement;}function getScrollBarSize(){var inner=document.createElement('div');inner.style.width='100%';inner.style.height='200px';var outer=document.createElement('div');extend(outer.style,{position:'absolute',top:0,left:0,pointerEvents:'none',visibility:'hidden',width:'200px',height:'150px',overflow:'hidden'});outer.appendChild(inner);document.body.appendChild(outer);var widthContained=inner.offsetWidth;outer.style.overflow='scroll';var widthScroll=inner.offsetWidth;if(widthContained===widthScroll){widthScroll=outer.clientWidth;}document.body.removeChild(outer);var width=widthContained-widthScroll;return{width:width,height:width};}function extend(){var out=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var args=[];Array.prototype.push.apply(args,arguments);args.slice(1).forEach(function(obj){if(obj){for(var key in obj){if({}.hasOwnProperty.call(obj,key)){out[key]=obj[key];}}}});return out;}function removeClass(el,name){if(typeof el.classList!=='undefined'){name.split(' ').forEach(function(cls){if(cls.trim()){el.classList.remove(cls);}});}else{var regex=new RegExp('(^| )'+name.split(' ').join('|')+'( |$)','gi');var className=getClassName(el).replace(regex,' ');setClassName(el,className);}}function addClass(el,name){if(typeof el.classList!=='undefined'){name.split(' ').forEach(function(cls){if(cls.trim()){el.classList.add(cls);}});}else{removeClass(el,name);var cls=getClassName(el)+(' '+name);setClassName(el,cls);}}function hasClass(el,name){if(typeof el.classList!=='undefined'){return el.classList.contains(name);}var className=getClassName(el);return new RegExp('(^| )'+name+'( |$)','gi').test(className);}function getClassName(el){// Can't use just SVGAnimatedString here since nodes within a Frame in IE have
// completely separately SVGAnimatedString base classes
if(el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString){return el.className.baseVal;}return el.className;}function setClassName(el,className){el.setAttribute('class',className);}function updateClasses(el,add,all){// Of the set of 'all' classes, we need the 'add' classes, and only the
// 'add' classes to be set.
all.forEach(function(cls){if(add.indexOf(cls)===-1&&hasClass(el,cls)){removeClass(el,cls);}});add.forEach(function(cls){if(!hasClass(el,cls)){addClass(el,cls);}});}var deferred=[];var defer=function defer(fn){deferred.push(fn);};var flush=function flush(){var fn=undefined;while(fn=deferred.pop()){fn();}};var Evented=function(){function Evented(){_classCallCheck(this,Evented);}_createClass(Evented,[{key:'on',value:function on(event,handler,ctx){var once=arguments.length<=3||arguments[3]===undefined?false:arguments[3];if(typeof this.bindings==='undefined'){this.bindings={};}if(typeof this.bindings[event]==='undefined'){this.bindings[event]=[];}this.bindings[event].push({handler:handler,ctx:ctx,once:once});}},{key:'once',value:function once(event,handler,ctx){this.on(event,handler,ctx,true);}},{key:'off',value:function off(event,handler){if(typeof this.bindings==='undefined'||typeof this.bindings[event]==='undefined'){return;}if(typeof handler==='undefined'){delete this.bindings[event];}else{var i=0;while(i<this.bindings[event].length){if(this.bindings[event][i].handler===handler){this.bindings[event].splice(i,1);}else{++i;}}}}},{key:'trigger',value:function trigger(event){if(typeof this.bindings!=='undefined'&&this.bindings[event]){var i=0;for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}while(i<this.bindings[event].length){var _bindings$event$i=this.bindings[event][i];var handler=_bindings$event$i.handler;var ctx=_bindings$event$i.ctx;var once=_bindings$event$i.once;var context=ctx;if(typeof context==='undefined'){context=this;}handler.apply(context,args);if(once){this.bindings[event].splice(i,1);}else{++i;}}}}}]);return Evented;}();TetherBase.Utils={getActualBoundingClientRect:getActualBoundingClientRect,getScrollParents:getScrollParents,getBounds:getBounds,getOffsetParent:getOffsetParent,extend:extend,addClass:addClass,removeClass:removeClass,hasClass:hasClass,updateClasses:updateClasses,defer:defer,flush:flush,uniqueId:uniqueId,Evented:Evented,getScrollBarSize:getScrollBarSize,removeUtilElements:removeUtilElements};/* globals TetherBase, performance */'use strict';var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i['return'])_i['return']();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError('Invalid attempt to destructure non-iterable instance');}};}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _get=function get(_x6,_x7,_x8){var _again=true;_function:while(_again){var object=_x6,property=_x7,receiver=_x8;_again=false;if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{_x6=parent;_x7=property;_x8=receiver;_again=true;desc=parent=undefined;continue _function;}}else if('value'in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}}};function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+(typeof superClass==="undefined"?"undefined":_typeof2(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}if(typeof TetherBase==='undefined'){throw new Error('You must include the utils.js file before tether.js');}var _TetherBase$Utils=TetherBase.Utils;var getScrollParents=_TetherBase$Utils.getScrollParents;var getBounds=_TetherBase$Utils.getBounds;var getOffsetParent=_TetherBase$Utils.getOffsetParent;var extend=_TetherBase$Utils.extend;var addClass=_TetherBase$Utils.addClass;var removeClass=_TetherBase$Utils.removeClass;var updateClasses=_TetherBase$Utils.updateClasses;var defer=_TetherBase$Utils.defer;var flush=_TetherBase$Utils.flush;var getScrollBarSize=_TetherBase$Utils.getScrollBarSize;var removeUtilElements=_TetherBase$Utils.removeUtilElements;function within(a,b){var diff=arguments.length<=2||arguments[2]===undefined?1:arguments[2];return a+diff>=b&&b>=a-diff;}var transformKey=function(){if(typeof document==='undefined'){return'';}var el=document.createElement('div');var transforms=['transform','WebkitTransform','OTransform','MozTransform','msTransform'];for(var i=0;i<transforms.length;++i){var key=transforms[i];if(el.style[key]!==undefined){return key;}}}();var tethers=[];var position=function position(){tethers.forEach(function(tether){tether.position(false);});flush();};function now(){if(typeof performance!=='undefined'&&typeof performance.now!=='undefined'){return performance.now();}return+new Date();}(function(){var lastCall=null;var lastDuration=null;var pendingTimeout=null;var tick=function tick(){if(typeof lastDuration!=='undefined'&&lastDuration>16){// We voluntarily throttle ourselves if we can't manage 60fps
lastDuration=Math.min(lastDuration-16,250);// Just in case this is the last event, remember to position just once more
pendingTimeout=setTimeout(tick,250);return;}if(typeof lastCall!=='undefined'&&now()-lastCall<10){// Some browsers call events a little too frequently, refuse to run more than is reasonable
return;}if(pendingTimeout!=null){clearTimeout(pendingTimeout);pendingTimeout=null;}lastCall=now();position();lastDuration=now()-lastCall;};if(typeof window!=='undefined'&&typeof window.addEventListener!=='undefined'){['resize','scroll','touchmove'].forEach(function(event){window.addEventListener(event,tick);});}})();var MIRROR_LR={center:'center',left:'right',right:'left'};var MIRROR_TB={middle:'middle',top:'bottom',bottom:'top'};var OFFSET_MAP={top:0,left:0,middle:'50%',center:'50%',bottom:'100%',right:'100%'};var autoToFixedAttachment=function autoToFixedAttachment(attachment,relativeToAttachment){var left=attachment.left;var top=attachment.top;if(left==='auto'){left=MIRROR_LR[relativeToAttachment.left];}if(top==='auto'){top=MIRROR_TB[relativeToAttachment.top];}return{left:left,top:top};};var attachmentToOffset=function attachmentToOffset(attachment){var left=attachment.left;var top=attachment.top;if(typeof OFFSET_MAP[attachment.left]!=='undefined'){left=OFFSET_MAP[attachment.left];}if(typeof OFFSET_MAP[attachment.top]!=='undefined'){top=OFFSET_MAP[attachment.top];}return{left:left,top:top};};function addOffset(){var out={top:0,left:0};for(var _len=arguments.length,offsets=Array(_len),_key=0;_key<_len;_key++){offsets[_key]=arguments[_key];}offsets.forEach(function(_ref){var top=_ref.top;var left=_ref.left;if(typeof top==='string'){top=parseFloat(top,10);}if(typeof left==='string'){left=parseFloat(left,10);}out.top+=top;out.left+=left;});return out;}function offsetToPx(offset,size){if(typeof offset.left==='string'&&offset.left.indexOf('%')!==-1){offset.left=parseFloat(offset.left,10)/100*size.width;}if(typeof offset.top==='string'&&offset.top.indexOf('%')!==-1){offset.top=parseFloat(offset.top,10)/100*size.height;}return offset;}var parseOffset=function parseOffset(value){var _value$split=value.split(' ');var _value$split2=_slicedToArray(_value$split,2);var top=_value$split2[0];var left=_value$split2[1];return{top:top,left:left};};var parseAttachment=parseOffset;var TetherClass=function(_Evented){_inherits(TetherClass,_Evented);function TetherClass(options){var _this=this;_classCallCheck(this,TetherClass);_get(Object.getPrototypeOf(TetherClass.prototype),'constructor',this).call(this);this.position=this.position.bind(this);tethers.push(this);this.history=[];this.setOptions(options,false);TetherBase.modules.forEach(function(module){if(typeof module.initialize!=='undefined'){module.initialize.call(_this);}});this.position();}_createClass(TetherClass,[{key:'getClass',value:function getClass(){var key=arguments.length<=0||arguments[0]===undefined?'':arguments[0];var classes=this.options.classes;if(typeof classes!=='undefined'&&classes[key]){return this.options.classes[key];}else if(this.options.classPrefix){return this.options.classPrefix+'-'+key;}else{return key;}}},{key:'setOptions',value:function setOptions(options){var _this2=this;var pos=arguments.length<=1||arguments[1]===undefined?true:arguments[1];var defaults={offset:'0 0',targetOffset:'0 0',targetAttachment:'auto auto',classPrefix:'tether'};this.options=extend(defaults,options);var _options=this.options;var element=_options.element;var target=_options.target;var targetModifier=_options.targetModifier;this.element=element;this.target=target;this.targetModifier=targetModifier;if(this.target==='viewport'){this.target=document.body;this.targetModifier='visible';}else if(this.target==='scroll-handle'){this.target=document.body;this.targetModifier='scroll-handle';}['element','target'].forEach(function(key){if(typeof _this2[key]==='undefined'){throw new Error('Tether Error: Both element and target must be defined');}if(typeof _this2[key].jquery!=='undefined'){_this2[key]=_this2[key][0];}else if(typeof _this2[key]==='string'){_this2[key]=document.querySelector(_this2[key]);}});addClass(this.element,this.getClass('element'));if(!(this.options.addTargetClasses===false)){addClass(this.target,this.getClass('target'));}if(!this.options.attachment){throw new Error('Tether Error: You must provide an attachment');}this.targetAttachment=parseAttachment(this.options.targetAttachment);this.attachment=parseAttachment(this.options.attachment);this.offset=parseOffset(this.options.offset);this.targetOffset=parseOffset(this.options.targetOffset);if(typeof this.scrollParents!=='undefined'){this.disable();}if(this.targetModifier==='scroll-handle'){this.scrollParents=[this.target];}else{this.scrollParents=getScrollParents(this.target);}if(!(this.options.enabled===false)){this.enable(pos);}}},{key:'getTargetBounds',value:function getTargetBounds(){if(typeof this.targetModifier!=='undefined'){if(this.targetModifier==='visible'){if(this.target===document.body){return{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth};}else{var bounds=getBounds(this.target);var out={height:bounds.height,width:bounds.width,top:bounds.top,left:bounds.left};out.height=Math.min(out.height,bounds.height-(pageYOffset-bounds.top));out.height=Math.min(out.height,bounds.height-(bounds.top+bounds.height-(pageYOffset+innerHeight)));out.height=Math.min(innerHeight,out.height);out.height-=2;out.width=Math.min(out.width,bounds.width-(pageXOffset-bounds.left));out.width=Math.min(out.width,bounds.width-(bounds.left+bounds.width-(pageXOffset+innerWidth)));out.width=Math.min(innerWidth,out.width);out.width-=2;if(out.top<pageYOffset){out.top=pageYOffset;}if(out.left<pageXOffset){out.left=pageXOffset;}return out;}}else if(this.targetModifier==='scroll-handle'){var bounds=undefined;var target=this.target;if(target===document.body){target=document.documentElement;bounds={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth};}else{bounds=getBounds(target);}var style=getComputedStyle(target);var hasBottomScroll=target.scrollWidth>target.clientWidth||[style.overflow,style.overflowX].indexOf('scroll')>=0||this.target!==document.body;var scrollBottom=0;if(hasBottomScroll){scrollBottom=15;}var height=bounds.height-parseFloat(style.borderTopWidth)-parseFloat(style.borderBottomWidth)-scrollBottom;var out={width:15,height:height*0.975*(height/target.scrollHeight),left:bounds.left+bounds.width-parseFloat(style.borderLeftWidth)-15};var fitAdj=0;if(height<408&&this.target===document.body){fitAdj=-0.00011*Math.pow(height,2)-0.00727*height+22.58;}if(this.target!==document.body){out.height=Math.max(out.height,24);}var scrollPercentage=this.target.scrollTop/(target.scrollHeight-height);out.top=scrollPercentage*(height-out.height-fitAdj)+bounds.top+parseFloat(style.borderTopWidth);if(this.target===document.body){out.height=Math.max(out.height,24);}return out;}}else{return getBounds(this.target);}}},{key:'clearCache',value:function clearCache(){this._cache={};}},{key:'cache',value:function cache(k,getter){// More than one module will often need the same DOM info, so
// we keep a cache which is cleared on each position call
if(typeof this._cache==='undefined'){this._cache={};}if(typeof this._cache[k]==='undefined'){this._cache[k]=getter.call(this);}return this._cache[k];}},{key:'enable',value:function enable(){var _this3=this;var pos=arguments.length<=0||arguments[0]===undefined?true:arguments[0];if(!(this.options.addTargetClasses===false)){addClass(this.target,this.getClass('enabled'));}addClass(this.element,this.getClass('enabled'));this.enabled=true;this.scrollParents.forEach(function(parent){if(parent!==_this3.target.ownerDocument){parent.addEventListener('scroll',_this3.position);}});if(pos){this.position();}}},{key:'disable',value:function disable(){var _this4=this;removeClass(this.target,this.getClass('enabled'));removeClass(this.element,this.getClass('enabled'));this.enabled=false;if(typeof this.scrollParents!=='undefined'){this.scrollParents.forEach(function(parent){parent.removeEventListener('scroll',_this4.position);});}}},{key:'destroy',value:function destroy(){var _this5=this;this.disable();tethers.forEach(function(tether,i){if(tether===_this5){tethers.splice(i,1);}});// Remove any elements we were using for convenience from the DOM
if(tethers.length===0){removeUtilElements();}}},{key:'updateAttachClasses',value:function updateAttachClasses(elementAttach,targetAttach){var _this6=this;elementAttach=elementAttach||this.attachment;targetAttach=targetAttach||this.targetAttachment;var sides=['left','top','bottom','right','middle','center'];if(typeof this._addAttachClasses!=='undefined'&&this._addAttachClasses.length){// updateAttachClasses can be called more than once in a position call, so
// we need to clean up after ourselves such that when the last defer gets
// ran it doesn't add any extra classes from previous calls.
this._addAttachClasses.splice(0,this._addAttachClasses.length);}if(typeof this._addAttachClasses==='undefined'){this._addAttachClasses=[];}var add=this._addAttachClasses;if(elementAttach.top){add.push(this.getClass('element-attached')+'-'+elementAttach.top);}if(elementAttach.left){add.push(this.getClass('element-attached')+'-'+elementAttach.left);}if(targetAttach.top){add.push(this.getClass('target-attached')+'-'+targetAttach.top);}if(targetAttach.left){add.push(this.getClass('target-attached')+'-'+targetAttach.left);}var all=[];sides.forEach(function(side){all.push(_this6.getClass('element-attached')+'-'+side);all.push(_this6.getClass('target-attached')+'-'+side);});defer(function(){if(!(typeof _this6._addAttachClasses!=='undefined')){return;}updateClasses(_this6.element,_this6._addAttachClasses,all);if(!(_this6.options.addTargetClasses===false)){updateClasses(_this6.target,_this6._addAttachClasses,all);}delete _this6._addAttachClasses;});}},{key:'position',value:function position(){var _this7=this;var flushChanges=arguments.length<=0||arguments[0]===undefined?true:arguments[0];// flushChanges commits the changes immediately, leave true unless you are positioning multiple
// tethers (in which case call Tether.Utils.flush yourself when you're done)
if(!this.enabled){return;}this.clearCache();// Turn 'auto' attachments into the appropriate corner or edge
var targetAttachment=autoToFixedAttachment(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,targetAttachment);var elementPos=this.cache('element-bounds',function(){return getBounds(_this7.element);});var width=elementPos.width;var height=elementPos.height;if(width===0&&height===0&&typeof this.lastSize!=='undefined'){var _lastSize=this.lastSize;// We cache the height and width to make it possible to position elements that are
// getting hidden.
width=_lastSize.width;height=_lastSize.height;}else{this.lastSize={width:width,height:height};}var targetPos=this.cache('target-bounds',function(){return _this7.getTargetBounds();});var targetSize=targetPos;// Get an actual px offset from the attachment
var offset=offsetToPx(attachmentToOffset(this.attachment),{width:width,height:height});var targetOffset=offsetToPx(attachmentToOffset(targetAttachment),targetSize);var manualOffset=offsetToPx(this.offset,{width:width,height:height});var manualTargetOffset=offsetToPx(this.targetOffset,targetSize);// Add the manually provided offset
offset=addOffset(offset,manualOffset);targetOffset=addOffset(targetOffset,manualTargetOffset);// It's now our goal to make (element position + offset) == (target position + target offset)
var left=targetPos.left+targetOffset.left-offset.left;var top=targetPos.top+targetOffset.top-offset.top;for(var i=0;i<TetherBase.modules.length;++i){var _module2=TetherBase.modules[i];var ret=_module2.position.call(this,{left:left,top:top,targetAttachment:targetAttachment,targetPos:targetPos,elementPos:elementPos,offset:offset,targetOffset:targetOffset,manualOffset:manualOffset,manualTargetOffset:manualTargetOffset,scrollbarSize:scrollbarSize,attachment:this.attachment});if(ret===false){return false;}else if(typeof ret==='undefined'||(typeof ret==="undefined"?"undefined":_typeof2(ret))!=='object'){continue;}else{top=ret.top;left=ret.left;}}// We describe the position three different ways to give the optimizer
// a chance to decide the best possible way to position the element
// with the fewest repaints.
var next={// It's position relative to the page (absolute positioning when
// the element is a child of the body)
page:{top:top,left:left},// It's position relative to the viewport (fixed positioning)
viewport:{top:top-pageYOffset,bottom:pageYOffset-top-height+innerHeight,left:left-pageXOffset,right:pageXOffset-left-width+innerWidth}};var doc=this.target.ownerDocument;var win=doc.defaultView;var scrollbarSize=undefined;if(doc.body.scrollWidth>win.innerWidth){scrollbarSize=this.cache('scrollbar-size',getScrollBarSize);next.viewport.bottom-=scrollbarSize.height;}if(doc.body.scrollHeight>win.innerHeight){scrollbarSize=this.cache('scrollbar-size',getScrollBarSize);next.viewport.right-=scrollbarSize.width;}if(['','static'].indexOf(doc.body.style.position)===-1||['','static'].indexOf(doc.body.parentElement.style.position)===-1){// Absolute positioning in the body will be relative to the page, not the 'initial containing block'
next.page.bottom=doc.body.scrollHeight-top-height;next.page.right=doc.body.scrollWidth-left-width;}if(typeof this.options.optimizations!=='undefined'&&this.options.optimizations.moveElement!==false&&!(typeof this.targetModifier!=='undefined')){(function(){var offsetParent=_this7.cache('target-offsetparent',function(){return getOffsetParent(_this7.target);});var offsetPosition=_this7.cache('target-offsetparent-bounds',function(){return getBounds(offsetParent);});var offsetParentStyle=getComputedStyle(offsetParent);var offsetParentSize=offsetPosition;var offsetBorder={};['Top','Left','Bottom','Right'].forEach(function(side){offsetBorder[side.toLowerCase()]=parseFloat(offsetParentStyle['border'+side+'Width']);});offsetPosition.right=doc.body.scrollWidth-offsetPosition.left-offsetParentSize.width+offsetBorder.right;offsetPosition.bottom=doc.body.scrollHeight-offsetPosition.top-offsetParentSize.height+offsetBorder.bottom;if(next.page.top>=offsetPosition.top+offsetBorder.top&&next.page.bottom>=offsetPosition.bottom){if(next.page.left>=offsetPosition.left+offsetBorder.left&&next.page.right>=offsetPosition.right){// We're within the visible part of the target's scroll parent
var scrollTop=offsetParent.scrollTop;var scrollLeft=offsetParent.scrollLeft;// It's position relative to the target's offset parent (absolute positioning when
// the element is moved to be a child of the target's offset parent).
next.offset={top:next.page.top-offsetPosition.top+scrollTop-offsetBorder.top,left:next.page.left-offsetPosition.left+scrollLeft-offsetBorder.left};}}})();}// We could also travel up the DOM and try each containing context, rather than only
// looking at the body, but we're gonna get diminishing returns.
this.move(next);this.history.unshift(next);if(this.history.length>3){this.history.pop();}if(flushChanges){flush();}return true;}// THE ISSUE
},{key:'move',value:function move(pos){var _this8=this;if(!(typeof this.element.parentNode!=='undefined')){return;}var same={};for(var type in pos){same[type]={};for(var key in pos[type]){var found=false;for(var i=0;i<this.history.length;++i){var point=this.history[i];if(typeof point[type]!=='undefined'&&!within(point[type][key],pos[type][key])){found=true;break;}}if(!found){same[type][key]=true;}}}var css={top:'',left:'',right:'',bottom:''};var transcribe=function transcribe(_same,_pos){var hasOptimizations=typeof _this8.options.optimizations!=='undefined';var gpu=hasOptimizations?_this8.options.optimizations.gpu:null;if(gpu!==false){var yPos=undefined,xPos=undefined;if(_same.top){css.top=0;yPos=_pos.top;}else{css.bottom=0;yPos=-_pos.bottom;}if(_same.left){css.left=0;xPos=_pos.left;}else{css.right=0;xPos=-_pos.right;}css[transformKey]='translateX('+Math.round(xPos)+'px) translateY('+Math.round(yPos)+'px)';if(transformKey!=='msTransform'){// The Z transform will keep this in the GPU (faster, and prevents artifacts),
// but IE9 doesn't support 3d transforms and will choke.
css[transformKey]+=" translateZ(0)";}}else{if(_same.top){css.top=_pos.top+'px';}else{css.bottom=_pos.bottom+'px';}if(_same.left){css.left=_pos.left+'px';}else{css.right=_pos.right+'px';}}};var moved=false;if((same.page.top||same.page.bottom)&&(same.page.left||same.page.right)){css.position='absolute';transcribe(same.page,pos.page);}else if((same.viewport.top||same.viewport.bottom)&&(same.viewport.left||same.viewport.right)){css.position='fixed';transcribe(same.viewport,pos.viewport);}else if(typeof same.offset!=='undefined'&&same.offset.top&&same.offset.left){(function(){css.position='absolute';var offsetParent=_this8.cache('target-offsetparent',function(){return getOffsetParent(_this8.target);});if(getOffsetParent(_this8.element)!==offsetParent){defer(function(){_this8.element.parentNode.removeChild(_this8.element);offsetParent.appendChild(_this8.element);});}transcribe(same.offset,pos.offset);moved=true;})();}else{css.position='absolute';transcribe({top:true,left:true},pos.page);}if(!moved){var offsetParentIsBody=true;var currentNode=this.element.parentNode;while(currentNode&&currentNode.nodeType===1&&currentNode.tagName!=='BODY'){if(getComputedStyle(currentNode).position!=='static'){offsetParentIsBody=false;break;}currentNode=currentNode.parentNode;}if(!offsetParentIsBody){this.element.parentNode.removeChild(this.element);this.element.ownerDocument.body.appendChild(this.element);}}// Any css change will trigger a repaint, so let's avoid one if nothing changed
var writeCSS={};var write=false;for(var key in css){var val=css[key];var elVal=this.element.style[key];if(elVal!==val){write=true;writeCSS[key]=val;}}if(write){defer(function(){extend(_this8.element.style,writeCSS);});}}}]);return TetherClass;}(Evented);TetherClass.modules=[];TetherBase.position=position;var Tether=extend(TetherClass,TetherBase);/* globals TetherBase */'use strict';var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i['return'])_i['return']();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError('Invalid attempt to destructure non-iterable instance');}};}();var _TetherBase$Utils=TetherBase.Utils;var getBounds=_TetherBase$Utils.getBounds;var extend=_TetherBase$Utils.extend;var updateClasses=_TetherBase$Utils.updateClasses;var defer=_TetherBase$Utils.defer;var BOUNDS_FORMAT=['left','top','right','bottom'];function getBoundingRect(tether,to){if(to==='scrollParent'){to=tether.scrollParents[0];}else if(to==='window'){to=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset];}if(to===document){to=to.documentElement;}if(typeof to.nodeType!=='undefined'){(function(){var node=to;var size=getBounds(to);var pos=size;var style=getComputedStyle(to);to=[pos.left,pos.top,size.width+pos.left,size.height+pos.top];// Account any parent Frames scroll offset
if(node.ownerDocument!==document){var win=node.ownerDocument.defaultView;to[0]+=win.pageXOffset;to[1]+=win.pageYOffset;to[2]+=win.pageXOffset;to[3]+=win.pageYOffset;}BOUNDS_FORMAT.forEach(function(side,i){side=side[0].toUpperCase()+side.substr(1);if(side==='Top'||side==='Left'){to[i]+=parseFloat(style['border'+side+'Width']);}else{to[i]-=parseFloat(style['border'+side+'Width']);}});})();}return to;}TetherBase.modules.push({position:function position(_ref){var _this=this;var top=_ref.top;var left=_ref.left;var targetAttachment=_ref.targetAttachment;if(!this.options.constraints){return true;}var _cache=this.cache('element-bounds',function(){return getBounds(_this.element);});var height=_cache.height;var width=_cache.width;if(width===0&&height===0&&typeof this.lastSize!=='undefined'){var _lastSize=this.lastSize;// Handle the item getting hidden as a result of our positioning without glitching
// the classes in and out
width=_lastSize.width;height=_lastSize.height;}var targetSize=this.cache('target-bounds',function(){return _this.getTargetBounds();});var targetHeight=targetSize.height;var targetWidth=targetSize.width;var allClasses=[this.getClass('pinned'),this.getClass('out-of-bounds')];this.options.constraints.forEach(function(constraint){var outOfBoundsClass=constraint.outOfBoundsClass;var pinnedClass=constraint.pinnedClass;if(outOfBoundsClass){allClasses.push(outOfBoundsClass);}if(pinnedClass){allClasses.push(pinnedClass);}});allClasses.forEach(function(cls){['left','top','right','bottom'].forEach(function(side){allClasses.push(cls+'-'+side);});});var addClasses=[];var tAttachment=extend({},targetAttachment);var eAttachment=extend({},this.attachment);this.options.constraints.forEach(function(constraint){var to=constraint.to;var attachment=constraint.attachment;var pin=constraint.pin;if(typeof attachment==='undefined'){attachment='';}var changeAttachX=undefined,changeAttachY=undefined;if(attachment.indexOf(' ')>=0){var _attachment$split=attachment.split(' ');var _attachment$split2=_slicedToArray(_attachment$split,2);changeAttachY=_attachment$split2[0];changeAttachX=_attachment$split2[1];}else{changeAttachX=changeAttachY=attachment;}var bounds=getBoundingRect(_this,to);if(changeAttachY==='target'||changeAttachY==='both'){if(top<bounds[1]&&tAttachment.top==='top'){top+=targetHeight;tAttachment.top='bottom';}if(top+height>bounds[3]&&tAttachment.top==='bottom'){top-=targetHeight;tAttachment.top='top';}}if(changeAttachY==='together'){if(tAttachment.top==='top'){if(eAttachment.top==='bottom'&&top<bounds[1]){top+=targetHeight;tAttachment.top='bottom';top+=height;eAttachment.top='top';}else if(eAttachment.top==='top'&&top+height>bounds[3]&&top-(height-targetHeight)>=bounds[1]){top-=height-targetHeight;tAttachment.top='bottom';eAttachment.top='bottom';}}if(tAttachment.top==='bottom'){if(eAttachment.top==='top'&&top+height>bounds[3]){top-=targetHeight;tAttachment.top='top';top-=height;eAttachment.top='bottom';}else if(eAttachment.top==='bottom'&&top<bounds[1]&&top+(height*2-targetHeight)<=bounds[3]){top+=height-targetHeight;tAttachment.top='top';eAttachment.top='top';}}if(tAttachment.top==='middle'){if(top+height>bounds[3]&&eAttachment.top==='top'){top-=height;eAttachment.top='bottom';}else if(top<bounds[1]&&eAttachment.top==='bottom'){top+=height;eAttachment.top='top';}}}if(changeAttachX==='target'||changeAttachX==='both'){if(left<bounds[0]&&tAttachment.left==='left'){left+=targetWidth;tAttachment.left='right';}if(left+width>bounds[2]&&tAttachment.left==='right'){left-=targetWidth;tAttachment.left='left';}}if(changeAttachX==='together'){if(left<bounds[0]&&tAttachment.left==='left'){if(eAttachment.left==='right'){left+=targetWidth;tAttachment.left='right';left+=width;eAttachment.left='left';}else if(eAttachment.left==='left'){left+=targetWidth;tAttachment.left='right';left-=width;eAttachment.left='right';}}else if(left+width>bounds[2]&&tAttachment.left==='right'){if(eAttachment.left==='left'){left-=targetWidth;tAttachment.left='left';left-=width;eAttachment.left='right';}else if(eAttachment.left==='right'){left-=targetWidth;tAttachment.left='left';left+=width;eAttachment.left='left';}}else if(tAttachment.left==='center'){if(left+width>bounds[2]&&eAttachment.left==='left'){left-=width;eAttachment.left='right';}else if(left<bounds[0]&&eAttachment.left==='right'){left+=width;eAttachment.left='left';}}}if(changeAttachY==='element'||changeAttachY==='both'){if(top<bounds[1]&&eAttachment.top==='bottom'){top+=height;eAttachment.top='top';}if(top+height>bounds[3]&&eAttachment.top==='top'){top-=height;eAttachment.top='bottom';}}if(changeAttachX==='element'||changeAttachX==='both'){if(left<bounds[0]){if(eAttachment.left==='right'){left+=width;eAttachment.left='left';}else if(eAttachment.left==='center'){left+=width/2;eAttachment.left='left';}}if(left+width>bounds[2]){if(eAttachment.left==='left'){left-=width;eAttachment.left='right';}else if(eAttachment.left==='center'){left-=width/2;eAttachment.left='right';}}}if(typeof pin==='string'){pin=pin.split(',').map(function(p){return p.trim();});}else if(pin===true){pin=['top','left','right','bottom'];}pin=pin||[];var pinned=[];var oob=[];if(top<bounds[1]){if(pin.indexOf('top')>=0){top=bounds[1];pinned.push('top');}else{oob.push('top');}}if(top+height>bounds[3]){if(pin.indexOf('bottom')>=0){top=bounds[3]-height;pinned.push('bottom');}else{oob.push('bottom');}}if(left<bounds[0]){if(pin.indexOf('left')>=0){left=bounds[0];pinned.push('left');}else{oob.push('left');}}if(left+width>bounds[2]){if(pin.indexOf('right')>=0){left=bounds[2]-width;pinned.push('right');}else{oob.push('right');}}if(pinned.length){(function(){var pinnedClass=undefined;if(typeof _this.options.pinnedClass!=='undefined'){pinnedClass=_this.options.pinnedClass;}else{pinnedClass=_this.getClass('pinned');}addClasses.push(pinnedClass);pinned.forEach(function(side){addClasses.push(pinnedClass+'-'+side);});})();}if(oob.length){(function(){var oobClass=undefined;if(typeof _this.options.outOfBoundsClass!=='undefined'){oobClass=_this.options.outOfBoundsClass;}else{oobClass=_this.getClass('out-of-bounds');}addClasses.push(oobClass);oob.forEach(function(side){addClasses.push(oobClass+'-'+side);});})();}if(pinned.indexOf('left')>=0||pinned.indexOf('right')>=0){eAttachment.left=tAttachment.left=false;}if(pinned.indexOf('top')>=0||pinned.indexOf('bottom')>=0){eAttachment.top=tAttachment.top=false;}if(tAttachment.top!==targetAttachment.top||tAttachment.left!==targetAttachment.left||eAttachment.top!==_this.attachment.top||eAttachment.left!==_this.attachment.left){_this.updateAttachClasses(eAttachment,tAttachment);_this.trigger('update',{attachment:eAttachment,targetAttachment:tAttachment});}});defer(function(){if(!(_this.options.addTargetClasses===false)){updateClasses(_this.target,addClasses,allClasses);}updateClasses(_this.element,addClasses,allClasses);});return{top:top,left:left};}});/* globals TetherBase */'use strict';var _TetherBase$Utils=TetherBase.Utils;var getBounds=_TetherBase$Utils.getBounds;var updateClasses=_TetherBase$Utils.updateClasses;var defer=_TetherBase$Utils.defer;TetherBase.modules.push({position:function position(_ref){var _this=this;var top=_ref.top;var left=_ref.left;var _cache=this.cache('element-bounds',function(){return getBounds(_this.element);});var height=_cache.height;var width=_cache.width;var targetPos=this.getTargetBounds();var bottom=top+height;var right=left+width;var abutted=[];if(top<=targetPos.bottom&&bottom>=targetPos.top){['left','right'].forEach(function(side){var targetPosSide=targetPos[side];if(targetPosSide===left||targetPosSide===right){abutted.push(side);}});}if(left<=targetPos.right&&right>=targetPos.left){['top','bottom'].forEach(function(side){var targetPosSide=targetPos[side];if(targetPosSide===top||targetPosSide===bottom){abutted.push(side);}});}var allClasses=[];var addClasses=[];var sides=['left','top','right','bottom'];allClasses.push(this.getClass('abutted'));sides.forEach(function(side){allClasses.push(_this.getClass('abutted')+'-'+side);});if(abutted.length){addClasses.push(this.getClass('abutted'));}abutted.forEach(function(side){addClasses.push(_this.getClass('abutted')+'-'+side);});defer(function(){if(!(_this.options.addTargetClasses===false)){updateClasses(_this.target,addClasses,allClasses);}updateClasses(_this.element,addClasses,allClasses);});return true;}});/* globals TetherBase */'use strict';var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i['return'])_i['return']();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError('Invalid attempt to destructure non-iterable instance');}};}();TetherBase.modules.push({position:function position(_ref){var top=_ref.top;var left=_ref.left;if(!this.options.shift){return;}var shift=this.options.shift;if(typeof this.options.shift==='function'){shift=this.options.shift.call(this,{top:top,left:left});}var shiftTop=undefined,shiftLeft=undefined;if(typeof shift==='string'){shift=shift.split(' ');shift[1]=shift[1]||shift[0];var _shift=shift;var _shift2=_slicedToArray(_shift,2);shiftTop=_shift2[0];shiftLeft=_shift2[1];shiftTop=parseFloat(shiftTop,10);shiftLeft=parseFloat(shiftLeft,10);}else{shiftTop=shift.top;shiftLeft=shift.left;}top+=shiftTop;left+=shiftLeft;return{top:top,left:left};}});return Tether;});/*!
 * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */if(typeof jQuery==='undefined'){throw new Error('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');}+function($){var version=$.fn.jquery.split(' ')[0].split('.');if(version[0]<2&&version[1]<9||version[0]==1&&version[1]==9&&version[2]<1||version[0]>=4){throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');}}(jQuery);+function(){var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==="undefined"?"undefined":_typeof2(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":_typeof2(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var Util=function($){/**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */var transition=false;var MAX_UID=1000000;var TransitionEndEvent={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'};// shoutout AngusCroll (https://goo.gl/pxwQGp)
function toType(obj){return{}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();}function isElement(obj){return(obj[0]||obj).nodeType;}function getSpecialTransitionEndEvent(){return{bindType:transition.end,delegateType:transition.end,handle:function handle(event){if($(event.target).is(this)){return event.handleObj.handler.apply(this,arguments);// eslint-disable-line prefer-rest-params
}return undefined;}};}function transitionEndTest(){if(window.QUnit){return false;}var el=document.createElement('bootstrap');for(var name in TransitionEndEvent){if(el.style[name]!==undefined){return{end:TransitionEndEvent[name]};}}return false;}function transitionEndEmulator(duration){var _this=this;var called=false;$(this).one(Util.TRANSITION_END,function(){called=true;});setTimeout(function(){if(!called){Util.triggerTransitionEnd(_this);}},duration);return this;}function setTransitionEndSupport(){transition=transitionEndTest();$.fn.emulateTransitionEnd=transitionEndEmulator;if(Util.supportsTransitionEnd()){$.event.special[Util.TRANSITION_END]=getSpecialTransitionEndEvent();}}/**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */var Util={TRANSITION_END:'bsTransitionEnd',getUID:function getUID(prefix){do{// eslint-disable-next-line no-bitwise
prefix+=~~(Math.random()*MAX_UID);// "~~" acts like a faster Math.floor() here
}while(document.getElementById(prefix));return prefix;},getSelectorFromElement:function getSelectorFromElement(element){var selector=element.getAttribute('data-target');if(!selector){selector=element.getAttribute('href')||'';selector=/^#[a-z]/i.test(selector)?selector:null;}return selector;},reflow:function reflow(element){return element.offsetHeight;},triggerTransitionEnd:function triggerTransitionEnd(element){$(element).trigger(transition.end);},supportsTransitionEnd:function supportsTransitionEnd(){return Boolean(transition);},typeCheckConfig:function typeCheckConfig(componentName,config,configTypes){for(var property in configTypes){if(configTypes.hasOwnProperty(property)){var expectedTypes=configTypes[property];var value=config[property];var valueType=value&&isElement(value)?'element':toType(value);if(!new RegExp(expectedTypes).test(valueType)){throw new Error(componentName.toUpperCase()+': '+('Option "'+property+'" provided type "'+valueType+'" ')+('but expected type "'+expectedTypes+'".'));}}}}};setTransitionEndSupport();return Util;}(jQuery);/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var Alert=function($){/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='alert';var VERSION='4.0.0-alpha.6';var DATA_KEY='bs.alert';var EVENT_KEY='.'+DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$.fn[NAME];var TRANSITION_DURATION=150;var Selector={DISMISS:'[data-dismiss="alert"]'};var Event={CLOSE:'close'+EVENT_KEY,CLOSED:'closed'+EVENT_KEY,CLICK_DATA_API:'click'+EVENT_KEY+DATA_API_KEY};var ClassName={ALERT:'alert',FADE:'fade',SHOW:'show'};/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */var Alert=function(){function Alert(element){_classCallCheck(this,Alert);this._element=element;}// getters
// public
Alert.prototype.close=function close(element){element=element||this._element;var rootElement=this._getRootElement(element);var customEvent=this._triggerCloseEvent(rootElement);if(customEvent.isDefaultPrevented()){return;}this._removeElement(rootElement);};Alert.prototype.dispose=function dispose(){$.removeData(this._element,DATA_KEY);this._element=null;};// private
Alert.prototype._getRootElement=function _getRootElement(element){var selector=Util.getSelectorFromElement(element);var parent=false;if(selector){parent=$(selector)[0];}if(!parent){parent=$(element).closest('.'+ClassName.ALERT)[0];}return parent;};Alert.prototype._triggerCloseEvent=function _triggerCloseEvent(element){var closeEvent=$.Event(Event.CLOSE);$(element).trigger(closeEvent);return closeEvent;};Alert.prototype._removeElement=function _removeElement(element){var _this2=this;$(element).removeClass(ClassName.SHOW);if(!Util.supportsTransitionEnd()||!$(element).hasClass(ClassName.FADE)){this._destroyElement(element);return;}$(element).one(Util.TRANSITION_END,function(event){return _this2._destroyElement(element,event);}).emulateTransitionEnd(TRANSITION_DURATION);};Alert.prototype._destroyElement=function _destroyElement(element){$(element).detach().trigger(Event.CLOSED).remove();};// static
Alert._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var $element=$(this);var data=$element.data(DATA_KEY);if(!data){data=new Alert(this);$element.data(DATA_KEY,data);}if(config==='close'){data[config](this);}});};Alert._handleDismiss=function _handleDismiss(alertInstance){return function(event){if(event){event.preventDefault();}alertInstance.close(this);};};_createClass(Alert,null,[{key:'VERSION',get:function get(){return VERSION;}}]);return Alert;}();/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */$(document).on(Event.CLICK_DATA_API,Selector.DISMISS,Alert._handleDismiss(new Alert()));/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME]=Alert._jQueryInterface;$.fn[NAME].Constructor=Alert;$.fn[NAME].noConflict=function(){$.fn[NAME]=JQUERY_NO_CONFLICT;return Alert._jQueryInterface;};return Alert;}(jQuery);/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var Button=function($){/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='button';var VERSION='4.0.0-alpha.6';var DATA_KEY='bs.button';var EVENT_KEY='.'+DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$.fn[NAME];var ClassName={ACTIVE:'active',BUTTON:'btn',FOCUS:'focus'};var Selector={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:'input',ACTIVE:'.active',BUTTON:'.btn'};var Event={CLICK_DATA_API:'click'+EVENT_KEY+DATA_API_KEY,FOCUS_BLUR_DATA_API:'focus'+EVENT_KEY+DATA_API_KEY+' '+('blur'+EVENT_KEY+DATA_API_KEY)};/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */var Button=function(){function Button(element){_classCallCheck(this,Button);this._element=element;}// getters
// public
Button.prototype.toggle=function toggle(){var triggerChangeEvent=true;var rootElement=$(this._element).closest(Selector.DATA_TOGGLE)[0];if(rootElement){var input=$(this._element).find(Selector.INPUT)[0];if(input){if(input.type==='radio'){if(input.checked&&$(this._element).hasClass(ClassName.ACTIVE)){triggerChangeEvent=false;}else{var activeElement=$(rootElement).find(Selector.ACTIVE)[0];if(activeElement){$(activeElement).removeClass(ClassName.ACTIVE);}}}if(triggerChangeEvent){input.checked=!$(this._element).hasClass(ClassName.ACTIVE);$(input).trigger('change');}input.focus();}}this._element.setAttribute('aria-pressed',!$(this._element).hasClass(ClassName.ACTIVE));if(triggerChangeEvent){$(this._element).toggleClass(ClassName.ACTIVE);}};Button.prototype.dispose=function dispose(){$.removeData(this._element,DATA_KEY);this._element=null;};// static
Button._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY);if(!data){data=new Button(this);$(this).data(DATA_KEY,data);}if(config==='toggle'){data[config]();}});};_createClass(Button,null,[{key:'VERSION',get:function get(){return VERSION;}}]);return Button;}();/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */$(document).on(Event.CLICK_DATA_API,Selector.DATA_TOGGLE_CARROT,function(event){event.preventDefault();var button=event.target;if(!$(button).hasClass(ClassName.BUTTON)){button=$(button).closest(Selector.BUTTON);}Button._jQueryInterface.call($(button),'toggle');}).on(Event.FOCUS_BLUR_DATA_API,Selector.DATA_TOGGLE_CARROT,function(event){var button=$(event.target).closest(Selector.BUTTON)[0];$(button).toggleClass(ClassName.FOCUS,/^focus(in)?$/.test(event.type));});/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME]=Button._jQueryInterface;$.fn[NAME].Constructor=Button;$.fn[NAME].noConflict=function(){$.fn[NAME]=JQUERY_NO_CONFLICT;return Button._jQueryInterface;};return Button;}(jQuery);/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var Carousel=function($){/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='carousel';var VERSION='4.0.0-alpha.6';var DATA_KEY='bs.carousel';var EVENT_KEY='.'+DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$.fn[NAME];var TRANSITION_DURATION=600;var ARROW_LEFT_KEYCODE=37;// KeyboardEvent.which value for left arrow key
var ARROW_RIGHT_KEYCODE=39;// KeyboardEvent.which value for right arrow key
var Default={interval:5000,keyboard:true,slide:false,pause:'hover',wrap:true};var DefaultType={interval:'(number|boolean)',keyboard:'boolean',slide:'(boolean|string)',pause:'(string|boolean)',wrap:'boolean'};var Direction={NEXT:'next',PREV:'prev',LEFT:'left',RIGHT:'right'};var Event={SLIDE:'slide'+EVENT_KEY,SLID:'slid'+EVENT_KEY,KEYDOWN:'keydown'+EVENT_KEY,MOUSEENTER:'mouseenter'+EVENT_KEY,MOUSELEAVE:'mouseleave'+EVENT_KEY,LOAD_DATA_API:'load'+EVENT_KEY+DATA_API_KEY,CLICK_DATA_API:'click'+EVENT_KEY+DATA_API_KEY};var ClassName={CAROUSEL:'carousel',ACTIVE:'active',SLIDE:'slide',RIGHT:'carousel-item-right',LEFT:'carousel-item-left',NEXT:'carousel-item-next',PREV:'carousel-item-prev',ITEM:'carousel-item'};var Selector={ACTIVE:'.active',ACTIVE_ITEM:'.active.carousel-item',ITEM:'.carousel-item',NEXT_PREV:'.carousel-item-next, .carousel-item-prev',INDICATORS:'.carousel-indicators',DATA_SLIDE:'[data-slide], [data-slide-to]',DATA_RIDE:'[data-ride="carousel"]'};/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */var Carousel=function(){function Carousel(element,config){_classCallCheck(this,Carousel);this._items=null;this._interval=null;this._activeElement=null;this._isPaused=false;this._isSliding=false;this._config=this._getConfig(config);this._element=$(element)[0];this._indicatorsElement=$(this._element).find(Selector.INDICATORS)[0];this._addEventListeners();}// getters
// public
Carousel.prototype.next=function next(){if(this._isSliding){throw new Error('Carousel is sliding');}this._slide(Direction.NEXT);};Carousel.prototype.nextWhenVisible=function nextWhenVisible(){// Don't call next when the page isn't visible
if(!document.hidden){this.next();}};Carousel.prototype.prev=function prev(){if(this._isSliding){throw new Error('Carousel is sliding');}this._slide(Direction.PREVIOUS);};Carousel.prototype.pause=function pause(event){if(!event){this._isPaused=true;}if($(this._element).find(Selector.NEXT_PREV)[0]&&Util.supportsTransitionEnd()){Util.triggerTransitionEnd(this._element);this.cycle(true);}clearInterval(this._interval);this._interval=null;};Carousel.prototype.cycle=function cycle(event){if(!event){this._isPaused=false;}if(this._interval){clearInterval(this._interval);this._interval=null;}if(this._config.interval&&!this._isPaused){this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval);}};Carousel.prototype.to=function to(index){var _this3=this;this._activeElement=$(this._element).find(Selector.ACTIVE_ITEM)[0];var activeIndex=this._getItemIndex(this._activeElement);if(index>this._items.length-1||index<0){return;}if(this._isSliding){$(this._element).one(Event.SLID,function(){return _this3.to(index);});return;}if(activeIndex===index){this.pause();this.cycle();return;}var direction=index>activeIndex?Direction.NEXT:Direction.PREVIOUS;this._slide(direction,this._items[index]);};Carousel.prototype.dispose=function dispose(){$(this._element).off(EVENT_KEY);$.removeData(this._element,DATA_KEY);this._items=null;this._config=null;this._element=null;this._interval=null;this._isPaused=null;this._isSliding=null;this._activeElement=null;this._indicatorsElement=null;};// private
Carousel.prototype._getConfig=function _getConfig(config){config=$.extend({},Default,config);Util.typeCheckConfig(NAME,config,DefaultType);return config;};Carousel.prototype._addEventListeners=function _addEventListeners(){var _this4=this;if(this._config.keyboard){$(this._element).on(Event.KEYDOWN,function(event){return _this4._keydown(event);});}if(this._config.pause==='hover'&&!('ontouchstart'in document.documentElement)){$(this._element).on(Event.MOUSEENTER,function(event){return _this4.pause(event);}).on(Event.MOUSELEAVE,function(event){return _this4.cycle(event);});}};Carousel.prototype._keydown=function _keydown(event){if(/input|textarea/i.test(event.target.tagName)){return;}switch(event.which){case ARROW_LEFT_KEYCODE:event.preventDefault();this.prev();break;case ARROW_RIGHT_KEYCODE:event.preventDefault();this.next();break;default:return;}};Carousel.prototype._getItemIndex=function _getItemIndex(element){this._items=$.makeArray($(element).parent().find(Selector.ITEM));return this._items.indexOf(element);};Carousel.prototype._getItemByDirection=function _getItemByDirection(direction,activeElement){var isNextDirection=direction===Direction.NEXT;var isPrevDirection=direction===Direction.PREVIOUS;var activeIndex=this._getItemIndex(activeElement);var lastItemIndex=this._items.length-1;var isGoingToWrap=isPrevDirection&&activeIndex===0||isNextDirection&&activeIndex===lastItemIndex;if(isGoingToWrap&&!this._config.wrap){return activeElement;}var delta=direction===Direction.PREVIOUS?-1:1;var itemIndex=(activeIndex+delta)%this._items.length;return itemIndex===-1?this._items[this._items.length-1]:this._items[itemIndex];};Carousel.prototype._triggerSlideEvent=function _triggerSlideEvent(relatedTarget,eventDirectionName){var slideEvent=$.Event(Event.SLIDE,{relatedTarget:relatedTarget,direction:eventDirectionName});$(this._element).trigger(slideEvent);return slideEvent;};Carousel.prototype._setActiveIndicatorElement=function _setActiveIndicatorElement(element){if(this._indicatorsElement){$(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);var nextIndicator=this._indicatorsElement.children[this._getItemIndex(element)];if(nextIndicator){$(nextIndicator).addClass(ClassName.ACTIVE);}}};Carousel.prototype._slide=function _slide(direction,element){var _this5=this;var activeElement=$(this._element).find(Selector.ACTIVE_ITEM)[0];var nextElement=element||activeElement&&this._getItemByDirection(direction,activeElement);var isCycling=Boolean(this._interval);var directionalClassName=void 0;var orderClassName=void 0;var eventDirectionName=void 0;if(direction===Direction.NEXT){directionalClassName=ClassName.LEFT;orderClassName=ClassName.NEXT;eventDirectionName=Direction.LEFT;}else{directionalClassName=ClassName.RIGHT;orderClassName=ClassName.PREV;eventDirectionName=Direction.RIGHT;}if(nextElement&&$(nextElement).hasClass(ClassName.ACTIVE)){this._isSliding=false;return;}var slideEvent=this._triggerSlideEvent(nextElement,eventDirectionName);if(slideEvent.isDefaultPrevented()){return;}if(!activeElement||!nextElement){// some weirdness is happening, so we bail
return;}this._isSliding=true;if(isCycling){this.pause();}this._setActiveIndicatorElement(nextElement);var slidEvent=$.Event(Event.SLID,{relatedTarget:nextElement,direction:eventDirectionName});if(Util.supportsTransitionEnd()&&$(this._element).hasClass(ClassName.SLIDE)){$(nextElement).addClass(orderClassName);Util.reflow(nextElement);$(activeElement).addClass(directionalClassName);$(nextElement).addClass(directionalClassName);$(activeElement).one(Util.TRANSITION_END,function(){$(nextElement).removeClass(directionalClassName+' '+orderClassName).addClass(ClassName.ACTIVE);$(activeElement).removeClass(ClassName.ACTIVE+' '+orderClassName+' '+directionalClassName);_this5._isSliding=false;setTimeout(function(){return $(_this5._element).trigger(slidEvent);},0);}).emulateTransitionEnd(TRANSITION_DURATION);}else{$(activeElement).removeClass(ClassName.ACTIVE);$(nextElement).addClass(ClassName.ACTIVE);this._isSliding=false;$(this._element).trigger(slidEvent);}if(isCycling){this.cycle();}};// static
Carousel._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY);var _config=$.extend({},Default,$(this).data());if((typeof config==='undefined'?'undefined':_typeof(config))==='object'){$.extend(_config,config);}var action=typeof config==='string'?config:_config.slide;if(!data){data=new Carousel(this,_config);$(this).data(DATA_KEY,data);}if(typeof config==='number'){data.to(config);}else if(typeof action==='string'){if(data[action]===undefined){throw new Error('No method named "'+action+'"');}data[action]();}else if(_config.interval){data.pause();data.cycle();}});};Carousel._dataApiClickHandler=function _dataApiClickHandler(event){var selector=Util.getSelectorFromElement(this);if(!selector){return;}var target=$(selector)[0];if(!target||!$(target).hasClass(ClassName.CAROUSEL)){return;}var config=$.extend({},$(target).data(),$(this).data());var slideIndex=this.getAttribute('data-slide-to');if(slideIndex){config.interval=false;}Carousel._jQueryInterface.call($(target),config);if(slideIndex){$(target).data(DATA_KEY).to(slideIndex);}event.preventDefault();};_createClass(Carousel,null,[{key:'VERSION',get:function get(){return VERSION;}},{key:'Default',get:function get(){return Default;}}]);return Carousel;}();/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */$(document).on(Event.CLICK_DATA_API,Selector.DATA_SLIDE,Carousel._dataApiClickHandler);$(window).on(Event.LOAD_DATA_API,function(){$(Selector.DATA_RIDE).each(function(){var $carousel=$(this);Carousel._jQueryInterface.call($carousel,$carousel.data());});});/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME]=Carousel._jQueryInterface;$.fn[NAME].Constructor=Carousel;$.fn[NAME].noConflict=function(){$.fn[NAME]=JQUERY_NO_CONFLICT;return Carousel._jQueryInterface;};return Carousel;}(jQuery);/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var Collapse=function($){/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='collapse';var VERSION='4.0.0-alpha.6';var DATA_KEY='bs.collapse';var EVENT_KEY='.'+DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$.fn[NAME];var TRANSITION_DURATION=600;var Default={toggle:true,parent:''};var DefaultType={toggle:'boolean',parent:'string'};var Event={SHOW:'show'+EVENT_KEY,SHOWN:'shown'+EVENT_KEY,HIDE:'hide'+EVENT_KEY,HIDDEN:'hidden'+EVENT_KEY,CLICK_DATA_API:'click'+EVENT_KEY+DATA_API_KEY};var ClassName={SHOW:'show',COLLAPSE:'collapse',COLLAPSING:'collapsing',COLLAPSED:'collapsed'};var Dimension={WIDTH:'width',HEIGHT:'height'};var Selector={ACTIVES:'.card > .show, .card > .collapsing',DATA_TOGGLE:'[data-toggle="collapse"]'};/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */var Collapse=function(){function Collapse(element,config){_classCallCheck(this,Collapse);this._isTransitioning=false;this._element=element;this._config=this._getConfig(config);this._triggerArray=$.makeArray($('[data-toggle="collapse"][href="#'+element.id+'"],'+('[data-toggle="collapse"][data-target="#'+element.id+'"]')));this._parent=this._config.parent?this._getParent():null;if(!this._config.parent){this._addAriaAndCollapsedClass(this._element,this._triggerArray);}if(this._config.toggle){this.toggle();}}// getters
// public
Collapse.prototype.toggle=function toggle(){if($(this._element).hasClass(ClassName.SHOW)){this.hide();}else{this.show();}};Collapse.prototype.show=function show(){var _this6=this;if(this._isTransitioning){throw new Error('Collapse is transitioning');}if($(this._element).hasClass(ClassName.SHOW)){return;}var actives=void 0;var activesData=void 0;if(this._parent){actives=$.makeArray($(this._parent).find(Selector.ACTIVES));if(!actives.length){actives=null;}}if(actives){activesData=$(actives).data(DATA_KEY);if(activesData&&activesData._isTransitioning){return;}}var startEvent=$.Event(Event.SHOW);$(this._element).trigger(startEvent);if(startEvent.isDefaultPrevented()){return;}if(actives){Collapse._jQueryInterface.call($(actives),'hide');if(!activesData){$(actives).data(DATA_KEY,null);}}var dimension=this._getDimension();$(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);this._element.style[dimension]=0;this._element.setAttribute('aria-expanded',true);if(this._triggerArray.length){$(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded',true);}this.setTransitioning(true);var complete=function complete(){$(_this6._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);_this6._element.style[dimension]='';_this6.setTransitioning(false);$(_this6._element).trigger(Event.SHOWN);};if(!Util.supportsTransitionEnd()){complete();return;}var capitalizedDimension=dimension[0].toUpperCase()+dimension.slice(1);var scrollSize='scroll'+capitalizedDimension;$(this._element).one(Util.TRANSITION_END,complete).emulateTransitionEnd(TRANSITION_DURATION);this._element.style[dimension]=this._element[scrollSize]+'px';};Collapse.prototype.hide=function hide(){var _this7=this;if(this._isTransitioning){throw new Error('Collapse is transitioning');}if(!$(this._element).hasClass(ClassName.SHOW)){return;}var startEvent=$.Event(Event.HIDE);$(this._element).trigger(startEvent);if(startEvent.isDefaultPrevented()){return;}var dimension=this._getDimension();var offsetDimension=dimension===Dimension.WIDTH?'offsetWidth':'offsetHeight';this._element.style[dimension]=this._element[offsetDimension]+'px';Util.reflow(this._element);$(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);this._element.setAttribute('aria-expanded',false);if(this._triggerArray.length){$(this._triggerArray).addClass(ClassName.COLLAPSED).attr('aria-expanded',false);}this.setTransitioning(true);var complete=function complete(){_this7.setTransitioning(false);$(_this7._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);};this._element.style[dimension]='';if(!Util.supportsTransitionEnd()){complete();return;}$(this._element).one(Util.TRANSITION_END,complete).emulateTransitionEnd(TRANSITION_DURATION);};Collapse.prototype.setTransitioning=function setTransitioning(isTransitioning){this._isTransitioning=isTransitioning;};Collapse.prototype.dispose=function dispose(){$.removeData(this._element,DATA_KEY);this._config=null;this._parent=null;this._element=null;this._triggerArray=null;this._isTransitioning=null;};// private
Collapse.prototype._getConfig=function _getConfig(config){config=$.extend({},Default,config);config.toggle=Boolean(config.toggle);// coerce string values
Util.typeCheckConfig(NAME,config,DefaultType);return config;};Collapse.prototype._getDimension=function _getDimension(){var hasWidth=$(this._element).hasClass(Dimension.WIDTH);return hasWidth?Dimension.WIDTH:Dimension.HEIGHT;};Collapse.prototype._getParent=function _getParent(){var _this8=this;var parent=$(this._config.parent)[0];var selector='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';$(parent).find(selector).each(function(i,element){_this8._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element),[element]);});return parent;};Collapse.prototype._addAriaAndCollapsedClass=function _addAriaAndCollapsedClass(element,triggerArray){if(element){var isOpen=$(element).hasClass(ClassName.SHOW);element.setAttribute('aria-expanded',isOpen);if(triggerArray.length){$(triggerArray).toggleClass(ClassName.COLLAPSED,!isOpen).attr('aria-expanded',isOpen);}}};// static
Collapse._getTargetFromElement=function _getTargetFromElement(element){var selector=Util.getSelectorFromElement(element);return selector?$(selector)[0]:null;};Collapse._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var $this=$(this);var data=$this.data(DATA_KEY);var _config=$.extend({},Default,$this.data(),(typeof config==='undefined'?'undefined':_typeof(config))==='object'&&config);if(!data&&_config.toggle&&/show|hide/.test(config)){_config.toggle=false;}if(!data){data=new Collapse(this,_config);$this.data(DATA_KEY,data);}if(typeof config==='string'){if(data[config]===undefined){throw new Error('No method named "'+config+'"');}data[config]();}});};_createClass(Collapse,null,[{key:'VERSION',get:function get(){return VERSION;}},{key:'Default',get:function get(){return Default;}}]);return Collapse;}();/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */$(document).on(Event.CLICK_DATA_API,Selector.DATA_TOGGLE,function(event){event.preventDefault();var target=Collapse._getTargetFromElement(this);var data=$(target).data(DATA_KEY);var config=data?'toggle':$(this).data();Collapse._jQueryInterface.call($(target),config);});/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME]=Collapse._jQueryInterface;$.fn[NAME].Constructor=Collapse;$.fn[NAME].noConflict=function(){$.fn[NAME]=JQUERY_NO_CONFLICT;return Collapse._jQueryInterface;};return Collapse;}(jQuery);/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var Dropdown=function($){/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='dropdown';var VERSION='4.0.0-alpha.6';var DATA_KEY='bs.dropdown';var EVENT_KEY='.'+DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$.fn[NAME];var ESCAPE_KEYCODE=27;// KeyboardEvent.which value for Escape (Esc) key
var ARROW_UP_KEYCODE=38;// KeyboardEvent.which value for up arrow key
var ARROW_DOWN_KEYCODE=40;// KeyboardEvent.which value for down arrow key
var RIGHT_MOUSE_BUTTON_WHICH=3;// MouseEvent.which value for the right button (assuming a right-handed mouse)
var Event={HIDE:'hide'+EVENT_KEY,HIDDEN:'hidden'+EVENT_KEY,SHOW:'show'+EVENT_KEY,SHOWN:'shown'+EVENT_KEY,CLICK:'click'+EVENT_KEY,CLICK_DATA_API:'click'+EVENT_KEY+DATA_API_KEY,FOCUSIN_DATA_API:'focusin'+EVENT_KEY+DATA_API_KEY,KEYDOWN_DATA_API:'keydown'+EVENT_KEY+DATA_API_KEY};var ClassName={BACKDROP:'dropdown-backdrop',DISABLED:'disabled',SHOW:'show'};var Selector={BACKDROP:'.dropdown-backdrop',DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:'.dropdown form',ROLE_MENU:'[role="menu"]',ROLE_LISTBOX:'[role="listbox"]',NAVBAR_NAV:'.navbar-nav',VISIBLE_ITEMS:'[role="menu"] li:not(.disabled) a, '+'[role="listbox"] li:not(.disabled) a'};/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */var Dropdown=function(){function Dropdown(element){_classCallCheck(this,Dropdown);this._element=element;this._addEventListeners();}// getters
// public
Dropdown.prototype.toggle=function toggle(){if(this.disabled||$(this).hasClass(ClassName.DISABLED)){return false;}var parent=Dropdown._getParentFromElement(this);var isActive=$(parent).hasClass(ClassName.SHOW);Dropdown._clearMenus();if(isActive){return false;}if('ontouchstart'in document.documentElement&&!$(parent).closest(Selector.NAVBAR_NAV).length){// if mobile we use a backdrop because click events don't delegate
var dropdown=document.createElement('div');dropdown.className=ClassName.BACKDROP;$(dropdown).insertBefore(this);$(dropdown).on('click',Dropdown._clearMenus);}var relatedTarget={relatedTarget:this};var showEvent=$.Event(Event.SHOW,relatedTarget);$(parent).trigger(showEvent);if(showEvent.isDefaultPrevented()){return false;}this.focus();this.setAttribute('aria-expanded',true);$(parent).toggleClass(ClassName.SHOW);$(parent).trigger($.Event(Event.SHOWN,relatedTarget));return false;};Dropdown.prototype.dispose=function dispose(){$.removeData(this._element,DATA_KEY);$(this._element).off(EVENT_KEY);this._element=null;};// private
Dropdown.prototype._addEventListeners=function _addEventListeners(){$(this._element).on(Event.CLICK,this.toggle);};// static
Dropdown._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY);if(!data){data=new Dropdown(this);$(this).data(DATA_KEY,data);}if(typeof config==='string'){if(data[config]===undefined){throw new Error('No method named "'+config+'"');}data[config].call(this);}});};Dropdown._clearMenus=function _clearMenus(event){if(event&&event.which===RIGHT_MOUSE_BUTTON_WHICH){return;}var backdrop=$(Selector.BACKDROP)[0];if(backdrop){backdrop.parentNode.removeChild(backdrop);}var toggles=$.makeArray($(Selector.DATA_TOGGLE));for(var i=0;i<toggles.length;i++){var parent=Dropdown._getParentFromElement(toggles[i]);var relatedTarget={relatedTarget:toggles[i]};if(!$(parent).hasClass(ClassName.SHOW)){continue;}if(event&&(event.type==='click'&&/input|textarea/i.test(event.target.tagName)||event.type==='focusin')&&$.contains(parent,event.target)){continue;}var hideEvent=$.Event(Event.HIDE,relatedTarget);$(parent).trigger(hideEvent);if(hideEvent.isDefaultPrevented()){continue;}toggles[i].setAttribute('aria-expanded','false');$(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN,relatedTarget));}};Dropdown._getParentFromElement=function _getParentFromElement(element){var parent=void 0;var selector=Util.getSelectorFromElement(element);if(selector){parent=$(selector)[0];}return parent||element.parentNode;};Dropdown._dataApiKeydownHandler=function _dataApiKeydownHandler(event){if(!/(38|40|27|32)/.test(event.which)||/input|textarea/i.test(event.target.tagName)){return;}event.preventDefault();event.stopPropagation();if(this.disabled||$(this).hasClass(ClassName.DISABLED)){return;}var parent=Dropdown._getParentFromElement(this);var isActive=$(parent).hasClass(ClassName.SHOW);if(!isActive&&event.which!==ESCAPE_KEYCODE||isActive&&event.which===ESCAPE_KEYCODE){if(event.which===ESCAPE_KEYCODE){var toggle=$(parent).find(Selector.DATA_TOGGLE)[0];$(toggle).trigger('focus');}$(this).trigger('click');return;}var items=$(parent).find(Selector.VISIBLE_ITEMS).get();if(!items.length){return;}var index=items.indexOf(event.target);if(event.which===ARROW_UP_KEYCODE&&index>0){// up
index--;}if(event.which===ARROW_DOWN_KEYCODE&&index<items.length-1){// down
index++;}if(index<0){index=0;}items[index].focus();};_createClass(Dropdown,null,[{key:'VERSION',get:function get(){return VERSION;}}]);return Dropdown;}();/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */$(document).on(Event.KEYDOWN_DATA_API,Selector.DATA_TOGGLE,Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API,Selector.ROLE_MENU,Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API,Selector.ROLE_LISTBOX,Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API+' '+Event.FOCUSIN_DATA_API,Dropdown._clearMenus).on(Event.CLICK_DATA_API,Selector.DATA_TOGGLE,Dropdown.prototype.toggle).on(Event.CLICK_DATA_API,Selector.FORM_CHILD,function(e){e.stopPropagation();});/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME]=Dropdown._jQueryInterface;$.fn[NAME].Constructor=Dropdown;$.fn[NAME].noConflict=function(){$.fn[NAME]=JQUERY_NO_CONFLICT;return Dropdown._jQueryInterface;};return Dropdown;}(jQuery);/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var Modal=function($){/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='modal';var VERSION='4.0.0-alpha.6';var DATA_KEY='bs.modal';var EVENT_KEY='.'+DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$.fn[NAME];var TRANSITION_DURATION=300;var BACKDROP_TRANSITION_DURATION=150;var ESCAPE_KEYCODE=27;// KeyboardEvent.which value for Escape (Esc) key
var Default={backdrop:true,keyboard:true,focus:true,show:true};var DefaultType={backdrop:'(boolean|string)',keyboard:'boolean',focus:'boolean',show:'boolean'};var Event={HIDE:'hide'+EVENT_KEY,HIDDEN:'hidden'+EVENT_KEY,SHOW:'show'+EVENT_KEY,SHOWN:'shown'+EVENT_KEY,FOCUSIN:'focusin'+EVENT_KEY,RESIZE:'resize'+EVENT_KEY,CLICK_DISMISS:'click.dismiss'+EVENT_KEY,KEYDOWN_DISMISS:'keydown.dismiss'+EVENT_KEY,MOUSEUP_DISMISS:'mouseup.dismiss'+EVENT_KEY,MOUSEDOWN_DISMISS:'mousedown.dismiss'+EVENT_KEY,CLICK_DATA_API:'click'+EVENT_KEY+DATA_API_KEY};var ClassName={SCROLLBAR_MEASURER:'modal-scrollbar-measure',BACKDROP:'modal-backdrop',OPEN:'modal-open',FADE:'fade',SHOW:'show'};var Selector={DIALOG:'.modal-dialog',DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:'.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'};/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */var Modal=function(){function Modal(element,config){_classCallCheck(this,Modal);this._config=this._getConfig(config);this._element=element;this._dialog=$(element).find(Selector.DIALOG)[0];this._backdrop=null;this._isShown=false;this._isBodyOverflowing=false;this._ignoreBackdropClick=false;this._isTransitioning=false;this._originalBodyPadding=0;this._scrollbarWidth=0;}// getters
// public
Modal.prototype.toggle=function toggle(relatedTarget){return this._isShown?this.hide():this.show(relatedTarget);};Modal.prototype.show=function show(relatedTarget){var _this9=this;if(this._isTransitioning){throw new Error('Modal is transitioning');}if(Util.supportsTransitionEnd()&&$(this._element).hasClass(ClassName.FADE)){this._isTransitioning=true;}var showEvent=$.Event(Event.SHOW,{relatedTarget:relatedTarget});$(this._element).trigger(showEvent);if(this._isShown||showEvent.isDefaultPrevented()){return;}this._isShown=true;this._checkScrollbar();this._setScrollbar();$(document.body).addClass(ClassName.OPEN);this._setEscapeEvent();this._setResizeEvent();$(this._element).on(Event.CLICK_DISMISS,Selector.DATA_DISMISS,function(event){return _this9.hide(event);});$(this._dialog).on(Event.MOUSEDOWN_DISMISS,function(){$(_this9._element).one(Event.MOUSEUP_DISMISS,function(event){if($(event.target).is(_this9._element)){_this9._ignoreBackdropClick=true;}});});this._showBackdrop(function(){return _this9._showElement(relatedTarget);});};Modal.prototype.hide=function hide(event){var _this10=this;if(event){event.preventDefault();}if(this._isTransitioning){throw new Error('Modal is transitioning');}var transition=Util.supportsTransitionEnd()&&$(this._element).hasClass(ClassName.FADE);if(transition){this._isTransitioning=true;}var hideEvent=$.Event(Event.HIDE);$(this._element).trigger(hideEvent);if(!this._isShown||hideEvent.isDefaultPrevented()){return;}this._isShown=false;this._setEscapeEvent();this._setResizeEvent();$(document).off(Event.FOCUSIN);$(this._element).removeClass(ClassName.SHOW);$(this._element).off(Event.CLICK_DISMISS);$(this._dialog).off(Event.MOUSEDOWN_DISMISS);if(transition){$(this._element).one(Util.TRANSITION_END,function(event){return _this10._hideModal(event);}).emulateTransitionEnd(TRANSITION_DURATION);}else{this._hideModal();}};Modal.prototype.dispose=function dispose(){$.removeData(this._element,DATA_KEY);$(window,document,this._element,this._backdrop).off(EVENT_KEY);this._config=null;this._element=null;this._dialog=null;this._backdrop=null;this._isShown=null;this._isBodyOverflowing=null;this._ignoreBackdropClick=null;this._originalBodyPadding=null;this._scrollbarWidth=null;};// private
Modal.prototype._getConfig=function _getConfig(config){config=$.extend({},Default,config);Util.typeCheckConfig(NAME,config,DefaultType);return config;};Modal.prototype._showElement=function _showElement(relatedTarget){var _this11=this;var transition=Util.supportsTransitionEnd()&&$(this._element).hasClass(ClassName.FADE);if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE){// don't move modals dom position
document.body.appendChild(this._element);}this._element.style.display='block';this._element.removeAttribute('aria-hidden');this._element.scrollTop=0;if(transition){Util.reflow(this._element);}$(this._element).addClass(ClassName.SHOW);if(this._config.focus){this._enforceFocus();}var shownEvent=$.Event(Event.SHOWN,{relatedTarget:relatedTarget});var transitionComplete=function transitionComplete(){if(_this11._config.focus){_this11._element.focus();}_this11._isTransitioning=false;$(_this11._element).trigger(shownEvent);};if(transition){$(this._dialog).one(Util.TRANSITION_END,transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);}else{transitionComplete();}};Modal.prototype._enforceFocus=function _enforceFocus(){var _this12=this;$(document).off(Event.FOCUSIN)// guard against infinite focus loop
.on(Event.FOCUSIN,function(event){if(document!==event.target&&_this12._element!==event.target&&!$(_this12._element).has(event.target).length){_this12._element.focus();}});};Modal.prototype._setEscapeEvent=function _setEscapeEvent(){var _this13=this;if(this._isShown&&this._config.keyboard){$(this._element).on(Event.KEYDOWN_DISMISS,function(event){if(event.which===ESCAPE_KEYCODE){_this13.hide();}});}else if(!this._isShown){$(this._element).off(Event.KEYDOWN_DISMISS);}};Modal.prototype._setResizeEvent=function _setResizeEvent(){var _this14=this;if(this._isShown){$(window).on(Event.RESIZE,function(event){return _this14._handleUpdate(event);});}else{$(window).off(Event.RESIZE);}};Modal.prototype._hideModal=function _hideModal(){var _this15=this;this._element.style.display='none';this._element.setAttribute('aria-hidden','true');this._isTransitioning=false;this._showBackdrop(function(){$(document.body).removeClass(ClassName.OPEN);_this15._resetAdjustments();_this15._resetScrollbar();$(_this15._element).trigger(Event.HIDDEN);});};Modal.prototype._removeBackdrop=function _removeBackdrop(){if(this._backdrop){$(this._backdrop).remove();this._backdrop=null;}};Modal.prototype._showBackdrop=function _showBackdrop(callback){var _this16=this;var animate=$(this._element).hasClass(ClassName.FADE)?ClassName.FADE:'';if(this._isShown&&this._config.backdrop){var doAnimate=Util.supportsTransitionEnd()&&animate;this._backdrop=document.createElement('div');this._backdrop.className=ClassName.BACKDROP;if(animate){$(this._backdrop).addClass(animate);}$(this._backdrop).appendTo(document.body);$(this._element).on(Event.CLICK_DISMISS,function(event){if(_this16._ignoreBackdropClick){_this16._ignoreBackdropClick=false;return;}if(event.target!==event.currentTarget){return;}if(_this16._config.backdrop==='static'){_this16._element.focus();}else{_this16.hide();}});if(doAnimate){Util.reflow(this._backdrop);}$(this._backdrop).addClass(ClassName.SHOW);if(!callback){return;}if(!doAnimate){callback();return;}$(this._backdrop).one(Util.TRANSITION_END,callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);}else if(!this._isShown&&this._backdrop){$(this._backdrop).removeClass(ClassName.SHOW);var callbackRemove=function callbackRemove(){_this16._removeBackdrop();if(callback){callback();}};if(Util.supportsTransitionEnd()&&$(this._element).hasClass(ClassName.FADE)){$(this._backdrop).one(Util.TRANSITION_END,callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);}else{callbackRemove();}}else if(callback){callback();}};// ----------------------------------------------------------------------
// the following methods are used to handle overflowing modals
// todo (fat): these should probably be refactored out of modal.js
// ----------------------------------------------------------------------
Modal.prototype._handleUpdate=function _handleUpdate(){this._adjustDialog();};Modal.prototype._adjustDialog=function _adjustDialog(){var isModalOverflowing=this._element.scrollHeight>document.documentElement.clientHeight;if(!this._isBodyOverflowing&&isModalOverflowing){this._element.style.paddingLeft=this._scrollbarWidth+'px';}if(this._isBodyOverflowing&&!isModalOverflowing){this._element.style.paddingRight=this._scrollbarWidth+'px';}};Modal.prototype._resetAdjustments=function _resetAdjustments(){this._element.style.paddingLeft='';this._element.style.paddingRight='';};Modal.prototype._checkScrollbar=function _checkScrollbar(){this._isBodyOverflowing=document.body.clientWidth<window.innerWidth;this._scrollbarWidth=this._getScrollbarWidth();};Modal.prototype._setScrollbar=function _setScrollbar(){var bodyPadding=parseInt($(Selector.FIXED_CONTENT).css('padding-right')||0,10);this._originalBodyPadding=document.body.style.paddingRight||'';if(this._isBodyOverflowing){document.body.style.paddingRight=bodyPadding+this._scrollbarWidth+'px';}};Modal.prototype._resetScrollbar=function _resetScrollbar(){document.body.style.paddingRight=this._originalBodyPadding;};Modal.prototype._getScrollbarWidth=function _getScrollbarWidth(){// thx d.walsh
var scrollDiv=document.createElement('div');scrollDiv.className=ClassName.SCROLLBAR_MEASURER;document.body.appendChild(scrollDiv);var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;document.body.removeChild(scrollDiv);return scrollbarWidth;};// static
Modal._jQueryInterface=function _jQueryInterface(config,relatedTarget){return this.each(function(){var data=$(this).data(DATA_KEY);var _config=$.extend({},Modal.Default,$(this).data(),(typeof config==='undefined'?'undefined':_typeof(config))==='object'&&config);if(!data){data=new Modal(this,_config);$(this).data(DATA_KEY,data);}if(typeof config==='string'){if(data[config]===undefined){throw new Error('No method named "'+config+'"');}data[config](relatedTarget);}else if(_config.show){data.show(relatedTarget);}});};_createClass(Modal,null,[{key:'VERSION',get:function get(){return VERSION;}},{key:'Default',get:function get(){return Default;}}]);return Modal;}();/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */$(document).on(Event.CLICK_DATA_API,Selector.DATA_TOGGLE,function(event){var _this17=this;var target=void 0;var selector=Util.getSelectorFromElement(this);if(selector){target=$(selector)[0];}var config=$(target).data(DATA_KEY)?'toggle':$.extend({},$(target).data(),$(this).data());if(this.tagName==='A'||this.tagName==='AREA'){event.preventDefault();}var $target=$(target).one(Event.SHOW,function(showEvent){if(showEvent.isDefaultPrevented()){// only register focus restorer if modal will actually get shown
return;}$target.one(Event.HIDDEN,function(){if($(_this17).is(':visible')){_this17.focus();}});});Modal._jQueryInterface.call($(target),config,this);});/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME]=Modal._jQueryInterface;$.fn[NAME].Constructor=Modal;$.fn[NAME].noConflict=function(){$.fn[NAME]=JQUERY_NO_CONFLICT;return Modal._jQueryInterface;};return Modal;}(jQuery);/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var ScrollSpy=function($){/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='scrollspy';var VERSION='4.0.0-alpha.6';var DATA_KEY='bs.scrollspy';var EVENT_KEY='.'+DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$.fn[NAME];var Default={offset:10,method:'auto',target:''};var DefaultType={offset:'number',method:'string',target:'(string|element)'};var Event={ACTIVATE:'activate'+EVENT_KEY,SCROLL:'scroll'+EVENT_KEY,LOAD_DATA_API:'load'+EVENT_KEY+DATA_API_KEY};var ClassName={DROPDOWN_ITEM:'dropdown-item',DROPDOWN_MENU:'dropdown-menu',NAV_LINK:'nav-link',NAV:'nav',ACTIVE:'active'};var Selector={DATA_SPY:'[data-spy="scroll"]',ACTIVE:'.active',LIST_ITEM:'.list-item',LI:'li',LI_DROPDOWN:'li.dropdown',NAV_LINKS:'.nav-link',DROPDOWN:'.dropdown',DROPDOWN_ITEMS:'.dropdown-item',DROPDOWN_TOGGLE:'.dropdown-toggle'};var OffsetMethod={OFFSET:'offset',POSITION:'position'};/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */var ScrollSpy=function(){function ScrollSpy(element,config){var _this18=this;_classCallCheck(this,ScrollSpy);this._element=element;this._scrollElement=element.tagName==='BODY'?window:element;this._config=this._getConfig(config);this._selector=this._config.target+' '+Selector.NAV_LINKS+','+(this._config.target+' '+Selector.DROPDOWN_ITEMS);this._offsets=[];this._targets=[];this._activeTarget=null;this._scrollHeight=0;$(this._scrollElement).on(Event.SCROLL,function(event){return _this18._process(event);});this.refresh();this._process();}// getters
// public
ScrollSpy.prototype.refresh=function refresh(){var _this19=this;var autoMethod=this._scrollElement!==this._scrollElement.window?OffsetMethod.POSITION:OffsetMethod.OFFSET;var offsetMethod=this._config.method==='auto'?autoMethod:this._config.method;var offsetBase=offsetMethod===OffsetMethod.POSITION?this._getScrollTop():0;this._offsets=[];this._targets=[];this._scrollHeight=this._getScrollHeight();var targets=$.makeArray($(this._selector));targets.map(function(element){var target=void 0;var targetSelector=Util.getSelectorFromElement(element);if(targetSelector){target=$(targetSelector)[0];}if(target&&(target.offsetWidth||target.offsetHeight)){// todo (fat): remove sketch reliance on jQuery position/offset
return[$(target)[offsetMethod]().top+offsetBase,targetSelector];}return null;}).filter(function(item){return item;}).sort(function(a,b){return a[0]-b[0];}).forEach(function(item){_this19._offsets.push(item[0]);_this19._targets.push(item[1]);});};ScrollSpy.prototype.dispose=function dispose(){$.removeData(this._element,DATA_KEY);$(this._scrollElement).off(EVENT_KEY);this._element=null;this._scrollElement=null;this._config=null;this._selector=null;this._offsets=null;this._targets=null;this._activeTarget=null;this._scrollHeight=null;};// private
ScrollSpy.prototype._getConfig=function _getConfig(config){config=$.extend({},Default,config);if(typeof config.target!=='string'){var id=$(config.target).attr('id');if(!id){id=Util.getUID(NAME);$(config.target).attr('id',id);}config.target='#'+id;}Util.typeCheckConfig(NAME,config,DefaultType);return config;};ScrollSpy.prototype._getScrollTop=function _getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop;};ScrollSpy.prototype._getScrollHeight=function _getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);};ScrollSpy.prototype._getOffsetHeight=function _getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.offsetHeight;};ScrollSpy.prototype._process=function _process(){var scrollTop=this._getScrollTop()+this._config.offset;var scrollHeight=this._getScrollHeight();var maxScroll=this._config.offset+scrollHeight-this._getOffsetHeight();if(this._scrollHeight!==scrollHeight){this.refresh();}if(scrollTop>=maxScroll){var target=this._targets[this._targets.length-1];if(this._activeTarget!==target){this._activate(target);}return;}if(this._activeTarget&&scrollTop<this._offsets[0]&&this._offsets[0]>0){this._activeTarget=null;this._clear();return;}for(var i=this._offsets.length;i--;){var isActiveTarget=this._activeTarget!==this._targets[i]&&scrollTop>=this._offsets[i]&&(this._offsets[i+1]===undefined||scrollTop<this._offsets[i+1]);if(isActiveTarget){this._activate(this._targets[i]);}}};ScrollSpy.prototype._activate=function _activate(target){this._activeTarget=target;this._clear();var queries=this._selector.split(',');queries=queries.map(function(selector){return selector+'[data-target="'+target+'"],'+(selector+'[href="'+target+'"]');});var $link=$(queries.join(','));if($link.hasClass(ClassName.DROPDOWN_ITEM)){$link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);$link.addClass(ClassName.ACTIVE);}else{// todo (fat) this is kinda sus...
// recursively add actives to tested nav-links
$link.parents(Selector.LI).find('> '+Selector.NAV_LINKS).addClass(ClassName.ACTIVE);}$(this._scrollElement).trigger(Event.ACTIVATE,{relatedTarget:target});};ScrollSpy.prototype._clear=function _clear(){$(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);};// static
ScrollSpy._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY);var _config=(typeof config==='undefined'?'undefined':_typeof(config))==='object'&&config;if(!data){data=new ScrollSpy(this,_config);$(this).data(DATA_KEY,data);}if(typeof config==='string'){if(data[config]===undefined){throw new Error('No method named "'+config+'"');}data[config]();}});};_createClass(ScrollSpy,null,[{key:'VERSION',get:function get(){return VERSION;}},{key:'Default',get:function get(){return Default;}}]);return ScrollSpy;}();/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */$(window).on(Event.LOAD_DATA_API,function(){var scrollSpys=$.makeArray($(Selector.DATA_SPY));for(var i=scrollSpys.length;i--;){var $spy=$(scrollSpys[i]);ScrollSpy._jQueryInterface.call($spy,$spy.data());}});/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME]=ScrollSpy._jQueryInterface;$.fn[NAME].Constructor=ScrollSpy;$.fn[NAME].noConflict=function(){$.fn[NAME]=JQUERY_NO_CONFLICT;return ScrollSpy._jQueryInterface;};return ScrollSpy;}(jQuery);/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var Tab=function($){/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='tab';var VERSION='4.0.0-alpha.6';var DATA_KEY='bs.tab';var EVENT_KEY='.'+DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$.fn[NAME];var TRANSITION_DURATION=150;var Event={HIDE:'hide'+EVENT_KEY,HIDDEN:'hidden'+EVENT_KEY,SHOW:'show'+EVENT_KEY,SHOWN:'shown'+EVENT_KEY,CLICK_DATA_API:'click'+EVENT_KEY+DATA_API_KEY};var ClassName={DROPDOWN_MENU:'dropdown-menu',ACTIVE:'active',DISABLED:'disabled',FADE:'fade',SHOW:'show'};var Selector={A:'a',LI:'li',DROPDOWN:'.dropdown',LIST:'ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)',FADE_CHILD:'> .nav-item .fade, > .fade',ACTIVE:'.active',ACTIVE_CHILD:'> .nav-item > .active, > .active',DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"]',DROPDOWN_TOGGLE:'.dropdown-toggle',DROPDOWN_ACTIVE_CHILD:'> .dropdown-menu .active'};/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */var Tab=function(){function Tab(element){_classCallCheck(this,Tab);this._element=element;}// getters
// public
Tab.prototype.show=function show(){var _this20=this;if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&$(this._element).hasClass(ClassName.ACTIVE)||$(this._element).hasClass(ClassName.DISABLED)){return;}var target=void 0;var previous=void 0;var listElement=$(this._element).closest(Selector.LIST)[0];var selector=Util.getSelectorFromElement(this._element);if(listElement){previous=$.makeArray($(listElement).find(Selector.ACTIVE));previous=previous[previous.length-1];}var hideEvent=$.Event(Event.HIDE,{relatedTarget:this._element});var showEvent=$.Event(Event.SHOW,{relatedTarget:previous});if(previous){$(previous).trigger(hideEvent);}$(this._element).trigger(showEvent);if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented()){return;}if(selector){target=$(selector)[0];}this._activate(this._element,listElement);var complete=function complete(){var hiddenEvent=$.Event(Event.HIDDEN,{relatedTarget:_this20._element});var shownEvent=$.Event(Event.SHOWN,{relatedTarget:previous});$(previous).trigger(hiddenEvent);$(_this20._element).trigger(shownEvent);};if(target){this._activate(target,target.parentNode,complete);}else{complete();}};Tab.prototype.dispose=function dispose(){$.removeClass(this._element,DATA_KEY);this._element=null;};// private
Tab.prototype._activate=function _activate(element,container,callback){var _this21=this;var active=$(container).find(Selector.ACTIVE_CHILD)[0];var isTransitioning=callback&&Util.supportsTransitionEnd()&&(active&&$(active).hasClass(ClassName.FADE)||Boolean($(container).find(Selector.FADE_CHILD)[0]));var complete=function complete(){return _this21._transitionComplete(element,active,isTransitioning,callback);};if(active&&isTransitioning){$(active).one(Util.TRANSITION_END,complete).emulateTransitionEnd(TRANSITION_DURATION);}else{complete();}if(active){$(active).removeClass(ClassName.SHOW);}};Tab.prototype._transitionComplete=function _transitionComplete(element,active,isTransitioning,callback){if(active){$(active).removeClass(ClassName.ACTIVE);var dropdownChild=$(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];if(dropdownChild){$(dropdownChild).removeClass(ClassName.ACTIVE);}active.setAttribute('aria-expanded',false);}$(element).addClass(ClassName.ACTIVE);element.setAttribute('aria-expanded',true);if(isTransitioning){Util.reflow(element);$(element).addClass(ClassName.SHOW);}else{$(element).removeClass(ClassName.FADE);}if(element.parentNode&&$(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)){var dropdownElement=$(element).closest(Selector.DROPDOWN)[0];if(dropdownElement){$(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);}element.setAttribute('aria-expanded',true);}if(callback){callback();}};// static
Tab._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var $this=$(this);var data=$this.data(DATA_KEY);if(!data){data=new Tab(this);$this.data(DATA_KEY,data);}if(typeof config==='string'){if(data[config]===undefined){throw new Error('No method named "'+config+'"');}data[config]();}});};_createClass(Tab,null,[{key:'VERSION',get:function get(){return VERSION;}}]);return Tab;}();/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */$(document).on(Event.CLICK_DATA_API,Selector.DATA_TOGGLE,function(event){event.preventDefault();Tab._jQueryInterface.call($(this),'show');});/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME]=Tab._jQueryInterface;$.fn[NAME].Constructor=Tab;$.fn[NAME].noConflict=function(){$.fn[NAME]=JQUERY_NO_CONFLICT;return Tab._jQueryInterface;};return Tab;}(jQuery);/* global Tether *//**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var Tooltip=function($){/**
   * Check for Tether dependency
   * Tether - http://tether.io/
   */if(typeof Tether==='undefined'){throw new Error('Bootstrap tooltips require Tether (http://tether.io/)');}/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='tooltip';var VERSION='4.0.0-alpha.6';var DATA_KEY='bs.tooltip';var EVENT_KEY='.'+DATA_KEY;var JQUERY_NO_CONFLICT=$.fn[NAME];var TRANSITION_DURATION=150;var CLASS_PREFIX='bs-tether';var Default={animation:true,template:'<div class="tooltip" role="tooltip">'+'<div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,selector:false,placement:'top',offset:'0 0',constraints:[],container:false};var DefaultType={animation:'boolean',template:'string',title:'(string|element|function)',trigger:'string',delay:'(number|object)',html:'boolean',selector:'(string|boolean)',placement:'(string|function)',offset:'string',constraints:'array',container:'(string|element|boolean)'};var AttachmentMap={TOP:'bottom center',RIGHT:'middle left',BOTTOM:'top center',LEFT:'middle right'};var HoverState={SHOW:'show',OUT:'out'};var Event={HIDE:'hide'+EVENT_KEY,HIDDEN:'hidden'+EVENT_KEY,SHOW:'show'+EVENT_KEY,SHOWN:'shown'+EVENT_KEY,INSERTED:'inserted'+EVENT_KEY,CLICK:'click'+EVENT_KEY,FOCUSIN:'focusin'+EVENT_KEY,FOCUSOUT:'focusout'+EVENT_KEY,MOUSEENTER:'mouseenter'+EVENT_KEY,MOUSELEAVE:'mouseleave'+EVENT_KEY};var ClassName={FADE:'fade',SHOW:'show'};var Selector={TOOLTIP:'.tooltip',TOOLTIP_INNER:'.tooltip-inner'};var TetherClass={element:false,enabled:false};var Trigger={HOVER:'hover',FOCUS:'focus',CLICK:'click',MANUAL:'manual'};/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */var Tooltip=function(){function Tooltip(element,config){_classCallCheck(this,Tooltip);// private
this._isEnabled=true;this._timeout=0;this._hoverState='';this._activeTrigger={};this._isTransitioning=false;this._tether=null;// protected
this.element=element;this.config=this._getConfig(config);this.tip=null;this._setListeners();}// getters
// public
Tooltip.prototype.enable=function enable(){this._isEnabled=true;};Tooltip.prototype.disable=function disable(){this._isEnabled=false;};Tooltip.prototype.toggleEnabled=function toggleEnabled(){this._isEnabled=!this._isEnabled;};Tooltip.prototype.toggle=function toggle(event){if(event){var dataKey=this.constructor.DATA_KEY;var context=$(event.currentTarget).data(dataKey);if(!context){context=new this.constructor(event.currentTarget,this._getDelegateConfig());$(event.currentTarget).data(dataKey,context);}context._activeTrigger.click=!context._activeTrigger.click;if(context._isWithActiveTrigger()){context._enter(null,context);}else{context._leave(null,context);}}else{if($(this.getTipElement()).hasClass(ClassName.SHOW)){this._leave(null,this);return;}this._enter(null,this);}};Tooltip.prototype.dispose=function dispose(){clearTimeout(this._timeout);this.cleanupTether();$.removeData(this.element,this.constructor.DATA_KEY);$(this.element).off(this.constructor.EVENT_KEY);$(this.element).closest('.modal').off('hide.bs.modal');if(this.tip){$(this.tip).remove();}this._isEnabled=null;this._timeout=null;this._hoverState=null;this._activeTrigger=null;this._tether=null;this.element=null;this.config=null;this.tip=null;};Tooltip.prototype.show=function show(){var _this22=this;if($(this.element).css('display')==='none'){throw new Error('Please use show on visible elements');}var showEvent=$.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){if(this._isTransitioning){throw new Error('Tooltip is transitioning');}$(this.element).trigger(showEvent);var isInTheDom=$.contains(this.element.ownerDocument.documentElement,this.element);if(showEvent.isDefaultPrevented()||!isInTheDom){return;}var tip=this.getTipElement();var tipId=Util.getUID(this.constructor.NAME);tip.setAttribute('id',tipId);this.element.setAttribute('aria-describedby',tipId);this.setContent();if(this.config.animation){$(tip).addClass(ClassName.FADE);}var placement=typeof this.config.placement==='function'?this.config.placement.call(this,tip,this.element):this.config.placement;var attachment=this._getAttachment(placement);var container=this.config.container===false?document.body:$(this.config.container);$(tip).data(this.constructor.DATA_KEY,this).appendTo(container);$(this.element).trigger(this.constructor.Event.INSERTED);this._tether=new Tether({attachment:attachment,element:tip,target:this.element,classes:TetherClass,classPrefix:CLASS_PREFIX,offset:this.config.offset,constraints:this.config.constraints,addTargetClasses:false});Util.reflow(tip);this._tether.position();$(tip).addClass(ClassName.SHOW);var complete=function complete(){var prevHoverState=_this22._hoverState;_this22._hoverState=null;_this22._isTransitioning=false;$(_this22.element).trigger(_this22.constructor.Event.SHOWN);if(prevHoverState===HoverState.OUT){_this22._leave(null,_this22);}};if(Util.supportsTransitionEnd()&&$(this.tip).hasClass(ClassName.FADE)){this._isTransitioning=true;$(this.tip).one(Util.TRANSITION_END,complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);return;}complete();}};Tooltip.prototype.hide=function hide(callback){var _this23=this;var tip=this.getTipElement();var hideEvent=$.Event(this.constructor.Event.HIDE);if(this._isTransitioning){throw new Error('Tooltip is transitioning');}var complete=function complete(){if(_this23._hoverState!==HoverState.SHOW&&tip.parentNode){tip.parentNode.removeChild(tip);}_this23.element.removeAttribute('aria-describedby');$(_this23.element).trigger(_this23.constructor.Event.HIDDEN);_this23._isTransitioning=false;_this23.cleanupTether();if(callback){callback();}};$(this.element).trigger(hideEvent);if(hideEvent.isDefaultPrevented()){return;}$(tip).removeClass(ClassName.SHOW);this._activeTrigger[Trigger.CLICK]=false;this._activeTrigger[Trigger.FOCUS]=false;this._activeTrigger[Trigger.HOVER]=false;if(Util.supportsTransitionEnd()&&$(this.tip).hasClass(ClassName.FADE)){this._isTransitioning=true;$(tip).one(Util.TRANSITION_END,complete).emulateTransitionEnd(TRANSITION_DURATION);}else{complete();}this._hoverState='';};// protected
Tooltip.prototype.isWithContent=function isWithContent(){return Boolean(this.getTitle());};Tooltip.prototype.getTipElement=function getTipElement(){return this.tip=this.tip||$(this.config.template)[0];};Tooltip.prototype.setContent=function setContent(){var $tip=$(this.getTipElement());this.setElementContent($tip.find(Selector.TOOLTIP_INNER),this.getTitle());$tip.removeClass(ClassName.FADE+' '+ClassName.SHOW);this.cleanupTether();};Tooltip.prototype.setElementContent=function setElementContent($element,content){var html=this.config.html;if((typeof content==='undefined'?'undefined':_typeof(content))==='object'&&(content.nodeType||content.jquery)){// content is a DOM node or a jQuery
if(html){if(!$(content).parent().is($element)){$element.empty().append(content);}}else{$element.text($(content).text());}}else{$element[html?'html':'text'](content);}};Tooltip.prototype.getTitle=function getTitle(){var title=this.element.getAttribute('data-original-title');if(!title){title=typeof this.config.title==='function'?this.config.title.call(this.element):this.config.title;}return title;};Tooltip.prototype.cleanupTether=function cleanupTether(){if(this._tether){this._tether.destroy();}};// private
Tooltip.prototype._getAttachment=function _getAttachment(placement){return AttachmentMap[placement.toUpperCase()];};Tooltip.prototype._setListeners=function _setListeners(){var _this24=this;var triggers=this.config.trigger.split(' ');triggers.forEach(function(trigger){if(trigger==='click'){$(_this24.element).on(_this24.constructor.Event.CLICK,_this24.config.selector,function(event){return _this24.toggle(event);});}else if(trigger!==Trigger.MANUAL){var eventIn=trigger===Trigger.HOVER?_this24.constructor.Event.MOUSEENTER:_this24.constructor.Event.FOCUSIN;var eventOut=trigger===Trigger.HOVER?_this24.constructor.Event.MOUSELEAVE:_this24.constructor.Event.FOCUSOUT;$(_this24.element).on(eventIn,_this24.config.selector,function(event){return _this24._enter(event);}).on(eventOut,_this24.config.selector,function(event){return _this24._leave(event);});}$(_this24.element).closest('.modal').on('hide.bs.modal',function(){return _this24.hide();});});if(this.config.selector){this.config=$.extend({},this.config,{trigger:'manual',selector:''});}else{this._fixTitle();}};Tooltip.prototype._fixTitle=function _fixTitle(){var titleType=_typeof(this.element.getAttribute('data-original-title'));if(this.element.getAttribute('title')||titleType!=='string'){this.element.setAttribute('data-original-title',this.element.getAttribute('title')||'');this.element.setAttribute('title','');}};Tooltip.prototype._enter=function _enter(event,context){var dataKey=this.constructor.DATA_KEY;context=context||$(event.currentTarget).data(dataKey);if(!context){context=new this.constructor(event.currentTarget,this._getDelegateConfig());$(event.currentTarget).data(dataKey,context);}if(event){context._activeTrigger[event.type==='focusin'?Trigger.FOCUS:Trigger.HOVER]=true;}if($(context.getTipElement()).hasClass(ClassName.SHOW)||context._hoverState===HoverState.SHOW){context._hoverState=HoverState.SHOW;return;}clearTimeout(context._timeout);context._hoverState=HoverState.SHOW;if(!context.config.delay||!context.config.delay.show){context.show();return;}context._timeout=setTimeout(function(){if(context._hoverState===HoverState.SHOW){context.show();}},context.config.delay.show);};Tooltip.prototype._leave=function _leave(event,context){var dataKey=this.constructor.DATA_KEY;context=context||$(event.currentTarget).data(dataKey);if(!context){context=new this.constructor(event.currentTarget,this._getDelegateConfig());$(event.currentTarget).data(dataKey,context);}if(event){context._activeTrigger[event.type==='focusout'?Trigger.FOCUS:Trigger.HOVER]=false;}if(context._isWithActiveTrigger()){return;}clearTimeout(context._timeout);context._hoverState=HoverState.OUT;if(!context.config.delay||!context.config.delay.hide){context.hide();return;}context._timeout=setTimeout(function(){if(context._hoverState===HoverState.OUT){context.hide();}},context.config.delay.hide);};Tooltip.prototype._isWithActiveTrigger=function _isWithActiveTrigger(){for(var trigger in this._activeTrigger){if(this._activeTrigger[trigger]){return true;}}return false;};Tooltip.prototype._getConfig=function _getConfig(config){config=$.extend({},this.constructor.Default,$(this.element).data(),config);if(config.delay&&typeof config.delay==='number'){config.delay={show:config.delay,hide:config.delay};}Util.typeCheckConfig(NAME,config,this.constructor.DefaultType);return config;};Tooltip.prototype._getDelegateConfig=function _getDelegateConfig(){var config={};if(this.config){for(var key in this.config){if(this.constructor.Default[key]!==this.config[key]){config[key]=this.config[key];}}}return config;};// static
Tooltip._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY);var _config=(typeof config==='undefined'?'undefined':_typeof(config))==='object'&&config;if(!data&&/dispose|hide/.test(config)){return;}if(!data){data=new Tooltip(this,_config);$(this).data(DATA_KEY,data);}if(typeof config==='string'){if(data[config]===undefined){throw new Error('No method named "'+config+'"');}data[config]();}});};_createClass(Tooltip,null,[{key:'VERSION',get:function get(){return VERSION;}},{key:'Default',get:function get(){return Default;}},{key:'NAME',get:function get(){return NAME;}},{key:'DATA_KEY',get:function get(){return DATA_KEY;}},{key:'Event',get:function get(){return Event;}},{key:'EVENT_KEY',get:function get(){return EVENT_KEY;}},{key:'DefaultType',get:function get(){return DefaultType;}}]);return Tooltip;}();/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME]=Tooltip._jQueryInterface;$.fn[NAME].Constructor=Tooltip;$.fn[NAME].noConflict=function(){$.fn[NAME]=JQUERY_NO_CONFLICT;return Tooltip._jQueryInterface;};return Tooltip;}(jQuery);/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var Popover=function($){/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='popover';var VERSION='4.0.0-alpha.6';var DATA_KEY='bs.popover';var EVENT_KEY='.'+DATA_KEY;var JQUERY_NO_CONFLICT=$.fn[NAME];var Default=$.extend({},Tooltip.Default,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip">'+'<h3 class="popover-title"></h3>'+'<div class="popover-content"></div></div>'});var DefaultType=$.extend({},Tooltip.DefaultType,{content:'(string|element|function)'});var ClassName={FADE:'fade',SHOW:'show'};var Selector={TITLE:'.popover-title',CONTENT:'.popover-content'};var Event={HIDE:'hide'+EVENT_KEY,HIDDEN:'hidden'+EVENT_KEY,SHOW:'show'+EVENT_KEY,SHOWN:'shown'+EVENT_KEY,INSERTED:'inserted'+EVENT_KEY,CLICK:'click'+EVENT_KEY,FOCUSIN:'focusin'+EVENT_KEY,FOCUSOUT:'focusout'+EVENT_KEY,MOUSEENTER:'mouseenter'+EVENT_KEY,MOUSELEAVE:'mouseleave'+EVENT_KEY};/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */var Popover=function(_Tooltip){_inherits(Popover,_Tooltip);function Popover(){_classCallCheck(this,Popover);return _possibleConstructorReturn(this,_Tooltip.apply(this,arguments));}// overrides
Popover.prototype.isWithContent=function isWithContent(){return this.getTitle()||this._getContent();};Popover.prototype.getTipElement=function getTipElement(){return this.tip=this.tip||$(this.config.template)[0];};Popover.prototype.setContent=function setContent(){var $tip=$(this.getTipElement());// we use append for html objects to maintain js events
this.setElementContent($tip.find(Selector.TITLE),this.getTitle());this.setElementContent($tip.find(Selector.CONTENT),this._getContent());$tip.removeClass(ClassName.FADE+' '+ClassName.SHOW);this.cleanupTether();};// private
Popover.prototype._getContent=function _getContent(){return this.element.getAttribute('data-content')||(typeof this.config.content==='function'?this.config.content.call(this.element):this.config.content);};// static
Popover._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY);var _config=(typeof config==='undefined'?'undefined':_typeof(config))==='object'?config:null;if(!data&&/destroy|hide/.test(config)){return;}if(!data){data=new Popover(this,_config);$(this).data(DATA_KEY,data);}if(typeof config==='string'){if(data[config]===undefined){throw new Error('No method named "'+config+'"');}data[config]();}});};_createClass(Popover,null,[{key:'VERSION',// getters
get:function get(){return VERSION;}},{key:'Default',get:function get(){return Default;}},{key:'NAME',get:function get(){return NAME;}},{key:'DATA_KEY',get:function get(){return DATA_KEY;}},{key:'Event',get:function get(){return Event;}},{key:'EVENT_KEY',get:function get(){return EVENT_KEY;}},{key:'DefaultType',get:function get(){return DefaultType;}}]);return Popover;}(Tooltip);/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME]=Popover._jQueryInterface;$.fn[NAME].Constructor=Popover;$.fn[NAME].noConflict=function(){$.fn[NAME]=JQUERY_NO_CONFLICT;return Popover._jQueryInterface;};return Popover;}(jQuery);}();/*!
 * Lightbox v2.9.0
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright 2007, 2015 Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */// Uses Node, AMD or browser globals to create a module.
(function(root,factory){if(typeof define==='function'&&define.amd){// AMD. Register as an anonymous module.
define(['jquery'],factory);}else if((typeof exports==="undefined"?"undefined":_typeof2(exports))==='object'){// Node. Does not work with strict CommonJS, but
// only CommonJS-like environments that support module.exports,
// like Node.
module.exports=factory(require('jquery'));}else{// Browser globals (root is window)
root.lightbox=factory(root.jQuery);}})(this,function($){function Lightbox(options){this.album=[];this.currentImageIndex=void 0;this.init();// options
this.options=$.extend({},this.constructor.defaults);this.option(options);}// Descriptions of all options available on the demo site:
// http://lokeshdhakar.com/projects/lightbox2/index.html#options
Lightbox.defaults={albumLabel:'Image %1 of %2',alwaysShowNavOnTouchDevices:false,fadeDuration:600,fitImagesInViewport:true,imageFadeDuration:600,// maxWidth: 800,
// maxHeight: 600,
positionFromTop:50,resizeDuration:700,showImageNumberLabel:true,wrapAround:false,disableScrolling:false,/*
    Sanitize Title
    If the caption data is trusted, for example you are hardcoding it in, then leave this to false.
    This will free you to add html tags, such as links, in the caption.

    If the caption data is user submitted or from some other untrusted source, then set this to true
    to prevent xss and other injection attacks.
     */sanitizeTitle:false};Lightbox.prototype.option=function(options){$.extend(this.options,options);};Lightbox.prototype.imageCountLabel=function(currentImageNum,totalImages){return this.options.albumLabel.replace(/%1/g,currentImageNum).replace(/%2/g,totalImages);};Lightbox.prototype.init=function(){var self=this;// Both enable and build methods require the body tag to be in the DOM.
$(document).ready(function(){self.enable();self.build();});};// Loop through anchors and areamaps looking for either data-lightbox attributes or rel attributes
// that contain 'lightbox'. When these are clicked, start lightbox.
Lightbox.prototype.enable=function(){var self=this;$('body').on('click','a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]',function(event){self.start($(event.currentTarget));return false;});};// Build html for the lightbox and the overlay.
// Attach event handlers to the new DOM elements. click click click
Lightbox.prototype.build=function(){var self=this;$('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo($('body'));// Cache jQuery objects
this.$lightbox=$('#lightbox');this.$overlay=$('#lightboxOverlay');this.$outerContainer=this.$lightbox.find('.lb-outerContainer');this.$container=this.$lightbox.find('.lb-container');this.$image=this.$lightbox.find('.lb-image');this.$nav=this.$lightbox.find('.lb-nav');// Store css values for future lookup
this.containerPadding={top:parseInt(this.$container.css('padding-top'),10),right:parseInt(this.$container.css('padding-right'),10),bottom:parseInt(this.$container.css('padding-bottom'),10),left:parseInt(this.$container.css('padding-left'),10)};this.imageBorderWidth={top:parseInt(this.$image.css('border-top-width'),10),right:parseInt(this.$image.css('border-right-width'),10),bottom:parseInt(this.$image.css('border-bottom-width'),10),left:parseInt(this.$image.css('border-left-width'),10)};// Attach event handlers to the newly minted DOM elements
this.$overlay.hide().on('click',function(){self.end();return false;});this.$lightbox.hide().on('click',function(event){if($(event.target).attr('id')==='lightbox'){self.end();}return false;});this.$outerContainer.on('click',function(event){if($(event.target).attr('id')==='lightbox'){self.end();}return false;});this.$lightbox.find('.lb-prev').on('click',function(){if(self.currentImageIndex===0){self.changeImage(self.album.length-1);}else{self.changeImage(self.currentImageIndex-1);}return false;});this.$lightbox.find('.lb-next').on('click',function(){if(self.currentImageIndex===self.album.length-1){self.changeImage(0);}else{self.changeImage(self.currentImageIndex+1);}return false;});/*
      Show context menu for image on right-click

      There is a div containing the navigation that spans the entire image and lives above of it. If
      you right-click, you are right clicking this div and not the image. This prevents users from
      saving the image or using other context menu actions with the image.

      To fix this, when we detect the right mouse button is pressed down, but not yet clicked, we
      set pointer-events to none on the nav div. This is so that the upcoming right-click event on
      the next mouseup will bubble down to the image. Once the right-click/contextmenu event occurs
      we set the pointer events back to auto for the nav div so it can capture hover and left-click
      events as usual.
     */this.$nav.on('mousedown',function(event){if(event.which===3){self.$nav.css('pointer-events','none');self.$lightbox.one('contextmenu',function(){setTimeout(function(){this.$nav.css('pointer-events','auto');}.bind(self),0);});}});this.$lightbox.find('.lb-loader, .lb-close').on('click',function(){self.end();return false;});};// Show overlay and lightbox. If the image is part of a set, add siblings to album array.
Lightbox.prototype.start=function($link){var self=this;var $window=$(window);$window.on('resize',$.proxy(this.sizeOverlay,this));$('select, object, embed').css({visibility:'hidden'});this.sizeOverlay();this.album=[];var imageNumber=0;function addToAlbum($link){self.album.push({link:$link.attr('href'),title:$link.attr('data-title')||$link.attr('title')});}// Support both data-lightbox attribute and rel attribute implementations
var dataLightboxValue=$link.attr('data-lightbox');var $links;if(dataLightboxValue){$links=$($link.prop('tagName')+'[data-lightbox="'+dataLightboxValue+'"]');for(var i=0;i<$links.length;i=++i){addToAlbum($($links[i]));if($links[i]===$link[0]){imageNumber=i;}}}else{if($link.attr('rel')==='lightbox'){// If image is not part of a set
addToAlbum($link);}else{// If image is part of a set
$links=$($link.prop('tagName')+'[rel="'+$link.attr('rel')+'"]');for(var j=0;j<$links.length;j=++j){addToAlbum($($links[j]));if($links[j]===$link[0]){imageNumber=j;}}}}// Position Lightbox
var top=$window.scrollTop()+this.options.positionFromTop;var left=$window.scrollLeft();this.$lightbox.css({top:top+'px',left:left+'px'}).fadeIn(this.options.fadeDuration);// Disable scrolling of the page while open
if(this.options.disableScrolling){$('body').addClass('lb-disable-scrolling');}this.changeImage(imageNumber);};// Hide most UI elements in preparation for the animated resizing of the lightbox.
Lightbox.prototype.changeImage=function(imageNumber){var self=this;this.disableKeyboardNav();var $image=this.$lightbox.find('.lb-image');this.$overlay.fadeIn(this.options.fadeDuration);$('.lb-loader').fadeIn('slow');this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();this.$outerContainer.addClass('animating');// When image to show is preloaded, we send the width and height to sizeContainer()
var preloader=new Image();preloader.onload=function(){var $preloader;var imageHeight;var imageWidth;var maxImageHeight;var maxImageWidth;var windowHeight;var windowWidth;$image.attr('src',self.album[imageNumber].link);$preloader=$(preloader);$image.width(preloader.width);$image.height(preloader.height);if(self.options.fitImagesInViewport){// Fit image inside the viewport.
// Take into account the border around the image and an additional 10px gutter on each side.
windowWidth=$(window).width();windowHeight=$(window).height();maxImageWidth=windowWidth-self.containerPadding.left-self.containerPadding.right-self.imageBorderWidth.left-self.imageBorderWidth.right-20;maxImageHeight=windowHeight-self.containerPadding.top-self.containerPadding.bottom-self.imageBorderWidth.top-self.imageBorderWidth.bottom-120;// Check if image size is larger then maxWidth|maxHeight in settings
if(self.options.maxWidth&&self.options.maxWidth<maxImageWidth){maxImageWidth=self.options.maxWidth;}if(self.options.maxHeight&&self.options.maxHeight<maxImageWidth){maxImageHeight=self.options.maxHeight;}// Is the current image's width or height is greater than the maxImageWidth or maxImageHeight
// option than we need to size down while maintaining the aspect ratio.
if(preloader.width>maxImageWidth||preloader.height>maxImageHeight){if(preloader.width/maxImageWidth>preloader.height/maxImageHeight){imageWidth=maxImageWidth;imageHeight=parseInt(preloader.height/(preloader.width/imageWidth),10);$image.width(imageWidth);$image.height(imageHeight);}else{imageHeight=maxImageHeight;imageWidth=parseInt(preloader.width/(preloader.height/imageHeight),10);$image.width(imageWidth);$image.height(imageHeight);}}}self.sizeContainer($image.width(),$image.height());};preloader.src=this.album[imageNumber].link;this.currentImageIndex=imageNumber;};// Stretch overlay to fit the viewport
Lightbox.prototype.sizeOverlay=function(){this.$overlay.width($(document).width()).height($(document).height());};// Animate the size of the lightbox to fit the image we are showing
Lightbox.prototype.sizeContainer=function(imageWidth,imageHeight){var self=this;var oldWidth=this.$outerContainer.outerWidth();var oldHeight=this.$outerContainer.outerHeight();var newWidth=imageWidth+this.containerPadding.left+this.containerPadding.right+this.imageBorderWidth.left+this.imageBorderWidth.right;var newHeight=imageHeight+this.containerPadding.top+this.containerPadding.bottom+this.imageBorderWidth.top+this.imageBorderWidth.bottom;function postResize(){self.$lightbox.find('.lb-dataContainer').width(newWidth);self.$lightbox.find('.lb-prevLink').height(newHeight);self.$lightbox.find('.lb-nextLink').height(newHeight);self.showImage();}if(oldWidth!==newWidth||oldHeight!==newHeight){this.$outerContainer.animate({width:newWidth,height:newHeight},this.options.resizeDuration,'swing',function(){postResize();});}else{postResize();}};// Display the image and its details and begin preload neighboring images.
Lightbox.prototype.showImage=function(){this.$lightbox.find('.lb-loader').stop(true).hide();this.$lightbox.find('.lb-image').fadeIn(this.options.imageFadeDuration);this.updateNav();this.updateDetails();this.preloadNeighboringImages();this.enableKeyboardNav();};// Display previous and next navigation if appropriate.
Lightbox.prototype.updateNav=function(){// Check to see if the browser supports touch events. If so, we take the conservative approach
// and assume that mouse hover events are not supported and always show prev/next navigation
// arrows in image sets.
var alwaysShowNav=false;try{document.createEvent('TouchEvent');alwaysShowNav=this.options.alwaysShowNavOnTouchDevices?true:false;}catch(e){}this.$lightbox.find('.lb-nav').show();if(this.album.length>1){if(this.options.wrapAround){if(alwaysShowNav){this.$lightbox.find('.lb-prev, .lb-next').css('opacity','1');}this.$lightbox.find('.lb-prev, .lb-next').show();}else{if(this.currentImageIndex>0){this.$lightbox.find('.lb-prev').show();if(alwaysShowNav){this.$lightbox.find('.lb-prev').css('opacity','1');}}if(this.currentImageIndex<this.album.length-1){this.$lightbox.find('.lb-next').show();if(alwaysShowNav){this.$lightbox.find('.lb-next').css('opacity','1');}}}}};// Display caption, image number, and closing button.
Lightbox.prototype.updateDetails=function(){var self=this;// Enable anchor clicks in the injected caption html.
// Thanks Nate Wright for the fix. @https://github.com/NateWr
if(typeof this.album[this.currentImageIndex].title!=='undefined'&&this.album[this.currentImageIndex].title!==''){var $caption=this.$lightbox.find('.lb-caption');if(this.options.sanitizeTitle){$caption.text(this.album[this.currentImageIndex].title);}else{$caption.html(this.album[this.currentImageIndex].title);}$caption.fadeIn('fast').find('a').on('click',function(event){if($(this).attr('target')!==undefined){window.open($(this).attr('href'),$(this).attr('target'));}else{location.href=$(this).attr('href');}});}if(this.album.length>1&&this.options.showImageNumberLabel){var labelText=this.imageCountLabel(this.currentImageIndex+1,this.album.length);this.$lightbox.find('.lb-number').text(labelText).fadeIn('fast');}else{this.$lightbox.find('.lb-number').hide();}this.$outerContainer.removeClass('animating');this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration,function(){return self.sizeOverlay();});};// Preload previous and next images in set.
Lightbox.prototype.preloadNeighboringImages=function(){if(this.album.length>this.currentImageIndex+1){var preloadNext=new Image();preloadNext.src=this.album[this.currentImageIndex+1].link;}if(this.currentImageIndex>0){var preloadPrev=new Image();preloadPrev.src=this.album[this.currentImageIndex-1].link;}};Lightbox.prototype.enableKeyboardNav=function(){$(document).on('keyup.keyboard',$.proxy(this.keyboardAction,this));};Lightbox.prototype.disableKeyboardNav=function(){$(document).off('.keyboard');};Lightbox.prototype.keyboardAction=function(event){var KEYCODE_ESC=27;var KEYCODE_LEFTARROW=37;var KEYCODE_RIGHTARROW=39;var keycode=event.keyCode;var key=String.fromCharCode(keycode).toLowerCase();if(keycode===KEYCODE_ESC||key.match(/x|o|c/)){this.end();}else if(key==='p'||keycode===KEYCODE_LEFTARROW){if(this.currentImageIndex!==0){this.changeImage(this.currentImageIndex-1);}else if(this.options.wrapAround&&this.album.length>1){this.changeImage(this.album.length-1);}}else if(key==='n'||keycode===KEYCODE_RIGHTARROW){if(this.currentImageIndex!==this.album.length-1){this.changeImage(this.currentImageIndex+1);}else if(this.options.wrapAround&&this.album.length>1){this.changeImage(0);}}};// Closing time. :-(
Lightbox.prototype.end=function(){this.disableKeyboardNav();$(window).off('resize',this.sizeOverlay);this.$lightbox.fadeOut(this.options.fadeDuration);this.$overlay.fadeOut(this.options.fadeDuration);$('select, object, embed').css({visibility:'visible'});if(this.options.disableScrolling){$('body').removeClass('lb-disable-scrolling');}};return new Lightbox();});/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 *//**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */;(function($,window,document,undefined){/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */function Owl(element,options){/**
		 * Current settings for the carousel.
		 * @public
		 */this.settings=null;/**
		 * Current options set by the caller including defaults.
		 * @public
		 */this.options=$.extend({},Owl.Defaults,options);/**
		 * Plugin element.
		 * @public
		 */this.$element=$(element);/**
		 * Proxied event handlers.
		 * @protected
		 */this._handlers={};/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */this._plugins={};/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */this._supress={};/**
		 * Absolute current position.
		 * @protected
		 */this._current=null;/**
		 * Animation speed in milliseconds.
		 * @protected
		 */this._speed=null;/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */this._coordinates=[];/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */this._breakpoint=null;/**
		 * Current width of the plugin element.
		 */this._width=null;/**
		 * All real items.
		 * @protected
		 */this._items=[];/**
		 * All cloned items.
		 * @protected
		 */this._clones=[];/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */this._mergers=[];/**
		 * Widths of all items.
		 */this._widths=[];/**
		 * Invalidated parts within the update process.
		 * @protected
		 */this._invalidated={};/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */this._pipe=[];/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null};/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */this._states={current:{},tags:{'initializing':['busy'],'animating':['busy'],'dragging':['interacting']}};$.each(['onResize','onThrottledResize'],$.proxy(function(i,handler){this._handlers[handler]=$.proxy(this[handler],this);},this));$.each(Owl.Plugins,$.proxy(function(key,plugin){this._plugins[key.charAt(0).toLowerCase()+key.slice(1)]=new plugin(this);},this));$.each(Owl.Workers,$.proxy(function(priority,worker){this._pipe.push({'filter':worker.filter,'run':$.proxy(worker.run,this)});},this));this.setup();this.initialize();}/**
	 * Default options for the carousel.
	 * @public
	 */Owl.Defaults={items:3,loop:false,center:false,rewind:false,mouseDrag:true,touchDrag:true,pullDrag:true,freeDrag:false,margin:0,stagePadding:0,merge:false,mergeFit:true,autoWidth:false,startPosition:0,rtl:false,smartSpeed:250,fluidSpeed:false,dragEndSpeed:false,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:window,fallbackEasing:'swing',info:false,nestedItemSelector:false,itemElement:'div',stageElement:'div',refreshClass:'owl-refresh',loadedClass:'owl-loaded',loadingClass:'owl-loading',rtlClass:'owl-rtl',responsiveClass:'owl-responsive',dragClass:'owl-drag',itemClass:'owl-item',stageClass:'owl-stage',stageOuterClass:'owl-stage-outer',grabClass:'owl-grab'};/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */Owl.Width={Default:'default',Inner:'inner',Outer:'outer'};/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */Owl.Type={Event:'event',State:'state'};/**
	 * Contains all registered plugins.
	 * @public
	 */Owl.Plugins={};/**
	 * List of workers involved in the update process.
	 */Owl.Workers=[{filter:['width','settings'],run:function run(){this._width=this.$element.width();}},{filter:['width','items','settings'],run:function run(cache){cache.current=this._items&&this._items[this.relative(this._current)];}},{filter:['items','settings'],run:function run(){this.$stage.children('.cloned').remove();}},{filter:['width','items','settings'],run:function run(cache){var margin=this.settings.margin||'',grid=!this.settings.autoWidth,rtl=this.settings.rtl,css={'width':'auto','margin-left':rtl?margin:'','margin-right':rtl?'':margin};!grid&&this.$stage.children().css(css);cache.css=css;}},{filter:['width','items','settings'],run:function run(cache){var width=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,merge=null,iterator=this._items.length,grid=!this.settings.autoWidth,widths=[];cache.items={merge:false,width:width};while(iterator--){merge=this._mergers[iterator];merge=this.settings.mergeFit&&Math.min(merge,this.settings.items)||merge;cache.items.merge=merge>1||cache.items.merge;widths[iterator]=!grid?this._items[iterator].width():width*merge;}this._widths=widths;}},{filter:['items','settings'],run:function run(){var clones=[],items=this._items,settings=this.settings,// TODO: Should be computed from number of min width items in stage
view=Math.max(settings.items*2,4),size=Math.ceil(items.length/2)*2,repeat=settings.loop&&items.length?settings.rewind?view:Math.max(view,size):0,append='',prepend='';repeat/=2;while(repeat--){// Switch to only using appended clones
clones.push(this.normalize(clones.length/2,true));append=append+items[clones[clones.length-1]][0].outerHTML;clones.push(this.normalize(items.length-1-(clones.length-1)/2,true));prepend=items[clones[clones.length-1]][0].outerHTML+prepend;}this._clones=clones;$(append).addClass('cloned').appendTo(this.$stage);$(prepend).addClass('cloned').prependTo(this.$stage);}},{filter:['width','items','settings'],run:function run(){var rtl=this.settings.rtl?1:-1,size=this._clones.length+this._items.length,iterator=-1,previous=0,current=0,coordinates=[];while(++iterator<size){previous=coordinates[iterator-1]||0;current=this._widths[this.relative(iterator)]+this.settings.margin;coordinates.push(previous+current*rtl);}this._coordinates=coordinates;}},{filter:['width','items','settings'],run:function run(){var padding=this.settings.stagePadding,coordinates=this._coordinates,css={'width':Math.ceil(Math.abs(coordinates[coordinates.length-1]))+padding*2,'padding-left':padding||'','padding-right':padding||''};this.$stage.css(css);}},{filter:['width','items','settings'],run:function run(cache){var iterator=this._coordinates.length,grid=!this.settings.autoWidth,items=this.$stage.children();if(grid&&cache.items.merge){while(iterator--){cache.css.width=this._widths[this.relative(iterator)];items.eq(iterator).css(cache.css);}}else if(grid){cache.css.width=cache.items.width;items.css(cache.css);}}},{filter:['items'],run:function run(){this._coordinates.length<1&&this.$stage.removeAttr('style');}},{filter:['width','items','settings'],run:function run(cache){cache.current=cache.current?this.$stage.children().index(cache.current):0;cache.current=Math.max(this.minimum(),Math.min(this.maximum(),cache.current));this.reset(cache.current);}},{filter:['position'],run:function run(){this.animate(this.coordinates(this._current));}},{filter:['width','position','items','settings'],run:function run(){var rtl=this.settings.rtl?1:-1,padding=this.settings.stagePadding*2,begin=this.coordinates(this.current())+padding,end=begin+this.width()*rtl,inner,outer,matches=[],i,n;for(i=0,n=this._coordinates.length;i<n;i++){inner=this._coordinates[i-1]||0;outer=Math.abs(this._coordinates[i])+padding*rtl;if(this.op(inner,'<=',begin)&&this.op(inner,'>',end)||this.op(outer,'<',begin)&&this.op(outer,'>',end)){matches.push(i);}}this.$stage.children('.active').removeClass('active');this.$stage.children(':eq('+matches.join('), :eq(')+')').addClass('active');if(this.settings.center){this.$stage.children('.center').removeClass('center');this.$stage.children().eq(this.current()).addClass('center');}}}];/**
	 * Initializes the carousel.
	 * @protected
	 */Owl.prototype.initialize=function(){this.enter('initializing');this.trigger('initialize');this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl);if(this.settings.autoWidth&&!this.is('pre-loading')){var imgs,nestedSelector,width;imgs=this.$element.find('img');nestedSelector=this.settings.nestedItemSelector?'.'+this.settings.nestedItemSelector:undefined;width=this.$element.children(nestedSelector).width();if(imgs.length&&width<=0){this.preloadAutoWidthImages(imgs);}}this.$element.addClass(this.options.loadingClass);// create stage
this.$stage=$('<'+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>');// append stage
this.$element.append(this.$stage.parent());// append content
this.replace(this.$element.children().not(this.$stage.parent()));// check visibility
if(this.$element.is(':visible')){// update view
this.refresh();}else{// invalidate width
this.invalidate('width');}this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);// register event handlers
this.registerEventHandlers();this.leave('initializing');this.trigger('initialized');};/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */Owl.prototype.setup=function(){var viewport=this.viewport(),overwrites=this.options.responsive,match=-1,settings=null;if(!overwrites){settings=$.extend({},this.options);}else{$.each(overwrites,function(breakpoint){if(breakpoint<=viewport&&breakpoint>match){match=Number(breakpoint);}});settings=$.extend({},this.options,overwrites[match]);if(typeof settings.stagePadding==='function'){settings.stagePadding=settings.stagePadding();}delete settings.responsive;// responsive class
if(settings.responsiveClass){this.$element.attr('class',this.$element.attr('class').replace(new RegExp('('+this.options.responsiveClass+'-)\\S+\\s','g'),'$1'+match));}}this.trigger('change',{property:{name:'settings',value:settings}});this._breakpoint=match;this.settings=settings;this.invalidate('settings');this.trigger('changed',{property:{name:'settings',value:this.settings}});};/**
	 * Updates option logic if necessery.
	 * @protected
	 */Owl.prototype.optionsLogic=function(){if(this.settings.autoWidth){this.settings.stagePadding=false;this.settings.merge=false;}};/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */Owl.prototype.prepare=function(item){var event=this.trigger('prepare',{content:item});if(!event.data){event.data=$('<'+this.settings.itemElement+'/>').addClass(this.options.itemClass).append(item);}this.trigger('prepared',{content:event.data});return event.data;};/**
	 * Updates the view.
	 * @public
	 */Owl.prototype.update=function(){var i=0,n=this._pipe.length,filter=$.proxy(function(p){return this[p];},this._invalidated),cache={};while(i<n){if(this._invalidated.all||$.grep(this._pipe[i].filter,filter).length>0){this._pipe[i].run(cache);}i++;}this._invalidated={};!this.is('valid')&&this.enter('valid');};/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */Owl.prototype.width=function(dimension){dimension=dimension||Owl.Width.Default;switch(dimension){case Owl.Width.Inner:case Owl.Width.Outer:return this._width;default:return this._width-this.settings.stagePadding*2+this.settings.margin;}};/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */Owl.prototype.refresh=function(){this.enter('refreshing');this.trigger('refresh');this.setup();this.optionsLogic();this.$element.addClass(this.options.refreshClass);this.update();this.$element.removeClass(this.options.refreshClass);this.leave('refreshing');this.trigger('refreshed');};/**
	 * Checks window `resize` event.
	 * @protected
	 */Owl.prototype.onThrottledResize=function(){window.clearTimeout(this.resizeTimer);this.resizeTimer=window.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate);};/**
	 * Checks window `resize` event.
	 * @protected
	 */Owl.prototype.onResize=function(){if(!this._items.length){return false;}if(this._width===this.$element.width()){return false;}if(!this.$element.is(':visible')){return false;}this.enter('resizing');if(this.trigger('resize').isDefaultPrevented()){this.leave('resizing');return false;}this.invalidate('width');this.refresh();this.leave('resizing');this.trigger('resized');};/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */Owl.prototype.registerEventHandlers=function(){if($.support.transition){this.$stage.on($.support.transition.end+'.owl.core',$.proxy(this.onTransitionEnd,this));}if(this.settings.responsive!==false){this.on(window,'resize',this._handlers.onThrottledResize);}if(this.settings.mouseDrag){this.$element.addClass(this.options.dragClass);this.$stage.on('mousedown.owl.core',$.proxy(this.onDragStart,this));this.$stage.on('dragstart.owl.core selectstart.owl.core',function(){return false;});}if(this.settings.touchDrag){this.$stage.on('touchstart.owl.core',$.proxy(this.onDragStart,this));this.$stage.on('touchcancel.owl.core',$.proxy(this.onDragEnd,this));}};/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */Owl.prototype.onDragStart=function(event){var stage=null;if(event.which===3){return;}if($.support.transform){stage=this.$stage.css('transform').replace(/.*\(|\)| /g,'').split(',');stage={x:stage[stage.length===16?12:4],y:stage[stage.length===16?13:5]};}else{stage=this.$stage.position();stage={x:this.settings.rtl?stage.left+this.$stage.width()-this.width()+this.settings.margin:stage.left,y:stage.top};}if(this.is('animating')){$.support.transform?this.animate(stage.x):this.$stage.stop();this.invalidate('position');}this.$element.toggleClass(this.options.grabClass,event.type==='mousedown');this.speed(0);this._drag.time=new Date().getTime();this._drag.target=$(event.target);this._drag.stage.start=stage;this._drag.stage.current=stage;this._drag.pointer=this.pointer(event);$(document).on('mouseup.owl.core touchend.owl.core',$.proxy(this.onDragEnd,this));$(document).one('mousemove.owl.core touchmove.owl.core',$.proxy(function(event){var delta=this.difference(this._drag.pointer,this.pointer(event));$(document).on('mousemove.owl.core touchmove.owl.core',$.proxy(this.onDragMove,this));if(Math.abs(delta.x)<Math.abs(delta.y)&&this.is('valid')){return;}event.preventDefault();this.enter('dragging');this.trigger('drag');},this));};/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */Owl.prototype.onDragMove=function(event){var minimum=null,maximum=null,pull=null,delta=this.difference(this._drag.pointer,this.pointer(event)),stage=this.difference(this._drag.stage.start,delta);if(!this.is('dragging')){return;}event.preventDefault();if(this.settings.loop){minimum=this.coordinates(this.minimum());maximum=this.coordinates(this.maximum()+1)-minimum;stage.x=((stage.x-minimum)%maximum+maximum)%maximum+minimum;}else{minimum=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum());maximum=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum());pull=this.settings.pullDrag?-1*delta.x/5:0;stage.x=Math.max(Math.min(stage.x,minimum+pull),maximum+pull);}this._drag.stage.current=stage;this.animate(stage.x);};/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */Owl.prototype.onDragEnd=function(event){var delta=this.difference(this._drag.pointer,this.pointer(event)),stage=this._drag.stage.current,direction=delta.x>0^this.settings.rtl?'left':'right';$(document).off('.owl.core');this.$element.removeClass(this.options.grabClass);if(delta.x!==0&&this.is('dragging')||!this.is('valid')){this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed);this.current(this.closest(stage.x,delta.x!==0?direction:this._drag.direction));this.invalidate('position');this.update();this._drag.direction=direction;if(Math.abs(delta.x)>3||new Date().getTime()-this._drag.time>300){this._drag.target.one('click.owl.core',function(){return false;});}}if(!this.is('dragging')){return;}this.leave('dragging');this.trigger('dragged');};/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */Owl.prototype.closest=function(coordinate,direction){var position=-1,pull=30,width=this.width(),coordinates=this.coordinates();if(!this.settings.freeDrag){// check closest item
$.each(coordinates,$.proxy(function(index,value){// on a left pull, check on current index
if(direction==='left'&&coordinate>value-pull&&coordinate<value+pull){position=index;// on a right pull, check on previous index
// to do so, subtract width from value and set position = index + 1
}else if(direction==='right'&&coordinate>value-width-pull&&coordinate<value-width+pull){position=index+1;}else if(this.op(coordinate,'<',value)&&this.op(coordinate,'>',coordinates[index+1]||value-width)){position=direction==='left'?index+1:index;}return position===-1;},this));}if(!this.settings.loop){// non loop boundries
if(this.op(coordinate,'>',coordinates[this.minimum()])){position=coordinate=this.minimum();}else if(this.op(coordinate,'<',coordinates[this.maximum()])){position=coordinate=this.maximum();}}return position;};/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */Owl.prototype.animate=function(coordinate){var animate=this.speed()>0;this.is('animating')&&this.onTransitionEnd();if(animate){this.enter('animating');this.trigger('translate');}if($.support.transform3d&&$.support.transition){this.$stage.css({transform:'translate3d('+coordinate+'px,0px,0px)',transition:this.speed()/1000+'s'});}else if(animate){this.$stage.animate({left:coordinate+'px'},this.speed(),this.settings.fallbackEasing,$.proxy(this.onTransitionEnd,this));}else{this.$stage.css({left:coordinate+'px'});}};/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */Owl.prototype.is=function(state){return this._states.current[state]&&this._states.current[state]>0;};/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */Owl.prototype.current=function(position){if(position===undefined){return this._current;}if(this._items.length===0){return undefined;}position=this.normalize(position);if(this._current!==position){var event=this.trigger('change',{property:{name:'position',value:position}});if(event.data!==undefined){position=this.normalize(event.data);}this._current=position;this.invalidate('position');this.trigger('changed',{property:{name:'position',value:this._current}});}return this._current;};/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */Owl.prototype.invalidate=function(part){if($.type(part)==='string'){this._invalidated[part]=true;this.is('valid')&&this.leave('valid');}return $.map(this._invalidated,function(v,i){return i;});};/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */Owl.prototype.reset=function(position){position=this.normalize(position);if(position===undefined){return;}this._speed=0;this._current=position;this.suppress(['translate','translated']);this.animate(this.coordinates(position));this.release(['translate','translated']);};/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */Owl.prototype.normalize=function(position,relative){var n=this._items.length,m=relative?0:this._clones.length;if(!this.isNumeric(position)||n<1){position=undefined;}else if(position<0||position>=n+m){position=((position-m/2)%n+n)%n+m/2;}return position;};/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */Owl.prototype.relative=function(position){position-=this._clones.length/2;return this.normalize(position,true);};/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */Owl.prototype.maximum=function(relative){var settings=this.settings,maximum=this._coordinates.length,iterator,reciprocalItemsWidth,elementWidth;if(settings.loop){maximum=this._clones.length/2+this._items.length-1;}else if(settings.autoWidth||settings.merge){iterator=this._items.length;reciprocalItemsWidth=this._items[--iterator].width();elementWidth=this.$element.width();while(iterator--){reciprocalItemsWidth+=this._items[iterator].width()+this.settings.margin;if(reciprocalItemsWidth>elementWidth){break;}}maximum=iterator+1;}else if(settings.center){maximum=this._items.length-1;}else{maximum=this._items.length-settings.items;}if(relative){maximum-=this._clones.length/2;}return Math.max(maximum,0);};/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */Owl.prototype.minimum=function(relative){return relative?0:this._clones.length/2;};/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */Owl.prototype.items=function(position){if(position===undefined){return this._items.slice();}position=this.normalize(position,true);return this._items[position];};/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */Owl.prototype.mergers=function(position){if(position===undefined){return this._mergers.slice();}position=this.normalize(position,true);return this._mergers[position];};/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */Owl.prototype.clones=function(position){var odd=this._clones.length/2,even=odd+this._items.length,map=function map(index){return index%2===0?even+index/2:odd-(index+1)/2;};if(position===undefined){return $.map(this._clones,function(v,i){return map(i);});}return $.map(this._clones,function(v,i){return v===position?map(i):null;});};/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */Owl.prototype.speed=function(speed){if(speed!==undefined){this._speed=speed;}return this._speed;};/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */Owl.prototype.coordinates=function(position){var multiplier=1,newPosition=position-1,coordinate;if(position===undefined){return $.map(this._coordinates,$.proxy(function(coordinate,index){return this.coordinates(index);},this));}if(this.settings.center){if(this.settings.rtl){multiplier=-1;newPosition=position+1;}coordinate=this._coordinates[position];coordinate+=(this.width()-coordinate+(this._coordinates[newPosition]||0))/2*multiplier;}else{coordinate=this._coordinates[newPosition]||0;}coordinate=Math.ceil(coordinate);return coordinate;};/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */Owl.prototype.duration=function(from,to,factor){if(factor===0){return 0;}return Math.min(Math.max(Math.abs(to-from),1),6)*Math.abs(factor||this.settings.smartSpeed);};/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */Owl.prototype.to=function(position,speed){var current=this.current(),revert=null,distance=position-this.relative(current),direction=(distance>0)-(distance<0),items=this._items.length,minimum=this.minimum(),maximum=this.maximum();if(this.settings.loop){if(!this.settings.rewind&&Math.abs(distance)>items/2){distance+=direction*-1*items;}position=current+distance;revert=((position-minimum)%items+items)%items+minimum;if(revert!==position&&revert-distance<=maximum&&revert-distance>0){current=revert-distance;position=revert;this.reset(current);}}else if(this.settings.rewind){maximum+=1;position=(position%maximum+maximum)%maximum;}else{position=Math.max(minimum,Math.min(maximum,position));}this.speed(this.duration(current,position,speed));this.current(position);if(this.$element.is(':visible')){this.update();}};/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */Owl.prototype.next=function(speed){speed=speed||false;this.to(this.relative(this.current())+1,speed);};/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */Owl.prototype.prev=function(speed){speed=speed||false;this.to(this.relative(this.current())-1,speed);};/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */Owl.prototype.onTransitionEnd=function(event){// if css2 animation then event object is undefined
if(event!==undefined){event.stopPropagation();// Catch only owl-stage transitionEnd event
if((event.target||event.srcElement||event.originalTarget)!==this.$stage.get(0)){return false;}}this.leave('animating');this.trigger('translated');};/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */Owl.prototype.viewport=function(){var width;if(this.options.responsiveBaseElement!==window){width=$(this.options.responsiveBaseElement).width();}else if(window.innerWidth){width=window.innerWidth;}else if(document.documentElement&&document.documentElement.clientWidth){width=document.documentElement.clientWidth;}else{console.warn('Can not detect viewport width.');}return width;};/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */Owl.prototype.replace=function(content){this.$stage.empty();this._items=[];if(content){content=content instanceof jQuery?content:$(content);}if(this.settings.nestedItemSelector){content=content.find('.'+this.settings.nestedItemSelector);}content.filter(function(){return this.nodeType===1;}).each($.proxy(function(index,item){item=this.prepare(item);this.$stage.append(item);this._items.push(item);this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge')*1||1);},this));this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0);this.invalidate('items');};/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */Owl.prototype.add=function(content,position){var current=this.relative(this._current);position=position===undefined?this._items.length:this.normalize(position,true);content=content instanceof jQuery?content:$(content);this.trigger('add',{content:content,position:position});content=this.prepare(content);if(this._items.length===0||position===this._items.length){this._items.length===0&&this.$stage.append(content);this._items.length!==0&&this._items[position-1].after(content);this._items.push(content);this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge')*1||1);}else{this._items[position].before(content);this._items.splice(position,0,content);this._mergers.splice(position,0,content.find('[data-merge]').addBack('[data-merge]').attr('data-merge')*1||1);}this._items[current]&&this.reset(this._items[current].index());this.invalidate('items');this.trigger('added',{content:content,position:position});};/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */Owl.prototype.remove=function(position){position=this.normalize(position,true);if(position===undefined){return;}this.trigger('remove',{content:this._items[position],position:position});this._items[position].remove();this._items.splice(position,1);this._mergers.splice(position,1);this.invalidate('items');this.trigger('removed',{content:null,position:position});};/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */Owl.prototype.preloadAutoWidthImages=function(images){images.each($.proxy(function(i,element){this.enter('pre-loading');element=$(element);$(new Image()).one('load',$.proxy(function(e){element.attr('src',e.target.src);element.css('opacity',1);this.leave('pre-loading');!this.is('pre-loading')&&!this.is('initializing')&&this.refresh();},this)).attr('src',element.attr('src')||element.attr('data-src')||element.attr('data-src-retina'));},this));};/**
	 * Destroys the carousel.
	 * @public
	 */Owl.prototype.destroy=function(){this.$element.off('.owl.core');this.$stage.off('.owl.core');$(document).off('.owl.core');if(this.settings.responsive!==false){window.clearTimeout(this.resizeTimer);this.off(window,'resize',this._handlers.onThrottledResize);}for(var i in this._plugins){this._plugins[i].destroy();}this.$stage.children('.cloned').remove();this.$stage.unwrap();this.$stage.children().contents().unwrap();this.$stage.children().unwrap();this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr('class',this.$element.attr('class').replace(new RegExp(this.options.responsiveClass+'-\\S+\\s','g'),'')).removeData('owl.carousel');};/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */Owl.prototype.op=function(a,o,b){var rtl=this.settings.rtl;switch(o){case'<':return rtl?a>b:a<b;case'>':return rtl?a<b:a>b;case'>=':return rtl?a<=b:a>=b;case'<=':return rtl?a>=b:a<=b;default:break;}};/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */Owl.prototype.on=function(element,event,listener,capture){if(element.addEventListener){element.addEventListener(event,listener,capture);}else if(element.attachEvent){element.attachEvent('on'+event,listener);}};/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */Owl.prototype.off=function(element,event,listener,capture){if(element.removeEventListener){element.removeEventListener(event,listener,capture);}else if(element.detachEvent){element.detachEvent('on'+event,listener);}};/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */Owl.prototype.trigger=function(name,data,namespace,state,enter){var status={item:{count:this._items.length,index:this.current()}},handler=$.camelCase($.grep(['on',name,namespace],function(v){return v;}).join('-').toLowerCase()),event=$.Event([name,'owl',namespace||'carousel'].join('.').toLowerCase(),$.extend({relatedTarget:this},status,data));if(!this._supress[name]){$.each(this._plugins,function(name,plugin){if(plugin.onTrigger){plugin.onTrigger(event);}});this.register({type:Owl.Type.Event,name:name});this.$element.trigger(event);if(this.settings&&typeof this.settings[handler]==='function'){this.settings[handler].call(this,event);}}return event;};/**
	 * Enters a state.
	 * @param name - The state name.
	 */Owl.prototype.enter=function(name){$.each([name].concat(this._states.tags[name]||[]),$.proxy(function(i,name){if(this._states.current[name]===undefined){this._states.current[name]=0;}this._states.current[name]++;},this));};/**
	 * Leaves a state.
	 * @param name - The state name.
	 */Owl.prototype.leave=function(name){$.each([name].concat(this._states.tags[name]||[]),$.proxy(function(i,name){this._states.current[name]--;},this));};/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */Owl.prototype.register=function(object){if(object.type===Owl.Type.Event){if(!$.event.special[object.name]){$.event.special[object.name]={};}if(!$.event.special[object.name].owl){var _default=$.event.special[object.name]._default;$.event.special[object.name]._default=function(e){if(_default&&_default.apply&&(!e.namespace||e.namespace.indexOf('owl')===-1)){return _default.apply(this,arguments);}return e.namespace&&e.namespace.indexOf('owl')>-1;};$.event.special[object.name].owl=true;}}else if(object.type===Owl.Type.State){if(!this._states.tags[object.name]){this._states.tags[object.name]=object.tags;}else{this._states.tags[object.name]=this._states.tags[object.name].concat(object.tags);}this._states.tags[object.name]=$.grep(this._states.tags[object.name],$.proxy(function(tag,i){return $.inArray(tag,this._states.tags[object.name])===i;},this));}};/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */Owl.prototype.suppress=function(events){$.each(events,$.proxy(function(index,event){this._supress[event]=true;},this));};/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */Owl.prototype.release=function(events){$.each(events,$.proxy(function(index,event){delete this._supress[event];},this));};/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */Owl.prototype.pointer=function(event){var result={x:null,y:null};event=event.originalEvent||event||window.event;event=event.touches&&event.touches.length?event.touches[0]:event.changedTouches&&event.changedTouches.length?event.changedTouches[0]:event;if(event.pageX){result.x=event.pageX;result.y=event.pageY;}else{result.x=event.clientX;result.y=event.clientY;}return result;};/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */Owl.prototype.isNumeric=function(number){return!isNaN(parseFloat(number));};/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */Owl.prototype.difference=function(first,second){return{x:first.x-second.x,y:first.y-second.y};};/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */$.fn.owlCarousel=function(option){var args=Array.prototype.slice.call(arguments,1);return this.each(function(){var $this=$(this),data=$this.data('owl.carousel');if(!data){data=new Owl(this,(typeof option==="undefined"?"undefined":_typeof2(option))=='object'&&option);$this.data('owl.carousel',data);$.each(['next','prev','to','destroy','refresh','replace','add','remove'],function(i,event){data.register({type:Owl.Type.Event,name:event});data.$element.on(event+'.owl.carousel.core',$.proxy(function(e){if(e.namespace&&e.relatedTarget!==this){this.suppress([event]);data[event].apply(this,[].slice.call(arguments,1));this.release([event]);}},data));});}if(typeof option=='string'&&option.charAt(0)!=='_'){data[option].apply(data,args);}});};/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */$.fn.owlCarousel.Constructor=Owl;})(window.Zepto||window.jQuery,window,document);/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */;(function($,window,document,undefined){/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */var AutoRefresh=function AutoRefresh(carousel){/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */this._core=carousel;/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */this._interval=null;/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */this._visible=null;/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */this._handlers={'initialized.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.autoRefresh){this.watch();}},this)};// set default options
this._core.options=$.extend({},AutoRefresh.Defaults,this._core.options);// register event handlers
this._core.$element.on(this._handlers);};/**
	 * Default options.
	 * @public
	 */AutoRefresh.Defaults={autoRefresh:true,autoRefreshInterval:500};/**
	 * Watches the element.
	 */AutoRefresh.prototype.watch=function(){if(this._interval){return;}this._visible=this._core.$element.is(':visible');this._interval=window.setInterval($.proxy(this.refresh,this),this._core.settings.autoRefreshInterval);};/**
	 * Refreshes the element.
	 */AutoRefresh.prototype.refresh=function(){if(this._core.$element.is(':visible')===this._visible){return;}this._visible=!this._visible;this._core.$element.toggleClass('owl-hidden',!this._visible);this._visible&&this._core.invalidate('width')&&this._core.refresh();};/**
	 * Destroys the plugin.
	 */AutoRefresh.prototype.destroy=function(){var handler,property;window.clearInterval(this._interval);for(handler in this._handlers){this._core.$element.off(handler,this._handlers[handler]);}for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.AutoRefresh=AutoRefresh;})(window.Zepto||window.jQuery,window,document);/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */;(function($,window,document,undefined){/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */var Lazy=function Lazy(carousel){/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */this._core=carousel;/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */this._loaded=[];/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */this._handlers={'initialized.owl.carousel change.owl.carousel resized.owl.carousel':$.proxy(function(e){if(!e.namespace){return;}if(!this._core.settings||!this._core.settings.lazyLoad){return;}if(e.property&&e.property.name=='position'||e.type=='initialized'){var settings=this._core.settings,n=settings.center&&Math.ceil(settings.items/2)||settings.items,i=settings.center&&n*-1||0,position=(e.property&&e.property.value!==undefined?e.property.value:this._core.current())+i,clones=this._core.clones().length,load=$.proxy(function(i,v){this.load(v);},this);while(i++<n){this.load(clones/2+this._core.relative(position));clones&&$.each(this._core.clones(this._core.relative(position)),load);position++;}}},this)};// set the default options
this._core.options=$.extend({},Lazy.Defaults,this._core.options);// register event handler
this._core.$element.on(this._handlers);};/**
	 * Default options.
	 * @public
	 */Lazy.Defaults={lazyLoad:false};/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */Lazy.prototype.load=function(position){var $item=this._core.$stage.children().eq(position),$elements=$item&&$item.find('.owl-lazy');if(!$elements||$.inArray($item.get(0),this._loaded)>-1){return;}$elements.each($.proxy(function(index,element){var $element=$(element),image,url=window.devicePixelRatio>1&&$element.attr('data-src-retina')||$element.attr('data-src');this._core.trigger('load',{element:$element,url:url},'lazy');if($element.is('img')){$element.one('load.owl.lazy',$.proxy(function(){$element.css('opacity',1);this._core.trigger('loaded',{element:$element,url:url},'lazy');},this)).attr('src',url);}else{image=new Image();image.onload=$.proxy(function(){$element.css({'background-image':'url("'+url+'")','opacity':'1'});this._core.trigger('loaded',{element:$element,url:url},'lazy');},this);image.src=url;}},this));this._loaded.push($item.get(0));};/**
	 * Destroys the plugin.
	 * @public
	 */Lazy.prototype.destroy=function(){var handler,property;for(handler in this.handlers){this._core.$element.off(handler,this.handlers[handler]);}for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.Lazy=Lazy;})(window.Zepto||window.jQuery,window,document);/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */;(function($,window,document,undefined){/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */var AutoHeight=function AutoHeight(carousel){/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */this._core=carousel;/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */this._handlers={'initialized.owl.carousel refreshed.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.autoHeight){this.update();}},this),'changed.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.autoHeight&&e.property.name=='position'){this.update();}},this),'loaded.owl.lazy':$.proxy(function(e){if(e.namespace&&this._core.settings.autoHeight&&e.element.closest('.'+this._core.settings.itemClass).index()===this._core.current()){this.update();}},this)};// set default options
this._core.options=$.extend({},AutoHeight.Defaults,this._core.options);// register event handlers
this._core.$element.on(this._handlers);};/**
	 * Default options.
	 * @public
	 */AutoHeight.Defaults={autoHeight:false,autoHeightClass:'owl-height'};/**
	 * Updates the view.
	 */AutoHeight.prototype.update=function(){var start=this._core._current,end=start+this._core.settings.items,visible=this._core.$stage.children().toArray().slice(start,end),heights=[],maxheight=0;$.each(visible,function(index,item){heights.push($(item).height());});maxheight=Math.max.apply(null,heights);this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass);};AutoHeight.prototype.destroy=function(){var handler,property;for(handler in this._handlers){this._core.$element.off(handler,this._handlers[handler]);}for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.AutoHeight=AutoHeight;})(window.Zepto||window.jQuery,window,document);/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */;(function($,window,document,undefined){/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */var Video=function Video(carousel){/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */this._core=carousel;/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */this._videos={};/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */this._playing=null;/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */this._handlers={'initialized.owl.carousel':$.proxy(function(e){if(e.namespace){this._core.register({type:'state',name:'playing',tags:['interacting']});}},this),'resize.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.video&&this.isInFullScreen()){e.preventDefault();}},this),'refreshed.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.is('resizing')){this._core.$stage.find('.cloned .owl-video-frame').remove();}},this),'changed.owl.carousel':$.proxy(function(e){if(e.namespace&&e.property.name==='position'&&this._playing){this.stop();}},this),'prepared.owl.carousel':$.proxy(function(e){if(!e.namespace){return;}var $element=$(e.content).find('.owl-video');if($element.length){$element.css('display','none');this.fetch($element,$(e.content));}},this)};// set default options
this._core.options=$.extend({},Video.Defaults,this._core.options);// register event handlers
this._core.$element.on(this._handlers);this._core.$element.on('click.owl.video','.owl-video-play-icon',$.proxy(function(e){this.play(e);},this));};/**
	 * Default options.
	 * @public
	 */Video.Defaults={video:false,videoHeight:false,videoWidth:false};/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */Video.prototype.fetch=function(target,item){var type=function(){if(target.attr('data-vimeo-id')){return'vimeo';}else if(target.attr('data-vzaar-id')){return'vzaar';}else{return'youtube';}}(),id=target.attr('data-vimeo-id')||target.attr('data-youtube-id')||target.attr('data-vzaar-id'),width=target.attr('data-width')||this._core.settings.videoWidth,height=target.attr('data-height')||this._core.settings.videoHeight,url=target.attr('href');if(url){/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/id=url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);if(id[3].indexOf('youtu')>-1){type='youtube';}else if(id[3].indexOf('vimeo')>-1){type='vimeo';}else if(id[3].indexOf('vzaar')>-1){type='vzaar';}else{throw new Error('Video URL not supported.');}id=id[6];}else{throw new Error('Missing video URL.');}this._videos[url]={type:type,id:id,width:width,height:height};item.attr('data-video',url);this.thumbnail(target,this._videos[url]);};/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */Video.prototype.thumbnail=function(target,video){var tnLink,icon,path,dimensions=video.width&&video.height?'style="width:'+video.width+'px;height:'+video.height+'px;"':'',customTn=target.find('img'),srcType='src',lazyClass='',settings=this._core.settings,create=function create(path){icon='<div class="owl-video-play-icon"></div>';if(settings.lazyLoad){tnLink='<div class="owl-video-tn '+lazyClass+'" '+srcType+'="'+path+'"></div>';}else{tnLink='<div class="owl-video-tn" style="opacity:1;background-image:url('+path+')"></div>';}target.after(tnLink);target.after(icon);};// wrap video content into owl-video-wrapper div
target.wrap('<div class="owl-video-wrapper"'+dimensions+'></div>');if(this._core.settings.lazyLoad){srcType='data-src';lazyClass='owl-lazy';}// custom thumbnail
if(customTn.length){create(customTn.attr(srcType));customTn.remove();return false;}if(video.type==='youtube'){path="//img.youtube.com/vi/"+video.id+"/hqdefault.jpg";create(path);}else if(video.type==='vimeo'){$.ajax({type:'GET',url:'//vimeo.com/api/v2/video/'+video.id+'.json',jsonp:'callback',dataType:'jsonp',success:function success(data){path=data[0].thumbnail_large;create(path);}});}else if(video.type==='vzaar'){$.ajax({type:'GET',url:'//vzaar.com/api/videos/'+video.id+'.json',jsonp:'callback',dataType:'jsonp',success:function success(data){path=data.framegrab_url;create(path);}});}};/**
	 * Stops the current video.
	 * @public
	 */Video.prototype.stop=function(){this._core.trigger('stop',null,'video');this._playing.find('.owl-video-frame').remove();this._playing.removeClass('owl-video-playing');this._playing=null;this._core.leave('playing');this._core.trigger('stopped',null,'video');};/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */Video.prototype.play=function(event){var target=$(event.target),item=target.closest('.'+this._core.settings.itemClass),video=this._videos[item.attr('data-video')],width=video.width||'100%',height=video.height||this._core.$stage.height(),html;if(this._playing){return;}this._core.enter('playing');this._core.trigger('play',null,'video');item=this._core.items(this._core.relative(item.index()));this._core.reset(item.index());if(video.type==='youtube'){html='<iframe width="'+width+'" height="'+height+'" src="//www.youtube.com/embed/'+video.id+'?autoplay=1&rel=0&v='+video.id+'" frameborder="0" allowfullscreen></iframe>';}else if(video.type==='vimeo'){html='<iframe src="//player.vimeo.com/video/'+video.id+'?autoplay=1" width="'+width+'" height="'+height+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';}else if(video.type==='vzaar'){html='<iframe frameborder="0"'+'height="'+height+'"'+'width="'+width+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen '+'src="//view.vzaar.com/'+video.id+'/player?autoplay=true"></iframe>';}$('<div class="owl-video-frame">'+html+'</div>').insertAfter(item.find('.owl-video'));this._playing=item.addClass('owl-video-playing');};/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */Video.prototype.isInFullScreen=function(){var element=document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement;return element&&$(element).parent().hasClass('owl-video-frame');};/**
	 * Destroys the plugin.
	 */Video.prototype.destroy=function(){var handler,property;this._core.$element.off('click.owl.video');for(handler in this._handlers){this._core.$element.off(handler,this._handlers[handler]);}for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.Video=Video;})(window.Zepto||window.jQuery,window,document);/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */;(function($,window,document,undefined){/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */var Animate=function Animate(scope){this.core=scope;this.core.options=$.extend({},Animate.Defaults,this.core.options);this.swapping=true;this.previous=undefined;this.next=undefined;this.handlers={'change.owl.carousel':$.proxy(function(e){if(e.namespace&&e.property.name=='position'){this.previous=this.core.current();this.next=e.property.value;}},this),'drag.owl.carousel dragged.owl.carousel translated.owl.carousel':$.proxy(function(e){if(e.namespace){this.swapping=e.type=='translated';}},this),'translate.owl.carousel':$.proxy(function(e){if(e.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)){this.swap();}},this)};this.core.$element.on(this.handlers);};/**
	 * Default options.
	 * @public
	 */Animate.Defaults={animateOut:false,animateIn:false};/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */Animate.prototype.swap=function(){if(this.core.settings.items!==1){return;}if(!$.support.animation||!$.support.transition){return;}this.core.speed(0);var left,clear=$.proxy(this.clear,this),previous=this.core.$stage.children().eq(this.previous),next=this.core.$stage.children().eq(this.next),incoming=this.core.settings.animateIn,outgoing=this.core.settings.animateOut;if(this.core.current()===this.previous){return;}if(outgoing){left=this.core.coordinates(this.previous)-this.core.coordinates(this.next);previous.one($.support.animation.end,clear).css({'left':left+'px'}).addClass('animated owl-animated-out').addClass(outgoing);}if(incoming){next.one($.support.animation.end,clear).addClass('animated owl-animated-in').addClass(incoming);}};Animate.prototype.clear=function(e){$(e.target).css({'left':''}).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);this.core.onTransitionEnd();};/**
	 * Destroys the plugin.
	 * @public
	 */Animate.prototype.destroy=function(){var handler,property;for(handler in this.handlers){this.core.$element.off(handler,this.handlers[handler]);}for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.Animate=Animate;})(window.Zepto||window.jQuery,window,document);/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */;(function($,window,document,undefined){/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */var Autoplay=function Autoplay(carousel){/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */this._core=carousel;/**
		 * The autoplay timeout.
		 * @type {Timeout}
		 */this._timeout=null;/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */this._paused=false;/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */this._handlers={'changed.owl.carousel':$.proxy(function(e){if(e.namespace&&e.property.name==='settings'){if(this._core.settings.autoplay){this.play();}else{this.stop();}}else if(e.namespace&&e.property.name==='position'){//console.log('play?', e);
if(this._core.settings.autoplay){this._setAutoPlayInterval();}}},this),'initialized.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.autoplay){this.play();}},this),'play.owl.autoplay':$.proxy(function(e,t,s){if(e.namespace){this.play(t,s);}},this),'stop.owl.autoplay':$.proxy(function(e){if(e.namespace){this.stop();}},this),'mouseover.owl.autoplay':$.proxy(function(){if(this._core.settings.autoplayHoverPause&&this._core.is('rotating')){this.pause();}},this),'mouseleave.owl.autoplay':$.proxy(function(){if(this._core.settings.autoplayHoverPause&&this._core.is('rotating')){this.play();}},this),'touchstart.owl.core':$.proxy(function(){if(this._core.settings.autoplayHoverPause&&this._core.is('rotating')){this.pause();}},this),'touchend.owl.core':$.proxy(function(){if(this._core.settings.autoplayHoverPause){this.play();}},this)};// register event handlers
this._core.$element.on(this._handlers);// set default options
this._core.options=$.extend({},Autoplay.Defaults,this._core.options);};/**
	 * Default options.
	 * @public
	 */Autoplay.Defaults={autoplay:false,autoplayTimeout:5000,autoplayHoverPause:false,autoplaySpeed:false};/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */Autoplay.prototype.play=function(timeout,speed){this._paused=false;if(this._core.is('rotating')){return;}this._core.enter('rotating');this._setAutoPlayInterval();};/**
	 * Gets a new timeout
	 * @private
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 * @return {Timeout}
	 */Autoplay.prototype._getNextTimeout=function(timeout,speed){if(this._timeout){window.clearTimeout(this._timeout);}return window.setTimeout($.proxy(function(){if(this._paused||this._core.is('busy')||this._core.is('interacting')||document.hidden){return;}this._core.next(speed||this._core.settings.autoplaySpeed);},this),timeout||this._core.settings.autoplayTimeout);};/**
	 * Sets autoplay in motion.
	 * @private
	 */Autoplay.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout();};/**
	 * Stops the autoplay.
	 * @public
	 */Autoplay.prototype.stop=function(){if(!this._core.is('rotating')){return;}window.clearTimeout(this._timeout);this._core.leave('rotating');};/**
	 * Stops the autoplay.
	 * @public
	 */Autoplay.prototype.pause=function(){if(!this._core.is('rotating')){return;}this._paused=true;};/**
	 * Destroys the plugin.
	 */Autoplay.prototype.destroy=function(){var handler,property;this.stop();for(handler in this._handlers){this._core.$element.off(handler,this._handlers[handler]);}for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.autoplay=Autoplay;})(window.Zepto||window.jQuery,window,document);/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */;(function($,window,document,undefined){'use strict';/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */var Navigation=function Navigation(carousel){/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */this._core=carousel;/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */this._initialized=false;/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */this._pages=[];/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */this._controls={};/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */this._templates=[];/**
		 * The carousel element.
		 * @type {jQuery}
		 */this.$element=this._core.$element;/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to};/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */this._handlers={'prepared.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.dotsData){this._templates.push('<div class="'+this._core.settings.dotClass+'">'+$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot')+'</div>');}},this),'added.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.dotsData){this._templates.splice(e.position,0,this._templates.pop());}},this),'remove.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.dotsData){this._templates.splice(e.position,1);}},this),'changed.owl.carousel':$.proxy(function(e){if(e.namespace&&e.property.name=='position'){this.draw();}},this),'initialized.owl.carousel':$.proxy(function(e){if(e.namespace&&!this._initialized){this._core.trigger('initialize',null,'navigation');this.initialize();this.update();this.draw();this._initialized=true;this._core.trigger('initialized',null,'navigation');}},this),'refreshed.owl.carousel':$.proxy(function(e){if(e.namespace&&this._initialized){this._core.trigger('refresh',null,'navigation');this.update();this.draw();this._core.trigger('refreshed',null,'navigation');}},this)};// set default options
this._core.options=$.extend({},Navigation.Defaults,this._core.options);// register event handlers
this.$element.on(this._handlers);};/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */Navigation.Defaults={nav:false,navText:['prev','next'],navSpeed:false,navElement:'div',navContainer:false,navContainerClass:'owl-nav',navClass:['owl-prev','owl-next'],slideBy:1,dotClass:'owl-dot',dotsClass:'owl-dots',dots:true,dotsEach:false,dotsData:false,dotsSpeed:false,dotsContainer:false};/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */Navigation.prototype.initialize=function(){var override,settings=this._core.settings;// create DOM structure for relative navigation
this._controls.$relative=(settings.navContainer?$(settings.navContainer):$('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');this._controls.$previous=$('<'+settings.navElement+'>').addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on('click',$.proxy(function(e){this.prev(settings.navSpeed);},this));this._controls.$next=$('<'+settings.navElement+'>').addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on('click',$.proxy(function(e){this.next(settings.navSpeed);},this));// create DOM structure for absolute navigation
if(!settings.dotsData){this._templates=[$('<div>').addClass(settings.dotClass).append($('<span>')).prop('outerHTML')];}this._controls.$absolute=(settings.dotsContainer?$(settings.dotsContainer):$('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');this._controls.$absolute.on('click','div',$.proxy(function(e){var index=$(e.target).parent().is(this._controls.$absolute)?$(e.target).index():$(e.target).parent().index();e.preventDefault();this.to(index,settings.dotsSpeed);},this));// override public methods of the carousel
for(override in this._overrides){this._core[override]=$.proxy(this[override],this);}};/**
	 * Destroys the plugin.
	 * @protected
	 */Navigation.prototype.destroy=function(){var handler,control,property,override;for(handler in this._handlers){this.$element.off(handler,this._handlers[handler]);}for(control in this._controls){this._controls[control].remove();}for(override in this.overides){this._core[override]=this._overrides[override];}for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};/**
	 * Updates the internal state.
	 * @protected
	 */Navigation.prototype.update=function(){var i,j,k,lower=this._core.clones().length/2,upper=lower+this._core.items().length,maximum=this._core.maximum(true),settings=this._core.settings,size=settings.center||settings.autoWidth||settings.dotsData?1:settings.dotsEach||settings.items;if(settings.slideBy!=='page'){settings.slideBy=Math.min(settings.slideBy,settings.items);}if(settings.dots||settings.slideBy=='page'){this._pages=[];for(i=lower,j=0,k=0;i<upper;i++){if(j>=size||j===0){this._pages.push({start:Math.min(maximum,i-lower),end:i-lower+size-1});if(Math.min(maximum,i-lower)===maximum){break;}j=0,++k;}j+=this._core.mergers(this._core.relative(i));}}};/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */Navigation.prototype.draw=function(){var difference,settings=this._core.settings,disabled=this._core.items().length<=settings.items,index=this._core.relative(this._core.current()),loop=settings.loop||settings.rewind;this._controls.$relative.toggleClass('disabled',!settings.nav||disabled);if(settings.nav){this._controls.$previous.toggleClass('disabled',!loop&&index<=this._core.minimum(true));this._controls.$next.toggleClass('disabled',!loop&&index>=this._core.maximum(true));}this._controls.$absolute.toggleClass('disabled',!settings.dots||disabled);if(settings.dots){difference=this._pages.length-this._controls.$absolute.children().length;if(settings.dotsData&&difference!==0){this._controls.$absolute.html(this._templates.join(''));}else if(difference>0){this._controls.$absolute.append(new Array(difference+1).join(this._templates[0]));}else if(difference<0){this._controls.$absolute.children().slice(difference).remove();}this._controls.$absolute.find('.active').removeClass('active');this._controls.$absolute.children().eq($.inArray(this.current(),this._pages)).addClass('active');}};/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */Navigation.prototype.onTrigger=function(event){var settings=this._core.settings;event.page={index:$.inArray(this.current(),this._pages),count:this._pages.length,size:settings&&(settings.center||settings.autoWidth||settings.dotsData?1:settings.dotsEach||settings.items)};};/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */Navigation.prototype.current=function(){var current=this._core.relative(this._core.current());return $.grep(this._pages,$.proxy(function(page,index){return page.start<=current&&page.end>=current;},this)).pop();};/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */Navigation.prototype.getPosition=function(successor){var position,length,settings=this._core.settings;if(settings.slideBy=='page'){position=$.inArray(this.current(),this._pages);length=this._pages.length;successor?++position:--position;position=this._pages[(position%length+length)%length].start;}else{position=this._core.relative(this._core.current());length=this._core.items().length;successor?position+=settings.slideBy:position-=settings.slideBy;}return position;};/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */Navigation.prototype.next=function(speed){$.proxy(this._overrides.to,this._core)(this.getPosition(true),speed);};/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */Navigation.prototype.prev=function(speed){$.proxy(this._overrides.to,this._core)(this.getPosition(false),speed);};/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */Navigation.prototype.to=function(position,speed,standard){var length;if(!standard&&this._pages.length){length=this._pages.length;$.proxy(this._overrides.to,this._core)(this._pages[(position%length+length)%length].start,speed);}else{$.proxy(this._overrides.to,this._core)(position,speed);}};$.fn.owlCarousel.Constructor.Plugins.Navigation=Navigation;})(window.Zepto||window.jQuery,window,document);/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */;(function($,window,document,undefined){'use strict';/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */var Hash=function Hash(carousel){/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */this._core=carousel;/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */this._hashes={};/**
		 * The carousel element.
		 * @type {jQuery}
		 */this.$element=this._core.$element;/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */this._handlers={'initialized.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.startPosition==='URLHash'){$(window).trigger('hashchange.owl.navigation');}},this),'prepared.owl.carousel':$.proxy(function(e){if(e.namespace){var hash=$(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');if(!hash){return;}this._hashes[hash]=e.content;}},this),'changed.owl.carousel':$.proxy(function(e){if(e.namespace&&e.property.name==='position'){var current=this._core.items(this._core.relative(this._core.current())),hash=$.map(this._hashes,function(item,hash){return item===current?hash:null;}).join();if(!hash||window.location.hash.slice(1)===hash){return;}window.location.hash=hash;}},this)};// set default options
this._core.options=$.extend({},Hash.Defaults,this._core.options);// register the event handlers
this.$element.on(this._handlers);// register event listener for hash navigation
$(window).on('hashchange.owl.navigation',$.proxy(function(e){var hash=window.location.hash.substring(1),items=this._core.$stage.children(),position=this._hashes[hash]&&items.index(this._hashes[hash]);if(position===undefined||position===this._core.current()){return;}this._core.to(this._core.relative(position),false,true);},this));};/**
	 * Default options.
	 * @public
	 */Hash.Defaults={URLhashListener:false};/**
	 * Destroys the plugin.
	 * @public
	 */Hash.prototype.destroy=function(){var handler,property;$(window).off('hashchange.owl.navigation');for(handler in this._handlers){this._core.$element.off(handler,this._handlers[handler]);}for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.Hash=Hash;})(window.Zepto||window.jQuery,window,document);/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */;(function($,window,document,undefined){var style=$('<support>').get(0).style,prefixes='Webkit Moz O ms'.split(' '),events={transition:{end:{WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd',transition:'transitionend'}},animation:{end:{WebkitAnimation:'webkitAnimationEnd',MozAnimation:'animationend',OAnimation:'oAnimationEnd',animation:'animationend'}}},tests={csstransforms:function csstransforms(){return!!test('transform');},csstransforms3d:function csstransforms3d(){return!!test('perspective');},csstransitions:function csstransitions(){return!!test('transition');},cssanimations:function cssanimations(){return!!test('animation');}};function test(property,prefixed){var result=false,upper=property.charAt(0).toUpperCase()+property.slice(1);$.each((property+' '+prefixes.join(upper+' ')+upper).split(' '),function(i,property){if(style[property]!==undefined){result=prefixed?property:true;return false;}});return result;}function prefixed(property){return test(property,true);}if(tests.csstransitions()){/* jshint -W053 */$.support.transition=new String(prefixed('transition'));$.support.transition.end=events.transition.end[$.support.transition];}if(tests.cssanimations()){/* jshint -W053 */$.support.animation=new String(prefixed('animation'));$.support.animation.end=events.animation.end[$.support.animation];}if(tests.csstransforms()){/* jshint -W053 */$.support.transform=new String(prefixed('transform'));$.support.transform3d=tests.csstransforms3d();}})(window.Zepto||window.jQuery,window,document);/*!
 * Fotorama 4.6.4 | http://fotorama.io/license/
 */fotoramaVersion="4.6.4",function(a,b,c,d,e){"use strict";function f(a){var b="bez_"+d.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof d.easing[b]){var c=function c(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function f(_f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],_f*(e[g]+_f*(d[g]+_f*c[g]));},g=function g(a){return e[0]+a*(2*d[0]+3*c[0]*a);},h=function h(a){for(var b,c=a,d=0;++d<14&&(b=f(c,0)-a,!(Math.abs(b)<.001));){c-=b/g(c);}return c;};return function(a){return f(h(a),1);};};d.easing[b]=function(b,d,e,f,g){return f*c([a[0],a[1]],[a[2],a[3]])(d/g)+e;};}return b;}function g(){}function h(a,b,c){return Math.max(isNaN(b)?-1/0:b,Math.min(isNaN(c)?1/0:c,a));}function i(a){return a.match(/ma/)&&a.match(/-?\d+(?!d)/g)[a.match(/3d/)?12:4];}function j(a){return Ic?+i(a.css("transform")):+a.css("left").replace("px","");}function k(a){var b={};return Ic?b.transform="translate3d("+a+"px,0,0)":b.left=a,b;}function l(a){return{"transition-duration":a+"ms"};}function m(a,b){return isNaN(a)?b:a;}function n(a,b){return m(+String(a).replace(b||"px",""));}function o(a){return /%$/.test(a)?n(a,"%"):e;}function p(a,b){return m(o(a)/100*b,n(a));}function q(a){return(!isNaN(n(a))||!isNaN(n(a,"%")))&&a;}function r(a,b,c,d){return(a-(d||0))*(b+(c||0));}function s(a,b,c,d){return-Math.round(a/(b+(c||0))-(d||0));}function t(a){var b=a.data();if(!b.tEnd){var c=a[0],d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};T(c,d[uc.prefixed("transition")],function(a){b.tProp&&a.propertyName.match(b.tProp)&&b.onEndFn();}),b.tEnd=!0;}}function u(a,b,c,d){var e,f=a.data();f&&(f.onEndFn=function(){e||(e=!0,clearTimeout(f.tT),c());},f.tProp=b,clearTimeout(f.tT),f.tT=setTimeout(function(){f.onEndFn();},1.5*d),t(a));}function v(a,b){if(a.length){var c=a.data();Ic?(a.css(l(0)),c.onEndFn=g,clearTimeout(c.tT)):a.stop();var d=w(b,function(){return j(a);});return a.css(k(d)),d;}}function w(){for(var a,b=0,c=arguments.length;c>b&&(a=b?arguments[b]():arguments[b],"number"!=typeof a);b++){}return a;}function x(a,b){return Math.round(a+(b-a)/1.5);}function y(){return y.p=y.p||("https:"===c.protocol?"https://":"http://"),y.p;}function z(a){var c=b.createElement("a");return c.href=a,c;}function A(a,b){if("string"!=typeof a)return a;a=z(a);var c,d;if(a.host.match(/youtube\.com/)&&a.search){if(c=a.search.split("v=")[1]){var e=c.indexOf("&");-1!==e&&(c=c.substring(0,e)),d="youtube";}}else a.host.match(/youtube\.com|youtu\.be/)?(c=a.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),d="youtube"):a.host.match(/vimeo\.com/)&&(d="vimeo",c=a.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return c&&d||!b||(c=a.href,d="custom"),c?{id:c,type:d,s:a.search.replace(/^\?/,""),p:y()}:!1;}function B(a,b,c){var e,f,g=a.video;return"youtube"===g.type?(f=y()+"img.youtube.com/vi/"+g.id+"/default.jpg",e=f.replace(/\/default.jpg$/,"/hqdefault.jpg"),a.thumbsReady=!0):"vimeo"===g.type?d.ajax({url:y()+"vimeo.com/api/v2/video/"+g.id+".json",dataType:"jsonp",success:function success(d){a.thumbsReady=!0,C(b,{img:d[0].thumbnail_large,thumb:d[0].thumbnail_small},a.i,c);}}):a.thumbsReady=!0,{img:e,thumb:f};}function C(a,b,c,e){for(var f=0,g=a.length;g>f;f++){var h=a[f];if(h.i===c&&h.thumbsReady){var i={videoReady:!0};i[Xc]=i[Zc]=i[Yc]=!1,e.splice(f,1,d.extend({},h,i,b));break;}}}function D(a){function b(a,b,e){var f=a.children("img").eq(0),g=a.attr("href"),h=a.attr("src"),i=f.attr("src"),j=b.video,k=e?A(g,j===!0):!1;k?g=!1:k=j,c(a,f,d.extend(b,{video:k,img:b.img||g||h||i,thumb:b.thumb||i||h||g}));}function c(a,b,c){var e=c.thumb&&c.img!==c.thumb,f=n(c.width||a.attr("width")),g=n(c.height||a.attr("height"));d.extend(c,{width:f,height:g,thumbratio:S(c.thumbratio||n(c.thumbwidth||b&&b.attr("width")||e||f)/n(c.thumbheight||b&&b.attr("height")||e||g))});}var e=[];return a.children().each(function(){var a=d(this),f=R(d.extend(a.data(),{id:a.attr("id")}));if(a.is("a, img"))b(a,f,!0);else{if(a.is(":empty"))return;c(a,null,d.extend(f,{html:this,_html:a.html()}));}e.push(f);}),e;}function E(a){return 0===a.offsetWidth&&0===a.offsetHeight;}function F(a){return!d.contains(b.documentElement,a);}function G(a,b,c,d){return G.i||(G.i=1,G.ii=[!0]),d=d||G.i,"undefined"==typeof G.ii[d]&&(G.ii[d]=!0),a()?b():G.ii[d]&&setTimeout(function(){G.ii[d]&&G(a,b,c,d);},c||100),G.i++;}function H(a){c.replace(c.protocol+"//"+c.host+c.pathname.replace(/^\/?/,"/")+c.search+"#"+a);}function I(a,b,c,d){var e=a.data(),f=e.measures;if(f&&(!e.l||e.l.W!==f.width||e.l.H!==f.height||e.l.r!==f.ratio||e.l.w!==b.w||e.l.h!==b.h||e.l.m!==c||e.l.p!==d)){var g=f.width,i=f.height,j=b.w/b.h,k=f.ratio>=j,l="scaledown"===c,m="contain"===c,n="cover"===c,o=$(d);k&&(l||m)||!k&&n?(g=h(b.w,0,l?g:1/0),i=g/f.ratio):(k&&n||!k&&(l||m))&&(i=h(b.h,0,l?i:1/0),g=i*f.ratio),a.css({width:g,height:i,left:p(o.x,b.w-g),top:p(o.y,b.h-i)}),e.l={W:f.width,H:f.height,r:f.ratio,w:b.w,h:b.h,m:c,p:d};}return!0;}function J(a,b){var c=a[0];c.styleSheet?c.styleSheet.cssText=b:a.html(b);}function K(a,b,c){return b===c?!1:b>=a?"left":a>=c?"right":"left right";}function L(a,b,c,d){if(!c)return!1;if(!isNaN(a))return a-(d?0:1);for(var e,f=0,g=b.length;g>f;f++){var h=b[f];if(h.id===a){e=f;break;}}return e;}function M(a,b,c){c=c||{},a.each(function(){var a,e=d(this),f=e.data();f.clickOn||(f.clickOn=!0,d.extend(cb(e,{onStart:function onStart(b){a=b,(c.onStart||g).call(this,b);},onMove:c.onMove||g,onTouchEnd:c.onTouchEnd||g,onEnd:function onEnd(c){c.moved||b.call(this,a);}}),{noMove:!0}));});}function N(a,b){return'<div class="'+a+'">'+(b||"")+"</div>";}function O(a){for(var b=a.length;b;){var c=Math.floor(Math.random()*b--),d=a[b];a[b]=a[c],a[c]=d;}return a;}function P(a){return"[object Array]"==Object.prototype.toString.call(a)&&d.map(a,function(a){return d.extend({},a);});}function Q(a,b,c){a.scrollLeft(b||0).scrollTop(c||0);}function R(a){if(a){var b={};return d.each(a,function(a,c){b[a.toLowerCase()]=c;}),b;}}function S(a){if(a){var b=+a;return isNaN(b)?(b=a.split("/"),+b[0]/+b[1]||e):b;}}function T(a,b,c,d){b&&(a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent("on"+b,c));}function U(a){return!!a.getAttribute("disabled");}function V(a){return{tabindex:-1*a+"",disabled:a};}function W(a,b){T(a,"keyup",function(c){U(a)||13==c.keyCode&&b.call(a,c);});}function X(a,b){T(a,"focus",a.onfocusin=function(c){b.call(a,c);},!0);}function Y(a,b){a.preventDefault?a.preventDefault():a.returnValue=!1,b&&a.stopPropagation&&a.stopPropagation();}function Z(a){return a?">":"<";}function $(a){return a=(a+"").split(/\s+/),{x:q(a[0])||bd,y:q(a[1])||bd};}function _(a,b){var c=a.data(),e=Math.round(b.pos),f=function f(){c.sliding=!1,(b.onEnd||g)();};"undefined"!=typeof b.overPos&&b.overPos!==b.pos&&(e=b.overPos,f=function f(){_(a,d.extend({},b,{overPos:b.pos,time:Math.max(Qc,b.time/2)}));});var h=d.extend(k(e),b.width&&{width:b.width});c.sliding=!0,Ic?(a.css(d.extend(l(b.time),h)),b.time>10?u(a,"transform",f,b.time):f()):a.stop().animate(h,b.time,_c,f);}function ab(a,b,c,e,f,h){var i="undefined"!=typeof h;if(i||(f.push(arguments),Array.prototype.push.call(arguments,f.length),!(f.length>1))){a=a||d(a),b=b||d(b);var j=a[0],k=b[0],l="crossfade"===e.method,m=function m(){if(!m.done){m.done=!0;var a=(i||f.shift())&&f.shift();a&&ab.apply(this,a),(e.onEnd||g)(!!a);}},n=e.time/(h||1);c.removeClass(Rb+" "+Qb),a.stop().addClass(Rb),b.stop().addClass(Qb),l&&k&&a.fadeTo(0,0),a.fadeTo(l?n:0,1,l&&m),b.fadeTo(n,0,m),j&&l||k||m();}}function bb(a){var b=(a.touches||[])[0]||a;a._x=b.pageX,a._y=b.clientY,a._now=d.now();}function cb(a,c){function e(a){return m=d(a.target),u.checked=p=q=s=!1,k||u.flow||a.touches&&a.touches.length>1||a.which>1||ed&&ed.type!==a.type&&gd||(p=c.select&&m.is(c.select,t))?p:(o="touchstart"===a.type,q=m.is("a, a *",t),n=u.control,r=u.noMove||u.noSwipe||n?16:u.snap?0:4,bb(a),l=ed=a,fd=a.type.replace(/down|start/,"move").replace(/Down/,"Move"),(c.onStart||g).call(t,a,{control:n,$target:m}),k=u.flow=!0,void((!o||u.go)&&Y(a)));}function f(a){if(a.touches&&a.touches.length>1||Nc&&!a.isPrimary||fd!==a.type||!k)return k&&h(),void(c.onTouchEnd||g)();bb(a);var b=Math.abs(a._x-l._x),d=Math.abs(a._y-l._y),e=b-d,f=(u.go||u.x||e>=0)&&!u.noSwipe,i=0>e;o&&!u.checked?(k=f)&&Y(a):(Y(a),(c.onMove||g).call(t,a,{touch:o})),!s&&Math.sqrt(Math.pow(b,2)+Math.pow(d,2))>r&&(s=!0),u.checked=u.checked||f||i;}function h(a){(c.onTouchEnd||g)();var b=k;u.control=k=!1,b&&(u.flow=!1),!b||q&&!u.checked||(a&&Y(a),gd=!0,clearTimeout(hd),hd=setTimeout(function(){gd=!1;},1e3),(c.onEnd||g).call(t,{moved:s,$target:m,control:n,touch:o,startEvent:l,aborted:!a||"MSPointerCancel"===a.type}));}function i(){u.flow||setTimeout(function(){u.flow=!0;},10);}function j(){u.flow&&setTimeout(function(){u.flow=!1;},Pc);}var k,l,m,n,o,p,q,r,s,t=a[0],u={};return Nc?(T(t,"MSPointerDown",e),T(b,"MSPointerMove",f),T(b,"MSPointerCancel",h),T(b,"MSPointerUp",h)):(T(t,"touchstart",e),T(t,"touchmove",f),T(t,"touchend",h),T(b,"touchstart",i),T(b,"touchend",j),T(b,"touchcancel",j),Ec.on("scroll",j),a.on("mousedown",e),Fc.on("mousemove",f).on("mouseup",h)),a.on("click","a",function(a){u.checked&&Y(a);}),u;}function db(a,b){function c(c,d){A=!0,j=l=c._x,q=c._now,p=[[q,j]],m=n=D.noMove||d?0:v(a,(b.getPos||g)()),(b.onStart||g).call(B,c);}function e(a,b){s=D.min,t=D.max,u=D.snap,w=a.altKey,A=z=!1,y=b.control,y||C.sliding||c(a);}function f(d,e){D.noSwipe||(A||c(d),l=d._x,p.push([d._now,l]),n=m-(j-l),o=K(n,s,t),s>=n?n=x(n,s):n>=t&&(n=x(n,t)),D.noMove||(a.css(k(n)),z||(z=!0,e.touch||Nc||a.addClass(ec)),(b.onMove||g).call(B,d,{pos:n,edge:o})));}function i(e){if(!D.noSwipe||!e.moved){A||c(e.startEvent,!0),e.touch||Nc||a.removeClass(ec),r=d.now();for(var f,i,j,k,o,q,v,x,y,z=r-Pc,C=null,E=Qc,F=b.friction,G=p.length-1;G>=0;G--){if(f=p[G][0],i=Math.abs(f-z),null===C||j>i)C=f,k=p[G][1];else if(C===z||i>j)break;j=i;}v=h(n,s,t);var H=k-l,I=H>=0,J=r-C,K=J>Pc,L=!K&&n!==m&&v===n;u&&(v=h(Math[L?I?"floor":"ceil":"round"](n/u)*u,s,t),s=t=v),L&&(u||v===n)&&(y=-(H/J),E*=h(Math.abs(y),b.timeLow,b.timeHigh),o=Math.round(n+y*E/F),u||(v=o),(!I&&o>t||I&&s>o)&&(q=I?s:t,x=o-q,u||(v=q),x=h(v+.03*x,q-50,q+50),E=Math.abs((n-x)/(y/F)))),E*=w?10:1,(b.onEnd||g).call(B,d.extend(e,{moved:e.moved||K&&u,pos:n,newPos:v,overPos:x,time:E}));}}var j,l,m,n,o,p,q,r,s,t,u,w,y,z,A,B=a[0],C=a.data(),D={};return D=d.extend(cb(b.$wrap,d.extend({},b,{onStart:e,onMove:f,onEnd:i})),D);}function eb(a,b){var c,e,f,h=a[0],i={prevent:{}};return T(h,Oc,function(a){var h=a.wheelDeltaY||-1*a.deltaY||0,j=a.wheelDeltaX||-1*a.deltaX||0,k=Math.abs(j)&&!Math.abs(h),l=Z(0>j),m=e===l,n=d.now(),o=Pc>n-f;e=l,f=n,k&&i.ok&&(!i.prevent[l]||c)&&(Y(a,!0),c&&m&&o||(b.shift&&(c=!0,clearTimeout(i.t),i.t=setTimeout(function(){c=!1;},Rc)),(b.onEnd||g)(a,b.shift?l:j)));}),i;}function fb(){d.each(d.Fotorama.instances,function(a,b){b.index=a;});}function gb(a){d.Fotorama.instances.push(a),fb();}function hb(a){d.Fotorama.instances.splice(a.index,1),fb();}var ib="fotorama",jb="fullscreen",kb=ib+"__wrap",lb=kb+"--css2",mb=kb+"--css3",nb=kb+"--video",ob=kb+"--fade",pb=kb+"--slide",qb=kb+"--no-controls",rb=kb+"--no-shadows",sb=kb+"--pan-y",tb=kb+"--rtl",ub=kb+"--only-active",vb=kb+"--no-captions",wb=kb+"--toggle-arrows",xb=ib+"__stage",yb=xb+"__frame",zb=yb+"--video",Ab=xb+"__shaft",Bb=ib+"__grab",Cb=ib+"__pointer",Db=ib+"__arr",Eb=Db+"--disabled",Fb=Db+"--prev",Gb=Db+"--next",Hb=ib+"__nav",Ib=Hb+"-wrap",Jb=Hb+"__shaft",Kb=Hb+"--dots",Lb=Hb+"--thumbs",Mb=Hb+"__frame",Nb=Mb+"--dot",Ob=Mb+"--thumb",Pb=ib+"__fade",Qb=Pb+"-front",Rb=Pb+"-rear",Sb=ib+"__shadow",Tb=Sb+"s",Ub=Tb+"--left",Vb=Tb+"--right",Wb=ib+"__active",Xb=ib+"__select",Yb=ib+"--hidden",Zb=ib+"--fullscreen",$b=ib+"__fullscreen-icon",_b=ib+"__error",ac=ib+"__loading",bc=ib+"__loaded",cc=bc+"--full",dc=bc+"--img",ec=ib+"__grabbing",fc=ib+"__img",gc=fc+"--full",hc=ib+"__dot",ic=ib+"__thumb",jc=ic+"-border",kc=ib+"__html",lc=ib+"__video",mc=lc+"-play",nc=lc+"-close",oc=ib+"__caption",pc=ib+"__caption__wrap",qc=ib+"__spinner",rc='" tabindex="0" role="button',sc=d&&d.fn.jquery.split(".");if(!sc||sc[0]<1||1==sc[0]&&sc[1]<8)throw"Fotorama requires jQuery 1.8 or later and will not run without it.";var tc={},uc=function(a,b,c){function d(a){r.cssText=a;}function e(a,b){return(typeof a==="undefined"?"undefined":_typeof2(a))===b;}function f(a,b){return!!~(""+a).indexOf(b);}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0;}return!1;}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g;}return!1;}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+u.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+v.join(d+" ")+d).split(" "),h(f,b,c));}var j,k,l,m="2.6.2",n={},o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),t="Webkit Moz O ms",u=t.split(" "),v=t.toLowerCase().split(" "),w={},x=[],y=x.slice,z=function z(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;){h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);}return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g;},A={}.hasOwnProperty;l=e(A,"undefined")||e(A.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined");}:function(a,b){return A.call(a,b);},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError();var c=y.call(arguments,1),d=function d(){if(this instanceof d){var e=function e(){};e.prototype=b.prototype;var f=new e(),g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f;}return b.apply(a,c.concat(y.call(arguments)));};return d;}),w.csstransforms3d=function(){var a=!!i("perspective");return a;};for(var B in w){l(w,B)&&(k=B.toLowerCase(),n[k]=w[B](),x.push((n[k]?"":"no-")+k));}return n.addTest=function(a,b){if("object"==(typeof a==="undefined"?"undefined":_typeof2(a)))for(var d in a){l(a,d)&&n.addTest(d,a[d]);}else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b;}return n;},d(""),q=j=null,n._version=m,n._prefixes=s,n._domPrefixes=v,n._cssomPrefixes=u,n.testProp=function(a){return g([a]);},n.testAllProps=i,n.testStyles=z,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx");},n;}(a,b),vc={ok:!1,is:function is(){return!1;},request:function request(){},cancel:function cancel(){},event:"",prefix:""},wc="webkit moz o ms khtml".split(" ");if("undefined"!=typeof b.cancelFullScreen)vc.ok=!0;else for(var xc=0,yc=wc.length;yc>xc;xc++){if(vc.prefix=wc[xc],"undefined"!=typeof b[vc.prefix+"CancelFullScreen"]){vc.ok=!0;break;}}vc.ok&&(vc.event=vc.prefix+"fullscreenchange",vc.is=function(){switch(this.prefix){case"":return b.fullScreen;case"webkit":return b.webkitIsFullScreen;default:return b[this.prefix+"FullScreen"];}},vc.request=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]();},vc.cancel=function(){return""===this.prefix?b.cancelFullScreen():b[this.prefix+"CancelFullScreen"]();});var zc,Ac={lines:12,length:5,width:2,radius:7,corners:1,rotate:15,color:"rgba(128, 128, 128, .75)",hwaccel:!0},Bc={top:"auto",left:"auto",className:""};!function(a,b){zc=b();}(this,function(){function a(a,c){var d,e=b.createElement(a||"div");for(d in c){e[d]=c[d];}return e;}function c(a){for(var b=1,c=arguments.length;c>b;b++){a.appendChild(arguments[b]);}return a;}function d(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=m.substring(0,m.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return o[e]||(p.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",p.cssRules.length),o[e]=1),e;}function f(a,b){var c,d,f=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<n.length;d++){if(c=n[d]+b,f[c]!==e)return c;}return f[b]!==e?b:void 0;}function g(a,b){for(var c in b){a.style[f(a,c)||c]=b[c];}return a;}function h(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c){a[d]===e&&(a[d]=c[d]);}}return a;}function i(a){for(var b={x:a.offsetLeft,y:a.offsetTop};a=a.offsetParent;){b.x+=a.offsetLeft,b.y+=a.offsetTop;}return b;}function j(a,b){return"string"==typeof a?a:a[b%a.length];}function k(a){return"undefined"==typeof this?new k(a):void(this.opts=h(a||{},k.defaults,q));}function l(){function b(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c);}p.addRule(".spin-vml","behavior:url(#default#VML)"),k.prototype.lines=function(a,d){function e(){return g(b("group",{coordsize:k+" "+k,coordorigin:-i+" "+-i}),{width:k,height:k});}function f(a,f,h){c(m,c(g(e(),{rotation:360/d.lines*a+"deg",left:~~f}),c(g(b("roundrect",{arcsize:d.corners}),{width:i,height:d.width,left:d.radius,top:-d.width>>1,filter:h}),b("fill",{color:j(d.color,a),opacity:d.opacity}),b("stroke",{opacity:0}))));}var h,i=d.length+d.width,k=2*i,l=2*-(d.width+d.length)+"px",m=g(e(),{position:"absolute",top:l,left:l});if(d.shadow)for(h=1;h<=d.lines;h++){f(h,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");}for(h=1;h<=d.lines;h++){f(h);}return c(a,m);},k.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c));};}var m,n=["webkit","Moz","ms","O"],o={},p=function(){var d=a("style",{type:"text/css"});return c(b.getElementsByTagName("head")[0],d),d.sheet||d.styleSheet;}(),q={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};k.defaults={},h(k.prototype,{spin:function spin(b){this.stop();var c,d,e=this,f=e.opts,h=e.el=g(a(0,{className:f.className}),{position:f.position,width:0,zIndex:f.zIndex}),j=f.radius+f.length+f.width;if(b&&(b.insertBefore(h,b.firstChild||null),d=i(b),c=i(h),g(h,{left:("auto"==f.left?d.x-c.x+(b.offsetWidth>>1):parseInt(f.left,10)+j)+"px",top:("auto"==f.top?d.y-c.y+(b.offsetHeight>>1):parseInt(f.top,10)+j)+"px"})),h.setAttribute("role","progressbar"),e.lines(h,e.opts),!m){var k,l=0,n=(f.lines-1)*(1-f.direction)/2,o=f.fps,p=o/f.speed,q=(1-f.opacity)/(p*f.trail/100),r=p/f.lines;!function s(){l++;for(var a=0;a<f.lines;a++){k=Math.max(1-(l+(f.lines-a)*r)%p*q,f.opacity),e.opacity(h,a*f.direction+n,k,f);}e.timeout=e.el&&setTimeout(s,~~(1e3/o));}();}return e;},stop:function stop(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=e),this;},lines:function lines(b,e){function f(b,c){return g(a(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*i+e.rotate)+"deg) translate("+e.radius+"px,0)",borderRadius:(e.corners*e.width>>1)+"px"});}for(var h,i=0,k=(e.lines-1)*(1-e.direction)/2;i<e.lines;i++){h=g(a(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:m&&d(e.opacity,e.trail,k+i*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"}),e.shadow&&c(h,g(f("#000","0 0 4px #000"),{top:"2px"})),c(b,c(h,f(j(e.color,i),"0 0 1px rgba(0,0,0,.1)")));}return b;},opacity:function opacity(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c);}});var r=g(a("group"),{behavior:"url(#default#VML)"});return!f(r,"transform")&&r.adj?l():m=f(r,"animation"),k;});var Cc,Dc,Ec=d(a),Fc=d(b),Gc="quirks"===c.hash.replace("#",""),Hc=uc.csstransforms3d,Ic=Hc&&!Gc,Jc=Hc||"CSS1Compat"===b.compatMode,Kc=vc.ok,Lc=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),Mc=!Ic||Lc,Nc=navigator.msPointerEnabled,Oc="onwheel"in b.createElement("div")?"wheel":b.onmousewheel!==e?"mousewheel":"DOMMouseScroll",Pc=250,Qc=300,Rc=1400,Sc=5e3,Tc=2,Uc=64,Vc=500,Wc=333,Xc="$stageFrame",Yc="$navDotFrame",Zc="$navThumbFrame",$c="auto",_c=f([.1,0,.25,1]),ad=99999,bd="50%",cd={width:null,minwidth:null,maxwidth:"100%",height:null,minheight:null,maxheight:null,ratio:null,margin:Tc,glimpse:0,fit:"contain",position:bd,thumbposition:bd,nav:"dots",navposition:"bottom",navwidth:null,thumbwidth:Uc,thumbheight:Uc,thumbmargin:Tc,thumbborderwidth:Tc,thumbfit:"cover",allowfullscreen:!1,transition:"slide",clicktransition:null,transitionduration:Qc,captions:!0,hash:!1,startindex:0,loop:!1,autoplay:!1,stopautoplayontouch:!0,keyboard:!1,arrows:!0,click:!0,swipe:!0,trackpad:!1,enableifsingleframe:!1,controlsonstart:!0,shuffle:!1,direction:"ltr",shadows:!0,spinner:null},dd={left:!0,right:!0,down:!1,up:!1,space:!1,home:!1,end:!1};G.stop=function(a){G.ii[a]=!1;};var ed,fd,gd,hd;jQuery.Fotorama=function(a,e){function f(){d.each(yd,function(a,b){if(!b.i){b.i=me++;var c=A(b.video,!0);if(c){var d={};b.video=c,b.img||b.thumb?b.thumbsReady=!0:d=B(b,yd,ie),C(yd,{img:d.img,thumb:d.thumb},b.i,ie);}}});}function g(a){return Zd[a]||ie.fullScreen;}function i(a){var b="keydown."+ib,c=ib+je,d="keydown."+c,f="resize."+c+" orientationchange."+c;a?(Fc.on(d,function(a){var b,c;Cd&&27===a.keyCode?(b=!0,md(Cd,!0,!0)):(ie.fullScreen||e.keyboard&&!ie.index)&&(27===a.keyCode?(b=!0,ie.cancelFullScreen()):a.shiftKey&&32===a.keyCode&&g("space")||37===a.keyCode&&g("left")||38===a.keyCode&&g("up")?c="<":32===a.keyCode&&g("space")||39===a.keyCode&&g("right")||40===a.keyCode&&g("down")?c=">":36===a.keyCode&&g("home")?c="<<":35===a.keyCode&&g("end")&&(c=">>")),(b||c)&&Y(a),c&&ie.show({index:c,slow:a.altKey,user:!0});}),ie.index||Fc.off(b).on(b,"textarea, input, select",function(a){!Dc.hasClass(jb)&&a.stopPropagation();}),Ec.on(f,ie.resize)):(Fc.off(d),Ec.off(f));}function j(b){b!==j.f&&(b?(a.html("").addClass(ib+" "+ke).append(qe).before(oe).before(pe),gb(ie)):(qe.detach(),oe.detach(),pe.detach(),a.html(ne.urtext).removeClass(ke),hb(ie)),i(b),j.f=b);}function m(){yd=ie.data=yd||P(e.data)||D(a),zd=ie.size=yd.length,!xd.ok&&e.shuffle&&O(yd),f(),Je=y(Je),zd&&j(!0);}function o(){var a=2>zd&&!e.enableifsingleframe||Cd;Me.noMove=a||Sd,Me.noSwipe=a||!e.swipe,!Wd&&se.toggleClass(Bb,!e.click&&!Me.noMove&&!Me.noSwipe),Nc&&qe.toggleClass(sb,!Me.noSwipe);}function t(a){a===!0&&(a=""),e.autoplay=Math.max(+a||Sc,1.5*Vd);}function u(){function a(a,c){b[a?"add":"remove"].push(c);}ie.options=e=R(e),Sd="crossfade"===e.transition||"dissolve"===e.transition,Md=e.loop&&(zd>2||Sd&&(!Wd||"slide"!==Wd)),Vd=+e.transitionduration||Qc,Yd="rtl"===e.direction,Zd=d.extend({},e.keyboard&&dd,e.keyboard);var b={add:[],remove:[]};zd>1||e.enableifsingleframe?(Nd=e.nav,Pd="top"===e.navposition,b.remove.push(Xb),we.toggle(!!e.arrows)):(Nd=!1,we.hide()),Rb(),Bd=new zc(d.extend(Ac,e.spinner,Bc,{direction:Yd?-1:1})),Gc(),Hc(),e.autoplay&&t(e.autoplay),Td=n(e.thumbwidth)||Uc,Ud=n(e.thumbheight)||Uc,Ne.ok=Pe.ok=e.trackpad&&!Mc,o(),ed(e,[Le]),Od="thumbs"===Nd,Od?(lc(zd,"navThumb"),Ad=Be,he=Zc,J(oe,d.Fotorama.jst.style({w:Td,h:Ud,b:e.thumbborderwidth,m:e.thumbmargin,s:je,q:!Jc})),ye.addClass(Lb).removeClass(Kb)):"dots"===Nd?(lc(zd,"navDot"),Ad=Ae,he=Yc,ye.addClass(Kb).removeClass(Lb)):(Nd=!1,ye.removeClass(Lb+" "+Kb)),Nd&&(Pd?xe.insertBefore(re):xe.insertAfter(re),wc.nav=!1,wc(Ad,ze,"nav")),Qd=e.allowfullscreen,Qd?(De.prependTo(re),Rd=Kc&&"native"===Qd):(De.detach(),Rd=!1),a(Sd,ob),a(!Sd,pb),a(!e.captions,vb),a(Yd,tb),a("always"!==e.arrows,wb),Xd=e.shadows&&!Mc,a(!Xd,rb),qe.addClass(b.add.join(" ")).removeClass(b.remove.join(" ")),Ke=d.extend({},e);}function x(a){return 0>a?(zd+a%zd)%zd:a>=zd?a%zd:a;}function y(a){return h(a,0,zd-1);}function z(a){return Md?x(a):y(a);}function E(a){return a>0||Md?a-1:!1;}function U(a){return zd-1>a||Md?a+1:!1;}function $(){Me.min=Md?-1/0:-r(zd-1,Le.w,e.margin,Fd),Me.max=Md?1/0:-r(0,Le.w,e.margin,Fd),Me.snap=Le.w+e.margin;}function bb(){Oe.min=Math.min(0,Le.nw-ze.width()),Oe.max=0,ze.toggleClass(Bb,!(Oe.noMove=Oe.min===Oe.max));}function cb(a,b,c){if("number"==typeof a){a=new Array(a);var e=!0;}return d.each(a,function(a,d){if(e&&(d=a),"number"==typeof d){var f=yd[x(d)];if(f){var g="$"+b+"Frame",h=f[g];c.call(this,a,d,f,h,g,h&&h.data());}}});}function fb(a,b,c,d){(!$d||"*"===$d&&d===Ld)&&(a=q(e.width)||q(a)||Vc,b=q(e.height)||q(b)||Wc,ie.resize({width:a,ratio:e.ratio||c||a/b},0,d!==Ld&&"*"));}function Pb(a,b,c,f,g,h){cb(a,b,function(a,i,j,k,l,m){function n(a){var b=x(i);fd(a,{index:b,src:w,frame:yd[b]});}function o(){t.remove(),d.Fotorama.cache[w]="error",j.html&&"stage"===b||!y||y===w?(!w||j.html||r?"stage"===b&&(k.trigger("f:load").removeClass(ac+" "+_b).addClass(bc),n("load"),fb()):(k.trigger("f:error").removeClass(ac).addClass(_b),n("error")),m.state="error",!(zd>1&&yd[i]===j)||j.html||j.deleted||j.video||r||(j.deleted=!0,ie.splice(i,1))):(j[v]=w=y,Pb([i],b,c,f,g,!0));}function p(){d.Fotorama.measures[w]=u.measures=d.Fotorama.measures[w]||{width:s.width,height:s.height,ratio:s.width/s.height},fb(u.measures.width,u.measures.height,u.measures.ratio,i),t.off("load error").addClass(fc+(r?" "+gc:"")).prependTo(k),I(t,(d.isFunction(c)?c():c)||Le,f||j.fit||e.fit,g||j.position||e.position),d.Fotorama.cache[w]=m.state="loaded",setTimeout(function(){k.trigger("f:load").removeClass(ac+" "+_b).addClass(bc+" "+(r?cc:dc)),"stage"===b?n("load"):(j.thumbratio===$c||!j.thumbratio&&e.thumbratio===$c)&&(j.thumbratio=u.measures.ratio,vd());},0);}function q(){var a=10;G(function(){return!fe||!a--&&!Mc;},function(){p();});}if(k){var r=ie.fullScreen&&j.full&&j.full!==j.img&&!m.$full&&"stage"===b;if(!m.$img||h||r){var s=new Image(),t=d(s),u=t.data();m[r?"$full":"$img"]=t;var v="stage"===b?r?"full":"img":"thumb",w=j[v],y=r?null:j["stage"===b?"thumb":"img"];if("navThumb"===b&&(k=m.$wrap),!w)return void o();d.Fotorama.cache[w]?!function z(){"error"===d.Fotorama.cache[w]?o():"loaded"===d.Fotorama.cache[w]?setTimeout(q,0):setTimeout(z,100);}():(d.Fotorama.cache[w]="*",t.on("load",q).on("error",o)),m.state="",s.src=w;}}});}function Qb(a){Ie.append(Bd.spin().el).appendTo(a);}function Rb(){Ie.detach(),Bd&&Bd.stop();}function Sb(){var a=Dd[Xc];a&&!a.data().state&&(Qb(a),a.on("f:load f:error",function(){a.off("f:load f:error"),Rb();}));}function ec(a){W(a,sd),X(a,function(){setTimeout(function(){Q(ye);},0),Rc({time:Vd,guessIndex:d(this).data().eq,minMax:Oe});});}function lc(a,b){cb(a,b,function(a,c,e,f,g,h){if(!f){f=e[g]=qe[g].clone(),h=f.data(),h.data=e;var i=f[0];"stage"===b?(e.html&&d('<div class="'+kc+'"></div>').append(e._html?d(e.html).removeAttr("id").html(e._html):e.html).appendTo(f),e.caption&&d(N(oc,N(pc,e.caption))).appendTo(f),e.video&&f.addClass(zb).append(Fe.clone()),X(i,function(){setTimeout(function(){Q(re);},0),pd({index:h.eq,user:!0});}),te=te.add(f)):"navDot"===b?(ec(i),Ae=Ae.add(f)):"navThumb"===b&&(ec(i),h.$wrap=f.children(":first"),Be=Be.add(f),e.video&&h.$wrap.append(Fe.clone()));}});}function sc(a,b,c,d){return a&&a.length&&I(a,b,c,d);}function tc(a){cb(a,"stage",function(a,b,c,f,g,h){if(f){var i=x(b),j=c.fit||e.fit,k=c.position||e.position;h.eq=i,Re[Xc][i]=f.css(d.extend({left:Sd?0:r(b,Le.w,e.margin,Fd)},Sd&&l(0))),F(f[0])&&(f.appendTo(se),md(c.$video)),sc(h.$img,Le,j,k),sc(h.$full,Le,j,k);}});}function uc(a,b){if("thumbs"===Nd&&!isNaN(a)){var c=-a,f=-a+Le.nw;Be.each(function(){var a=d(this),g=a.data(),h=g.eq,i=function i(){return{h:Ud,w:g.w};},j=i(),k=yd[h]||{},l=k.thumbfit||e.thumbfit,m=k.thumbposition||e.thumbposition;j.w=g.w,g.l+g.w<c||g.l>f||sc(g.$img,j,l,m)||b&&Pb([h],"navThumb",i,l,m);});}}function wc(a,b,c){if(!wc[c]){var f="nav"===c&&Od,g=0;b.append(a.filter(function(){for(var a,b=d(this),c=b.data(),e=0,f=yd.length;f>e;e++){if(c.data===yd[e]){a=!0,c.eq=e;break;}}return a||b.remove()&&!1;}).sort(function(a,b){return d(a).data().eq-d(b).data().eq;}).each(function(){if(f){var a=d(this),b=a.data(),c=Math.round(Ud*b.data.thumbratio)||Td;b.l=g,b.w=c,a.css({width:c}),g+=c+e.thumbmargin;}})),wc[c]=!0;}}function xc(a){return a-Se>Le.w/3;}function yc(a){return!(Md||Je+a&&Je-zd+a||Cd);}function Gc(){var a=yc(0),b=yc(1);ue.toggleClass(Eb,a).attr(V(a)),ve.toggleClass(Eb,b).attr(V(b));}function Hc(){Ne.ok&&(Ne.prevent={"<":yc(0),">":yc(1)});}function Lc(a){var b,c,d=a.data();return Od?(b=d.l,c=d.w):(b=a.position().left,c=a.width()),{c:b+c/2,min:-b+10*e.thumbmargin,max:-b+Le.w-c-10*e.thumbmargin};}function Oc(a){var b=Dd[he].data();_(Ce,{time:1.2*a,pos:b.l,width:b.w-2*e.thumbborderwidth});}function Rc(a){var b=yd[a.guessIndex][he];if(b){var c=Oe.min!==Oe.max,d=a.minMax||c&&Lc(Dd[he]),e=c&&(a.keep&&Rc.l?Rc.l:h((a.coo||Le.nw/2)-Lc(b).c,d.min,d.max)),f=c&&h(e,Oe.min,Oe.max),g=1.1*a.time;_(ze,{time:g,pos:f||0,onEnd:function onEnd(){uc(f,!0);}}),ld(ye,K(f,Oe.min,Oe.max)),Rc.l=e;}}function Tc(){_c(he),Qe[he].push(Dd[he].addClass(Wb));}function _c(a){for(var b=Qe[a];b.length;){b.shift().removeClass(Wb);}}function bd(a){var b=Re[a];d.each(Ed,function(a,c){delete b[x(c)];}),d.each(b,function(a,c){delete b[a],c.detach();});}function cd(a){Fd=Gd=Je;var b=Dd[Xc];b&&(_c(Xc),Qe[Xc].push(b.addClass(Wb)),a||ie.show.onEnd(!0),v(se,0,!0),bd(Xc),tc(Ed),$(),bb());}function ed(a,b){a&&d.each(b,function(b,c){c&&d.extend(c,{width:a.width||c.width,height:a.height,minwidth:a.minwidth,maxwidth:a.maxwidth,minheight:a.minheight,maxheight:a.maxheight,ratio:S(a.ratio)});});}function fd(b,c){a.trigger(ib+":"+b,[ie,c]);}function gd(){clearTimeout(hd.t),fe=1,e.stopautoplayontouch?ie.stopAutoplay():ce=!0;}function hd(){fe&&(e.stopautoplayontouch||(id(),jd()),hd.t=setTimeout(function(){fe=0;},Qc+Pc));}function id(){ce=!(!Cd&&!de);}function jd(){if(clearTimeout(jd.t),G.stop(jd.w),!e.autoplay||ce)return void(ie.autoplay&&(ie.autoplay=!1,fd("stopautoplay")));ie.autoplay||(ie.autoplay=!0,fd("startautoplay"));var a=Je,b=Dd[Xc].data();jd.w=G(function(){return b.state||a!==Je;},function(){jd.t=setTimeout(function(){if(!ce&&a===Je){var b=Kd,c=yd[b][Xc].data();jd.w=G(function(){return c.state||b!==Kd;},function(){ce||b!==Kd||ie.show(Md?Z(!Yd):Kd);});}},e.autoplay);});}function kd(){ie.fullScreen&&(ie.fullScreen=!1,Kc&&vc.cancel(le),Dc.removeClass(jb),Cc.removeClass(jb),a.removeClass(Zb).insertAfter(pe),Le=d.extend({},ee),md(Cd,!0,!0),rd("x",!1),ie.resize(),Pb(Ed,"stage"),Q(Ec,ae,_d),fd("fullscreenexit"));}function ld(a,b){Xd&&(a.removeClass(Ub+" "+Vb),b&&!Cd&&a.addClass(b.replace(/^|\s/g," "+Tb+"--")));}function md(a,b,c){b&&(qe.removeClass(nb),Cd=!1,o()),a&&a!==Cd&&(a.remove(),fd("unloadvideo")),c&&(id(),jd());}function nd(a){qe.toggleClass(qb,a);}function od(a){if(!Me.flow){var b=a?a.pageX:od.x,c=b&&!yc(xc(b))&&e.click;od.p!==c&&re.toggleClass(Cb,c)&&(od.p=c,od.x=b);}}function pd(a){clearTimeout(pd.t),e.clicktransition&&e.clicktransition!==e.transition?setTimeout(function(){var b=e.transition;ie.setOptions({transition:e.clicktransition}),Wd=b,pd.t=setTimeout(function(){ie.show(a);},10);},0):ie.show(a);}function qd(a,b){var c=a.target,f=d(c);f.hasClass(mc)?ie.playVideo():c===Ee?ie.toggleFullScreen():Cd?c===He&&md(Cd,!0,!0):b?nd():e.click&&pd({index:a.shiftKey||Z(xc(a._x)),slow:a.altKey,user:!0});}function rd(a,b){Me[a]=Oe[a]=b;}function sd(a){var b=d(this).data().eq;pd({index:b,slow:a.altKey,user:!0,coo:a._x-ye.offset().left});}function td(a){pd({index:we.index(this)?">":"<",slow:a.altKey,user:!0});}function ud(a){X(a,function(){setTimeout(function(){Q(re);},0),nd(!1);});}function vd(){if(m(),u(),!vd.i){vd.i=!0;var a=e.startindex;(a||e.hash&&c.hash)&&(Ld=L(a||c.hash.replace(/^#/,""),yd,0===ie.index||a,a)),Je=Fd=Gd=Hd=Ld=z(Ld)||0;}if(zd){if(wd())return;Cd&&md(Cd,!0),Ed=[],bd(Xc),vd.ok=!0,ie.show({index:Je,time:0}),ie.resize();}else ie.destroy();}function wd(){return!wd.f===Yd?(wd.f=Yd,Je=zd-1-Je,ie.reverse(),!0):void 0;}function xd(){xd.ok||(xd.ok=!0,fd("ready"));}Cc=d("html"),Dc=d("body");var yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd,Sd,Td,Ud,Vd,Wd,Xd,Yd,Zd,$d,_d,ae,be,ce,de,ee,fe,ge,he,ie=this,je=d.now(),ke=ib+je,le=a[0],me=1,ne=a.data(),oe=d("<style></style>"),pe=d(N(Yb)),qe=d(N(kb)),re=d(N(xb)).appendTo(qe),se=(re[0],d(N(Ab)).appendTo(re)),te=d(),ue=d(N(Db+" "+Fb+rc)),ve=d(N(Db+" "+Gb+rc)),we=ue.add(ve).appendTo(re),xe=d(N(Ib)),ye=d(N(Hb)).appendTo(xe),ze=d(N(Jb)).appendTo(ye),Ae=d(),Be=d(),Ce=(se.data(),ze.data(),d(N(jc)).appendTo(ze)),De=d(N($b+rc)),Ee=De[0],Fe=d(N(mc)),Ge=d(N(nc)).appendTo(re),He=Ge[0],Ie=d(N(qc)),Je=!1,Ke={},Le={},Me={},Ne={},Oe={},Pe={},Qe={},Re={},Se=0,Te=[];qe[Xc]=d(N(yb)),qe[Zc]=d(N(Mb+" "+Ob+rc,N(ic))),qe[Yc]=d(N(Mb+" "+Nb+rc,N(hc))),Qe[Xc]=[],Qe[Zc]=[],Qe[Yc]=[],Re[Xc]={},qe.addClass(Ic?mb:lb).toggleClass(qb,!e.controlsonstart),ne.fotorama=this,ie.startAutoplay=function(a){return ie.autoplay?this:(ce=de=!1,t(a||e.autoplay),jd(),this);},ie.stopAutoplay=function(){return ie.autoplay&&(ce=de=!0,jd()),this;},ie.show=function(a){var b;"object"!=(typeof a==="undefined"?"undefined":_typeof2(a))?(b=a,a={}):b=a.index,b=">"===b?Gd+1:"<"===b?Gd-1:"<<"===b?0:">>"===b?zd-1:b,b=isNaN(b)?L(b,yd,!0):b,b="undefined"==typeof b?Je||0:b,ie.activeIndex=Je=z(b),Id=E(Je),Jd=U(Je),Kd=x(Je+(Yd?-1:1)),Ed=[Je,Id,Jd],Gd=Md?b:Je;var c=Math.abs(Hd-Gd),d=w(a.time,function(){return Math.min(Vd*(1+(c-1)/12),2*Vd);}),f=a.overPos;a.slow&&(d*=10);var g=Dd;ie.activeFrame=Dd=yd[Je];var i=g===Dd&&!a.user;md(Cd,Dd.i!==yd[x(Fd)].i),lc(Ed,"stage"),tc(Mc?[Gd]:[Gd,E(Gd),U(Gd)]),rd("go",!0),i||fd("show",{user:a.user,time:d}),ce=!0;var j=ie.show.onEnd=function(b){if(!j.ok){if(j.ok=!0,b||cd(!0),i||fd("showend",{user:a.user}),!b&&Wd&&Wd!==e.transition)return ie.setOptions({transition:Wd}),void(Wd=!1);Sb(),Pb(Ed,"stage"),rd("go",!1),Hc(),od(),id(),jd();}};if(Sd){var k=Dd[Xc],l=Je!==Hd?yd[Hd][Xc]:null;ab(k,l,te,{time:d,method:e.transition,onEnd:j},Te);}else _(se,{pos:-r(Gd,Le.w,e.margin,Fd),overPos:f,time:d,onEnd:j});if(Gc(),Nd){Tc();var m=y(Je+h(Gd-Hd,-1,1));Rc({time:d,coo:m!==Je&&a.coo,guessIndex:"undefined"!=typeof a.coo?m:Je,keep:i}),Od&&Oc(d);}return be="undefined"!=typeof Hd&&Hd!==Je,Hd=Je,e.hash&&be&&!ie.eq&&H(Dd.id||Je+1),this;},ie.requestFullScreen=function(){return Qd&&!ie.fullScreen&&(_d=Ec.scrollTop(),ae=Ec.scrollLeft(),Q(Ec),rd("x",!0),ee=d.extend({},Le),a.addClass(Zb).appendTo(Dc.addClass(jb)),Cc.addClass(jb),md(Cd,!0,!0),ie.fullScreen=!0,Rd&&vc.request(le),ie.resize(),Pb(Ed,"stage"),Sb(),fd("fullscreenenter")),this;},ie.cancelFullScreen=function(){return Rd&&vc.is()?vc.cancel(b):kd(),this;},ie.toggleFullScreen=function(){return ie[(ie.fullScreen?"cancel":"request")+"FullScreen"]();},T(b,vc.event,function(){!yd||vc.is()||Cd||kd();}),ie.resize=function(a){if(!yd)return this;var b=arguments[1]||0,c=arguments[2];ed(ie.fullScreen?{width:"100%",maxwidth:null,minwidth:null,height:"100%",maxheight:null,minheight:null}:R(a),[Le,c||ie.fullScreen||e]);var d=Le.width,f=Le.height,g=Le.ratio,i=Ec.height()-(Nd?ye.height():0);return q(d)&&(qe.addClass(ub).css({width:d,minWidth:Le.minwidth||0,maxWidth:Le.maxwidth||ad}),d=Le.W=Le.w=qe.width(),Le.nw=Nd&&p(e.navwidth,d)||d,e.glimpse&&(Le.w-=Math.round(2*(p(e.glimpse,d)||0))),se.css({width:Le.w,marginLeft:(Le.W-Le.w)/2}),f=p(f,i),f=f||g&&d/g,f&&(d=Math.round(d),f=Le.h=Math.round(h(f,p(Le.minheight,i),p(Le.maxheight,i))),re.stop().animate({width:d,height:f},b,function(){qe.removeClass(ub);}),cd(),Nd&&(ye.stop().animate({width:Le.nw},b),Rc({guessIndex:Je,time:b,keep:!0}),Od&&wc.nav&&Oc(b)),$d=c||!0,xd())),Se=re.offset().left,this;},ie.setOptions=function(a){return d.extend(e,a),vd(),this;},ie.shuffle=function(){return yd&&O(yd)&&vd(),this;},ie.destroy=function(){return ie.cancelFullScreen(),ie.stopAutoplay(),yd=ie.data=null,j(),Ed=[],bd(Xc),vd.ok=!1,this;},ie.playVideo=function(){var a=Dd,b=a.video,c=Je;return"object"==(typeof b==="undefined"?"undefined":_typeof2(b))&&a.videoReady&&(Rd&&ie.fullScreen&&ie.cancelFullScreen(),G(function(){return!vc.is()||c!==Je;},function(){c===Je&&(a.$video=a.$video||d(d.Fotorama.jst.video(b)),a.$video.appendTo(a[Xc]),qe.addClass(nb),Cd=a.$video,o(),we.blur(),De.blur(),fd("loadvideo"));})),this;},ie.stopVideo=function(){return md(Cd,!0,!0),this;},re.on("mousemove",od),Me=db(se,{onStart:gd,onMove:function onMove(a,b){ld(re,b.edge);},onTouchEnd:hd,onEnd:function onEnd(a){ld(re);var b=(Nc&&!ge||a.touch)&&e.arrows&&"always"!==e.arrows;if(a.moved||b&&a.pos!==a.newPos&&!a.control){var c=s(a.newPos,Le.w,e.margin,Fd);ie.show({index:c,time:Sd?Vd:a.time,overPos:a.overPos,user:!0});}else a.aborted||a.control||qd(a.startEvent,b);},timeLow:1,timeHigh:1,friction:2,select:"."+Xb+", ."+Xb+" *",$wrap:re}),Oe=db(ze,{onStart:gd,onMove:function onMove(a,b){ld(ye,b.edge);},onTouchEnd:hd,onEnd:function onEnd(a){function b(){Rc.l=a.newPos,id(),jd(),uc(a.newPos,!0);}if(a.moved)a.pos!==a.newPos?(ce=!0,_(ze,{time:a.time,pos:a.newPos,overPos:a.overPos,onEnd:b}),uc(a.newPos),Xd&&ld(ye,K(a.newPos,Oe.min,Oe.max))):b();else{var c=a.$target.closest("."+Mb,ze)[0];c&&sd.call(c,a.startEvent);}},timeLow:.5,timeHigh:2,friction:5,$wrap:ye}),Ne=eb(re,{shift:!0,onEnd:function onEnd(a,b){gd(),hd(),ie.show({index:b,slow:a.altKey});}}),Pe=eb(ye,{onEnd:function onEnd(a,b){gd(),hd();var c=v(ze)+.25*b;ze.css(k(h(c,Oe.min,Oe.max))),Xd&&ld(ye,K(c,Oe.min,Oe.max)),Pe.prevent={"<":c>=Oe.max,">":c<=Oe.min},clearTimeout(Pe.t),Pe.t=setTimeout(function(){Rc.l=c,uc(c,!0);},Pc),uc(c);}}),qe.hover(function(){setTimeout(function(){fe||nd(!(ge=!0));},0);},function(){ge&&nd(!(ge=!1));}),M(we,function(a){Y(a),td.call(this,a);},{onStart:function onStart(){gd(),Me.control=!0;},onTouchEnd:hd}),we.each(function(){W(this,function(a){td.call(this,a);}),ud(this);}),W(Ee,ie.toggleFullScreen),ud(Ee),d.each("load push pop shift unshift reverse sort splice".split(" "),function(a,b){ie[b]=function(){return yd=yd||[],"load"!==b?Array.prototype[b].apply(yd,arguments):arguments[0]&&"object"==_typeof2(arguments[0])&&arguments[0].length&&(yd=P(arguments[0])),vd(),ie;};}),vd();},d.fn.fotorama=function(b){return this.each(function(){var c=this,e=d(this),f=e.data(),g=f.fotorama;g?g.setOptions(b,!0):G(function(){return!E(c);},function(){f.urtext=e.html(),new d.Fotorama(e,d.extend({},cd,a.fotoramaDefaults,b,f));});});},d.Fotorama.instances=[],d.Fotorama.cache={},d.Fotorama.measures={},d=d||{},d.Fotorama=d.Fotorama||{},d.Fotorama.jst=d.Fotorama.jst||{},d.Fotorama.jst.style=function(a){{var b,c="";tc.escape;}return c+=".fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(b=a.m)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb-border{\nheight:"+(null==(b=a.h-a.b*(a.q?0:2))?"":b)+"px;\nborder-width:"+(null==(b=a.b)?"":b)+"px;\nmargin-top:"+(null==(b=a.m)?"":b)+"px}";},d.Fotorama.jst.video=function(a){function b(){c+=d.call(arguments,"");}var c="",d=(tc.escape,Array.prototype.join);return c+='<div class="fotorama__video"><iframe src="',b(("youtube"==a.type?a.p+"youtube.com/embed/"+a.id+"?autoplay=1":"vimeo"==a.type?a.p+"player.vimeo.com/video/"+a.id+"?autoplay=1&badge=0":a.id)+(a.s&&"custom"!=a.type?"&"+a.s:"")),c+='" frameborder="0" allowfullscreen></iframe></div>\n';},d(function(){d("."+ib+':not([data-auto="false"])').fotorama();});}(window,document,location,"undefined"!=typeof jQuery&&jQuery);