function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var a,r,i,o,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=a,i=r;return a=r=void 0,l=t,o=e.apply(i,n)}function S(e){return l=e,u=setTimeout(O,t),c?y(e):o}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function O(){var e=v();if(j(e))return h(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?d(n,i-(e-l)):n}(e))}function h(e){return u=void 0,g&&a?y(e):(a=r=void 0,o)}function w(){var e=v(),n=j(e);if(a=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(O,t),y(f)}return void 0===u&&(u=setTimeout(O,t)),o}return t=b(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,a=f=r=u=void 0},w.flush=function(){return void 0===u?o:h(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=i.test(e);return n||o.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:a,maxWait:t,trailing:r})};var y=document.querySelector("[name='email']"),S=document.querySelector("[name='message']"),j=document.getElementsByClassName("feedback-form")[0],O={email:"",message:""};null!=localStorage.getItem("feedback-form-state")?(y.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,S.value=JSON.parse(localStorage.getItem("feedback-form-state")).message):(y.value="",S.value="");j.addEventListener("input",e(t)((function(e){e.target==y?(O.email=e.target.value,O.message=S.value):e.target==S&&(O.email=y.value,O.message=e.target.value),localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),y.value="",S.value=""}));
//# sourceMappingURL=03-feedback.53de780a.js.map