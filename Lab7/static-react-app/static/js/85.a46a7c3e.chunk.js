(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[85],{85:function(){var e=document.getElementById("el9");e.addEventListener("click",(function(){return n(e)}));var t=document.querySelector("#el10");function n(e){e&&(e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),e.style.color="#".concat(Math.floor(16777215*Math.random()).toString(16)))}t.addEventListener("click",(function(){return n(t)}));var c=document.querySelector(".image"),o=[c];document.getElementById("addButton").addEventListener("click",(function(){var e=document.createElement("img");e.src="./images/san_francisco.jpg",e.alt="\u0424\u043e\u0442\u043e \u0421\u0430\u043d-\u0424\u0440\u0430\u043d\u0446\u0438\u0441\u043a\u043e",e.style.maxWidth="50%",c.parentElement.appendChild(e),o.push(e)})),document.getElementById("increaseButton").addEventListener("click",(function(){var e=o[o.length-1];e.width*=1.1,e.height*=1.1})),document.getElementById("decreaseButton").addEventListener("click",(function(){var e=o[o.length-1];console.log(o),e.width*=.9,e.height*=.9})),document.getElementById("deleteButton").addEventListener("click",(function(){var e=o.pop();e.parentElement.removeChild(e)}))}}]);
//# sourceMappingURL=85.a46a7c3e.chunk.js.map