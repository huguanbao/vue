<template>
    <div id="box">
        <h1>Chicken Music</h1>
        <router-link to = '/recomment' active-class = "hehe">推荐</router-link>
        <router-link to = '/singer' active-class = "hehe">歌手</router-link>
        <router-link to = '/ranking' active-class = "hehe">排名</router-link>
        <router-link to = '/my' active-class = "hehe">我的</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

export default{
    
}

</script>

<style>
    html,body{
        height: 100%;
    }
    #box{
        height: 100%;
    }
    .hehe{
        color: orange;
    }
    h1{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffcd32
    }
    a{
        margin-left: 53px;
        text-decoration: none;
    }
    
</style>