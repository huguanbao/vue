<template>
<div>
 <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in list" :key=index>
            <img :src = "item" alt="" srcset="">
        </div>
        
    </div>
 </div>
 <h4>热门歌曲推荐</h4>
        <ul>
            <li>
                <img src="http://p.qpic.cn/music_cover/Y9V3tAZvgQMVNK2WeMZic7mOM3C4sNrPuecXFMZOZRMibYFmpFiaZ6BwQ/600?n=1" height="60" width="60" alt="" />    
            </li>
            <li>
                <img src="http://p.qpic.cn/music_cover/Y9V3tAZvgQMVNK2WeMZic7mOM3C4sNrPuecXFMZOZRMibYFmpFiaZ6BwQ/600?n=1" height="60" width="60" alt="" />    
            </li>
            <li>
                <img src="http://p.qpic.cn/music_cover/Y9V3tAZvgQMVNK2WeMZic7mOM3C4sNrPuecXFMZOZRMibYFmpFiaZ6BwQ/600?n=1" height="60" width="60" alt="" />    
            </li>
            <li>
                <img src="http://p.qpic.cn/music_cover/Y9V3tAZvgQMVNK2WeMZic7mOM3C4sNrPuecXFMZOZRMibYFmpFiaZ6BwQ/600?n=1" height="60" width="60" alt="" />    
            </li>
            <li>
                <img src="http://p.qpic.cn/music_cover/Y9V3tAZvgQMVNK2WeMZic7mOM3C4sNrPuecXFMZOZRMibYFmpFiaZ6BwQ/600?n=1" height="60" width="60" alt="" />    
            </li>
            <li>
                <img src="http://p.qpic.cn/music_cover/Y9V3tAZvgQMVNK2WeMZic7mOM3C4sNrPuecXFMZOZRMibYFmpFiaZ6BwQ/600?n=1" height="60" width="60" alt="" />    
            </li>
            <li>
                <img src="http://p.qpic.cn/music_cover/Y9V3tAZvgQMVNK2WeMZic7mOM3C4sNrPuecXFMZOZRMibYFmpFiaZ6BwQ/600?n=1" height="60" width="60" alt="" />    
            </li>
        </ul>
</div>
</template>

<script>
// 引入安装的第三方模块
import Swiper from 'swiper'
export default{
    data(){
        return{
            list:[]
        }
    },
    methods:{
        initBanner(){
            var mySwiper = new Swiper ('.swiper-container', {})        
        }
    },
    created(){
        setTimeout(()=>{
            this.list=[
                'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2078871.jpg',
                'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2080985.jpg',
                'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2078858.jpg',
                'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2078872.jpg',
                'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2078282.jpg',
                'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2077668.jpg',
            ];
            this.$nextTick(()=>{
            this.initBanner();  
            }
        )},1000)
        
    }
}

</script>

<style>
/* 引入模块的css */
@import '~swiper/css/swiper.min.css';
.swiper-container {
    width: 100%;
    background: #222;
    margin-top: 20px;
}  
.swiper-container .swiper-wrapper .swiper-slide img{
    width: 100%;    
}
h4{
        text-align: center;
        color: #ffcd32;   
    }
    ul{
        list-style: none;
    }
    li{
        margin-top: 20px;
    }
</style>