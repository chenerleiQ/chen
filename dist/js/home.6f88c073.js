(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"16c0":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"container",staticClass:"home-container",on:{wheel:e.handleWheel}},[i("ul",{staticClass:"carousel-container",style:{marginTop:e.marginTop},on:{transitionend:e.handleTransitionEnd}},e._l(e.data,(function(e){return i("li",{key:e.id},[i("CarouselItem",{attrs:{carousel:e}})],1)})),0),i("div",{directives:[{name:"show",rawName:"v-show",value:e.index>=1,expression:"index >= 1"}],staticClass:"icon icon-up",on:{click:function(t){return e.switchTo(e.index-1)}}},[i("Icon",{attrs:{type:"arrowUp"}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:e.index<e.data.length-1,expression:"index < data.length - 1"}],staticClass:"icon icon-down",on:{click:function(t){return e.switchTo(e.index+1)}}},[i("Icon",{attrs:{type:"arrowDown"}})],1),i("ul",{staticClass:"indicator"},e._l(e.data,(function(t,s){return i("li",{key:t.id,class:{active:s===e.index},on:{click:function(t){return e.switchTo(s)}}})})),0)])},n=[],r=i("5880"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"container",staticClass:"carousel-item-container",on:{mousemove:e.handleMouseMove,mouseleave:e.handleMouseLeave}},[i("div",{ref:"image",staticClass:"carousel-img",style:e.imagePosition},[i("ImageLoader",{attrs:{src:e.carousel.bigImg,placeholder:e.carousel.midImg},on:{load:this.showWords}})],1),i("div",{ref:"title",staticClass:"title"},[e._v(e._s(e.carousel.title))]),i("div",{ref:"desc",staticClass:"desc"},[e._v(e._s(e.carousel.description))])])},o=[],h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"image-loader-container"},[e.everythingDone?e._e():i("img",{staticClass:"placeholder",attrs:{src:e.placeholder,alt:""}}),i("img",{style:{opacity:e.originOpacity,transition:e.duration+"ms"},attrs:{src:e.src,alt:""},on:{load:e.handleLoad}})])},c=[],d={props:{src:{type:String,required:!0},placeholder:{type:String,required:!0},duration:{type:Number,default:500}},data(){return{originLoaded:!1,everythingDone:!1}},computed:{originOpacity(){return this.originLoaded?1:0}},methods:{handleLoad(){this.originLoaded=!0,setTimeout(()=>{this.everythingDone=!0,this.$emit("load")},this.duration)}}},l=d,u=(i("47b6"),i("4ac2")),m=Object(u["a"])(l,h,c,!1,null,"9b0c1dae",null),g=m.exports,f={props:["carousel"],components:{ImageLoader:g},data(){return{titleWidth:0,descWidth:0,containerSize:null,innerSize:null,mouseX:0,mouseY:0}},computed:{imagePosition(){if(!this.innerSize||!this.containerSize)return;const e=this.innerSize.width-this.containerSize.width,t=this.innerSize.height-this.containerSize.height,i=-e/this.containerSize.width*this.mouseX,s=-t/this.containerSize.height*this.mouseY;return{transform:`translate(${i}px, ${s}px)`}},center(){return{x:this.containerSize.width/2,y:this.containerSize.height/2}}},mounted(){this.titleWidth=this.$refs.title.clientWidth,this.descWidth=this.$refs.desc.clientWidth,this.setSize(),this.mouseX=this.center.x,this.mouseY=this.center.y,window.addEventListener("resize",this.setSize)},destroyed(){window.removeEventListener("resize",this.setSize)},methods:{showWords(){this.$refs.title.style.opacity=1,this.$refs.title.style.width=0,this.$refs.title.clientWidth,this.$refs.title.style.transition="1s",this.$refs.title.style.width=this.titleWidth+"px",this.$refs.desc.style.opacity=1,this.$refs.desc.style.width=0,this.$refs.desc.clientWidth,this.$refs.desc.style.transition="2s 1s",this.$refs.desc.style.width=this.descWidth+"px"},setSize(){this.containerSize={width:this.$refs.container.clientWidth,height:this.$refs.container.clientHeight},this.innerSize={width:this.$refs.image.clientWidth,height:this.$refs.image.clientHeight}},handleMouseMove(e){const t=this.$refs.container.getBoundingClientRect();this.mouseX=e.clientX-t.left,this.mouseY=e.clientY-t.top},handleMouseLeave(){this.mouseX=this.center.x,this.mouseY=this.center.y}}},p=f,w=(i("5343"),Object(u["a"])(p,a,o,!1,null,"7c8b49c1",null)),v=w.exports,y=i("d010"),x={components:{CarouselItem:v,Icon:y["a"]},data(){return{index:0,containerHeight:0,switching:!1}},created(){this.$store.dispatch("banner/fetchBanner")},mounted(){this.containerHeight=this.$refs.container.clientHeight,window.addEventListener("resize",this.handleResize)},destroyed(){window.removeEventListener("resize",this.handleResize)},computed:{marginTop(){return-this.index*this.containerHeight+"px"},...Object(r["mapState"])("banner",["loading","data"])},methods:{switchTo(e){this.index=e},handleWheel(e){this.switching||(e.deltaY<-5&&this.index>0?(this.switching=!0,this.index--):e.deltaY>5&&this.index<this.data.length-1&&(this.switching=!0,this.index++))},handleTransitionEnd(){this.switching=!1},handleResize(){this.containerHeight=this.$refs.container.clientHeight}}},$=x,z=(i("3222"),Object(u["a"])($,s,n,!1,null,"11643388",null));t["default"]=z.exports},3222:function(e,t,i){"use strict";i("f303")},"47b6":function(e,t,i){"use strict";i("e72c")},5343:function(e,t,i){"use strict";i("fba9")},e72c:function(e,t,i){},f303:function(e,t,i){},fba9:function(e,t,i){}}]);