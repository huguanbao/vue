<template>
    <div id="app">
        <box></box>
        
    </div>
</template>

<script>
import box from './music/box'
export default{
    components:{
        box
    }
   
}

</script>

<style>
    
    html,body{
        height: 100%;
        color: aliceblue;
    }
    #app{
        height: 150%;
        display: flex;
        flex-direction: column;
        background: #222;

    }
    
</style>