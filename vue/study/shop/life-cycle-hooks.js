var APP_LOG_LIFECYCLE_EVENTS = true;

var webstore = new VTTCue({
    el: "#app",
    data: {
        stiename: "Vue.js 샵"
    },
    beforeCreate: function(){
        if(APP_LOG_LIFECYCLE_EVENTS){
            console.log("beforeCreate")
        }
    },
    created: function(){
        if(APP_LOG_LIFECYCLE_EVENTS){
            console.log("created")
        }
    },
    beforeMount: function(){
        if(APP_LOG_LIFECYCLE_EVENTS){
            console.log("beforeMount")
        }
    },
    mounted: function(){
        if(APP_LOG_LIFECYCLE_EVENTS){
            console.log("mounted")
        }
    },
    beforeUpdate: function(){
        if(APP_LOG_LIFECYCLE_EVENTS){
            console.log("beforeUpdate")
        }
    },
    updated: function(){
        if(APP_LOG_LIFECYCLE_EVENTS){
            console.log("updated")
        }
    },
    beforeDestroy: function(){
        if(APP_LOG_LIFECYCLE_EVENTS){
            console.log("beforeDestroy")
        }
    },
    destroyed: function(){
        if(APP_LOG_LIFECYCLE_EVENTS){
            console.log("destroyed")
        }
    },
})