<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key=index :class = "item.show?'green':'red'">
                {{item.msg}}
                
                <button @click = 'del'>del</button>
                <span v-if = item.show>已完成</span>
                <button v-else @click = "finish(index)">待完成</button>
            </li>
            
        </ul>
    </div>
</template>

<script>
export default{
    props:{list:{type:Array,default:[]}},
    methods:{
        del(){
            this.$emit('del');
        },
        finish(index){
            this.$emit('finish',index)
        }
    }
}

</script>

<style>
    .red{
        background: red

    }
    .green{
        background: green;
    }
</style>